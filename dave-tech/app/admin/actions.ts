"use server";

import { randomUUID } from "crypto";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getContent, saveContent, type Offering, type Project } from "@/lib/content";
import { saveCvUpload, saveImageUpload } from "@/lib/uploads";
import { deleteSession, verifySession } from "@/lib/session";

export type ActionState = { error?: string; success?: string } | undefined;

async function requireAdmin() {
  const authed = await verifySession();
  if (!authed) redirect("/admin/login");
}

function revalidateSite() {
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function logoutAction(): Promise<void> {
  await deleteSession();
  redirect("/admin/login");
}

export async function updateBranding(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const content = await getContent();

  try {
    const heroFile = formData.get("heroImage");
    if (heroFile instanceof File && heroFile.size > 0) {
      content.heroImage = await saveImageUpload(heroFile, "hero");
    }

    const logoFile = formData.get("logo");
    if (logoFile instanceof File && logoFile.size > 0) {
      content.logo = await saveImageUpload(logoFile, "logo");
    }

    const cvFile = formData.get("cv");
    if (cvFile instanceof File && cvFile.size > 0) {
      content.cvUrl = await saveCvUpload(cvFile);
    }
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Upload failed." };
  }

  await saveContent(content);
  revalidateSite();
  return { success: "Updated." };
}

function readProjectFields(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const liveUrl = String(formData.get("liveUrl") || "").trim();
  const technologies = String(formData.get("technologies") || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const status = (formData.get("status") as "live" | "in-progress") || "live";
  return { title, description, liveUrl, technologies, status };
}

export async function addProject(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const { title, description, liveUrl, technologies, status } = readProjectFields(formData);
  if (!title || !description) {
    return { error: "Title and description are required." };
  }

  let image: string;
  try {
    const imageFile = formData.get("image");
    if (!(imageFile instanceof File) || imageFile.size === 0) {
      return { error: "Please choose a project image." };
    }
    image = await saveImageUpload(imageFile, `project-${title}`);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Upload failed." };
  }

  const content = await getContent();
  const project: Project = {
    id: randomUUID(),
    title,
    description,
    liveUrl,
    technologies,
    image,
    status,
  };
  content.projects.push(project);

  await saveContent(content);
  revalidateSite();
  return { success: "Project added." };
}

export async function updateProject(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const id = String(formData.get("id") || "");
  const content = await getContent();
  const project = content.projects.find((p) => p.id === id);
  if (!project) return { error: "Project not found." };

  const { title, description, liveUrl, technologies, status } = readProjectFields(formData);
  if (!title || !description) {
    return { error: "Title and description are required." };
  }

  try {
    const imageFile = formData.get("image");
    if (imageFile instanceof File && imageFile.size > 0) {
      project.image = await saveImageUpload(imageFile, `project-${title}`);
    }
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Upload failed." };
  }

  project.title = title;
  project.description = description;
  project.liveUrl = liveUrl;
  project.technologies = technologies;
  project.status = status;

  await saveContent(content);
  revalidateSite();
  return { success: "Project updated." };
}

export async function deleteProject(id: string): Promise<void> {
  await requireAdmin();
  const content = await getContent();
  content.projects = content.projects.filter((p) => p.id !== id);
  await saveContent(content);
  revalidateSite();
}

function readOfferingFields(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const featured = formData.get("featured") === "on";
  return { title, description, featured };
}

export async function addOffering(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const { title, description, featured } = readOfferingFields(formData);
  if (!title || !description) {
    return { error: "Title and description are required." };
  }

  let image: string;
  try {
    const imageFile = formData.get("image");
    if (!(imageFile instanceof File) || imageFile.size === 0) {
      return { error: "Please choose an image." };
    }
    image = await saveImageUpload(imageFile, `offering-${title}`);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Upload failed." };
  }

  const content = await getContent();
  const offering: Offering = {
    id: randomUUID(),
    title,
    description,
    featured,
    image,
  };
  content.offerings.push(offering);

  await saveContent(content);
  revalidateSite();
  return { success: "Added to What I Offer." };
}

export async function updateOffering(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const id = String(formData.get("id") || "");
  const content = await getContent();
  const offering = content.offerings.find((o) => o.id === id);
  if (!offering) return { error: "Item not found." };

  const { title, description, featured } = readOfferingFields(formData);
  if (!title || !description) {
    return { error: "Title and description are required." };
  }

  try {
    const imageFile = formData.get("image");
    if (imageFile instanceof File && imageFile.size > 0) {
      offering.image = await saveImageUpload(imageFile, `offering-${title}`);
    }
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Upload failed." };
  }

  offering.title = title;
  offering.description = description;
  offering.featured = featured;

  await saveContent(content);
  revalidateSite();
  return { success: "Updated." };
}

export async function deleteOffering(id: string): Promise<void> {
  await requireAdmin();
  const content = await getContent();
  content.offerings = content.offerings.filter((o) => o.id !== id);
  await saveContent(content);
  revalidateSite();
}

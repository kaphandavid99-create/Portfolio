import { getSupabaseAdmin, UPLOADS_BUCKET } from "./supabase";

const IMAGE_EXTENSIONS: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_CV_SIZE = 10 * 1024 * 1024; // 10MB

async function uploadToSupabase(file: File, slug: string, ext: string): Promise<string> {
  const supabase = await getSupabaseAdmin();
  const safeSlug = slug.replace(/[^a-z0-9-]/gi, "-").toLowerCase() || "file";
  const path = `${safeSlug}-${Date.now()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage.from(UPLOADS_BUCKET).upload(path, buffer, {
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    throw new Error(`Upload failed: ${error.message}`);
  }

  const { data } = supabase.storage.from(UPLOADS_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

export async function saveImageUpload(file: File, slug: string): Promise<string> {
  const ext = IMAGE_EXTENSIONS[file.type];
  if (!ext) {
    throw new Error("Please upload a JPG, PNG, WEBP, or GIF image.");
  }
  if (file.size > MAX_IMAGE_SIZE) {
    throw new Error("Image must be smaller than 5MB.");
  }
  return uploadToSupabase(file, slug, ext);
}

export async function saveCvUpload(file: File): Promise<string> {
  if (file.type !== "application/pdf") {
    throw new Error("Please upload a PDF file.");
  }
  if (file.size > MAX_CV_SIZE) {
    throw new Error("CV must be smaller than 10MB.");
  }
  return uploadToSupabase(file, "cv", "pdf");
}

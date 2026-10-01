"use client";

import { useActionState, useState } from "react";
import type { Offering, Project, SiteContent } from "@/lib/content";
import {
  addOffering,
  addProject,
  deleteOffering,
  deleteProject,
  logoutAction,
  updateBranding,
  updateOffering,
  updateProject,
  type ActionState,
} from "./actions";

const inputClass =
  "w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-mint-500";
const labelClass =
  "block text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1";
const fileInputClass =
  "block w-full text-xs text-slate-600 dark:text-slate-300 file:mr-3 file:rounded-lg file:border-0 file:bg-mint-500 file:px-3 file:py-1.5 file:text-[10px] file:font-bold file:uppercase file:tracking-widest file:text-white hover:file:bg-mint-600";
const primaryButtonClass =
  "rounded-lg bg-mint-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-mint-600 disabled:opacity-60";
const darkButtonClass =
  "rounded-lg bg-slate-900 dark:bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white dark:text-slate-900 hover:opacity-90 disabled:opacity-60";
const deleteButtonClass =
  "rounded-lg border-2 border-red-500/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-red-500 hover:bg-red-500/10";

type Tab = "branding" | "projects" | "offerings";

export default function AdminDashboard({ content }: { content: SiteContent }) {
  const [tab, setTab] = useState<Tab>("branding");

  const tabs: { id: Tab; label: string }[] = [
    { id: "branding", label: "Hero, Logo & CV" },
    { id: "projects", label: "Projects" },
    { id: "offerings", label: "What I Offer" },
  ];

  return (
    <main className="min-h-screen bg-background px-4 sm:px-6 py-10 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Content Dashboard</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Manage what visitors see on your portfolio.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-slate-300 dark:border-slate-700 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 hover:border-mint-500"
          >
            View Site
          </a>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-lg border-2 border-slate-300 dark:border-slate-700 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 hover:border-red-500 hover:text-red-500"
            >
              Log Out
            </button>
          </form>
        </div>
      </div>

      <div className="flex gap-2 mb-8 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
              tab === t.id ? "bg-mint-500 text-white" : "surface-card text-slate-600 dark:text-slate-300"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "branding" && <BrandingPanel content={content} />}
      {tab === "projects" && <ProjectsPanel projects={content.projects} />}
      {tab === "offerings" && <OfferingsPanel offerings={content.offerings} />}
    </main>
  );
}

function FormFeedback({ state }: { state: ActionState }) {
  if (!state) return null;
  if (state.error) return <p className="text-xs text-red-500">{state.error}</p>;
  if (state.success) return <p className="text-xs text-mint-600 dark:text-mint-400">{state.success}</p>;
  return null;
}

function FieldInput({
  name,
  label,
  defaultValue,
  required,
  placeholder,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}

function FieldTextarea({
  name,
  label,
  defaultValue,
  required,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <textarea id={name} name={name} defaultValue={defaultValue} required={required} rows={3} className={inputClass} />
    </div>
  );
}

function BrandingPanel({ content }: { content: SiteContent }) {
  const [heroState, heroAction, heroPending] = useActionState(updateBranding, undefined);
  const [logoState, logoAction, logoPending] = useActionState(updateBranding, undefined);
  const [cvState, cvAction, cvPending] = useActionState(updateBranding, undefined);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <form action={heroAction} className="surface-card p-5">
        <h3 className="font-bold text-slate-900 dark:text-white mb-1">Hero Image</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Shown in the hero section on both mobile and desktop.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={content.heroImage} alt="Current hero" className="h-40 w-full object-cover rounded-lg mb-4" />
        <input type="file" name="heroImage" accept="image/*" className={`${fileInputClass} mb-3`} />
        <FormFeedback state={heroState} />
        <button type="submit" disabled={heroPending} className={`${darkButtonClass} mt-2`}>
          {heroPending ? "Saving…" : "Save"}
        </button>
      </form>

      <form action={logoAction} className="surface-card p-5">
        <h3 className="font-bold text-slate-900 dark:text-white mb-1">Logo</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Used in the navbar and footer.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={content.logo} alt="Current logo" className="h-40 w-40 object-contain rounded-lg mx-auto mb-4" />
        <input type="file" name="logo" accept="image/*" className={`${fileInputClass} mb-3`} />
        <FormFeedback state={logoState} />
        <button type="submit" disabled={logoPending} className={`${darkButtonClass} mt-2`}>
          {logoPending ? "Saving…" : "Save"}
        </button>
      </form>

      <form action={cvAction} className="surface-card p-5">
        <h3 className="font-bold text-slate-900 dark:text-white mb-1">CV / Resume</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Linked from the &ldquo;Download CV&rdquo; button.
        </p>
        <div className="h-40 flex items-center justify-center mb-4 rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
          {content.cvUrl ? (
            <a
              href={content.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mint-600 dark:text-mint-400 text-sm underline"
            >
              View current CV
            </a>
          ) : (
            <p className="text-sm text-slate-500 dark:text-slate-400 px-4 text-center">No CV uploaded yet.</p>
          )}
        </div>
        <input type="file" name="cv" accept="application/pdf" className={`${fileInputClass} mb-3`} />
        <FormFeedback state={cvState} />
        <button type="submit" disabled={cvPending} className={`${darkButtonClass} mt-2`}>
          {cvPending ? "Saving…" : "Save"}
        </button>
      </form>
    </div>
  );
}

function ProjectsPanel({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectEditor key={project.id} project={project} />
        ))}
      </div>
      <AddProjectForm />
    </div>
  );
}

function ProjectEditor({ project }: { project: Project }) {
  const [state, formAction, pending] = useActionState(updateProject, undefined);
  const deleteWithId = deleteProject.bind(null, project.id);

  return (
    <div className="surface-card p-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={project.image} alt={project.title} className="h-32 w-full object-cover rounded-lg mb-4" />
      <form action={formAction} className="space-y-3">
        <input type="hidden" name="id" value={project.id} />
        <FieldInput name="title" label="Title" defaultValue={project.title} required />
        <FieldTextarea name="description" label="Description" defaultValue={project.description} required />
        <FieldInput name="liveUrl" label="Live URL" defaultValue={project.liveUrl} />
        <FieldInput
          name="technologies"
          label="Technologies (comma separated)"
          defaultValue={project.technologies.join(", ")}
        />
        <div>
          <label className={labelClass}>Status</label>
          <select name="status" defaultValue={project.status} className={inputClass}>
            <option value="live">Live</option>
            <option value="in-progress">In Progress</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Replace image (optional)</label>
          <input type="file" name="image" accept="image/*" className={fileInputClass} />
        </div>
        <FormFeedback state={state} />
        <button type="submit" disabled={pending} className={darkButtonClass}>
          {pending ? "Saving…" : "Save"}
        </button>
      </form>
      <form
        action={deleteWithId}
        onSubmit={(e) => {
          if (!confirm(`Delete "${project.title}"?`)) e.preventDefault();
        }}
        className="mt-3"
      >
        <button type="submit" className={deleteButtonClass}>
          Delete
        </button>
      </form>
    </div>
  );
}

function AddProjectForm() {
  const [state, formAction, pending] = useActionState(addProject, undefined);
  return (
    <form action={formAction} className="surface-card p-5 space-y-3">
      <h3 className="font-bold text-slate-900 dark:text-white">Add New Project</h3>
      <FieldInput name="title" label="Title" required />
      <FieldTextarea name="description" label="Description" required />
      <FieldInput name="liveUrl" label="Live URL" placeholder="https://example.com" />
      <FieldInput
        name="technologies"
        label="Technologies (comma separated)"
        placeholder="Next.js, Tailwind CSS, MongoDB"
      />
      <div>
        <label className={labelClass}>Status</label>
        <select name="status" defaultValue="live" className={inputClass}>
          <option value="live">Live</option>
          <option value="in-progress">In Progress</option>
        </select>
      </div>
      <div>
        <label className={labelClass}>Project image</label>
        <input type="file" name="image" accept="image/*" required className={fileInputClass} />
      </div>
      <FormFeedback state={state} />
      <button type="submit" disabled={pending} className={primaryButtonClass}>
        {pending ? "Adding…" : "Add Project"}
      </button>
    </form>
  );
}

function OfferingsPanel({ offerings }: { offerings: Offering[] }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {offerings.map((offering) => (
          <OfferingEditor key={offering.id} offering={offering} />
        ))}
      </div>
      <AddOfferingForm />
    </div>
  );
}

function OfferingEditor({ offering }: { offering: Offering }) {
  const [state, formAction, pending] = useActionState(updateOffering, undefined);
  const deleteWithId = deleteOffering.bind(null, offering.id);

  return (
    <div className="surface-card p-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={offering.image} alt={offering.title} className="h-32 w-full object-cover rounded-lg mb-4" />
      <form action={formAction} className="space-y-3">
        <input type="hidden" name="id" value={offering.id} />
        <FieldInput name="title" label="Title" defaultValue={offering.title} required />
        <FieldTextarea name="description" label="Description" defaultValue={offering.description} required />
        <div>
          <label className={labelClass}>Replace image (optional)</label>
          <input type="file" name="image" accept="image/*" className={fileInputClass} />
        </div>
        <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
          <input
            type="checkbox"
            name="featured"
            defaultChecked={offering.featured}
            className="h-4 w-4 rounded border-slate-300 dark:border-slate-700 accent-mint-500"
          />
          Highlight this card
        </label>
        <FormFeedback state={state} />
        <button type="submit" disabled={pending} className={darkButtonClass}>
          {pending ? "Saving…" : "Save"}
        </button>
      </form>
      <form
        action={deleteWithId}
        onSubmit={(e) => {
          if (!confirm(`Delete "${offering.title}"?`)) e.preventDefault();
        }}
        className="mt-3"
      >
        <button type="submit" className={deleteButtonClass}>
          Delete
        </button>
      </form>
    </div>
  );
}

function AddOfferingForm() {
  const [state, formAction, pending] = useActionState(addOffering, undefined);
  return (
    <form action={formAction} className="surface-card p-5 space-y-3">
      <h3 className="font-bold text-slate-900 dark:text-white">Add to What I Offer</h3>
      <FieldInput name="title" label="Title" required />
      <FieldTextarea name="description" label="Description" required />
      <div>
        <label className={labelClass}>Image</label>
        <input type="file" name="image" accept="image/*" required className={fileInputClass} />
      </div>
      <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
        <input type="checkbox" name="featured" className="h-4 w-4 rounded border-slate-300 dark:border-slate-700 accent-mint-500" />
        Highlight this card
      </label>
      <FormFeedback state={state} />
      <button type="submit" disabled={pending} className={primaryButtonClass}>
        {pending ? "Adding…" : "Add"}
      </button>
    </form>
  );
}

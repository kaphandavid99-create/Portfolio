"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SiNextdotjs, SiTailwindcss, SiSupabase, SiTypescript, SiExpress, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Fave's Touch",
    description: "Fave's Touch is a modern beauty and lifestyle platform that connects users with professional hairstylists and beauty services. It makes easy to discover styles, book appointment, explore trending looks, and enjoy a seamless beauty experience.",
    image: "/first.jpeg",
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Express.js', icon: SiExpress },
    ],
    liveUrl: "https://fave-two.vercel.app/",
  },
  {
    id: 2,
    title: "Drivana",
    description: "Drivana is a modern digital platform that makes it easy for people to rent, buy, or sell vehicles from anywhere. It connects customers with trusted car owners and dealerships through a secure, user-friendly marketplace.",
    image: "/second.jpeg",
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Node.js', icon: SiNodedotjs },
    ],
    liveUrl: "https://drivana.vercel.app/",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [copied, setCopied] = useState(false);

  return (
    <motion.div
      className={`surface-card relative w-full max-w-[340px] overflow-hidden ${index % 2 === 1 ? "lg:-translate-y-4" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: index % 2 === 1 ? -16 : 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: (index % 2 === 1 ? -16 : 0) - 4 }}
    >
      {/* Corner tag */}
      <div className="absolute top-0 left-6 z-20 rounded-b-lg bg-coral-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
        Project {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10 p-4 pt-6">
        {/* Image Section */}
        <div className="relative w-full h-36 sm:h-44 md:h-52 rounded-xl overflow-hidden mb-3">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

          {/* Live badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-emerald-100 border border-emerald-400/40 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white mb-1">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px] sm:text-xs">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-2 font-semibold">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1 rounded-full bg-slate-200/80 dark:bg-slate-700/70 px-2 py-0.5 text-[10px] text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600/50"
                >
                  <tech.icon className="w-3 h-3" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-lg bg-mint-500 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-mint-600"
            >
              Live Demo
            </a>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigator.clipboard?.writeText(project.liveUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="inline-flex items-center justify-center rounded-lg border-2 border-slate-300 dark:border-slate-700 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 transition-all hover:border-mint-500 hover:text-mint-600 dark:hover:text-mint-400"
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 relative">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <span className="eyebrow-tag border border-mint-500/30 bg-mint-500/10 text-mint-600 dark:text-mint-400">
          Portfolio
        </span>
        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
          A showcase of digital innovation and creative excellence.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="relative py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center px-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
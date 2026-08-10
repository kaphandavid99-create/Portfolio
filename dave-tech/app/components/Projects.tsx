"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-[340px] rounded-[1.5rem] overflow-hidden bg-white dark:bg-slate-900/95 border-2 border-teal-400/30"
      initial={{ scale: 0.9, opacity: 0, y: 50 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        rotateY: 5,
        rotateX: -5,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >


      {/* Inner content container */}
      <div className="relative z-10 p-4">
        {/* Image Section */}
        <motion.div
          className="relative w-full h-36 sm:h-44 md:h-52 rounded-2xl overflow-hidden mb-3"
          style={{
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            transform: "translateZ(20px)",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 dark:from-slate-900/90 via-transparent to-transparent" />
          
          {/* Live badge */}
          <motion.div
            className="absolute top-4 right-4"
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live
            </div>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-3" style={{ transform: "translateZ(10px)" }}>
          <div>
            <motion.h3
              className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white mb-1"
              style={{ 
                fontFamily: 'Georgia, serif',
              }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px] sm:text-xs"
            >
              {project.description}
            </motion.p>
          </div>

          {/* Technologies */}
          <div className="rounded-2xl border border-slate-300 dark:border-slate-700/50 bg-slate-100 dark:bg-slate-800/50 p-3 backdrop-blur-sm">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-600 dark:text-slate-400 mb-2 font-semibold">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech.name}
                  className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-slate-200/80 to-slate-300/80 dark:from-slate-700/80 dark:to-slate-600/80 px-2 py-0.5 text-[10px] text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600/50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: techIndex * 0.1 }}
                >
                  <tech.icon className="w-3 h-3" />
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 pt-2">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg transition-all flex-1"
              style={{ 
                fontFamily: 'Georgia, serif',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Live Demo
            </motion.a>

            <motion.button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigator.clipboard?.writeText(project.liveUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="inline-flex items-center justify-center rounded-2xl border-2 border-teal-400/50 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-teal-600 dark:text-teal-300 transition-all backdrop-blur-sm"
              style={{
                fontFamily: 'Georgia, serif',
              }}
              whileTap={{ scale: 0.98 }}
            >
              {copied ? 'Copied!' : 'Copy Link'}
            </motion.button>
          </div>
        </div>


      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 relative bg-white dark:bg-transparent">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-widest mb-4"
          style={{
            fontFamily: 'Georgia, serif',
            color: '#2dd4bf',
            textShadow: '0 0 30px rgba(45, 212, 191, 0.5), 0 0 60px rgba(45, 212, 191, 0.3)',
            letterSpacing: '0.15em',
          }}
        >
          Featured Projects
        </h2>
        <p
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto italic px-4"
          style={{
            fontFamily: 'Georgia, serif',
            color: '#2dd4bf',
            textShadow: '0 0 15px rgba(45, 212, 191, 0.3)',
          }}
        >
          A spectacular showcase of digital innovation and creative excellence.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="relative py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center px-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
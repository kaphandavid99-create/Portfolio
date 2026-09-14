"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 sm:mb-14"
      >
        <span className="eyebrow-tag border border-mint-500/30 bg-mint-500/10 text-mint-600 dark:text-mint-400">
          About
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Get to know me
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="surface-card max-w-3xl mx-auto px-6 sm:px-10 py-8 sm:py-10 space-y-6"
      >
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          I&apos;m a passionate Frontend Developer with a love for building clean,
          responsive, and user-friendly web applications. With expertise in
          modern technologies like React, Next.js, and TypeScript, I transform
          ideas into seamless digital experiences.
        </p>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          I believe in writing clean code, continuous learning, and delivering
          solutions that make a real impact. When I&apos;m not coding, you&apos;ll find
          me exploring new tech, contributing to open source, or mentoring
          aspiring developers.
        </p>
      </motion.div>
    </section>
  );
}

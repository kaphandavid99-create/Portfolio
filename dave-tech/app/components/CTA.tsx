"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web App Development",
    image: "/web app.jpeg",
    description:
      "I build responsive, scalable web applications with polished UI, modern architecture, and performance tuned experiences for both desktop and mobile users.",
    featured: true,
  },
  {
    title: "Graphic Design",
    image: "/graphic.jpeg",
    description:
      "I create bold, memorable visual identities, marketing assets, and brand collateral that help businesses stand out and connect with their audience.",
    featured: false,
  },
  {
    title: "Website Maintenance",
    image: "/maintainance.jpeg",
    description:
      "I keep websites secure, updated, and running smoothly with proactive monitoring, performance tuning, and continuous improvement.",
    featured: false,
  },
  {
    title: "Digital Marketing",
    image: "/digital.jpeg",
    description:
      "I craft data-driven digital campaigns and content strategies that grow visibility, engagement, and conversions across modern channels.",
    featured: false,
  },
];

export default function CTA() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <span className="eyebrow-tag border border-coral-500/30 bg-coral-500/10 text-coral-500 dark:text-coral-400">
          Services
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          What I Offer
        </h2>
      </motion.div>

      {/* 2x2 feature grid, one highlighted */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-2xl border p-5 sm:p-6 ${
              service.featured
                ? "bg-mint-500 border-mint-600 text-white"
                : "surface-card"
            }`}
          >
            <div className="relative w-full h-32 sm:h-36 rounded-xl overflow-hidden mb-4">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <h3
              className={`text-lg sm:text-xl font-bold tracking-tight mb-2 ${
                service.featured ? "text-white" : "text-slate-900 dark:text-white"
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`text-sm leading-relaxed mb-4 ${
                service.featured ? "text-emerald-50" : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <Link
                href="#contact"
                className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                  service.featured
                    ? "bg-white text-mint-600 hover:bg-emerald-50"
                    : "bg-mint-500 text-white hover:bg-mint-600"
                }`}
              >
                Hire Me
              </Link>
              <Link
                href="#projects"
                className={`inline-flex items-center justify-center rounded-lg border-2 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                  service.featured
                    ? "border-white/60 text-white hover:bg-white/10"
                    : "border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-mint-500 hover:text-mint-600 dark:hover:text-mint-400"
                }`}
              >
                See Projects
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 mt-12">
        <Link
          href="mailto:kaphandavid99@gmail.com"
          className="rounded-xl bg-mint-500 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-mint-500/20 transition-all hover:bg-mint-600 hover:-translate-y-0.5"
        >
          Get In Touch
        </Link>
        <Link
          href="#"
          className="rounded-xl border-2 border-slate-300 dark:border-slate-700 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 transition-all hover:border-mint-500 hover:text-mint-600 dark:hover:text-mint-400 hover:-translate-y-0.5"
        >
          Download CV
        </Link>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { label: "Live Projects", value: "2+" },
  { label: "Tech Stack", value: "8+" },
  { label: "Availability", value: "Remote" },
];

const socials = [
  {
    href: "https://github.com/kaphandavid99-create",
    label: "GitHub",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    href: "https://www.linkedin.com/in/dave-tech-26886b380?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    label: "LinkedIn",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    href: "mailto:kaphandavid99@gmail.com",
    label: "Email",
    path: "M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-11.174l4.623 5.462zm-4.484-6.356h19.722l-9.861 11.637-9.861-11.637zm5.227 6.239l4.634 5.492 4.634-5.492 4.485 5.472h-18.238l4.485-5.472zm14.891-5.492v11.174l-4.623-5.712 4.623-5.462z",
  },
  {
    href: "https://wa.me/237671641680",
    label: "WhatsApp",
    path: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative px-4 sm:px-6 pt-32 sm:pt-16 lg:pt-28 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow-tag border border-mint-500/30 bg-mint-500/10 text-mint-600 dark:text-mint-400"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-mint-500" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 sm:mt-8"
          >
            <span className="block text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Hello, I&apos;m
            </span>
            <span className="mt-2 block text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Kaphan David
            </span>
            <span className="mt-3 inline-flex items-center gap-2 rounded-lg bg-coral-500/10 px-3 py-1.5 text-base sm:text-lg font-bold text-coral-500 dark:text-coral-400">
              Full Stack Developer
            </span>
          </motion.h1>

          {/* Mobile Image - shown after heading on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:hidden my-8 flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <Image
                src="/Dave.png"
                alt="Kaphan David"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="surface-card mt-6 sm:mt-8 max-w-xl border-l-4 border-l-mint-500 px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-300"
          >
            <span className="font-bold text-slate-900 dark:text-white">I craft</span> immersive
            digital experiences that{" "}
            <span className="font-bold text-slate-900 dark:text-white">captivate</span> and
            inspire, transforming{" "}
            <span className="font-bold text-slate-900 dark:text-white">visionary ideas</span> into{" "}
            <span className="font-bold text-slate-900 dark:text-white">
              extraordinary digital realities
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="rounded-xl bg-mint-500 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-mint-500/20 transition-all hover:bg-mint-600 hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-xl border-2 border-slate-300 dark:border-slate-700 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 transition-all hover:border-mint-500 hover:text-mint-600 dark:hover:text-mint-400 hover:-translate-y-0.5"
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex gap-4 justify-center lg:justify-start"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 transition-all hover:border-mint-500 hover:text-mint-600 dark:hover:text-mint-400 hover:-translate-y-0.5"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" suppressHydrationWarning>
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 w-80 h-96 xl:w-[22rem] xl:h-[26rem] shadow-2xl shadow-black/10 dark:shadow-black/40">
              <Image
                src="/Dave.png"
                alt="Kaphan David"
                width={480}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating stat badges */}
            <div className="absolute -left-8 top-8 flex flex-col gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  className="stat-pill"
                >
                  <span className="text-xl font-extrabold text-mint-600 dark:text-mint-400">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Rotated accent tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -right-6 bottom-10 rounded-xl bg-coral-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-coral-500/30"
            >
              Full&nbsp;Stack&nbsp;Dev
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

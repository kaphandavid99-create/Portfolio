"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

const serviceLinks = [
  { label: "Web Development", href: "#services" },
  { label: "Graphic Design", href: "#services" },
  { label: "Website Maintenance", href: "#services" },
  { label: "Digital Marketing", href: "#services" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    name: "Email",
    href: "mailto:kaphandavid99@gmail.com",
    path: "M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-11.174l4.623 5.462zm-4.484-6.356h19.722l-9.861 11.637-9.861-11.637zm5.227 6.239l4.634 5.492 4.634-5.492 4.485 5.472h-18.238l4.485-5.472zm14.891-5.492v11.174l-4.623-5.712 4.623-5.462z",
  },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-6 flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.14em] text-slate-900 dark:text-white">
      <span className="h-4 w-[3px] rounded-full bg-mint-500" />
      {children}
    </h4>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-0 text-sm text-slate-600 transition-all duration-300 hover:gap-2 hover:text-mint-600 dark:text-slate-400 dark:hover:text-mint-400"
    >
      <span className="h-px w-0 bg-mint-500 transition-all duration-300 group-hover:w-3" />
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-mint-500 transition-all duration-300 group-hover:w-full" />
      </span>
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative px-4 pb-10 pt-24 sm:px-6 mt-12 sm:mt-20">
      {/* Decorative solid-color blurred accents (no gradients) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-mint-500/10 blur-3xl" />
        <div className="absolute -top-10 right-1/5 h-48 w-48 rounded-full bg-coral-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Card shell */}
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 px-6 pb-10 pt-16 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.12)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60 sm:px-10 lg:px-14">
          {/* Top accent bar */}
          <div className="absolute inset-x-0 top-0 h-1 bg-mint-500" />

          {/* Back-to-top button, straddling the top edge */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-mint-500 bg-background text-mint-600 shadow-lg transition-all duration-300 hover:-translate-y-[calc(50%+4px)] hover:bg-mint-500 hover:text-white hover:shadow-mint-500/30 dark:text-mint-400 dark:hover:text-white"
          >
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
          </button>

          {/* Main footer content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-12"
          >
            {/* Brand section */}
            <div className="col-span-2 sm:col-span-1">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-slate-200 dark:border-slate-700">
                  <Image src="/logo2.png" alt="Logo" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">DAVE TECH</h3>
                  <p className="text-sm font-medium text-mint-600 dark:text-mint-400">Full Stack Developer</p>
                </div>
              </div>

              <p className="mb-6 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Crafting extraordinary digital experiences with passion and precision. Transforming visionary ideas into exceptional digital realities.
              </p>

              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-slate-300 text-slate-600 transition-colors duration-300 dark:border-slate-700 dark:text-slate-400"
                  >
                    <span className="absolute inset-0 scale-0 rounded-xl bg-mint-500 transition-transform duration-300 ease-out group-hover:scale-100" />
                    <svg
                      className="relative z-10 h-5 w-5 transition-all duration-300 group-hover:rotate-[360deg] group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <FooterHeading>Quick Links</FooterHeading>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <FooterHeading>Services</FooterHeading>
              <ul className="space-y-3.5">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <FooterHeading>Contact</FooterHeading>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-mint-500/10 text-mint-600 dark:text-mint-400">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <a
                    href="mailto:kaphandavid99@gmail.com"
                    className="mt-1.5 text-sm text-slate-600 transition-colors hover:text-mint-600 dark:text-slate-400 dark:hover:text-mint-400"
                  >
                    kaphandavid99@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-mint-500/10 text-mint-600 dark:text-mint-400">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <a
                    href="tel:+237671641680"
                    className="mt-1.5 text-sm text-slate-600 transition-colors hover:text-mint-600 dark:text-slate-400 dark:hover:text-mint-400"
                  >
                    (+237) 671 641 680
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-mint-500/10 text-mint-600 dark:text-mint-400">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">Global / Remote</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="my-10 border-t border-slate-200 dark:border-slate-800" />

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-between gap-4 md:flex-row"
          >
            <p className="text-center text-sm text-slate-500 dark:text-slate-500 md:text-left">
              © {currentYear} DAVE TECH. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="group relative text-sm text-slate-500 transition-colors hover:text-mint-600 dark:text-slate-500 dark:hover:text-mint-400">
                Privacy Policy
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-mint-500 transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#" className="group relative text-sm text-slate-500 transition-colors hover:text-mint-600 dark:text-slate-500 dark:hover:text-mint-400">
                Terms of Service
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-mint-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest" style={{
        fontFamily: 'Georgia, serif',
        color: '#2dd4bf',
        textShadow: '0 0 40px rgba(45, 212, 191, 0.6), 0 0 80px rgba(139,92,246,0.25)',
        letterSpacing: '0.25em'
      }}>
        What I Offer
      </h2>

      {/* Services cards - spectacular single card matching project sizes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl"
      >
        <div className="relative py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center px-2">

            {/* Service Card: Web App Development */}
            <motion.div
              className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-[1.5rem] overflow-hidden"
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(17,24,39,0.95))',
                border: '2px solid rgba(45, 212, 191, 0.25)',
                boxShadow: '0 20px 60px rgba(13,18,25,0.6), 0 0 40px rgba(45,212,191,0.12)'
              }}
            >
              <div className="relative z-10 p-4">
                <div className="relative w-full h-28 sm:h-36 md:h-44 rounded-2xl overflow-hidden mb-3" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
                  <Image
                    src="/web%20app.jpeg"
                    alt="Web App Development"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-black tracking-tight text-white mb-1" style={{
                    fontFamily: 'Georgia, serif',
                    textShadow: '0 0 24px rgba(45,212,191,0.35)'
                  }}>
                    Web App Development
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-[12px] sm:text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                    I build responsive, scalable web applications using modern stacks — fast, maintainable, and designed for users.
                  </p>

                  <div className="flex gap-2 pt-2">
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 px-3 sm:px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg transition-all"
                      style={{ boxShadow: '0 18px 60px rgba(45,212,191,0.25)', fontFamily: 'Georgia, serif' }}
                    >
                      Hire Me
                    </Link>
                    <Link
                      href="#projects"
                      className="inline-flex items-center justify-center rounded-2xl border-2 border-teal-400/50 px-3 sm:px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-teal-300 transition-all backdrop-blur-sm"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      See Projects
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Empty placeholder to keep grid balanced on larger screens */}
            <div className="hidden md:block" />

          </div>
        </div>
      </motion.div>

      {/* Action buttons retained */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 mt-6">
        <Link
          href="mailto:hello@kaphan.dev"
          className="bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          Get In Touch
        </Link>
        <Link
          href="#"
          className="border border-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-slate-800 transition-colors text-sm sm:text-base"
        >
          Download CV
        </Link>
      </div>
    </section>
  );
}


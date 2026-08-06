"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SiNextdotjs, SiTailwindcss, SiSupabase, SiTypescript, SiExpress, SiMongodb, SiNodedotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 relative">
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
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto italic px-4"
          style={{
            fontFamily: 'Georgia, serif',
            color: '#2dd4bf',
            textShadow: '0 0 15px rgba(45, 212, 191, 0.3)',
          }}
        >
          A spectacular showcase of digital innovation and creative excellence.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl"
      >
        <div className="relative py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center px-2">
            
            {/* First Project Card - Fave's Touch */}
            <motion.div
              className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-[1.5rem] overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
                border: '2px solid rgba(45, 212, 191, 0.3)',
                boxShadow: isHovered 
                  ? '0 0 60px rgba(45, 212, 191, 0.4), 0 0 120px rgba(139, 92, 246, 0.3), 0 0 180px rgba(217, 70, 239, 0.2)' 
                  : '0 0 40px rgba(45, 212, 191, 0.2), 0 0 80px rgba(139, 92, 246, 0.15)',
              }}
            >
              {/* Animated gradient border effect */}
              <motion.div
                className="absolute inset-0 rounded-[2rem]"
                style={{
                  background: 'linear-gradient(45deg, #2dd4bf, #8b5cf6, #d946ef, #2dd4bf)',
                  backgroundSize: '400% 400%',
                  opacity: isHovered ? 0.3 : 0.1,
                }}
                animate={{
                  backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Inner content container */}
              <div className="relative z-10 p-4">
                {/* Image Section */}
                <motion.div
                  className="relative w-full h-28 sm:h-36 md:h-44 rounded-2xl overflow-hidden mb-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <Image
                    src="/first.jpeg"
                    alt="Featured Project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Live badge */}
                  <motion.div
                    className="absolute top-3 right-3"
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                      boxShadow: isHovered ? '0 0 20px rgba(52, 211, 153, 0.6)' : '0 0 10px rgba(52, 211, 153, 0.3)',
                    }}
                  >
                    <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Live
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <div className="space-y-3">
                  <div>
                    <motion.h3
                      className="text-base sm:text-lg font-black tracking-tight text-white mb-1"
                      style={{ 
                        fontFamily: 'Georgia, serif',
                        textShadow: '0 0 20px rgba(45, 212, 191, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)',
                      }}
                      animate={{
                        textShadow: isHovered 
                          ? '0 0 30px rgba(45, 212, 191, 0.6), 0 0 60px rgba(139, 92, 246, 0.4)' 
                          : '0 0 20px rgba(45, 212, 191, 0.3)',
                      }}
                    >
                      Fave&apos;s Touch
                    </motion.h3>
                    <motion.p
                      className="text-slate-300 leading-relaxed text-[11px] sm:text-xs"
                      animate={{
                        color: isHovered ? '#e2e8f0' : '#cbd5e1',
                      }}
                    >
                      Fave&apos;s Touch is a modern beauty and lifestyle platform that connects users with professional hairstylists and beauty services. It makes easy to discover styles, book appointment, explore trending looks, and enjoy a seamless beauty experience.
                    </motion.p>
                  </div>

                  {/* Technologies */}
                  <div className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-3 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-2 font-semibold">Technologies</p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: 'Next.js', icon: SiNextdotjs },
                        { name: 'Tailwind CSS', icon: SiTailwindcss },
                        { name: 'Supabase', icon: SiSupabase },
                        { name: 'TypeScript', icon: SiTypescript },
                        { name: 'Express.js', icon: SiExpress },
                      ].map((tech, index) => (
                        <motion.span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-slate-700/80 to-slate-600/80 px-2 py-0.5 text-[10px] text-slate-100 border border-slate-600/50"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: 'rgba(45, 212, 191, 0.2)',
                            borderColor: 'rgba(45, 212, 191, 0.5)',
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <tech.icon className="w-3 h-3" />
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <motion.a
                      href="https://fave-two.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 px-3 sm:px-4 py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white shadow-lg transition-all"
                      style={{
                        boxShadow: '0 18px 60px rgba(45, 212, 191, 0.3)',
                        fontFamily: 'Georgia, serif',
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 25px 80px rgba(45, 212, 191, 0.5)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live Demo
                    </motion.a>

                    <motion.button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard?.writeText('https://fave-two.vercel.app/');
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="inline-flex items-center justify-center rounded-2xl border-2 border-teal-400/50 px-2 sm:px-3 py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-teal-300 transition-all backdrop-blur-sm"
                      style={{
                        fontFamily: 'Georgia, serif',
                        boxShadow: '0 0 20px rgba(45, 212, 191, 0.2)',
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(45, 212, 191, 0.1)',
                        boxShadow: '0 0 30px rgba(45, 212, 191, 0.4)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {copied ? 'Copied!' : 'Copy Link'}
                    </motion.button>
                  </div>
                </div>

                {/* Decorative corner accents */}
                <motion.div
                  className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-teal-400/50 rounded-tl-2xl"
                  animate={{
                    opacity: isHovered ? 1 : 0.5,
                    scale: isHovered ? 1.1 : 1,
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-purple-400/50 rounded-br-2xl"
                  animate={{
                    opacity: isHovered ? 1 : 0.5,
                    scale: isHovered ? 1.1 : 1,
                  }}
                />
              </div>
            </motion.div>

            {/* Second Project Card - Drivana */}
            <motion.div
              className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-[1.5rem] overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onHoverStart={() => setIsHovered2(true)}
              onHoverEnd={() => setIsHovered2(false)}
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
                border: '2px solid rgba(45, 212, 191, 0.3)',
                boxShadow: isHovered2 
                  ? '0 0 60px rgba(45, 212, 191, 0.4), 0 0 120px rgba(139, 92, 246, 0.3), 0 0 180px rgba(217, 70, 239, 0.2)' 
                  : '0 0 40px rgba(45, 212, 191, 0.2), 0 0 80px rgba(139, 92, 246, 0.15)',
              }}
            >
              {/* Animated gradient border effect */}
              <motion.div
                className="absolute inset-0 rounded-[2rem]"
                style={{
                  background: 'linear-gradient(45deg, #2dd4bf, #8b5cf6, #d946ef, #2dd4bf)',
                  backgroundSize: '400% 400%',
                  opacity: isHovered2 ? 0.3 : 0.1,
                }}
                animate={{
                  backgroundPosition: isHovered2 ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Inner content container */}
              <div className="relative z-10 p-4">
                {/* Image Section */}
                <motion.div
                  className="relative w-full h-28 sm:h-36 md:h-44 rounded-2xl overflow-hidden mb-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <Image
                    src="/second.jpeg"
                    alt="Drivana Project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Live badge */}
                  <motion.div
                    className="absolute top-3 right-3"
                    animate={{
                      scale: isHovered2 ? 1.1 : 1,
                      boxShadow: isHovered2 ? '0 0 20px rgba(52, 211, 153, 0.6)' : '0 0 10px rgba(52, 211, 153, 0.3)',
                    }}
                  >
                    <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Live
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <div className="space-y-3">
                  <div>
                    <motion.h3
                      className="text-base sm:text-lg font-black tracking-tight text-white mb-1"
                      style={{ 
                        fontFamily: 'Georgia, serif',
                        textShadow: '0 0 20px rgba(45, 212, 191, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)',
                      }}
                      animate={{
                        textShadow: isHovered2 
                          ? '0 0 30px rgba(45, 212, 191, 0.6), 0 0 60px rgba(139, 92, 246, 0.4)' 
                          : '0 0 20px rgba(45, 212, 191, 0.3)',
                      }}
                    >
                      Drivana
                    </motion.h3>
                    <motion.p
                      className="text-slate-300 leading-relaxed text-[11px] sm:text-xs"
                      animate={{
                        color: isHovered2 ? '#e2e8f0' : '#cbd5e1',
                      }}
                    >
                      Drivana is a modern digital platform that makes it easy for people to rent, buy, or sell vehicles from anywhere. It connects customers with trusted car owners and dealerships through a secure, user-friendly marketplace.
                    </motion.p>
                  </div>

                  {/* Technologies */}
                  <div className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-3 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-2 font-semibold">Technologies</p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: 'React', icon: FaReact },
                        { name: 'Tailwind CSS', icon: SiTailwindcss },
                        { name: 'MongoDB', icon: SiMongodb },
                        { name: 'Node.js', icon: SiNodedotjs },
                      ].map((tech, index) => (
                        <motion.span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-slate-700/80 to-slate-600/80 px-2 py-0.5 text-[10px] text-slate-100 border border-slate-600/50"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: 'rgba(45, 212, 191, 0.2)',
                            borderColor: 'rgba(45, 212, 191, 0.5)',
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <tech.icon className="w-3 h-3" />
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <motion.a
                      href="https://drivana-fawn.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 px-3 sm:px-4 py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white shadow-lg transition-all"
                      style={{
                        boxShadow: '0 18px 60px rgba(45, 212, 191, 0.3)',
                        fontFamily: 'Georgia, serif',
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 25px 80px rgba(45, 212, 191, 0.5)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live Demo
                    </motion.a>

                    <motion.button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard?.writeText('https://drivana-fawn.vercel.app/');
                        setCopied2(true);
                        setTimeout(() => setCopied2(false), 2000);
                      }}
                      className="inline-flex items-center justify-center rounded-2xl border-2 border-teal-400/50 px-2 sm:px-3 py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-teal-300 transition-all backdrop-blur-sm"
                      style={{
                        fontFamily: 'Georgia, serif',
                        boxShadow: '0 0 20px rgba(45, 212, 191, 0.2)',
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(45, 212, 191, 0.1)',
                        boxShadow: '0 0 30px rgba(45, 212, 191, 0.4)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {copied2 ? 'Copied!' : 'Copy Link'}
                    </motion.button>
                  </div>
                </div>

                {/* Decorative corner accents */}
                <motion.div
                  className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-teal-400/50 rounded-tl-2xl"
                  animate={{
                    opacity: isHovered2 ? 1 : 0.5,
                    scale: isHovered2 ? 1.1 : 1,
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-purple-400/50 rounded-br-2xl"
                  animate={{
                    opacity: isHovered2 ? 1 : 0.5,
                    scale: isHovered2 ? 1.1 : 1,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

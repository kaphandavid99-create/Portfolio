"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative px-4 sm:px-6 pt-32 sm:pt-16 lg:pt-28 py-16 sm:py-20 lg:py-28 min-h-screen">

      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl pl-4 sm:pl-8 lg:pl-12 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          >
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
            Available for extraordinary digital experiences
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 sm:mt-8 text-xl leading-[0.9] tracking-[-0.03em] sm:text-2xl lg:text-3xl xl:text-4xl"
          >
            <span className="block text-white font-bold tracking-widest uppercase" style={{ 
              fontFamily: 'Georgia, serif',
              textShadow: '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3), 0 0 60px rgba(34, 211, 238, 0.2)',
              letterSpacing: '0.15em'
            }}>
              Hello, I&apos;m
            </span>
            <span className="mt-3 block font-black uppercase tracking-widest" style={{ 
              background: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #d946ef, #f43f5e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              textShadow: '0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(139, 92, 246, 0.3), 0 0 90px rgba(217, 70, 239, 0.2)',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.2em',
              fontSize: '1.1em'
            }}>
              Kaphan David
            </span>
            <span className="mt-3 block font-extrabold uppercase tracking-widest" style={{ 
              color: 'transparent',
              fontFamily: 'Georgia, serif',
              textShadow: '0 0 25px rgba(45, 212, 191, 0.6), 0 0 50px rgba(45, 212, 191, 0.4), 0 0 75px rgba(45, 212, 191, 0.2)',
              letterSpacing: '0.25em',
              background: 'linear-gradient(to right, #2dd4bf, #06b6d4, #2dd4bf)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              A Full Stack Developer
            </span>
          </motion.h1>

          {/* Mobile Image - shown after heading on mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:hidden my-8 flex justify-center"
          >
            <div className="relative">
              <div className="relative rounded-full p-1 border-2 border-slate-700">
                <div className="relative rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                  <Image
                    src="/Dave.png"
                    alt="Kaphan David"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 sm:mt-6 max-w-xl rounded-2xl border border-teal-400/30 bg-teal-500/10 px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg leading-7 sm:leading-8 font-serif italic backdrop-blur-sm" style={{ 
              color: '#2dd4bf',
              textShadow: '0 0 15px rgba(45, 212, 191, 0.4), 0 0 30px rgba(45, 212, 191, 0.2)',
              letterSpacing: '0.05em',
              background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.1), rgba(6, 182, 212, 0.1), rgba(45, 212, 191, 0.1))',
              boxShadow: '0 0 40px rgba(45, 212, 191, 0.15), inset 0 0 20px rgba(45, 212, 191, 0.05)'
            }}>
            <span className="font-bold not-italic" style={{ 
              color: '#ffffff',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(45, 212, 191, 0.3)'
            }}>
              I craft
            </span> 
            immersive digital experiences that 
            <span className="font-bold not-italic" style={{ 
              color: '#ffffff',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(45, 212, 191, 0.3)'
            }}>
              captivate
            </span> 
            and inspire, transforming 
            <span className="font-bold not-italic" style={{ 
              color: '#ffffff',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(45, 212, 191, 0.3)'
            }}>
              visionary ideas
            </span> 
            into 
            <span className="font-bold not-italic" style={{ 
              color: '#ffffff',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(45, 212, 191, 0.3)'
            }}>
              extraordinary digital realities
            </span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 sm:mt-8 flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 font-bold tracking-widest uppercase text-xs sm:text-sm rounded-2xl relative overflow-hidden group"
              style={{
                color: '#2dd4bf',
                border: '2px solid rgba(45, 212, 191, 0.5)',
                boxShadow: '0 0 20px rgba(45, 212, 191, 0.3)',
                textShadow: '0 0 10px rgba(45, 212, 191, 0.4)',
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.15em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #14b8a6, #06b6d4, #2dd4bf)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = '#ffffff';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(45, 212, 191, 0.6), 0 0 80px rgba(45, 212, 191, 0.4), 0 0 120px rgba(45, 212, 191, 0.2)';
                e.currentTarget.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(45, 212, 191, 0.6)';
                e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#2dd4bf';
                e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.5)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(45, 212, 191, 0.3)';
                e.currentTarget.style.textShadow = '0 0 10px rgba(45, 212, 191, 0.4)';
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
              }}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 font-bold tracking-widest uppercase text-xs sm:text-sm rounded-2xl relative overflow-hidden group"
              style={{
                color: '#2dd4bf',
                border: '2px solid rgba(45, 212, 191, 0.5)',
                boxShadow: '0 0 20px rgba(45, 212, 191, 0.3)',
                textShadow: '0 0 10px rgba(45, 212, 191, 0.4)',
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.15em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #8b5cf6, #d946ef, #2dd4bf)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = '#ffffff';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(217, 70, 239, 0.4), 0 0 120px rgba(45, 212, 191, 0.2)';
                e.currentTarget.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(139, 92, 246, 0.6)';
                e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#2dd4bf';
                e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.5)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(45, 212, 191, 0.3)';
                e.currentTarget.style.textShadow = '0 0 10px rgba(45, 212, 191, 0.4)';
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
              }}
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 sm:mt-8 flex gap-4 sm:gap-6 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/kaphandavid99-create"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-14 lg:h-14 rounded-full border-2 border-teal-400/30 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:border-teal-400"
              style={{
                boxShadow: '0 0 15px rgba(45, 212, 191, 0.2)',
                background: 'rgba(15, 23, 42, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(6, 182, 212, 0.2))';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(45, 212, 191, 0.5), 0 0 60px rgba(45, 212, 191, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.5)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(45, 212, 191, 0.2)';
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" style={{ color: '#2dd4bf', filter: 'drop-shadow(0 0 8px rgba(45, 212, 191, 0.5))' }} fill="currentColor" viewBox="0 0 24 24" suppressHydrationWarning>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/dave-tech-26886b380?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-14 lg:h-14 rounded-full border-2 border-teal-400/30 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:border-teal-400"
              style={{
                boxShadow: '0 0 15px rgba(45, 212, 191, 0.2)',
                background: 'rgba(15, 23, 42, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(6, 182, 212, 0.2))';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(45, 212, 191, 0.5), 0 0 60px rgba(45, 212, 191, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.5)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(45, 212, 191, 0.2)';
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" style={{ color: '#2dd4bf', filter: 'drop-shadow(0 0 8px rgba(45, 212, 191, 0.5))' }} fill="currentColor" viewBox="0 0 24 24" suppressHydrationWarning>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:kaphandavid99@gmail.com"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-14 lg:h-14 rounded-full border-2 border-teal-400/30 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:border-teal-400"
              style={{
                boxShadow: '0 0 15px rgba(45, 212, 191, 0.2)',
                background: 'rgba(15, 23, 42, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(6, 182, 212, 0.2))';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(45, 212, 191, 0.5), 0 0 60px rgba(45, 212, 191, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.5)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(45, 212, 191, 0.2)';
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" style={{ color: '#2dd4bf', filter: 'drop-shadow(0 0 8px rgba(45, 212, 191, 0.5))' }} fill="currentColor" viewBox="0 0 24 24" suppressHydrationWarning>
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-11.174l4.623 5.462zm-4.484-6.356h19.722l-9.861 11.637-9.861-11.637zm5.227 6.239l4.634 5.492 4.634-5.492 4.485 5.472h-18.238l4.485-5.472zm14.891-5.492v11.174l-4.623-5.712 4.623-5.462z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/671641680"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-14 lg:h-14 rounded-full border-2 border-teal-400/30 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:border-teal-400"
              style={{
                boxShadow: '0 0 15px rgba(45, 212, 191, 0.2)',
                background: 'rgba(15, 23, 42, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(6, 182, 212, 0.2))';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(45, 212, 191, 0.5), 0 0 60px rgba(45, 212, 191, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.5)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(45, 212, 191, 0.2)';
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" style={{ color: '#2dd4bf', filter: 'drop-shadow(0 0 8px rgba(45, 212, 191, 0.5))' }} fill="currentColor" viewBox="0 0 24 24" suppressHydrationWarning>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          {/* Spectacular background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.3),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.2),transparent_35%)] blur-3xl animate-pulse" />
          
          {/* Content container */}
          <div className="relative p-4 sm:p-6 lg:p-8 flex justify-center">
            {/* Professional circular image frame */}
            <div className="relative">
              {/* Simple outer ring */}
              <div className="relative rounded-full p-1 border-2 border-slate-700">
                {/* Image container */}
                <div className="relative rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                  {/* Image */}
                  <Image
                    src="/Dave.png"
                    alt="Kaphan David"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


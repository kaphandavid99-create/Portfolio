"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

function FlameEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    const size = isMobile ? 100 : 140;
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const particleCount = isMobile ? 80 : 150;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 3;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3;

      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0.3;
        colors[i * 3 + 1] = 0.8;
        colors[i * 3 + 2] = 0.7;
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0.0;
        colors[i * 3 + 1] = 0.7;
        colors[i * 3 + 2] = 0.8;
      } else {
        colors[i * 3] = 0.5;
        colors[i * 3 + 1] = 0.4;
        colors[i * 3 + 2] = 0.9;
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.002;

      particlesMesh.rotation.x = time * 0.5;
      particlesMesh.rotation.y = time * 0.7;

      const posArray = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        posArray[i3 + 1] += Math.sin(time + posArray[i3]) * 0.01;
        posArray[i3] += Math.cos(time + posArray[i3 + 1]) * 0.005;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 flex items-center justify-center" style={{ width: isMobile ? '100px' : '140px', height: isMobile ? '100px' : '140px' }} />;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative px-4 sm:px-6 py-12 sm:py-16 mt-12 sm:mt-20 bg-[#020617]">
      {/* Spectacular background effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.15),transparent_50%),radial-gradient(circle_at_top_left,rgba(6,182,212,0.12),transparent_40%)]" />
      
      <div className="mx-auto max-w-7xl">
        {/* Main footer content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12"
        >
          {/* Brand section with logo */}
          <div className="text-center md:text-left md:col-span-2 lg:col-span-1">
            <div className="relative inline-block mb-4 sm:mb-6">
              <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center mx-auto md:mx-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FlameEffect />
                </div>
                <Image
                  src="/logo2.png"
                  alt="Logo"
                  width={96}
                  height={96}
                  className="relative z-20 h-16 w-16 sm:h-20 sm:w-20 rounded-full object-contain"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-400 italic text-base" style={{ 
                fontFamily: 'Georgia, serif',
                color: '#2dd4bf',
                textShadow: '0 0 10px rgba(45, 212, 191, 0.3)'
              }}>
                Crafting extraordinary digital experiences with passion and precision
              </p>
              
              <div className="text-slate-500 text-sm leading-relaxed space-y-2">
                <p>
                  Full Stack Developer specializing in modern web technologies
                </p>
                <p>
                  Transforming visionary ideas into exceptional digital realities
                </p>
                <p>
                  Innovative solutions and cutting-edge development practices
                </p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-left pl-0">
            <h4 className="text-base sm:text-lg font-bold uppercase tracking-wider mb-3 sm:mb-4" style={{ 
              fontFamily: 'Georgia, serif',
              color: '#2dd4bf',
              textShadow: '0 0 15px rgba(45, 212, 191, 0.4)',
              letterSpacing: '0.1em'
            }}>
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-sm sm:text-base" style={{ 
                fontFamily: 'Georgia, serif',
                textShadow: '0 0 8px rgba(45, 212, 191, 0.2)'
              }}>
                Home
              </a>
              <a href="#skills" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-sm sm:text-base" style={{ 
                fontFamily: 'Georgia, serif',
                textShadow: '0 0 8px rgba(45, 212, 191, 0.2)'
              }}>
                Skills
              </a>
              <a href="#projects" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-sm sm:text-base" style={{ 
                fontFamily: 'Georgia, serif',
                textShadow: '0 0 8px rgba(45, 212, 191, 0.2)'
              }}>
                Projects
              </a>
              <a href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-sm sm:text-base" style={{ 
                fontFamily: 'Georgia, serif',
                textShadow: '0 0 8px rgba(45, 212, 191, 0.2)'
              }}>
                Contact
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="text-center md:text-right">
            <h4 className="text-base sm:text-lg font-bold uppercase tracking-wider mb-3 sm:mb-4" style={{ 
              fontFamily: 'Georgia, serif',
              color: '#2dd4bf',
              textShadow: '0 0 15px rgba(45, 212, 191, 0.4)',
              letterSpacing: '0.1em'
            }}>
              Contact
            </h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a href="mailto:kaphandavid99@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-sm sm:text-base" style={{ 
                fontFamily: 'Georgia, serif',
                textShadow: '0 0 8px rgba(45, 212, 191, 0.2)'
              }}>
                kaphandavid99@gmail.com
              </a>
              <a href="tel:+237671641680" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-sm sm:text-base" style={{ 
                fontFamily: 'Georgia, serif',
                textShadow: '0 0 8px rgba(45, 212, 191, 0.2)'
              }}>
                (+237)671641680
              </a>
              <p className="text-slate-400 text-sm sm:text-base" style={{ 
                fontFamily: 'Georgia, serif',
                textShadow: '0 0 8px rgba(45, 212, 191, 0.2)'
              }}>
                Global / Remote
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex gap-3 sm:gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-teal-400/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-teal-400"
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
              <svg className="w-6 h-6" style={{ color: '#2dd4bf', filter: 'drop-shadow(0 0 8px rgba(45, 212, 191, 0.5))' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-teal-400/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-teal-400"
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
              <svg className="w-6 h-6" style={{ color: '#2dd4bf', filter: 'drop-shadow(0 0 8px rgba(45, 212, 191, 0.5))' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:kaphandavid99@gmail.com"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-teal-400/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-teal-400"
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
              <svg className="w-6 h-6" style={{ color: '#2dd4bf', filter: 'drop-shadow(0 0 8px rgba(45, 212, 191, 0.5))' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-11.174l4.623 5.462zm-4.484-6.356h19.722l-9.861 11.637-9.861-11.637zm5.227 6.239l4.634 5.492 4.634-5.492 4.485 5.472h-18.238l4.485-5.472zm14.891-5.492v11.174l-4.623-5.712 4.623-5.462z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/237671641680"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-teal-400/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-teal-400"
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
              <svg className="w-6 h-6" style={{ color: '#2dd4bf', filter: 'drop-shadow(0 0 8px rgba(45, 212, 191, 0.5))' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 w-full bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full mb-6 sm:mb-8" style={{ 
            boxShadow: '0 0 20px rgba(45, 212, 191, 0.5)'
          }}></motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center px-4"
        >
          <p className="text-slate-400 italic text-sm sm:text-base" style={{ 
            fontFamily: 'Georgia, serif',
            color: '#2dd4bf',
            textShadow: '0 0 10px rgba(45, 212, 191, 0.3)'
          }}>
            © {currentYear} DAVE TECH. All rights reserved. Crafted with passion and precision.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

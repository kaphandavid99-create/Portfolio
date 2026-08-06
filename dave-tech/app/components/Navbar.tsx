"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function FlameEffect() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    const particleCount = isMobile ? 80 : 140;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);
    const tealColor = new THREE.Color(0x2dd4bf);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1.4;
      positions[i * 3 + 1] = -1.3 + Math.random() * 0.6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;

      const variation = 0.85 + Math.random() * 0.35;
      colors[i * 3] = tealColor.r * variation;
      colors[i * 3 + 1] = tealColor.g * variation;
      colors[i * 3 + 2] = tealColor.b * variation;

      sizes[i] = Math.random() * 0.22 + 0.1;

      velocities[i * 3] = (Math.random() - 0.5) * 0.013;
      velocities[i * 3 + 1] = 0.018 + Math.random() * 0.025;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.012;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;

        void main() {
          vColor = color;
          vec3 pos = position;
          pos.x += sin(time * 2.2 + position.y * 3.4) * 0.08;
          pos.z += cos(time * 1.7 + position.y * 2.3) * 0.08;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (320.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;

        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);

          if (dist > 0.5) discard;

          float alpha = 1.0 - smoothstep(0.2, 0.5, dist);
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const clock = new THREE.Clock();
    let animationFrame = 0;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      material.uniforms.time.value = elapsed;

      const currentPositions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        currentPositions[i * 3] += velocities[i * 3];
        currentPositions[i * 3 + 1] += velocities[i * 3 + 1];
        currentPositions[i * 3 + 2] += velocities[i * 3 + 2];

        if (currentPositions[i * 3 + 1] > 1.8) {
          currentPositions[i * 3] = (Math.random() - 0.5) * 1.4;
          currentPositions[i * 3 + 1] = -1.3 + Math.random() * 0.6;
          currentPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute -inset-2.5 z-10 flex items-center justify-center"
      style={{ 
        transform: "translateZ(0)",
        width: isMobile ? '100px' : '140px',
        height: isMobile ? '100px' : '140px'
      }}
    />
  );
}

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "services", href: "#services" },
  { label: "about", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const leftItems = navItems.slice(0, 3);
  const rightItems = navItems.slice(3);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1 lg:px-10">
        <div className="hidden items-center gap-6 md:flex">
          {leftItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '').toLowerCase();
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] transition-all duration-300 ${isActive ? 'text-white' : 'text-teal-400'}`}
                style={{ 
                  textShadow: isActive 
                    ? '0 0 20px rgba(45, 212, 191, 1), 0 0 40px rgba(45, 212, 191, 0.8), 0 0 60px rgba(45, 212, 191, 0.6), 0 0 80px rgba(45, 212, 191, 0.4)' 
                    : '0 0 10px rgba(45, 212, 191, 0.4)',
                  fontFamily: 'Georgia, serif',
                  letterSpacing: isActive ? '0.35em' : '0.25em',
                  transform: isActive ? 'scale(1.1)' : 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.textShadow = '0 0 15px rgba(45, 212, 191, 0.8), 0 0 30px rgba(45, 212, 191, 0.6), 0 0 45px rgba(45, 212, 191, 0.4)';
                    e.currentTarget.style.letterSpacing = '0.35em';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#2dd4bf';
                    e.currentTarget.style.textShadow = '0 0 10px rgba(45, 212, 191, 0.4)';
                    e.currentTarget.style.letterSpacing = '0.25em';
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-fuchsia-400 transition-all duration-500 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                {/* Top accent line */}
                <span className={`absolute top-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent transition-all duration-700 ease-out delay-100 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                {/* Glowing dots */}
                <span className={`absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-teal-400 rounded-full transition-opacity duration-300 ${isActive ? 'opacity-100 animate-ping' : 'opacity-0 group-hover:opacity-100 group-hover:animate-ping'}`}></span>
                <span className={`absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-teal-400 rounded-full transition-opacity duration-300 delay-200 ${isActive ? 'opacity-100 animate-ping' : 'opacity-0 group-hover:opacity-100 group-hover:animate-ping'}`}></span>
                
                {/* Spectacular active effect - only for Home */}
                {isActive && item.label === "Home" && (
                  <>
                    {/* Pulsing glow effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-cyan-400/30 to-fuchsia-400/20 rounded-lg blur-xl animate-pulse"></span>
                    {/* Animated particles */}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                      <span className="w-1 h-1 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1 h-1 bg-fuchsia-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      <span className="w-1 h-1 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '450ms' }}></span>
                      <span className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></span>
                    </span>
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent overflow-hidden rounded-lg">
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></span>
                    </span>
                  </>
                )}
              </Link>
            );
          })}
        </div>

        <Link href="#home" className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <FlameEffect />
          </div>
          <Image
            src="/logo2.png"
            alt="Logo"
            width={96}
            height={96}
            className="relative z-20 h-20 w-20 rounded-full object-contain sm:h-24 sm:w-24"
          />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {rightItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '').toLowerCase();
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] transition-all duration-300 ${isActive ? 'text-white' : 'text-teal-400'}`}
                style={{ 
                  textShadow: isActive 
                    ? '0 0 20px rgba(45, 212, 191, 1), 0 0 40px rgba(45, 212, 191, 0.8), 0 0 60px rgba(45, 212, 191, 0.6), 0 0 80px rgba(45, 212, 191, 0.4)' 
                    : '0 0 10px rgba(45, 212, 191, 0.4)',
                  fontFamily: 'Georgia, serif',
                  letterSpacing: isActive ? '0.35em' : '0.25em',
                  transform: isActive ? 'scale(1.1)' : 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.textShadow = '0 0 15px rgba(45, 212, 191, 0.8), 0 0 30px rgba(45, 212, 191, 0.6), 0 0 45px rgba(45, 212, 191, 0.4)';
                    e.currentTarget.style.letterSpacing = '0.35em';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#2dd4bf';
                    e.currentTarget.style.textShadow = '0 0 10px rgba(45, 212, 191, 0.4)';
                    e.currentTarget.style.letterSpacing = '0.25em';
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-fuchsia-400 transition-all duration-500 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                {/* Top accent line */}
                <span className={`absolute top-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent transition-all duration-700 ease-out delay-100 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                {/* Glowing dots */}
                <span className={`absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-teal-400 rounded-full transition-opacity duration-300 ${isActive ? 'opacity-100 animate-ping' : 'opacity-0 group-hover:opacity-100 group-hover:animate-ping'}`}></span>
                <span className={`absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-teal-400 rounded-full transition-opacity duration-300 delay-200 ${isActive ? 'opacity-100 animate-ping' : 'opacity-0 group-hover:opacity-100 group-hover:animate-ping'}`}></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col items-center justify-center gap-1.5 p-2 text-teal-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-md transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '').toLowerCase();
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 ${isActive ? 'text-white' : 'text-teal-400'}`}
                style={{ 
                  textShadow: isActive 
                    ? '0 0 15px rgba(45, 212, 191, 0.8)' 
                    : '0 0 8px rgba(45, 212, 191, 0.3)',
                  fontFamily: 'Georgia, serif',
                  letterSpacing: isActive ? '0.3em' : '0.2em',
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

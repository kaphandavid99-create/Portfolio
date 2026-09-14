"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./theme-toggle";

function FlameEffect() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
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

    const particleCount = isMobile ? 80 : 140;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);
    const tealColor = new THREE.Color(0x2dd4bf);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.6;
      positions[i * 3 + 1] = -1.1 + Math.random() * 0.45;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.25;

      const variation = 0.85 + Math.random() * 0.35;
      colors[i * 3] = tealColor.r * variation;
      colors[i * 3 + 1] = tealColor.g * variation;
      colors[i * 3 + 2] = tealColor.b * variation;

      sizes[i] = Math.random() * 0.18 + 0.08;

      velocities[i * 3] = (Math.random() - 0.5) * 0.006;
      velocities[i * 3 + 1] = 0.022 + Math.random() * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.006;
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
          pos.x += sin(time * 2.2 + position.y * 3.4) * 0.03;
          pos.z += cos(time * 1.7 + position.y * 2.3) * 0.03;

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

        if (currentPositions[i * 3 + 1] > 1.55) {
          currentPositions[i * 3] = (Math.random() - 0.5) * 0.6;
          currentPositions[i * 3 + 1] = -1.1 + Math.random() * 0.45;
          currentPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.25;
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

  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute z-10 flex items-center justify-center"
      style={{ 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) translateZ(0)',
        width: isMobile ? '110px' : '150px',
        height: isMobile ? '110px' : '150px'
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

function NavLink({ label, href, isActive }: { label: string; href: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-sm font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 ${
        isActive
          ? "bg-mint-500 text-white"
          : "text-slate-600 dark:text-slate-300 hover:text-mint-600 dark:hover:text-mint-400"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
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
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-10">
        <div className="hidden items-center gap-2 md:flex">
          {leftItems.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              isActive={activeSection === item.href.replace("#", "").toLowerCase()}
            />
          ))}
        </div>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20 cursor-pointer"
          aria-label="Toggle theme"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <FlameEffect />
          </div>
          <Image
            src="/logo2.png"
            alt="Logo"
            width={80}
            height={80}
            className="relative z-20 h-16 w-16 rounded-full object-contain sm:h-20 sm:w-20"
          />
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {rightItems.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              isActive={activeSection === item.href.replace("#", "").toLowerCase()}
            />
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col items-center justify-center gap-1.5 p-2 text-mint-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-bold uppercase tracking-[0.15em] rounded-lg transition-all duration-300 ${
                activeSection === item.href.replace("#", "").toLowerCase()
                  ? "bg-mint-500 text-white"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

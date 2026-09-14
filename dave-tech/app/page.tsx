"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import CTA from "@/app/components/CTA";
import About from "@/app/components/About";
import Footer from "@/app/components/Footer";

function OptimizedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create a simple starfield with fewer particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 300; // Much fewer particles for performance
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 100;
      posArray[i + 1] = (Math.random() - 0.5) * 100;
      posArray[i + 2] = (Math.random() - 0.5) * 100;

      // Simple teal/cyan colors
      const colorChoice = Math.random();
      if (colorChoice < 0.5) {
        colorArray[i] = 0.2;
        colorArray[i + 1] = 0.8;
        colorArray[i + 2] = 0.7;
      } else {
        colorArray[i] = 0.0;
        colorArray[i + 1] = 0.7;
        colorArray[i + 2] = 0.8;
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Simple rotation animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.0005; // Slower animation for performance

      particlesMesh.rotation.x = time * 0.1;
      particlesMesh.rotation.y = time * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 w-full h-full" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <OptimizedBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <CTA />
      <About />
      <Footer />
    </main>
  );
}

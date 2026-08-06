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

function GlobalThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create particle system - optimized for mobile
    const particlesGeometry = new THREE.BufferGeometry();
    const isMobile = window.innerWidth < 768;
    const particlesCount = isMobile ? 800 : 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 100;
      posArray[i + 1] = (Math.random() - 0.5) * 100;
      posArray[i + 2] = (Math.random() - 0.5) * 100;

      // Teal to purple gradient colors
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        // Teal
        colorArray[i] = 0.3;
        colorArray[i + 1] = 0.8;
        colorArray[i + 2] = 0.7;
      } else if (colorChoice < 0.66) {
        // Cyan
        colorArray[i] = 0.0;
        colorArray[i + 1] = 0.7;
        colorArray[i + 2] = 0.8;
      } else {
        // Purple
        colorArray[i] = 0.5;
        colorArray[i + 1] = 0.4;
        colorArray[i + 2] = 0.9;
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create floating geometric shapes
    const shapes: THREE.Mesh[] = [];
    const geometries = [
      new THREE.IcosahedronGeometry(4, 0),
      new THREE.OctahedronGeometry(4, 0),
      new THREE.TetrahedronGeometry(4, 0),
      new THREE.TorusGeometry(3, 1, 8, 16)
    ];

    const shapeCount = isMobile ? 5 : 15;
    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.5 + Math.random() * 0.2, 0.8, 0.5),
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shapes.push(mesh);
      scene.add(mesh);
    }

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.001;

      // Rotate particles
      particlesMesh.rotation.x = time * 0.2;
      particlesMesh.rotation.y = time * 0.3;

      // Animate individual particles
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + positions[i3]) * 0.02;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 + index * 0.001;
        shape.rotation.y += 0.003 + index * 0.001;
        shape.position.y += Math.sin(time + index) * 0.01;
      });

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
      container.removeChild(renderer.domElement);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      shapes.forEach(shape => {
        shape.geometry.dispose();
        (shape.material as THREE.Material).dispose();
      });
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 w-full h-full" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <GlobalThreeBackground />
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

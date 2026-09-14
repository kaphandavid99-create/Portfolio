"use client";

import { useEffect, useRef, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as THREE from "three";
import { AnimatePresence, motion } from "framer-motion";
import { Hand } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiRedux,
  SiFigma
} from "react-icons/si";
import { useTheme } from "next-themes";

const skills = [
  { name: "HTML5", icon: FaHtml5, level: 95, color: "#E34F26", description: "HTML5 is the foundation of modern web development, providing semantic markup, multimedia support, and enhanced APIs for building accessible, SEO-friendly web applications with rich content and structure." },
  { name: "CSS3", icon: FaCss3Alt, level: 90, color: "#1572B6", description: "CSS3 brings advanced styling capabilities including animations, transitions, flexbox, grid layouts, and responsive design features that transform static HTML into visually stunning, interactive experiences." },
  { name: "JavaScript", icon: FaJs, level: 92, color: "#F7DF1E", description: "JavaScript is the universal language of the web, enabling dynamic content, DOM manipulation, asynchronous operations, and full-stack development through Node.js, making it essential for modern web applications." },
  { name: "TypeScript", icon: SiTypescript, level: 88, color: "#3178C6", description: "TypeScript extends JavaScript with static typing, interfaces, and advanced tooling support, catching errors at compile-time and improving code maintainability for large-scale applications and enterprise projects." },
  { name: "React", icon: FaReact, level: 94, color: "#61DAFB", description: "React revolutionized UI development with its component-based architecture, virtual DOM, and hooks system, enabling efficient state management and reusable components for building complex user interfaces." },
  { name: "Next.js", icon: SiNextdotjs, level: 91, color: "#ededed", description: "Next.js is a powerful React framework offering server-side rendering, static site generation, API routes, and image optimization, providing exceptional performance and SEO capabilities for production applications." },
  { name: "Tailwind", icon: SiTailwindcss, level: 93, color: "#06B6D4", description: "Tailwind CSS is a utility-first framework that allows rapid UI development with pre-built classes, enabling custom designs without leaving HTML, with built-in responsive design and dark mode support." },
  { name: "Node.js", icon: FaNodeJs, level: 87, color: "#339933", description: "Node.js brings JavaScript to the server side, enabling scalable network applications, real-time communication, RESTful APIs, and microservices architecture with its event-driven, non-blocking I/O model." },
  { name: "MongoDB", icon: SiMongodb, level: 85, color: "#47A248", description: "MongoDB is a flexible NoSQL database with document-oriented storage, supporting rich queries, indexing, aggregation, and horizontal scaling, ideal for applications with evolving data structures and rapid development cycles." },
  { name: "GitHub", icon: FaGithub, level: 90, color: "#c9d1d9", description: "GitHub is the world's leading platform for version control, collaboration, and code hosting, enabling teams to work together through pull requests, issues, actions, and comprehensive project management tools." },
  { name: "PostgreSQL", icon: SiPostgresql, level: 82, color: "#336791", description: "PostgreSQL is an advanced open-source relational database with ACID compliance, complex queries, JSON support, and extensibility, serving as the backbone for mission-critical applications requiring data integrity." },
  { name: "Firebase", icon: SiFirebase, level: 84, color: "#FFCA28", description: "Firebase provides a comprehensive backend-as-a-service platform with real-time databases, authentication, cloud functions, hosting, and analytics, enabling rapid development of mobile and web applications without server management." },
  { name: "Docker", icon: SiDocker, level: 78, color: "#2496ED", description: "Docker revolutionizes application deployment through containerization, ensuring consistency across environments, simplifying dependency management, and enabling microservices architecture with lightweight, portable containers." },
  { name: "Redux", icon: SiRedux, level: 86, color: "#764ABC", description: "Redux is a predictable state management library for JavaScript applications, providing a centralized store, middleware support, and time-travel debugging, essential for managing complex application state in large-scale projects." },
  { name: "Python", icon: FaPython, level: 85, color: "#3776AB", description: "Python is a versatile, high-level programming language known for its simplicity and readability. It's widely used in web development, data science, machine learning, automation, and backend services, with extensive libraries and frameworks." },
  { name: "Figma", icon: SiFigma, level: 88, color: "#F24E1E", description: "Figma is a collaborative design platform that revolutionizes UI/UX workflows with real-time collaboration, prototyping, design systems, and developer handoff, bridging the gap between design and development teams." },
];

export default function TechSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showTouchHint, setShowTouchHint] = useState(true);
  const hoveredSkillRef = useRef<string | null>(null);
  const selectedSkillRef = useRef<string | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    selectedSkillRef.current = selectedSkill;
    // Pause the auto-spin while a card is open so it's easy to read
    isPausedRef.current = isPaused || !!selectedSkill;
  }, [isPaused, selectedSkill]);

  // Fade the "drag to spin" hint away after a few seconds
  useEffect(() => {
    if (!showTouchHint) return;
    const timer = setTimeout(() => setShowTouchHint(false), 4500);
    return () => clearTimeout(timer);
  }, [showTouchHint]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Calculate sphere positions
    const calculateSpherePositions = (count: number, radius: number) => {
      const positions = [];
      
      for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        positions.push({ x, y, z });
      }
      
      return positions;
    };

    const iconPositions = calculateSpherePositions(skills.length, 170);

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 300;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create icon group
    const iconGroup = new THREE.Group();
    scene.add(iconGroup);

    // Create 3D icon sprites with actual React icons
    const iconMeshes: THREE.Sprite[] = [];

    const createIconTexture = (
      Icon: React.ComponentType<{ size?: number; color?: string }>,
      color: string
    ): THREE.CanvasTexture => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');

      const drawBackground = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, 128, 128);
        // No backdrop circle — just the bare icon
      };

      drawBackground();
      const texture = new THREE.CanvasTexture(canvas);

      // Rasterize the actual brand icon (react-icons SVG) onto the canvas
      try {
        const svgMarkup = renderToStaticMarkup(<Icon size={64} color={color} />);
        const svgWithXmlns = svgMarkup.includes('xmlns=')
          ? svgMarkup
          : svgMarkup.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
        const svgDataUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgWithXmlns)))}`;

        const img = new window.Image();
        img.onload = () => {
          if (!ctx) return;
          drawBackground();
          ctx.drawImage(img, 32, 32, 64, 64);
          texture.needsUpdate = true;
        };
        img.src = svgDataUrl;
      } catch {
        // If rasterizing fails for any reason, the glowing circle backdrop still renders
      }

      return texture;
    };

    // Create all icon sprites
    skills.forEach((skill, index) => {
      const position = iconPositions[index];
      
      const texture = createIconTexture(skill.icon, skill.color);
      const material = new THREE.SpriteMaterial({ 
        map: texture,
        transparent: true,
        opacity: 0.9
      });
      
      const sprite = new THREE.Sprite(material);
      sprite.position.set(position.x, position.y, position.z);
      sprite.scale.set(42, 42, 1);
      sprite.userData = { skill: skill.name };
      
      iconGroup.add(sprite);
      iconMeshes.push(sprite);
    });

    // Add connecting lines between nearby icons
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x2dd4bf,
      transparent: true,
      opacity: 0.2
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    // Connect nearby icons
    for (let i = 0; i < iconMeshes.length; i++) {
      for (let j = i + 1; j < iconMeshes.length; j++) {
        const pos1 = iconMeshes[i].position;
        const pos2 = iconMeshes[j].position;
        const distance = pos1.distanceTo(pos2);
        
        if (distance < 82) {
          linePositions.push(pos1.x, pos1.y, pos1.z);
          linePositions.push(pos2.x, pos2.y, pos2.z);
        }
      }
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    iconGroup.add(lines);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      targetRotationY = mouseX * 0.3;
      targetRotationX = mouseY * 0.3;
    };

    const onMouseEnter = () => {
      setIsPaused(true);
    };

    const onMouseLeave = () => {
      setIsPaused(false);
      targetRotationX = 0;
      targetRotationY = 0;
    };

    containerRef.current.addEventListener('mousemove', onMouseMove);
    containerRef.current.addEventListener('mouseenter', onMouseEnter);
    containerRef.current.addEventListener('mouseleave', onMouseLeave);

    // Raycaster for hover detection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Touch interaction — drag a finger across the sphere to spin it
    let touchLastX = 0;
    let touchLastY = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchMoved = false;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchLastX = touch.clientX;
      touchLastY = touch.clientY;
      touchMoved = false;
      setIsPaused(true);
      setShowTouchHint(false);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchLastX;
      const deltaY = touch.clientY - touchLastY;

      if (Math.abs(touch.clientX - touchStartX) > 5 || Math.abs(touch.clientY - touchStartY) > 5) {
        touchMoved = true;
      }

      targetRotationY += deltaX * 0.01;
      targetRotationX += deltaY * 0.01;

      touchLastX = touch.clientX;
      touchLastY = touch.clientY;

      // Prevent the page from scrolling while spinning the sphere
      e.preventDefault();
    };

    const onTouchEnd = (e: TouchEvent) => {
      setIsPaused(false);
      targetRotationX = 0;
      targetRotationY = 0;

      // A tap (no meaningful drag) selects the icon under the finger
      if (!touchMoved) {
        const touch = e.changedTouches[0];
        const rect = containerRef.current!.getBoundingClientRect();
        mouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(iconMeshes);

        if (intersects.length > 0) {
          const tapped = intersects[0].object as THREE.Sprite;
          const name = tapped.userData.skill as string;
          setSelectedSkill((prev) => (prev === name ? null : name));
        }
      }
    };

    containerRef.current.addEventListener('touchstart', onTouchStart, { passive: true });
    containerRef.current.addEventListener('touchmove', onTouchMove, { passive: false });
    containerRef.current.addEventListener('touchend', onTouchEnd);

    const checkHover = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(iconMeshes);
      
      containerRef.current!.style.cursor = intersects.length > 0 ? 'pointer' : 'grab';

      if (intersects.length > 0) {
        const hovered = intersects[0].object as THREE.Sprite;
        hoveredSkillRef.current = hovered.userData.skill;
        hovered.scale.set(56, 56, 1);
      } else {
        hoveredSkillRef.current = null;
        iconMeshes.forEach(mesh => mesh.scale.set(42, 42, 1));
      }
    };

    containerRef.current.addEventListener('mousemove', checkHover);

    // Click a node to open (or close) its detail card
    const onClick = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(iconMeshes);

      if (intersects.length > 0) {
        const clicked = intersects[0].object as THREE.Sprite;
        const name = clicked.userData.skill as string;
        setSelectedSkill((prev) => (prev === name ? null : name));
      }
    };

    containerRef.current.addEventListener('click', onClick);

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;

      // Auto-rotate icon group gradually, on its own
      if (!isPausedRef.current) {
        iconGroup.rotation.y += 0.0012;
        iconGroup.rotation.x += 0.0004;
      }

      // Mouse interaction rotation
      iconGroup.rotation.x += (targetRotationX - iconGroup.rotation.x) * 0.05;
      iconGroup.rotation.y += (targetRotationY - iconGroup.rotation.y * 0.05);

      // Animate individual icons
      iconMeshes.forEach((mesh, i) => {
        const isActive =
          hoveredSkillRef.current === mesh.userData.skill ||
          selectedSkillRef.current === mesh.userData.skill;
        const baseScale = isActive ? 56 : 42;
        const pulse = Math.sin(time * 2 + i * 0.5) * 3.5;
        mesh.scale.set(baseScale + pulse, baseScale + pulse, 1);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeEventListener('mousemove', onMouseMove);
      containerRef.current?.removeEventListener('mouseenter', onMouseEnter);
      containerRef.current?.removeEventListener('mouseleave', onMouseLeave);
      containerRef.current?.removeEventListener('mousemove', checkHover);
      containerRef.current?.removeEventListener('click', onClick);
      containerRef.current?.removeEventListener('touchstart', onTouchStart);
      containerRef.current?.removeEventListener('touchmove', onTouchMove);
      containerRef.current?.removeEventListener('touchend', onTouchEnd);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      iconMeshes.forEach(mesh => {
        if (mesh.material instanceof THREE.SpriteMaterial) {
          mesh.material.map?.dispose();
          mesh.material.dispose();
        }
      });
    };
  }, []);

  const currentSkill = skills.find(skill => skill.name === selectedSkill);

  return (
    <section id="skills" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center mb-8 sm:mb-12 text-slate-900 dark:text-white"
        >
          Expertise
        </motion.h2>
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 -mt-6 mb-8">
          Click any icon in the sphere to see what it&apos;s about
        </p>

        <div className="relative">
          {/* 3D Scene Container */}
          <div
            ref={containerRef}
            className="w-full h-[500px] sm:h-[600px] lg:h-[700px] touch-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          />

          {/* Mobile "drag to spin" hint */}
          <AnimatePresence>
            {showTouchHint && !currentSkill && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-x-0 top-3 flex justify-center sm:hidden pointer-events-none"
              >
                <div className="flex items-center gap-2 rounded-full bg-slate-900/70 dark:bg-slate-800/80 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
                  <motion.span
                    animate={{ x: [-4, 4, -4] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    className="flex"
                  >
                    <Hand className="w-3.5 h-3.5" />
                  </motion.span>
                  <span>Drag to spin</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skill Detail Popup */}
          <AnimatePresence>
            {currentSkill && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="surface-card absolute inset-0 m-auto h-fit max-h-[80%] w-full max-w-xs sm:max-w-sm backdrop-blur-md p-4 sm:p-5 shadow-2xl z-10 overflow-y-auto"
              >
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  aria-label="Close"
                  className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors"
                >
                  ✕
                </button>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: `radial-gradient(circle, ${currentSkill.color}40, ${currentSkill.color}20)`,
                      border: `2px solid ${currentSkill.color}60`
                    }}
                  >
                    <currentSkill.icon className="w-5 h-5" style={{ color: currentSkill.color }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {currentSkill.name}
                    </h3>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mt-1">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentSkill.level}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-1.5 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${currentSkill.color}, ${currentSkill.color}80)`,
                          boxShadow: `0 0 10px ${currentSkill.color}`
                        }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  {currentSkill.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { AnimatePresence, motion } from "framer-motion";
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

const skills = [
  { name: "HTML5", icon: FaHtml5, level: 95, color: "#E34F26", description: "HTML5 is the foundation of modern web development, providing semantic markup, multimedia support, and enhanced APIs for building accessible, SEO-friendly web applications with rich content and structure." },
  { name: "CSS3", icon: FaCss3Alt, level: 90, color: "#1572B6", description: "CSS3 brings advanced styling capabilities including animations, transitions, flexbox, grid layouts, and responsive design features that transform static HTML into visually stunning, interactive experiences." },
  { name: "JavaScript", icon: FaJs, level: 92, color: "#F7DF1E", description: "JavaScript is the universal language of the web, enabling dynamic content, DOM manipulation, asynchronous operations, and full-stack development through Node.js, making it essential for modern web applications." },
  { name: "TypeScript", icon: SiTypescript, level: 88, color: "#3178C6", description: "TypeScript extends JavaScript with static typing, interfaces, and advanced tooling support, catching errors at compile-time and improving code maintainability for large-scale applications and enterprise projects." },
  { name: "React", icon: FaReact, level: 94, color: "#61DAFB", description: "React revolutionized UI development with its component-based architecture, virtual DOM, and hooks system, enabling efficient state management and reusable components for building complex user interfaces." },
  { name: "Next.js", icon: SiNextdotjs, level: 91, color: "#000000", description: "Next.js is a powerful React framework offering server-side rendering, static site generation, API routes, and image optimization, providing exceptional performance and SEO capabilities for production applications." },
  { name: "Tailwind", icon: SiTailwindcss, level: 93, color: "#06B6D4", description: "Tailwind CSS is a utility-first framework that allows rapid UI development with pre-built classes, enabling custom designs without leaving HTML, with built-in responsive design and dark mode support." },
  { name: "Node.js", icon: FaNodeJs, level: 87, color: "#339933", description: "Node.js brings JavaScript to the server side, enabling scalable network applications, real-time communication, RESTful APIs, and microservices architecture with its event-driven, non-blocking I/O model." },
  { name: "MongoDB", icon: SiMongodb, level: 85, color: "#47A248", description: "MongoDB is a flexible NoSQL database with document-oriented storage, supporting rich queries, indexing, aggregation, and horizontal scaling, ideal for applications with evolving data structures and rapid development cycles." },
  { name: "GitHub", icon: FaGithub, level: 90, color: "#181717", description: "GitHub is the world's leading platform for version control, collaboration, and code hosting, enabling teams to work together through pull requests, issues, actions, and comprehensive project management tools." },
  { name: "PostgreSQL", icon: SiPostgresql, level: 82, color: "#336791", description: "PostgreSQL is an advanced open-source relational database with ACID compliance, complex queries, JSON support, and extensibility, serving as the backbone for mission-critical applications requiring data integrity." },
  { name: "Firebase", icon: SiFirebase, level: 84, color: "#FFCA28", description: "Firebase provides a comprehensive backend-as-a-service platform with real-time databases, authentication, cloud functions, hosting, and analytics, enabling rapid development of mobile and web applications without server management." },
  { name: "Docker", icon: SiDocker, level: 78, color: "#2496ED", description: "Docker revolutionizes application deployment through containerization, ensuring consistency across environments, simplifying dependency management, and enabling microservices architecture with lightweight, portable containers." },
  { name: "Redux", icon: SiRedux, level: 86, color: "#764ABC", description: "Redux is a predictable state management library for JavaScript applications, providing a centralized store, middleware support, and time-travel debugging, essential for managing complex application state in large-scale projects." },
  { name: "Python", icon: FaPython, level: 85, color: "#3776AB", description: "Python is a versatile, high-level programming language known for its simplicity and readability. It's widely used in web development, data science, machine learning, automation, and backend services, with extensive libraries and frameworks." },
  { name: "Figma", icon: SiFigma, level: 88, color: "#F24E1E", description: "Figma is a collaborative design platform that revolutionizes UI/UX workflows with real-time collaboration, prototyping, design systems, and developer handoff, bridging the gap between design and development teams." },
];

export default function TechSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 500;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Responsive particle count based on screen size
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 800 : 1500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color('#2dd4bf'), // Teal
      new THREE.Color('#8b5cf6'), // Purple
      new THREE.Color('#06b6d4'), // Cyan
      new THREE.Color('#3b82f6'), // Blue
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Create a spherical distribution
      const radius = 250 + Math.random() * 150;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Random colors from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 1;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom shader material for glowing particles
    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
      },
      vertexShader: `
        uniform float time;
        uniform float pixelRatio;
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          // Add subtle wave motion
          pos.x += sin(time * 0.3 + position.y * 0.01) * 8.0;
          pos.y += cos(time * 0.2 + position.x * 0.01) * 8.0;
          pos.z += sin(time * 0.25 + position.z * 0.01) * 8.0;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
          gl_FragColor = vec4(vColor, alpha * 0.5);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Add floating geometric shapes
    const geometries = [
      new THREE.IcosahedronGeometry(15, 0),
      new THREE.OctahedronGeometry(12, 0),
      new THREE.TetrahedronGeometry(14, 0),
    ];

    const floatingShapes: THREE.Mesh[] = [];
    const shapeCount = isMobile ? 6 : 12;
    
    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        wireframe: true,
        transparent: true,
        opacity: 0.25
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 500,
        (Math.random() - 0.5) * 350,
        (Math.random() - 0.5) * 250
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.015,
          y: (Math.random() - 0.5) * 0.015,
          z: (Math.random() - 0.5) * 0.015
        },
        floatSpeed: Math.random() * 0.4 + 0.4,
        floatOffset: Math.random() * Math.PI * 2
      };
      
      scene.add(mesh);
      floatingShapes.push(mesh);
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      targetRotationY = mouseX * 0.2;
      targetRotationX = mouseY * 0.2;
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

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.008;

      // Update shader time
      particlesMaterial.uniforms.time.value = time;

      // Smooth camera rotation based on mouse
      scene.rotation.y += (targetRotationY - scene.rotation.y) * 0.05;
      scene.rotation.x += (targetRotationX - scene.rotation.x) * 0.05;

      // Auto-rotate when not paused
      if (!isPaused) {
        scene.rotation.y += 0.0008;
      }

      // Animate floating shapes
      floatingShapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        shape.position.y += Math.sin(time * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.4;
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
      particlesMaterial.uniforms.pixelRatio.value = Math.min(window.devicePixelRatio, 2);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', onMouseMove);
        containerRef.current.removeEventListener('mouseenter', onMouseEnter);
        containerRef.current.removeEventListener('mouseleave', onMouseLeave);
      }
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <section id="skills" className="relative px-4 sm:px-6 py-16 sm:py-24 lg:py-32 overflow-visible z-10">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.15),transparent_40%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.1),transparent_40%)]" />
      
      {/* Three.js Background Container */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 -z-5 pointer-events-auto"
        style={{ touchAction: 'none' }}
      />
      
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-widest mb-4" style={{ 
            fontFamily: 'Georgia, serif',
            color: '#2dd4bf',
            textShadow: '0 0 30px rgba(45, 212, 191, 0.5), 0 0 60px rgba(45, 212, 191, 0.3)',
            letterSpacing: '0.15em'
          }}>
            My Expertise
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto italic px-4" style={{ 
            fontFamily: 'Georgia, serif',
            color: '#2dd4bf',
            textShadow: '0 0 15px rgba(45, 212, 191, 0.3)'
          }}>
            Mastering the art of modern web development with cutting-edge technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setHoveredSkill(skill.name)}
                className="relative group cursor-pointer"
              >
                <div className="p-3 sm:p-4 md:p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                     style={{
                       boxShadow: `0 0 20px rgba(45, 212, 191, 0.2)`,
                     }}
                >
                  <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20"
                         style={{ boxShadow: `0 0 15px ${skill.color}40` }}
                    >
                      <Icon size={24} className="hidden sm:block" style={{ color: skill.color }} />
                      <Icon size={20} className="block sm:hidden" style={{ color: skill.color }} />
                    </div>
                    <h3 className="font-bold text-[10px] sm:text-xs md:text-sm text-center" style={{ 
                      fontFamily: 'Georgia, serif',
                      color: '#2dd4bf',
                      textShadow: '0 0 10px rgba(45, 212, 191, 0.5)'
                    }}>
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={() => setHoveredSkill(null)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div 
              className="relative w-72 sm:w-80 md:w-96 pointer-events-auto mx-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const skill = skills.find(s => s.name === hoveredSkill);
                if (!skill) return null;
                const Icon = skill.icon;
                return (
                  <div className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900/98 to-slate-800/98 backdrop-blur-xl border-2 border-teal-400/40 shadow-2xl"
                       style={{
                         boxShadow: `0 0 40px rgba(45, 212, 191, 0.3), 0 0 80px rgba(45, 212, 191, 0.1)`,
                       }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-teal-400/20 opacity-50" />
                    
                    <div className="relative flex items-center gap-3 sm:gap-4 mb-4">
                      <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20"
                           style={{ boxShadow: `0 0 15px ${skill.color}40` }}
                      >
                        <Icon size={windowWidth < 640 ? 20 : 32} style={{ color: skill.color }} />
                      </div>
                      <h4 className="font-bold text-lg sm:text-xl" style={{ 
                        fontFamily: 'Georgia, serif',
                        color: skill.color,
                        textShadow: `0 0 15px ${skill.color}50`
                      }}>
                        {skill.name}
                      </h4>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4" style={{ 
                      fontFamily: 'Georgia, serif',
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
                    }}>
                      {skill.description}
                    </p>
                    
                    <div>
                      <div className="flex justify-between text-[10px] sm:text-xs mb-2">
                        <span className="text-slate-400">Proficiency</span>
                        <span className="font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full"
                          style={{ 
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                            boxShadow: `0 0 10px ${skill.color}`
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      aria-label="Close tech detail"
                      onClick={(e) => {
                        e.stopPropagation();
                        setHoveredSkill(null);
                      }}
                      className="mt-4 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold hover:from-teal-600 hover:to-cyan-600 transition-all text-sm"
                    >
                      Close
                    </button>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
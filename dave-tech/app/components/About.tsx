export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16" style={{
        fontFamily: 'Georgia, serif',
        color: '#2dd4bf',
        textShadow: '0 0 30px rgba(45, 212, 191, 0.5), 0 0 60px rgba(45, 212, 191, 0.3)',
        letterSpacing: '0.15em'
      }}>About Me</h2>
      <div className="max-w-3xl mx-auto text-center px-4">
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed" style={{
          fontFamily: 'Georgia, serif',
          color: '#2dd4bf',
          textShadow: '0 0 15px rgba(45, 212, 191, 0.3)'
        }}>
          I&apos;m a passionate Frontend Developer with a love for building clean, 
          responsive, and user-friendly web applications. With expertise in 
          modern technologies like React, Next.js, and TypeScript, I transform 
          ideas into seamless digital experiences.
        </p>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mt-6" style={{
          fontFamily: 'Georgia, serif',
          color: '#2dd4bf',
          textShadow: '0 0 15px rgba(45, 212, 191, 0.3)'
        }}>
          I believe in writing clean code, continuous learning, and delivering 
          solutions that make a real impact. When I&apos;m not coding, you&apos;ll find 
          me exploring new tech, contributing to open source, or mentoring 
          aspiring developers.
        </p>
      </div>
    </section>
  );
}


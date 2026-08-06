import Link from "next/link";

export default function CTA() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{
        fontFamily: 'Georgia, serif',
        color: '#2dd4bf',
        textShadow: '0 0 30px rgba(45, 212, 191, 0.5), 0 0 60px rgba(45, 212, 191, 0.3)',
        letterSpacing: '0.15em'
      }}>
        Let&apos;s Work Together
      </h2>
      <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 px-4" style={{
        fontFamily: 'Georgia, serif',
        color: '#2dd4bf',
        textShadow: '0 0 15px rgba(45, 212, 191, 0.3)'
      }}>
        Have a project in mind or just want to say hi? I&apos;d love to hear from 
        you. Let&apos;s build something amazing together.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
        <Link
          href="mailto:hello@kaphan.dev"
          className="bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          Get In Touch
        </Link>
        <Link
          href="#"
          className="border border-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-slate-800 transition-colors text-sm sm:text-base"
        >
          Download CV
        </Link>
      </div>
    </section>
  );
}


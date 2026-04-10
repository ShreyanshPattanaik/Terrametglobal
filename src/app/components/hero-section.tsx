import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1693774557231-e2be6c3594e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBvcmUlMjBpbmR1c3RyaWFsJTIwZGFya3xlbnwxfHx8fDE3NzQ4Nzg0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E2E2E]/95 to-[#3A3A3A]/90"></div>
      </div>

      {/* Abstract World Map with Orange Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Trade routes as glowing orange lines */}
          <line x1="200" y1="400" x2="600" y2="300" stroke="#F47A20" strokeWidth="2" opacity="0.6" />
          <line x1="600" y1="300" x2="900" y2="350" stroke="#F47A20" strokeWidth="2" opacity="0.6" />
          <line x1="300" y1="500" x2="700" y2="450" stroke="#F47A20" strokeWidth="2" opacity="0.6" />
          <line x1="700" y1="450" x2="1000" y2="400" stroke="#F47A20" strokeWidth="2" opacity="0.6" />
          <line x1="150" y1="350" x2="500" y2="250" stroke="#F47A20" strokeWidth="2" opacity="0.4" />
          <line x1="500" y1="250" x2="850" y2="300" stroke="#F47A20" strokeWidth="2" opacity="0.4" />
          
          {/* Connection nodes */}
          <circle cx="200" cy="400" r="4" fill="#F47A20" />
          <circle cx="600" cy="300" r="4" fill="#F47A20" />
          <circle cx="900" cy="350" r="4" fill="#F47A20" />
          <circle cx="300" cy="500" r="4" fill="#F47A20" />
          <circle cx="700" cy="450" r="4" fill="#F47A20" />
          <circle cx="1000" cy="400" r="4" fill="#F47A20" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="uppercase tracking-[0.3em] mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, color: 'white', lineHeight: 1.2 }}
          >
            Terramet Global FZE LLC
          </h1>
          <p
            className="mb-8 max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 300, color: '#D1D1D1', lineHeight: 1.6 }}
          >
            Reliable Sourcing. Global Reach. Trusted Partnerships.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F47A20] text-white uppercase tracking-[0.2em] transition-all hover:bg-[#d66a1a] hover:gap-4"
            style={{ fontSize: '0.875rem', fontWeight: 700 }}
          >
            Get in Touch
            <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[#D1D1D1] uppercase tracking-widest" style={{ fontSize: '0.75rem' }}>
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#F47A20] to-transparent"></div>
      </div>
    </section>
  );
}

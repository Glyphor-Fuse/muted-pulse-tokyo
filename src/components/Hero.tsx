import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-16 grid grid-cols-1 md:grid-cols-2 border-b-2 border-black">
      {/* Left Column - Visual (Fixed on Desktop concept simulated with sticky) */}
      <div className="relative h-[50vh] md:h-[calc(100vh-4rem)] border-b-2 md:border-b-0 md:border-r-2 border-black overflow-hidden group">
        <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
        <img 
          src="/images/hero-espresso.jpg" 
          alt="Espresso Extraction" 
          className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-in-out"
        />
        <div className="absolute bottom-4 left-4 z-20 bg-black text-white px-2 py-1 font-mono text-xs">
          FIG. 01 — EXTRACTION
        </div>
      </div>

      {/* Right Column - Typography */}
      <div className="flex flex-col justify-center p-6 md:p-12 lg:p-20 bg-background">
        <div className="space-y-2 mb-12">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            EST. 2024 — TOKYO
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase text-primary">
            Concrete <br />
            <span className="text-transparent stroke-text hover:text-accent transition-colors duration-300 cursor-default">Jungle</span> <br />
            Roast
          </h1>
        </div>
        
        <p className="font-mono text-sm md:text-base leading-relaxed max-w-md border-l-2 border-accent pl-6 text-muted-foreground mb-12">
          Precision-engineered caffeine for the urban brutalist. 
          Sourced from high-altitude micro-lots, roasted in the heart of Shibuya.
          Zero compromise. 100% functionality.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <button className="h-14 border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all uppercase font-bold tracking-tight flex items-center justify-center gap-2 group">
            <span>Shop Batch #042</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button className="h-14 border-2 border-black bg-accent text-accent-foreground hover:bg-white hover:text-black transition-all uppercase font-bold tracking-tight">
            View Calibration
          </button>
        </div>
      </div>
    </section>
  );
}

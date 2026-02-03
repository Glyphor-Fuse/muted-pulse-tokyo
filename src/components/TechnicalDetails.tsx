import React from "react";

export default function TechnicalDetails() {
  return (
    <section className="bg-accent text-accent-foreground py-24 border-b-2 border-black">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
             <h2 className="font-display text-5xl md:text-7xl font-bold uppercase leading-none">
              Data Driven<br/>Extraction
            </h2>
            <p className="font-mono text-lg max-w-md border-l-4 border-black pl-6">
              We reject intuition. Our roasting profiles are calculated using proprietary algorithms to maximize solubility and flavor clarity.
            </p>
            <div className="grid grid-cols-2 gap-4 font-mono text-sm">
              <div className="border-2 border-black p-4 bg-white text-black">
                <div className="text-muted-foreground text-xs mb-1">AGTRON SCORE</div>
                <div className="text-2xl font-bold">55.2</div>
              </div>
              <div className="border-2 border-black p-4 bg-white text-black">
                <div className="text-muted-foreground text-xs mb-1">DEVELOPMENT</div>
                <div className="text-2xl font-bold">14.5%</div>
              </div>
            </div>
          </div>
          
          <div className="relative border-2 border-black bg-black aspect-video p-1">
             <div className="absolute top-2 right-2 text-accent font-mono text-xs animate-pulse">
                ● LIVE FEED
             </div>
             <img 
              src="/images/roaster-detail.jpg" 
              alt="Roaster Machinery" 
              className="w-full h-full object-cover opacity-80"
             />
             
             {/* Overlay UI elements to look like a camera feed */}
             <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white space-y-1">
                <div>ISO: 800</div>
                <div>S: 1/120</div>
                <div>REC: 00:42:12</div>
             </div>
             
             <div className="absolute inset-0 border-[1px] border-white/20 m-8 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-white/50"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-white/50"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-1 bg-white/50"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-1 bg-white/50"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

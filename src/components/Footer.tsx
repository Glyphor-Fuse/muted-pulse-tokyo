import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t-2 border-black pb-16">
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/20 border-b-2 border-white/20">
        <div className="p-8 md:col-span-2">
          <h2 className="font-display text-4xl font-bold uppercase mb-4">Muted Pulse Tokyo</h2>
          <p className="font-mono text-sm text-gray-400 max-w-xs">
            Refining the chaos of the city into a perfect cup. 
            Shibuya-ku, Tokyo 150-0002.
          </p>
        </div>
        
        <div className="p-8 flex flex-col gap-2 font-mono text-sm uppercase">
          <span className="text-accent mb-2 text-xs">Navigation</span>
          <a href="#" className="hover:text-accent">Shop</a>
          <a href="#" className="hover:text-accent">Subscription</a>
          <a href="#" className="hover:text-accent">Equipment</a>
          <a href="#" className="hover:text-accent">Journal</a>
        </div>

        <div className="p-8 flex flex-col gap-2 font-mono text-sm uppercase">
          <span className="text-accent mb-2 text-xs">Social</span>
          <a href="#" className="hover:text-accent">Instagram</a>
          <a href="#" className="hover:text-accent">Twitter</a>
          <a href="#" className="hover:text-accent">Line</a>
        </div>
      </div>
      <div className="p-4 text-center font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-4">
        © 2024 Muted Pulse Tokyo. All Rights Reserved. System by Glyphor.
      </div>
    </footer>
  );
}

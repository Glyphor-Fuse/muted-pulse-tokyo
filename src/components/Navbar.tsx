import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 border-b-2 border-black bg-background h-16 flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-accent animate-pulse" />
        <span className="font-display font-bold text-xl tracking-tighter uppercase">
          Muted Pulse
        </span>
      </div>
      <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest">
        <a href="#roast" className="hover:text-accent transition-colors">Roast Index</a>
        <a href="#origin" className="hover:text-accent transition-colors">Origins</a>
        <a href="#shop" className="hover:text-accent transition-colors">Shop</a>
      </div>
      <button className="bg-primary text-primary-foreground px-6 py-2 font-mono text-xs uppercase hover:bg-accent hover:text-accent-foreground transition-colors border-2 border-transparent hover:border-black">
        Cart (0)
      </button>
    </nav>
  );
}

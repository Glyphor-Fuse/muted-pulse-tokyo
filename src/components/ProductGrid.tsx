import React from "react";

const products = [
  {
    id: "01",
    name: "Void Matters",
    origin: "Ethiopia Yirgacheffe",
    notes: "Bergamot / Jasmine / Ash",
    price: "¥3,200",
    image: "/images/coffee-bag-1.jpg"
  },
  {
    id: "02",
    name: "Concrete Static",
    origin: "Colombia Huila",
    notes: "Dark Chocolate / Plum / Smoke",
    price: "¥2,800",
    image: "/images/coffee-bag-2.jpg"
  },
  {
    id: "03",
    name: "Neon Rain",
    origin: "Kenya AA",
    notes: "Blackcurrant / Tomato / Slate",
    price: "¥3,500",
    image: "/images/coffee-bag-3.jpg"
  }
];

export default function ProductGrid() {
  return (
    <section id="shop" className="w-full border-b-2 border-black bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
        {products.map((product) => (
          <div key={product.id} className="group relative flex flex-col h-full hover:bg-accent/10 transition-colors duration-300">
            {/* Header */}
            <div className="p-4 border-b-2 border-black flex justify-between items-start font-mono text-xs">
              <span className="bg-black text-white px-1">{product.id}</span>
              <span className="text-muted-foreground">{product.origin}</span>
            </div>
            
            {/* Image Area */}
            <div className="aspect-[4/5] w-full overflow-hidden relative border-b-2 border-black">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t-2 border-black">
                <p className="font-mono text-xs uppercase text-center">{product.notes}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-grow gap-4">
              <div>
                <h3 className="font-display text-3xl font-bold uppercase leading-none mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
              </div>
              
              <div className="flex justify-between items-center mt-auto pt-4 border-t-2 border-black/10">
                <span className="font-mono font-bold text-lg">{product.price}</span>
                <button className="bg-black text-white w-10 h-10 flex items-center justify-center hover:bg-accent hover:text-black transition-colors">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

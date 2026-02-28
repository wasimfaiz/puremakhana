"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const products = [
  { id: 1, category: "Savory", img: "makhana_himalayan_bottle.png", title: "Himalayan Pink Salt", weight: "100g", price: "$14.00" },
  { id: 2, category: "Savory", img: "packaging_herb_1772214465282.png", title: "Truffle & Rosemary", weight: "100g", price: "$18.00" },
  { id: 3, category: "Savory", img: "packaging_paprika.png", title: "Smoked Paprika & Lime", weight: "100g", price: "$16.00" },
  { id: 4, category: "Indulgence", img: "makhana_chocolate.png", title: "Dark Chocolate Coated", weight: "150g", price: "$22.00", badge: "New Arrival" },
  { id: 5, category: "Indulgence", img: "makhana_cookies.png", title: "Artisanal Makhana Cookies", weight: "200g", price: "$24.00", badge: "Patisserie" },
  { id: 6, category: "Wellness", img: "makhana_supplement.png", title: "Plant Protein Supplement", weight: "500g", price: "$49.00", badge: "Wellness" }
];

export default function ProductPage() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const filteredProducts = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream text-foreground overflow-hidden selection:bg-gold/30">
      {/* Navbar */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-cream/80 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-gold-dark">
            Pure Makhana
          </Link>
          <div className="hidden md:flex space-x-12 text-sm tracking-widest uppercase font-medium">
            <Link href="/story" className="hover:text-gold transition-colors">Our Story</Link>
            <Link href="/#benefits" className="hover:text-gold transition-colors">Benefits</Link>
            <Link href="/product" className="text-gold transition-colors">Product</Link>
            <Link href="/blogs" className="hover:text-gold transition-colors">Blogs</Link>
          </div>
          <button className="bg-foreground text-surface hover:bg-gold border border-transparent hover:border-gold transition-all duration-300 px-6 py-3 uppercase tracking-wider text-xs font-semibold">
            Cart (0)
          </button>
        </div>
      </nav>

      <main className="pt-40 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.p variants={fadeInUp} className="text-gold-dark uppercase tracking-[0.2em] font-medium text-sm mb-4">
              Curated Collection
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl mb-12">
              The <span className="italic text-gold-dark">Purity</span> Collection
            </motion.h1>
            
            {/* Filter Tabs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 mt-12 border-b border-gold/20 pb-4">
              {["All", "Savory", "Indulgence", "Wellness"].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm tracking-widest uppercase font-medium pb-2 transition-all duration-300 ${activeCategory === cat ? 'text-gold-dark border-b-2 border-gold-dark' : 'text-foreground/50 hover:text-foreground border-b-2 border-transparent'}`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Product Grid */}
        <section className="max-w-7xl mx-auto px-6 min-h-[50vh]">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                }
            }}
            key={activeCategory} // Force re-animation on category change
            className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative h-[450px] bg-surface mb-6 overflow-hidden">
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-20 bg-gold-dark text-surface px-4 py-1.5 text-[10px] uppercase tracking-widest font-semibold shadow-md">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <span className="bg-surface px-6 py-3 uppercase tracking-wider text-xs font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Quick Add
                    </span>
                  </div>
                  <Image
                    src={`/${product.img}`}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="text-center flex-grow flex flex-col justify-end">
                  <h3 className="font-serif text-2xl mb-2">{product.title}</h3>
                  <div className="flex justify-center space-x-4 text-sm font-light text-foreground/60">
                    <span>{product.weight}</span>
                    <span>•</span>
                    <span>{product.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface pt-24 pb-12 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="font-serif text-3xl font-semibold mb-6 flex items-baseline">
                Pure Makhana <span className="w-2 h-2 rounded-full bg-gold ml-2"></span>
              </div>
              <p className="text-foreground/70 font-light max-w-sm leading-relaxed mb-8">
                Redefining the art of mindful indulgence. Elevate your everyday with nature's finest luxury snack.
              </p>
              <div className="flex space-x-6">
                <Link href="#" className="text-foreground/60 hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></Link>
                <Link href="#" className="text-foreground/60 hover:text-gold transition-colors"><Twitter className="w-5 h-5" /></Link>
                <Link href="#" className="text-foreground/60 hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6">Explore</h4>
              <ul className="space-y-4 text-sm font-light text-foreground/70">
                <li><Link href="/product" className="text-gold transition-colors">Our Collection</Link></li>
                <li><Link href="/story" className="hover:text-gold transition-colors">Our Story</Link></li>
                <li><Link href="#" className="hover:text-gold transition-colors">Journal</Link></li>
                <li><Link href="#" className="hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6">Newsletter</h4>
              <p className="text-sm font-light text-foreground/70 mb-4">Join our inner circle for exclusive flavors and holistic wellness insights.</p>
              <div className="flex border-b border-foreground/20 focus-within:border-gold transition-colors pb-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-transparent w-full focus:outline-none text-sm placeholder:text-foreground/40 font-light"
                />
                <button className="text-xs uppercase tracking-widest font-semibold hover:text-gold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-xs font-light text-foreground/50">
            <p>&copy; {new Date().getFullYear()} Pure Makhana. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Instagram, Twitter, Facebook, Play } from "lucide-react";
import Link from "next/link";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1.0] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function StoryPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-surface text-foreground overflow-hidden selection:bg-gold/30">
      {/* Navbar */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-surface/80 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-gold-dark">
            Pure Makhana
          </Link>
          <div className="hidden md:flex space-x-12 text-sm tracking-widest uppercase font-medium">
            <Link href="/story" className="text-gold transition-colors">Our Story</Link>
            <Link href="/#benefits" className="hover:text-gold transition-colors">Benefits</Link>
            <Link href="/product" className="hover:text-gold transition-colors">Product</Link>
            <Link href="/blogs" className="hover:text-gold transition-colors">Blogs</Link>
          </div>
          <button className="bg-foreground text-surface hover:bg-gold border border-transparent hover:border-gold transition-all duration-300 px-6 py-3 uppercase tracking-wider text-xs font-semibold">
            Cart (0)
          </button>
        </div>
      </nav>

      <main className="pt-24">
        {/* Story Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-cream text-center">
            <div className="absolute inset-0 overflow-hidden z-0">
               {/* Minimalist subtle circle gradient or soft texture */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[100px]"></div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="text-gold-dark uppercase tracking-[0.3em] text-xs font-semibold mb-8">
                        The Genesis
                    </motion.div>
                    <motion.h1 
                        variants={fadeInUp} 
                        className="font-serif text-5xl md:text-8xl leading-none mb-10"
                    >
                        A Legacy of <br/><span className="italic text-gold-dark">Purity</span>
                    </motion.h1>
                    <motion.p 
                        variants={fadeInUp} 
                        className="text-lg md:text-2xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Transforming an ancient Himalayan superfood into the epitome of modern snacking luxury.
                    </motion.p>
                </motion.div>
            </div>
        </section>

        {/* Section 1: The Origin */}
        <section className="py-32 bg-surface relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="order-2 md:order-1"
                    >
                        <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl mb-8">
                            Born in the Serene <br/> <span className="italic text-gold-dark">Aquatic Gardens</span>
                        </motion.h2>
                        <motion.div variants={fadeInUp} className="w-16 h-px bg-gold mb-8" />
                        <motion.p variants={fadeInUp} className="text-foreground/70 text-lg leading-relaxed mb-6 font-light">
                            The lotus seed is a millennia-old symbol of resilience and grace. Emerging from the tranquil ponds of the Himalayas, each seed embodies the serene environment from which it grows.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-foreground/70 text-lg leading-relaxed font-light">
                            We travel to these untouched landscapes to source only the finest yields, guaranteeing that every blossom holds the nutritional integrity and pristine essence of its origin.
                        </motion.p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative h-[650px] w-full order-1 md:order-2"
                    >
                        <Image
                            src="/hero_makhana_1772214421093.png"
                            alt="Himalayan Source"
                            fill
                            className="object-cover object-right shadow-2xl"
                        />
                         <div className="absolute top-10 -left-10 w-48 h-48 bg-cream border border-gold/20 z-[-1]" />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Section 2: Full Width Image Divider */}
        <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image 
                    src="/artisan_roasting.png" 
                    alt="Artisan Roasting" 
                    fill 
                    className="object-cover brightness-50"
                />
            </div>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 text-center text-surface"
            >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-surface/10 backdrop-blur-md border border-surface/30 mb-8 cursor-pointer hover:bg-surface/20 hover:scale-105 transition-all">
                    <Play className="w-8 h-8 text-surface ml-1" />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl italic">Watch our artisan roasting process</h3>
            </motion.div>
        </section>

        {/* Section 3: The Craft */}
        <section className="py-32 bg-cream-dark relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative h-[700px] w-full"
                    >
                        <Image
                            src="/about_makhana_1772214503826.png"
                            alt="The Craftsmanship"
                            fill
                            className="object-cover shadow-2xl"
                        />
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-surface border border-gold/10 z-[-1]" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="pl-0 md:pl-10"
                    >
                        <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl mb-8">
                            Patience is Our <br/> <span className="italic text-gold-dark">Primary Ingredient</span>
                        </motion.h2>
                        <motion.div variants={fadeInUp} className="w-16 h-px bg-gold mb-8" />
                        <motion.p variants={fadeInUp} className="text-foreground/70 text-lg leading-relaxed mb-6 font-light">
                            Converting a humble seed into a delicately crisp popped lotus requires an artisan's touch. Generational experts hand-harvest each seed before they undergo a meticulous sun-drying cycle.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-foreground/70 text-lg leading-relaxed mb-10 font-light">
                            Instead of relying on heavy oils, our foxnuts are precisely roasted in small batches over low, slow heat. This gentle technique preserves essential nutrients while delivering that unmistakable, flawless crunch.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8 border-t border-gold/20 pt-10">
                            <div>
                                <div className="text-3xl font-serif text-gold-dark mb-2">100%</div>
                                <div className="text-xs uppercase tracking-widest text-foreground/60">Handpicked Quality</div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif text-gold-dark mb-2">0%</div>
                                <div className="text-xs uppercase tracking-widest text-foreground/60">Artificial Flavors</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Section 4: The Vision / Conclusion */}
        <section className="py-40 bg-surface">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="text-gold-dark mb-8">
                        <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 22h20L12 2z"/>
                        </svg>
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-6xl mb-10">
                        Elevating Everyday <br/><span className="italic text-gold-dark">Indulgence</span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-xl text-foreground/70 font-light mb-16 leading-relaxed">
                        We refuse to compromise between health and taste. Pure Makhana stands as a testament to the belief that true luxury lies in simplicity, quality, and mindful nourishment.
                    </motion.p>
                    
                    <motion.div variants={fadeInUp}>
                        <Link href="/product" className="inline-block bg-gold-dark text-surface px-10 py-5 text-sm uppercase tracking-wider font-semibold hover:bg-foreground transition-all duration-300">
                            Discover The Collection
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-cream pt-24 pb-12">
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
                <li><Link href="/product" className="hover:text-gold transition-colors">Our Collection</Link></li>
                <li><Link href="/story" className="text-gold transition-colors">Our Story</Link></li>
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

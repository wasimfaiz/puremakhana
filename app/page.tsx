"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Dumbbell, Feather, Star, Instagram, Twitter, Facebook } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-cream text-foreground overflow-hidden selection:bg-gold/30">
      {/* Navbar */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-cream/80 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="font-serif text-2xl font-semibold tracking-wide text-gold-dark">
            Pure Makhana
          </div>
          <div className="hidden md:flex space-x-12 text-sm tracking-widest uppercase font-medium">
            <Link href="/story" className="hover:text-gold transition-colors">Our Story</Link>
            <a href="#benefits" className="hover:text-gold transition-colors">Benefits</a>
            <a href="#shop" className="hover:text-gold transition-colors">Shop</a>
            <Link href="/blogs" className="hover:text-gold transition-colors">Blogs</Link>
          </div>
          <button className="bg-foreground text-surface hover:bg-gold border border-transparent hover:border-gold transition-all duration-300 px-6 py-3 uppercase tracking-wider text-xs font-semibold">
            Cart (0)
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent z-10" />
          <Image
            src="/hero_makhana_1772214421093.png"
            alt="Premium Foxnuts"
            fill
            className="object-cover object-right"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.p variants={fadeInUp} className="text-gold-dark uppercase tracking-[0.2em] font-medium text-sm mb-6">
              The Essence of Purity
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl leading-tight mb-8">
              Elevate Your <br />
              <span className="italic text-gold-dark">Snacking</span> Experience
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground/80 font-light mb-12 max-w-lg leading-relaxed">
              Discover the finest, handpicked and perfectly roasted foxnuts. A harmonious blend of luxury, health, and unparalleled taste.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
              <a href="#shop" className="group flex items-center justify-center bg-gold-dark text-surface px-8 py-4 text-sm uppercase tracking-wider font-semibold hover:bg-foreground transition-all duration-300">
                Shop Now
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/story" className="flex items-center justify-center border border-gold-dark text-gold-dark px-8 py-4 text-sm uppercase tracking-wider font-semibold hover:bg-gold-dark hover:text-surface transition-all duration-300">
                Discover Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="story" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative h-[600px] w-full"
            >
              <Image
                src="/about_makhana_1772214503826.png"
                alt="Sourcing Makhana"
                fill
                className="object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-cream-dark z-[-1]" />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl mb-8">
                Cultivated with <span className="italic text-gold-dark">Care</span>, <br />Roasted to Perfection
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-16 h-px bg-gold mb-8" />
              <motion.p variants={fadeInUp} className="text-foreground/70 text-lg leading-relaxed mb-6 font-light">
                Pure Makhana was born from a desire to bring the ancient superfood of the Himalayas to the modern palate. Every foxnut is handpicked from pristine lotus ponds, sun-dried, and gently roasted.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-foreground/70 text-lg leading-relaxed font-light mb-10">
                We believe snacking should never be a compromise. That's why our makhana is naturally rich in protein, gluten-free, and delightfully crisp, offering a guilt-free luxury you can savor every day.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <Image
                  src="/file.svg" // Replace with signature if needed, using purely stylistic text here instead
                  alt=""
                  width={100}
                  height={50}
                  className="hidden"
                />
                <div className="font-serif text-2xl text-gold-dark italic">
                  Pure Makhana Founders
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="benefits" className="py-32 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Uncompromising Quality</h2>
            <div className="w-24 h-px bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Leaf, title: "100% Natural", desc: "No artificial flavors or preservatives. Just pure, wholesome goodness." },
              { icon: ShieldCheck, title: "Handpicked Quality", desc: "Carefully selected to ensure only the finest size and texture." },
              { icon: Dumbbell, title: "Rich in Protein", desc: "A plant-based powerhouse to fuel your active lifestyle gracefully." },
              { icon: Feather, title: "Light & Guilt-Free", desc: "Low in calories, high in satisfaction. The perfect mindful snack." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-surface p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gold/10 group"
              >
                <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-8 h-8 text-gold-dark stroke-1" />
                </div>
                <h3 className="font-serif text-xl mb-4">{feature.title}</h3>
                <p className="text-foreground/70 font-light text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="shop" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Signature Collection</h2>
            <div className="w-24 h-px bg-gold mx-auto mb-8" />
            <p className="max-w-2xl mx-auto text-foreground/70 font-light">Experience our masterfully crafted flavors, designed for the sophisticated palate.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
            {[
              { img: "packaging_classic_1772214444243.png", title: "Himalayan Pink Salt", weight: "100g", price: "$14.00" },
              { img: "packaging_herb_1772214465282.png", title: "Truffle & Rosemary", weight: "100g", price: "$18.00" },
              { img: "packaging_classic_1772214444243.png", title: "Smoked Paprika & Lime", weight: "100g", price: "$16.00" },
              { img: "makhana_chocolate.png", title: "Dark Chocolate Coated", weight: "150g", price: "$22.00", badge: "New Arrival" },
              { img: "makhana_cookies.png", title: "Artisanal Makhana Cookies", weight: "200g", price: "$24.00", badge: "Patisserie" },
              { img: "makhana_supplement.png", title: "Plant Protein Supplement", weight: "500g", price: "$49.00", badge: "Wellness" }
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: (idx % 3) * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative h-[450px] bg-cream mb-6 overflow-hidden">
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
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-foreground text-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Words of Appreciation</h2>
            <div className="w-24 h-px bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The truffle & rosemary flavor is phenomenal. It feels like an indulgence, but it's totally guilt-free. Elevates my entire snacking routine.",
                author: "Eleanor Richards",
                role: "Wellness Editor"
              },
              {
                text: "Finally, a premium snack that delivers on both taste and health. The packaging is gorgeous, and the crunch is absolutely perfect.",
                author: "James Sterling",
                role: "Private Chef"
              },
              {
                text: "I serve Pure Makhana at all my gatherings now. It's sophisticated, delicious, and always starts a conversation. Simply outstanding.",
                author: "Sophia Laurent",
                role: "Interior Designer"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="border border-white/10 p-10 bg-white/5 backdrop-blur-sm"
              >
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-light leading-relaxed mb-8 text-surface/80">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-serif text-lg">{testimonial.author}</div>
                  <div className="text-xs uppercase tracking-wider text-gold-dark mt-1">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="font-serif text-3xl font-semibold mb-6 flex items-baseline">
                Pure Makhana <span className="w-2 h-2 rounded-full bg-gold ml-2"></span>
              </div>
              <p className="text-foreground/70 font-light max-w-sm leading-relaxed mb-8">
                Redefining the art of mindful indulgence. Elevate your everyday with natures finest luxury snack.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-foreground/60 hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-foreground/60 hover:text-gold transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-foreground/60 hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6">Explore</h4>
              <ul className="space-y-4 text-sm font-light text-foreground/70">
                <li><a href="#shop" className="hover:text-gold transition-colors">Our Collection</a></li>
                <li><Link href="/story" className="hover:text-gold transition-colors">Our Story</Link></li>
                <li><a href="#" className="hover:text-gold transition-colors">Journal</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
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
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

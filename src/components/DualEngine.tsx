"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggeredItem } from "@/lib/animations";

export default function DualEngine() {
  return (
    <motion.section 
      {...fadeInUp}
      className="py-[var(--spacing-section-gap)] px-[var(--spacing-margin-page)] bg-surface max-w-[var(--spacing-content-max-width)] mx-auto relative z-10"
    >
      <div className="mb-16">
        <motion.span {...staggeredItem} className="font-label-caps text-label-caps text-[#b89758] tracking-widest uppercase mb-4 block text-center">
            Firm Philosophy
        </motion.span>
        <motion.h2 {...staggeredItem} className="text-4xl md:text-5xl text-primary-container mb-8 font-['Noto_Serif'] leading-tight tracking-tight font-semibold text-center">
            The Dual-Engine Approach.
        </motion.h2>
        <motion.div {...staggeredItem} className="w-24 h-px bg-secondary mx-auto"></motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Left Typography Side */}
        <motion.div {...staggeredItem} className="md:col-span-7 relative">
          <div className="absolute -left-6 -top-8 text-[#b89758] opacity-15 font-['Noto_Serif'] text-[12rem] leading-none select-none pointer-events-none">
            "
          </div>
          
          <div className="relative z-10">
            <p className="font-['Noto_Serif'] text-2xl md:text-3xl text-primary-container leading-snug mb-8">
              Combining the agility of modern litigation with the wisdom of veteran administrative leadership.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              We offer our clients a unique methodology to legal challenges. By providing a sophisticated bridge between local regulatory nuances and metropolitan corporate standards in Metro Manila and Pampanga, we don't just practice law—we engineer decisive outcomes.
            </p>
          </div>
        </motion.div>

        {/* Right Logo Side */}
        <motion.div {...staggeredItem} className="md:col-span-5 flex items-center justify-center bg-transparent">
          <div className="relative">
            <Image 
              src="/darklogononame.png" 
              alt="Tandoc & Tandoc Navy and Gold Seal" 
              width={500}
              height={500}
              className="max-w-full h-auto object-contain" 
            />
          </div>
        </motion.div>
        
      </div>
    </motion.section>
  );
}

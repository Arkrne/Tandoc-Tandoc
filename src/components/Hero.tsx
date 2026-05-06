"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { heroEntrance } from "@/lib/animations";

export default function Hero() {
  const ref = useRef(null);

  return (
    <motion.header 
      {...heroEntrance}
      ref={ref}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-[var(--spacing-margin-page)] py-[var(--spacing-section-gap)] bg-surface paper-texture"
    >
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center translate-y-16">
        <Image 
          src="/logowithnoname.png" 
          alt="Tandoc & Tandoc Logo Watermark" 
          width={1000}
          height={1000}
          className="w-[1000px] h-[1000px] object-contain opacity-8 drop-shadow-sm" 
          priority
        />
      </div>
      <div className="relative z-10 max-w-[var(--spacing-content-max-width)] text-center w-full">
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.0 }}
          viewport={{ once: true }}
          className="w-24 h-[1px] bg-[#b89758] mx-auto mb-8"
        />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="font-headline-display text-[64px] text-primary-container mb-[var(--spacing-gutter)] max-w-5xl mx-auto leading-[1.1] font-semibold"
        >
          <span className="text-[80px]">Tandoc & Tandoc:</span><br />
          Where Strategy Meets the Law.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12"
        >
          A premier legal and strategic consultancy firm operating at the intersection of technical legal mastery and high-level executive insight.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center overflow-hidden py-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Link className="bg-primary-container text-on-primary px-8 py-4 font-label-caps text-label-caps tracking-widest uppercase hover:bg-opacity-90 transition-colors shadow-none rounded-none inline-block" href="#competencies">
              Explore Our Services
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Link className="border border-hairline border-secondary text-secondary px-8 py-4 font-label-caps text-label-caps tracking-widest uppercase hover:bg-surface-container-low transition-colors shadow-none rounded-none inline-block" href="#contact">
              Request Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

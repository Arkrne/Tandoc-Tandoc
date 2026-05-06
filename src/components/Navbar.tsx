"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Only hide if scrolled past 100px and scrolling downwards
    if (latest > lastScrollY && latest > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(latest);
  });

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[1px] bg-[#b89758] z-[60]"></div>
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-surface fixed top-0 z-50 w-full border-b border-[#1b325f]"
      >
        <div className="max-w-[var(--spacing-content-max-width)] mx-auto flex justify-between items-center w-full px-8 py-4">
          {/* Logo Section */}
          <div className="flex items-center h-[80px]">
            <Image 
              src="/fulllogowithname.png" 
              alt="Tandoc & Tandoc Logo" 
              width={500} 
              height={80} 
              className="object-contain h-full w-auto" 
              priority 
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 font-['Inter'] font-semibold text-[14px] uppercase tracking-[0.1em]">
            <Link className="text-[#1b325f] border-b border-transparent hover:border-[#b89758] pb-1 transition-colors duration-300" href="#">Home</Link>
            <Link className="text-[#1b325f] border-b border-transparent hover:border-[#b89758] pb-1 transition-colors duration-300" href="#competencies">Competencies</Link>
            <Link className="text-[#1b325f] border-b border-transparent hover:border-[#b89758] pb-1 transition-colors duration-300" href="#leadership">Leadership</Link>
            <Link className="text-[#1b325f] border-b border-transparent hover:border-[#b89758] pb-1 transition-colors duration-300" href="#contact">Contact</Link>
          </div>

          {/* Consultation Button */}
          <div>
            <Link className="bg-[#1b325f] text-white px-6 py-4 font-['Inter'] font-semibold text-[14px] uppercase tracking-[0.1em] hover:bg-opacity-90 transition-colors rounded-none shadow-none" href="#contact">
              Request Consultation
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

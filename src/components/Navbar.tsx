"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Competencies", href: "#competencies" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY && latest > 100) {
      setIsVisible(false);
      setIsMenuOpen(false);
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
        <div className="max-w-[var(--spacing-content-max-width)] mx-auto flex justify-between items-center w-full px-4 sm:px-8 py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center h-[56px] md:h-[80px]">
            <Image
              src="/fulllogowithname.png"
              alt="Tandoc & Tandoc Logo"
              width={500}
              height={80}
              className="object-contain h-full w-auto"
              priority
            />
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-8 font-['Inter'] font-semibold text-[14px] uppercase tracking-[0.1em]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                className="text-[#1b325f] border-b border-transparent hover:border-[#b89758] pb-1 transition-colors duration-300"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA button */}
          <div className="hidden md:block">
            <Link
              className="bg-[#1b325f] text-white px-6 py-4 font-['Inter'] font-semibold text-[14px] uppercase tracking-[0.1em] hover:bg-opacity-90 transition-colors rounded-none shadow-none"
              href="#contact"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-[6px] shrink-0"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-[1.5px] bg-[#1b325f] transition-transform duration-300 origin-center ${
                isMenuOpen ? "translate-y-[7.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#1b325f] transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#1b325f] transition-transform duration-300 origin-center ${
                isMenuOpen ? "-translate-y-[7.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-surface border-t border-[#1b325f]/20"
            >
              <div className="px-4 py-4 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#1b325f] font-['Inter'] font-semibold text-[13px] uppercase tracking-[0.15em] py-4 border-b border-[#1b325f]/10 last:border-b-0 hover:text-[#b89758] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 bg-[#1b325f] text-white text-center px-6 py-4 font-['Inter'] font-semibold text-[13px] uppercase tracking-[0.1em] hover:bg-opacity-90 transition-colors"
                >
                  Request Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#1b325f] dark:bg-black font-['Noto_Serif'] text-xs tracking-widest uppercase full-width border-t border-[#d1d1cc]/30 flat no-shadows w-full px-8 py-16 flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto"
    >
      <div className="mb-8 md:mb-0">
        <span className="text-xl font-bold text-white mb-4 block">TANDOC & TANDOC</span>
        <p className="text-white">© 2024 Tandoc & Tandoc Law Offices. Premier Legal & Strategic Consultancy.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <Link className="text-slate-300 hover:text-white transition-all focus:ring-1 focus:ring-[#d1d1cc]" href="#">Privacy Policy</Link>
        <Link className="text-slate-300 hover:text-white transition-all focus:ring-1 focus:ring-[#d1d1cc]" href="#">Terms of Service</Link>
        <Link className="text-slate-300 hover:text-white transition-all focus:ring-1 focus:ring-[#d1d1cc]" href="#">Legal Disclaimer</Link>
        <Link className="text-slate-300 hover:text-white transition-all focus:ring-1 focus:ring-[#d1d1cc]" href="#">Office Locations</Link>
      </div>
      <div className="w-full mt-12 pt-8 border-t border-white/10 flex-basis-full text-left md:text-right md:w-auto md:mt-0 md:border-t-0 md:pt-0">
        {/* Adjusted layout for the disclaimer so it stays at bottom or right side neatly */}
        <p className="text-[10px] text-slate-400 font-body-md normal-case tracking-normal">
          Members of the Integrated Bar of the Philippines (IBP) - Makati and Pampanga Chapters.
        </p>
      </div>
    </motion.footer>
  );
}

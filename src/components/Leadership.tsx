"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Leadership() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-[var(--spacing-section-gap)] px-[var(--spacing-margin-page)] max-w-[var(--spacing-content-max-width)] mx-auto" 
      id="leadership"
    >
      <div className="text-center mb-20">
        <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 block">The Architects</span>
        <h2 className="font-headline-lg text-4xl md:text-5xl text-primary-container mb-6 font-['Noto_Serif']">Executive Leadership</h2>
        <div className="w-24 h-px bg-secondary mx-auto"></div>
      </div>

      <div className="flex flex-col gap-16">
        
        {/* Profile 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row border border-[#b89758]/50 bg-[#1b325f] text-white overflow-hidden shadow-2xl shadow-[#1b325f]/10"
        >
          <div className="w-full md:w-2/5 relative aspect-[4/5] md:aspect-auto border-b md:border-b-0 md:border-r border-[#b89758]/50 bg-white">
            <Image 
              src="/attyjohntandoc.jpg" 
              alt="Atty. John Karol D. Tandoc" 
              fill
              className="object-cover object-top" 
            />
          </div>
          <div className="w-full md:w-3/5 p-10 lg:p-16 flex flex-col justify-center relative">
            {/* Subtle watermark in the background of the card */}
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
              <span className="font-['Noto_Serif'] text-[15rem] leading-none">T</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-['Noto_Serif'] text-3xl md:text-4xl text-white mb-3">Atty. John Karol D. Tandoc</h3>
              <p className="font-label-caps text-label-caps text-[#b89758] tracking-widest uppercase mb-8">Principal Counsel</p>
              <div className="w-12 h-px bg-[#b89758] mb-8"></div>
              <ul className="space-y-6 font-['Inter'] text-[15px] leading-relaxed text-slate-300">
                <li className="flex items-start">
                  <span className="w-6 h-[1px] bg-[#b89758] mt-[11px] mr-5 block shrink-0"></span>
                  <span><strong className="text-white font-semibold tracking-wide uppercase text-[12px] block mb-1">UST Juris Doctor</strong> A rigorous foundation in classical legal theory and jurisprudence.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-[1px] bg-[#b89758] mt-[11px] mr-5 block shrink-0"></span>
                  <span><strong className="text-white font-semibold tracking-wide uppercase text-[12px] block mb-1">5+ Years Intensive Practice</strong> Comprehensive expertise spanning civil, criminal, labor, and high-stakes corporate law.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-[1px] bg-[#b89758] mt-[11px] mr-5 block shrink-0"></span>
                  <span><strong className="text-white font-semibold tracking-wide uppercase text-[12px] block mb-1">Specialized Expertise</strong> Deep operational mastery in clinical litigation and complex labor relations (SEnA, NLRC).</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Profile 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse border border-[#b89758]/50 bg-[#1b325f] text-white overflow-hidden shadow-2xl shadow-[#1b325f]/10"
        >
          <div className="w-full md:w-2/5 relative aspect-[4/5] md:aspect-auto border-b md:border-b-0 md:border-l border-[#b89758]/50 bg-white">
            <Image 
              src="/attysixto.jpg" 
              alt="Atty. Sixto Delatado Tandoc, Jr." 
              fill
              className="object-cover object-top" 
            />
          </div>
          <div className="w-full md:w-3/5 p-10 lg:p-16 flex flex-col justify-center relative">
            <div className="absolute left-0 bottom-0 opacity-5 pointer-events-none -translate-x-1/4 translate-y-1/4">
              <span className="font-['Noto_Serif'] text-[15rem] leading-none">T</span>
            </div>

            <div className="relative z-10">
              <h3 className="font-['Noto_Serif'] text-3xl md:text-4xl text-white mb-3">Atty. Sixto Delatado Tandoc, Jr.</h3>
              <p className="font-label-caps text-label-caps text-[#b89758] tracking-widest uppercase mb-8">Senior Strategic Advisor</p>
              <div className="w-12 h-px bg-[#b89758] mb-8"></div>
              <ul className="space-y-6 font-['Inter'] text-[15px] leading-relaxed text-slate-300">
                <li className="flex items-start">
                  <span className="w-6 h-[1px] bg-[#b89758] mt-[11px] mr-5 block shrink-0"></span>
                  <span><strong className="text-white font-semibold tracking-wide uppercase text-[12px] block mb-1">Veteran Public Administrator</strong> Retired senior government manager bringing decades of inside regulatory insight.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-[1px] bg-[#b89758] mt-[11px] mr-5 block shrink-0"></span>
                  <span><strong className="text-white font-semibold tracking-wide uppercase text-[12px] block mb-1">AIM Alumnus</strong> Elite strategic training from the Asian Institute of Management.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-[1px] bg-[#b89758] mt-[11px] mr-5 block shrink-0"></span>
                  <span><strong className="text-white font-semibold tracking-wide uppercase text-[12px] block mb-1">Institutional Foresight</strong> Unmatched experience in public policy, administrative governance, and long-term strategic planning.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}

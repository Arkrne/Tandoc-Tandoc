"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const competencies = [
  {
    id: "01",
    roman: "I",
    title: "Labor Relations & Employment Advocacy",
    description: "Comprehensive management of labor disputes, statutory compliance audits, and proactive risk mitigation.",
    image: "https://images.unsplash.com/photo-1593115057322-e93b775bf19e?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: "02",
    roman: "II",
    title: "Corporate Governance & Advisory",
    description: "Strategic secretarial services and the design of robust governance frameworks for sustainable corporate growth.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    roman: "III",
    title: "Property & Land Registration",
    description: "Sophisticated handling of original land registrations and high-value property transfers across the Greater Manila Area.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
  },
  {
    id: "04",
    roman: "IV",
    title: "Regulatory & Administrative Law",
    description: "Expert navigation of government bureaucracies and Anti-Red Tape (ARTA) protocols to ensure seamless operational continuity.",
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Competencies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isExpanded = (index: number) =>
    hoveredIndex === index || activeIndex === index;

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-[var(--spacing-section-gap)] px-[var(--spacing-margin-page)] bg-surface text-on-surface" 
      id="competencies"
    >
      <div className="max-w-[var(--spacing-content-max-width)] mx-auto">
        <div className="text-center mb-20">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 block">Core Expertise</span>
          <h2 className="font-['Noto_Serif'] text-4xl md:text-5xl text-primary-container mb-6">Core Competencies</h2>
          <div className="w-24 h-px bg-secondary mx-auto"></div>
        </div>

        {/* Framing the entire block */}
        <div className="flex flex-col border border-hairline border-[#1b325f]">
          {competencies.map((comp, index) => (
            <motion.div
              key={comp.id}
              className={`relative w-full overflow-hidden cursor-pointer group ${
                index !== competencies.length - 1 ? 'border-b border-hairline border-[#b89758]/50' : ''
              }`}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              animate={{
                height: isExpanded(index) ? 320 : 120,
                borderColor: isExpanded(index) ? "#b89758" : "transparent"
              }}
              initial={{ height: 120 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Cinematic Background Image Layer */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url('${comp.image}')` }}
              />
              
              {/* Navy Gradient Overlay */}
              <div 
                className="absolute inset-0 z-10"
                style={{ background: "linear-gradient(90deg, #1b325f 20%, rgba(27,50,95,0.4) 100%)" }}
              />

              {/* Content Layer */}
              <div className="relative z-20 h-full flex flex-col px-4 sm:px-8 md:px-12 overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between h-[120px] shrink-0">
                  <div className="flex items-center gap-3 sm:gap-6 md:gap-8 min-w-0">
                    <span className="font-['Noto_Serif'] text-2xl sm:text-4xl text-[#b89758] w-8 sm:w-12 shrink-0">{comp.roman}</span>
                    <h3 className="font-['Noto_Serif'] text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight">{comp.title}</h3>
                  </div>
                  <motion.span
                    className="material-symbols-outlined text-2xl sm:text-4xl text-[#b89758] shrink-0 ml-2"
                    animate={{
                      rotate: isExpanded(index) ? 45 : 0,
                      scale: isExpanded(index) ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    north_east
                  </motion.span>
                </div>

                {/* Reveal Content */}
                <motion.div
                  className="max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isExpanded(index) ? 1 : 0,
                    y: isExpanded(index) ? 0 : 20,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <p className="font-['Inter'] text-[16px] text-slate-200 mb-8 leading-relaxed">
                    {comp.description}
                  </p>
                  <button className="text-white border border-[#b89758] px-8 py-3 font-label-caps text-label-caps tracking-widest uppercase hover:bg-[#b89758] transition-colors duration-300">
                    Learn More
                  </button>
                </motion.div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

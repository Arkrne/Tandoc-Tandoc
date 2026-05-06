"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-[var(--spacing-section-gap)] px-[var(--spacing-margin-page)]" 
      id="contact"
    >
      <div className="max-w-[var(--spacing-content-max-width)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Mandate & Location */}
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 font-['Noto_Serif']">Our Mandate</h2>
          <div className="w-24 h-px bg-secondary mb-8"></div>
          
          <div className="mb-12">
            <p className="font-['Noto_Serif'] italic text-2xl text-primary-container mb-6">
              "We do not merely practice law; we engineer solutions."
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              By synthesizing veteran strategic foresight with modern legal technicality, we provide our clients with the high-caliber representation required to navigate the complexities of the Philippine legal and economic landscape.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2">Office Address</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">47 A. Bonifacio Street, Brgy. Kabayanan, San Juan, Metro Manila</p>
            </div>
            
            <div className="mt-8">
              <h4 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2">Direct Contact</h4>
              <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary-container">call</span> +639366322326 (Phone/Viber)
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2 mt-1">
                <span className="material-symbols-outlined text-sm text-primary-container">mail</span> inquiries@tandoclaw.com
              </p>
            </div>

            {/* Embedded Location Map */}
            <div className="mt-8 relative group">
              <div className="w-full h-[250px] border border-hairline border-primary-container/30 relative overflow-hidden bg-surface-container-highest">
                <iframe 
                  src="https://maps.google.com/maps?q=47%20A.%20Bonifacio%20Street,%20San%20Juan,%20Metro%20Manila&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "grayscale(100%) contrast(110%) opacity(75%) sepia(20%)" }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a 
                href="https://maps.app.goo.gl/Ad5LsfsrfdTgWkK46" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-primary-container text-white px-4 py-2 font-label-caps text-label-caps tracking-widest uppercase hover:bg-opacity-90 transition-colors shadow-none rounded-none flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="material-symbols-outlined text-[16px]">directions</span>
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-transparent p-8 border border-hairline border-primary-container/30">
          <h3 className="font-headline-md text-headline-md text-primary-container mb-8">Request a Consultation</h3>
          <form className="space-y-8">
            {['Name', 'Email'].map((field) => (
              <div key={field}>
                <label className="block font-label-caps text-label-caps text-primary-container uppercase tracking-widest mb-2" htmlFor={field.toLowerCase()}>{field}</label>
                <input className="w-full bg-transparent border-0 border-b border-hairline border-primary-container focus:ring-0 focus:border-[#b89758] focus:outline-none p-0 pb-2 font-body-md text-body-md text-on-surface transition-colors" id={field.toLowerCase()} type={field === 'Email' ? 'email' : 'text'} />
              </div>
            ))}
            <div>
              <label className="block font-label-caps text-label-caps text-primary-container uppercase tracking-widest mb-2" htmlFor="message">Message</label>
              <textarea className="w-full bg-transparent border-0 border-b border-hairline border-primary-container focus:ring-0 focus:border-[#b89758] focus:outline-none p-0 pb-2 font-body-md text-body-md text-on-surface transition-colors resize-none" id="message" rows={4}></textarea>
            </div>
            <button className="w-full bg-primary-container text-white py-4 font-label-caps text-label-caps tracking-widest uppercase hover:bg-opacity-90 transition-colors shadow-none rounded-none" type="button">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

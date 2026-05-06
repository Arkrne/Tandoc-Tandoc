"use client";
import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TwitterIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

function HoverFooter() {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Our Mandate", href: "#contact" },
        { label: "Leadership", href: "#leadership" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Legal Disclaimer", href: "#" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#b89758]" />,
      text: "inquiries@tandoclaw.com",
      href: "mailto:inquiries@tandoclaw.com",
    },
    {
      icon: <Phone size={18} className="text-[#b89758]" />,
      text: "+639366322326",
      href: "tel:+639366322326",
    },
    {
      icon: <MapPin size={18} className="text-[#b89758]" />,
      text: "San Juan, Metro Manila",
    },
  ];

  const socialLinks = [
    { icon: <FacebookIcon size={20} />, label: "Facebook", href: "#" },
    { icon: <InstagramIcon size={20} />, label: "Instagram", href: "#" },
    { icon: <TwitterIcon size={20} />, label: "Twitter", href: "#" },
    { icon: <Globe size={20} />, label: "Website", href: "#" },
  ];

  return (
    <footer className="relative bg-[#1b325f] text-white overflow-hidden mt-[var(--spacing-section-gap)] border-t border-[#b89758]/30">
      <FooterBackgroundGradient />
      
      <div className="max-w-[var(--spacing-content-max-width)] mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-start">
              <Image src="/logowithnoname.png" alt="Tandoc & Tandoc Logo" width={120} height={120} className="object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              Premier Legal & Strategic Consultancy.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-[#b89758] text-lg font-semibold mb-6 font-['Noto_Serif']">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-[#b89758] text-lg font-semibold mb-6 font-['Noto_Serif']">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-slate-300">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-white transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-[#b89758]/20 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-slate-400">
          {/* Social icons */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-white transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-right w-full md:w-auto">
            &copy; {new Date().getFullYear()} Tandoc & Tandoc Law Offices. All rights reserved. <br/>
            <span className="text-[10px] mt-1 block">Members of the Integrated Bar of the Philippines (IBP) - Makati and Pampanga Chapters.</span>
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36 pointer-events-none">
        <TextHoverEffect text="TANDOC" className="z-50 pointer-events-auto" />
      </div>
    </footer>
  );
}

export default HoverFooter;

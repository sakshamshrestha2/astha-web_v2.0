/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MapPin, Phone, Mail, Award, Stethoscope, GraduationCap, Briefcase } from "lucide-react";
import React from "react";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const BentoCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <motion.div
      variants={itemVariants}
      className={`bg-purewhite rounded-3xl p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 shadow-sm shadow-black/[0.03] flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-[100dvh] bg-offwhite py-12 px-4 md:py-20 md:px-8 selection:bg-sage/30 selection:text-charcoal font-sans text-charcoal">
      <motion.main
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Card 1: Hero (Span 2x2) */}
        <BentoCard className="md:col-span-2 md:row-span-2 justify-end relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 md:-top-20 md:-right-20 text-sage opacity-[0.05] group-hover:opacity-[0.08] transition-all duration-1000 ease-in-out group-hover:rotate-[15deg] group-hover:scale-110 pointer-events-none z-0">
            <svg viewBox="0 0 100 100" className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]" fill="currentColor">
              <path d="M35 0h30v35h35v30H65v35H35V65H0V35h35V0z" />
            </svg>
          </div>
          <div className="mt-32 md:mt-48 z-10 relative">
            <span className="block text-xs uppercase tracking-[2px] text-charcoal/40 mb-4 font-medium">NMC REG. 39705</span>
            <h1 className="font-serif text-[clamp(4.25rem,10vw,8rem)] leading-[0.9] font-medium tracking-[-0.04em] mb-4 md:mb-6 text-charcoal">
              Dr. Astha<br className="hidden sm:block" /> Pokhrel
            </h1>
            <p className="font-sans text-xl md:text-2xl text-sage font-medium tracking-wide">
              Dental Surgeon
            </p>
          </div>
        </BentoCard>

        {/* Card 2: Bio */}
        <BentoCard className="md:col-span-1 justify-center relative">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-4">Bio</h2>
          <div className="space-y-4">
            <p className="text-charcoal/80 leading-relaxed font-medium text-sm sm:text-base">
              Detail-oriented Dental Surgeon dedicated to providing comprehensive patient care. Experienced in advanced restorative procedures, preventive dentistry, and precise oral diagnosis, with a strong commitment to clinical excellence.
            </p>
          </div>
        </BentoCard>

        {/* Card 3: Current Focus */}
        <BentoCard className="md:col-span-1 flex flex-col justify-center items-start">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-4">Current Focus</h2>
          <p className="font-serif text-xl font-medium mb-2">Dental Surgeon</p>
          <p className="text-charcoal/70 text-sm mb-1">All Smile Dental Home, Samakhusi, Kathmandu</p>
          <p className="text-charcoal/50 text-xs font-medium uppercase tracking-wider mt-1">Since Nov 2025</p>
        </BentoCard>

        {/* Card 4: Past Experience */}
        <BentoCard className="md:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-6">Past Experience</h2>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 group">
              <h3 className="font-medium text-charcoal group-hover:text-sage transition-colors">
                Harmony Dental Care, Pokhara
              </h3>
              <p className="text-xs text-charcoal/50 font-medium">28th Sep 2025 - 15th Nov 2025</p>
            </div>
            <div className="w-full h-px bg-black/5" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 group">
              <div>
                <h3 className="font-medium text-charcoal group-hover:text-sage transition-colors">
                  Kantipur Dental College/Hospital, Kathmandu
                </h3>
                <p className="text-xs text-charcoal/60 mt-1">Clinical Experience (Rotatory Internship)</p>
              </div>
              <p className="text-xs text-charcoal/50 font-medium whitespace-nowrap sm:ml-4">Sep 2024 - Aug 2025</p>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Contact (Sage Green background) */}
        <BentoCard className="md:col-span-1 !bg-sage text-purewhite selection:bg-purewhite/30 relative overflow-hidden group">
          <div className="absolute -bottom-6 -right-6 text-purewhite/10 group-hover:text-purewhite/20 transition-colors duration-500 pointer-events-none">
            <Mail size={120} strokeWidth={1} />
          </div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-purewhite/70 mb-6 z-10 relative">Contact</h2>
          
          <div className="space-y-6 z-10 relative">
            <a href="#" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
              <MapPin size={20} className="mt-0.5 opacity-80 shrink-0" />
              <div>
                <p className="text-xs text-purewhite/70 font-medium mb-1 uppercase tracking-wider">Location</p>
                <p className="font-medium">Basundhara, Kathmandu</p>
              </div>
            </a>
            
            <a href="mailto:asthapokhrel23@gmail.com" aria-label="Send an email to Dr. Astha Pokhrel" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
              <Mail size={20} className="mt-0.5 opacity-80 shrink-0" />
              <div>
                <p className="text-xs text-purewhite/70 font-medium mb-1 uppercase tracking-wider">Email</p>
                <p className="font-medium">asthapokhrel23@gmail.com</p>
              </div>
            </a>
          </div>
        </BentoCard>

        {/* Card 6: Certifications */}
        <BentoCard className="md:col-span-1">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-6">Key Certifications</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start group">
              <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center text-sage shrink-0 mt-1">
                <Award size={16} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-charcoal group-hover:text-sage transition-colors mb-1">
                  Hands-on "Rotary Endodontics Simplified"
                </h3>
                <p className="text-xs text-charcoal/50">12th Dec, 2025</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start group">
              <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center text-sage shrink-0 mt-1">
                <Award size={16} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-charcoal group-hover:text-sage transition-colors mb-1">
                  Hands-on "Mastering Bio Ceramic Techniques"
                </h3>
                <p className="text-xs text-charcoal/50">5th Jun, 2025</p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Education */}
        <BentoCard className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage">
              <GraduationCap size={20} />
            </div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-charcoal/40">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group">
              <div>
                <h3 className="font-serif text-2xl font-medium mb-2 group-hover:text-sage transition-colors">Bachelor of Dental Surgery (BDS)</h3>
                <p className="text-charcoal/70 text-sm">Kantipur Dental College Hospital & Research Center, Kathmandu</p>
              </div>
              <p className="text-xs font-medium text-charcoal/50 sm:text-right mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">
                Oct 2018 - Aug 2025
              </p>
            </div>
            
            <div className="w-full h-px bg-black/5" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium mb-2 group-hover:text-sage transition-colors">National Examinations Board (+2)</h3>
                <p className="text-charcoal/70 text-sm">Sagarmatha Secondary School, Pokhara</p>
              </div>
              <p className="text-xs font-medium text-charcoal/50 sm:text-right mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">
                Jul 2016 - May 2018
              </p>
            </div>
          </div>
        </BentoCard>

      </motion.main>
      
      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-8 md:mt-16 pt-8 pb-4 px-4 md:px-0 border-t border-black/5 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center gap-3 md:gap-4 flex-wrap">
        <p className="text-xs font-medium text-charcoal/50">
          &copy; 2026 Dr. Astha Pokhrel. All rights reserved.
        </p>
        <div className="flex items-center gap-6 print-hide">
          <button
            onClick={() => window.print()}
            className="text-xs font-semibold tracking-widest text-charcoal/60 hover:text-sage uppercase transition-colors"
          >
            Download CV (PDF)
          </button>
          <a 
            href="https://www.linkedin.com/in/dr-astha-pokhrel-ds/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Dr. Astha Pokhrel's LinkedIn profile"
            className="text-xs font-semibold tracking-widest text-charcoal/60 hover:text-sage uppercase transition-colors"
          >
            Connect on LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

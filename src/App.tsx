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
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              <path d="M12 5.5c-1.074 -.586 -2.583 -1.5 -4 -1.5c-2.1 0 -4 1.247 -4 5c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 0 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 2 .993 2.567 .237c1.615 -2.127 2.671 -5.637 2.671 -10.537c0 -3.74 -1.908 -5 -4 -5c-1.423 0 -2.92 .911 -4 1.5" />
            </svg>
          </div>
          <div className="mt-32 md:mt-48 z-10 relative">
            <img 
              src="https://i.imgur.com/Z9LATCu.jpeg" 
              alt="Dr. Astha Pokhrel, BDS - Dental Surgeon in Kathmandu, Nepal" 
              className="sr-only" 
              referrerPolicy="no-referrer"
            />
            <span className="block text-xs uppercase tracking-[2px] text-charcoal/40 mb-4 font-medium">NMC REG. 39705</span>
            <h1 className="font-serif text-[clamp(4.25rem,10vw,8rem)] leading-[0.9] font-medium tracking-[-0.04em] mb-4 md:mb-6 text-charcoal">
              Dr. Astha<br className="hidden sm:block" /> Pokhrel
            </h1>
            <p className="font-light leading-[1.7] font-sans text-xl md:text-2xl text-sage tracking-wide">
              BDS, Dental Surgeon
            </p>
          </div>
        </BentoCard>

        {/* Card 2: Bio */}
        <BentoCard className="md:col-span-1 justify-center relative">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-4">Bio</h2>
          <div className="space-y-4">
            <p className="font-light leading-[1.7] text-charcoal/80 text-sm sm:text-base">
              Detail-oriented Dental Surgeon and Dentist dedicated to providing comprehensive patient care in Kathmandu. Experienced in advanced restorative procedures, preventive dentistry, and precise oral diagnosis, with a strong commitment to clinical excellence within local dental clinics.
            </p>
          </div>
        </BentoCard>

        {/* Card 3: Current Focus */}
        <BentoCard className="md:col-span-1 flex flex-col justify-center items-start">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-4">Current Focus</h2>
          <p className="font-light leading-[1.7] font-serif text-xl mb-2">Dental Surgeon</p>
          <p className="font-light leading-[1.7] text-charcoal/70 text-sm mb-1">All Smile Dental Home, Samakhusi, Kathmandu</p>
          <p className="text-[#8E8E93] text-[0.85rem] before:content-['●'] before:mr-[6px] before:text-sage before:animate-pulse">Accepting New Patients</p>
          <p className="font-light leading-[1.7] text-charcoal/50 text-xs uppercase tracking-wider mt-2">Since Nov 2025</p>
        </BentoCard>

        {/* Card 4: Past Experience */}
        <BentoCard className="md:col-span-2 flex flex-col justify-start">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-6">Past Experience</h2>
          <div className="flex flex-col justify-start items-start w-full">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 group w-full">
              <div>
                <h3 className="font-medium text-charcoal group-hover:text-sage transition-colors">
                  Kantipur Dental College/Hospital, Kathmandu
                </h3>
                <p className="font-light leading-[1.7] text-xs text-charcoal/60 mt-1">Clinical Experience (Rotatory Internship)</p>
                <p className="font-light leading-[1.6] text-[0.95rem] text-[#8E8E93] max-w-[85%] mt-3">Completed a comprehensive clinical rotatory internship, delivering primary patient care and developing hands-on proficiency across all major dental departments.</p>
              </div>
              <p className="font-light leading-[1.7] text-xs text-charcoal/50 whitespace-nowrap sm:ml-4">Sep 2024 - Aug 2025</p>
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
            <div className="flex items-start gap-4 rounded-sm">
              <MapPin size={20} className="mt-0.5 opacity-80 shrink-0" />
              <div>
                <p className="font-light leading-[1.7] text-xs text-purewhite/70 mb-1 uppercase tracking-wider">Location</p>
                <p className="font-light leading-[1.7]">Basundhara, Kathmandu</p>
              </div>
            </div>
            
            <a id="secure-email" aria-label="Send an email to Dr. Astha Pokhrel" className="flex items-start gap-4 hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-sage focus-visible:outline-offset-4 outline-none rounded-sm">
              <Mail size={20} className="mt-0.5 opacity-80 shrink-0" />
              <div>
                <p className="font-light leading-[1.7] text-xs text-purewhite/70 mb-1 uppercase tracking-wider">Email</p>
                <p className="font-light leading-[1.7]"></p>
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
                <p className="font-light leading-[1.7] text-xs text-charcoal/50">12th Dec, 2025</p>
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
                <p className="font-light leading-[1.7] text-xs text-charcoal/50">5th Jun, 2025</p>
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
                <p className="font-light leading-[1.7] text-charcoal/70 text-sm">Kantipur Dental College Hospital & Research Center, Kathmandu</p>
              </div>
              <p className="font-light leading-[1.7] text-xs text-charcoal/50 sm:text-right mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">
                Oct 2018 - Aug 2025
              </p>
            </div>
            
            <div className="w-full h-px bg-black/5" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium mb-2 group-hover:text-sage transition-colors">National Examinations Board (+2)</h3>
                <p className="font-light leading-[1.7] text-charcoal/70 text-sm">Sagarmatha Secondary School, Pokhara</p>
              </div>
              <p className="font-light leading-[1.7] text-xs text-charcoal/50 sm:text-right mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">
                Jul 2016 - May 2018
              </p>
            </div>
          </div>
        </BentoCard>

      </motion.main>
      
      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-8 md:mt-16 pt-8 pb-4 px-4 md:px-0 border-t border-black/5 flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start text-center sm:text-left gap-3 md:gap-4 flex-wrap">
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-xs font-medium text-charcoal/50">
            &copy; 2026 Dr. Astha Pokhrel. All rights reserved.
          </p>
          <p className="text-[0.75rem] text-[#A1A1AA] mt-2 max-w-lg">
            Disclaimer: The content on this website is for informational purposes only and does not constitute professional medical advice, diagnosis, or treatment.
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 print-hide mt-2 sm:mt-0">
          <button
            onClick={() => window.print()}
            className="text-xs font-semibold tracking-widest text-charcoal/60 hover:text-sage uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sage focus-visible:outline-offset-4 outline-none rounded-sm"
          >
            Download CV
          </button>
          <a 
            href="https://np.linkedin.com/in/dr-astha-pokhrel-ds/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Dr. Astha Pokhrel's LinkedIn profile"
            className="text-xs font-semibold tracking-widest text-charcoal/60 hover:text-sage uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sage focus-visible:outline-offset-4 outline-none rounded-sm"
          >
            Connect on LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

// src/components/Contact.tsx
import React, { useState } from 'react';
import { Clipboard, Check, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 border-t border-border-faint bg-neutral-50/30 relative">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(15,98,254,0.04),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
        {/* Pitching Labels */}
        <div className="space-y-4">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block animate-pulse">
            ESTABLISH UPLINK
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-primary text-balance max-w-2xl mx-auto">
            Let's build something together.
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto text-balance leading-relaxed">
            Open to founding engineer roles, early-stage contracts, and interesting architectural challenges.
          </p>
        </div>

        {/* Copy Card Interaction */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 bg-surface border border-border-faint rounded-xl max-w-full shadow-2xs hover:border-neutral-300 transition-all duration-300">
          <span className="px-4 py-2 text-base font-mono font-semibold text-text-primary select-all break-all sm:break-normal">
            {personalInfo.email}
          </span>
          <button
            onClick={copyEmail}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              copied 
                ? 'bg-emerald-600 text-surface' 
                : 'bg-accent text-surface hover:bg-accent-hover shadow-sm'
            }`}
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Copied!
              </>
            ) : (
              <>
                <Clipboard className="w-3.5 h-3.5" />
                Copy Address
              </>
            )}
          </button>
        </div>

        {/* Direct Connect Grid */}
        <div className="flex justify-center items-center gap-6 pt-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-accent transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <span className="text-border-faint font-light">|</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

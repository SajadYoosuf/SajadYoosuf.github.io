// src/components/NavBar.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy Logic
      const sections = ['projects', 'skills', 'process', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset for nav bar

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-surface/85 backdrop-blur-md border-b border-border-faint shadow-xs py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-text-primary hover:opacity-85 transition-opacity flex items-center gap-1.5"
          onClick={() => setActiveSection('home')}
        >
          <span>SAJAD</span>
          <span className="text-accent text-xs font-semibold px-1.5 py-0.5 bg-accent/10 rounded-sm">.DEV</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'text-accent bg-accent/5 font-semibold' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-neutral-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-text-primary bg-surface border border-border-faint hover:border-text-primary hover:bg-neutral-50 rounded-md transition-all duration-200 cursor-pointer shadow-2xs"
          >
            Download CV
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-text-primary hover:bg-neutral-100 rounded-md transition-colors focus:outline-hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border-faint transition-all duration-300 ease-in-out origin-top ${
          isOpen 
            ? 'opacity-100 scale-y-100 visible shadow-lg' 
            : 'opacity-0 scale-y-95 invisible pointer-events-none'
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-3">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  isActive 
                    ? 'text-accent bg-accent/5 font-semibold' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-neutral-50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <hr className="border-border-faint my-1" />
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between w-full px-4 py-3.5 text-sm font-semibold tracking-wide uppercase text-text-primary bg-neutral-50 border border-border-faint hover:bg-neutral-100 rounded-md transition-colors"
          >
            <span>Download CV</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

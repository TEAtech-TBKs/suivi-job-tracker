import React, { useEffect, useState } from 'react'
import ToggleButton from './ToggleButtton'
import LogoLight from '../assets/Suivi-logo/SUIVI-lightmode.png'
import LogoDark from '../assets/Suivi-logo/SUIVI-darkmode.png'
import { Menu, X } from 'lucide-react' // Standard lightweight icons

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Close menu when resizing to desktop to prevent scroll locks or UI glitches
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = ["Features", "How it works", "Pricing", "Blog", "Resources"];

  return (
    <nav className="relative w-full bg-[rgb(var(--bg))] border-b border-[rgba(var(--card-border))] z-[100]">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 lg:px-12">
        
        {/* LOGO - Scaled for mobile */}
        <img 
          src={dark ? LogoDark : LogoLight} 
          alt="suivi" 
          className="logo w-24 md:w-32 object-contain" 
        />

        {/* DESKTOP LINKS - Hidden on mobile/tablet (hidden lg:flex) */}
        <ul className="hidden lg:flex nav-links gap-8 text-sm font-medium text-[rgb(var(--text))]">
          {navLinks.map((link) => (
            <li key={link} className="cursor-pointer hover:text-[rgb(var(--primary))] transition-colors">
              {link}
            </li>
          ))}
        </ul>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <button className='text-[rgb(var(--text))] text-sm font-medium hover:opacity-70 transition-opacity'>Login</button>
            <button className='bg-[rgb(var(--primary))] text-[rgb(var(--bg))] rounded-lg font-bold px-4 py-2 text-sm whitespace-nowrap shadow-md active:scale-95 transition-all'>
              Get started Free
            </button>
          </div>
          
          <ToggleButton />

          {/* MOBILE TOGGLE - Only visible below 'lg' breakpoint */}
          <button 
            className="lg:hidden p-2 text-[rgb(var(--text))] rounded-md hover:bg-[rgba(var(--card-border),0.2)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[rgb(var(--bg))] border-b border-[rgba(var(--card-border))] overflow-hidden transition-all duration-300 ease-in-out z-[-1] ${
        isMenuOpen ? 'max-h-[500px] opacity-100 shadow-xl' : 'max-h-0 opacity-0'
      }`}>
        <ul className="flex flex-col p-6 gap-5 text-lg font-normal text-[rgb(var(--text))]">
          {navLinks.map((link) => (
            <li key={link} onClick={() => setIsMenuOpen(false)} className="active:text-[rgb(var(--primary))] py-2 ">
              {link}
            </li>
          ))}
          <div className="flex flex-col gap-4 pt-4 sm:hidden">
             <button className='text-[rgb(var(--text))] text-left text-base'>Login</button>
             <button className='bg-[rgb(var(--primary))] text-[rgb(var(--bg))] rounded-xl font-bold px-4 py-4 w-full text-center'>
              Get started Free
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
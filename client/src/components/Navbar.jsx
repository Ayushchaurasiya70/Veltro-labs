import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { navLinks } from '../data/mockData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#17191D]/90 backdrop-blur-md border-b border-steel/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold tracking-wider text-ivory">
            VELTRO<span className="text-lime">LABS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-lime ${
                  isActive ? 'text-lime' : 'text-steel'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-lime text-graphite font-semibold text-sm hover:bg-lime/90 transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(197,244,103,0.3)]"
          >
            Let's Talk <ChevronRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-ivory focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#17191D] border-b border-steel/20 px-6 py-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium py-2 transition-colors ${
                  isActive ? 'text-lime' : 'text-steel'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full py-3 rounded-full bg-lime text-graphite font-semibold text-center flex items-center justify-center gap-1.5"
          >
            Let's Talk <ChevronRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
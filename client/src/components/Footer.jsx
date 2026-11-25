import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111317] border-t border-steel/25 pt-16 pb-12 text-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Info */}
        <div className="flex flex-col gap-4 md:col-span-1">
          <span className="font-heading text-2xl font-bold tracking-wider text-ivory">
            VELTRO<span className="text-lime">LABS</span>
          </span>
          <p className="text-sm leading-relaxed">
            Engineering Digital Growth. Empowering businesses worldwide with scalable, practical digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-ivory font-semibold text-base">Quick Links</h4>
          <Link to="/services" className="text-sm hover:text-lime transition-colors">Services & Offerings</Link>
          <Link to="/solutions" className="text-sm hover:text-lime transition-colors">Industry Solutions</Link>
          <Link to="/portfolio" className="text-sm hover:text-lime transition-colors">Our Work & Portfolio</Link>
          <Link to="/about" className="text-sm hover:text-lime transition-colors">About Veltro Labs</Link>
        </div>

        {/* Legal & Policies */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-ivory font-semibold text-base">Legal</h4>
          <Link to="/privacy" className="text-sm hover:text-lime transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-sm hover:text-lime transition-colors">Terms & Conditions</Link>
          <Link to="/contact" className="text-sm hover:text-lime transition-colors">Support & Contact</Link>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-ivory font-semibold text-base">Connect</h4>
          <div className="flex items-center gap-2 text-sm">
            <Mail size={16} className="text-lime" /> contact@veltrolabs.com
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone size={16} className="text-lime" /> +91 (Official Number)
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} className="text-lime" /> India & Global Reach
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-steel/10 flex flex-col sm:flex-row items-center justify-between text-xs">
        <p>© {new Date().getFullYear()} Veltro Labs. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 text-lime">Engineering Digital Growth.</p>
      </div>
    </footer>
  );
}
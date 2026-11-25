import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="relative w-full py-32 bg-graphite overflow-hidden border-t border-steel/15 flex items-center justify-center">
      
      {/* Background Glowing Ambient Light */}
      <div className="absolute w-[600px] h-[600px] bg-lime/10 blur-[160px] rounded-full pointer-events-none -top-20"></div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime mb-6 px-4 py-1.5 bg-lime/10 border border-lime/30 rounded-full shadow-[0_0_20px_rgba(132,204,22,0.15)]">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse"></span>
          // READY TO SCALE YOUR INFRASTRUCTURE?
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-6xl font-bold font-heading text-ivory mb-6 leading-tight tracking-tight">
          Let’s Build Something <span className="text-lime">Legendary</span> Together.
        </h2>

        {/* Subtitle */}
        <p className="text-steel max-w-2xl mx-auto text-base sm:text-lg mb-12 font-normal leading-relaxed">
          Transform your digital presence with Veltro Labs. High-end WebGL shaders, immersive UI architectures, and enterprise-grade backend solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-lime text-graphite font-bold rounded-2xl hover:bg-lime/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_35px_rgba(132,204,22,0.35)] text-center text-sm tracking-wide uppercase font-mono"
          >
            Schedule Consultation &rarr;
          </Link>
          
          <a
            href="mailto:contact@veltrolabs.com"
            className="w-full sm:w-auto px-8 py-4 bg-[#111317] text-ivory border border-steel/30 font-semibold rounded-2xl hover:border-lime/50 hover:bg-[#16191e] hover:scale-[1.02] transition-all duration-300 text-center text-sm tracking-wide uppercase font-mono shadow-xl"
          >
            Direct Inquiry
          </a>
        </div>

        {/* Footer Micro Trust Note */}
        <div className="mt-12 flex items-center justify-center gap-6 text-xs text-steel font-mono uppercase tracking-wider">
          <span>⚡ Zero Latency</span>
          <span>•</span>
          <span>🔒 Enterprise Security</span>
          <span>•</span>
          <span>🚀 24/7 Support</span>
        </div>

      </div>
    </section>
  );
}
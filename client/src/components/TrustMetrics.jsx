import React from 'react';
import { ShieldCheck, Code2, Zap, Users } from 'lucide-react';

export default function TrustMetrics() {
  return (
    <section className="border-y border-steel/15 bg-[#111317]/80 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl font-bold text-ivory font-heading mb-1">100%</div>
          <div className="text-xs sm:text-sm text-steel flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-lime" /> Secure & Scalable
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl font-bold text-ivory font-heading mb-1">MERN / WebGL</div>
          <div className="text-xs sm:text-sm text-steel flex items-center gap-1.5">
            <Code2 size={16} className="text-lime" /> Modern Tech Stack
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl font-bold text-ivory font-heading mb-1">07 Phases</div>
          <div className="text-xs sm:text-sm text-steel flex items-center gap-1.5">
            <Zap size={16} className="text-lime" /> Structured Delivery
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl font-bold text-ivory font-heading mb-1">24/7</div>
          <div className="text-xs sm:text-sm text-steel flex items-center gap-1.5">
            <Users size={16} className="text-lime" /> Dedicated Partner
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Terminal, Shield, Cpu, Zap, Globe } from 'lucide-react';

const coreValues = [
  {
    num: '01',
    title: 'Human-Crafted Over AI Slop',
    desc: 'While others rely on generic templates and automated code generation, every line of frontend interaction and backend schema at Veltro is meticulously crafted by senior engineers for maximum impact.',
  },
  {
    num: '02',
    title: 'Uncompromising Performance',
    desc: 'Speed is a feature. We engineer sub-second load times, 60fps WebGL animations, and resilient cloud architectures that never choke under heavy traffic.',
  },
  {
    num: '03',
    title: 'Radical Transparency',
    desc: 'No hidden milestones or black-box delays. You work directly with the engineers building your system through clear code repositories and daily async updates.',
  },
  {
    num: '04',
    title: 'Enterprise-Grade Security',
    desc: 'From SOC2 compliance readiness to zero-trust cloud IAM policies, we ensure your user data and financial ledgers remain completely ironclad.',
  },
];

const leadershipTeam = [
  {
    name: 'Ayush Chaurasiya',
    role: 'Principal Architect & Founder',
    focus: 'System Architecture, WebGL Shaders & Full-Stack Scale',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Devansh Verma',
    role: 'Lead Frontend Engineer',
    focus: 'Interactive UI Systems, React 19 & Design Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Rohan Mehta',
    role: 'Head of Infrastructure & AI',
    focus: 'AWS Cloud Orchestration, RAG Pipelines & DevOps',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#17191D] text-ivory pt-36 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime mb-4">
            About Veltro Labs
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-ivory leading-[1.1] mb-6">
            We are a specialized engineering collective built for high-growth enterprises.
          </h1>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            Founded on the belief that digital products should be both breathtakingly immersive and brutally fast. We partner with ambitious founders to build software that dominates markets.
          </p>
        </div>

        {/* Visual Workspace Banner */}
        <div className="mb-28 rounded-3xl overflow-hidden border border-steel/20 h-[380px] sm:h-[480px] relative group">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
            alt="Veltro Labs Workspace"
            className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17191D] via-[#17191D]/30 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                Global Operations • Studio HQ
              </span>
              <h2 className="text-xl sm:text-3xl font-bold text-ivory">
                Engineering excellence without compromise.
              </h2>
            </div>
            <div className="flex gap-4 font-mono text-xs text-steel">
              <span>⚡ 100% Remote-First</span>
              <span>•</span>
              <span>🔒 Zero Latency Focus</span>
            </div>
          </div>
        </div>

        {/* Core Principles / Manifesto */}
        <div className="mb-28">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime mb-2">
              Our Core Principles
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-ivory">
              How we build differently.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#111317] border border-steel/15 hover:border-lime/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-lime block mb-4">
                    // PRINCIPLE {val.num}
                  </span>
                  <h3 className="text-xl font-bold text-ivory mb-3">
                    {val.title}
                  </h3>
                  <p className="text-steel text-sm sm:text-base leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Engineering Pod */}
        <div className="mb-28">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime mb-2">
              Leadership & Craft
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-ivory">
              The engineers behind the systems.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, idx) => (
              <div key={idx} className="rounded-2xl bg-[#111317] border border-steel/15 overflow-hidden group">
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-mono text-lime uppercase tracking-wider block mb-1">
                    {member.role}
                  </span>
                  <h3 className="text-xl font-bold text-ivory mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-steel leading-relaxed">
                    {member.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="pt-16 border-t border-steel/15">
          <div className="bg-[#111317] border border-steel/20 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-lime/5 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-lime mb-3 inline-block px-3 py-1 bg-lime/10 border border-lime/30 rounded-full">
                // LET'S COLLABORATE
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-ivory mb-4">
                Ready to build something legendary with our team?
              </h2>
              <p className="text-steel text-sm sm:text-base mb-8">
                Let’s discuss your technical architecture and how Veltro Labs can help you ship faster.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime text-graphite font-bold font-mono text-xs uppercase tracking-wider rounded-xl hover:bg-lime/90 transition-all shadow-[0_0_25px_rgba(132,204,22,0.3)]"
              >
                Schedule Consultation <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Terminal, Layers, Cpu, ShieldCheck } from 'lucide-react';

const servicesData = [
  {
    id: 'software-engineering',
    num: '01',
    title: 'Product & Web Engineering',
    tagline: 'Production-grade web apps built for heavy traffic and zero downtime.',
    overview:
      'Most MVPs break when real users arrive. We build full-stack applications with clean architecture, strict type-safety, and sub-second load times from day one.',
    deliverables: [
      'Full-stack React / Next.js web applications',
      'High-throughput Node.js & Go REST/GraphQL APIs',
      'Database schema design & query optimization (PostgreSQL / MongoDB)',
      'Automated testing & CI/CD deployment setup',
    ],
    stack: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    timeline: '4 – 8 Weeks',
    icon: Terminal,
  },
  {
    id: 'interactive-frontend',
    num: '02',
    title: 'Interactive UI & 3D Web',
    tagline: 'Memorable interfaces that make your product stand out in a crowded market.',
    overview:
      'Standard templates make you look like everyone else. We craft fluid, 60fps micro-interactions, custom WebGL shaders, and tactile design systems that keep users engaged.',
    deliverables: [
      'Custom design systems & component libraries',
      'Interactive 3D product showcases (Three.js / React Three Fiber)',
      'Custom GLSL shaders & scroll-driven storytelling',
      'Core Web Vitals & mobile performance tuning',
    ],
    stack: ['Three.js', 'WebGL', 'Tailwind CSS', 'Framer Motion', 'GLSL'],
    timeline: '3 – 6 Weeks',
    icon: Layers,
  },
  {
    id: 'ai-systems',
    num: '03',
    title: 'Applied AI & Workflow Automation',
    tagline: 'Practical AI integrations that cut manual operations—not science experiments.',
    overview:
      'We connect LLMs and custom data pipelines directly into your existing business tools so your team spends less time on repetitive ops and more time shipping.',
    deliverables: [
      'Custom RAG knowledge bases trained on your internal docs',
      'Automated lead-routing, support & document extraction agents',
      'Internal admin dashboards with natural-language querying',
      'Token cost optimization & latency caching',
    ],
    stack: ['OpenAI / Claude APIs', 'Python', 'LangChain', 'Vector DBs', 'Webhooks'],
    timeline: '2 – 5 Weeks',
    icon: Cpu,
  },
  {
    id: 'cloud-devops',
    num: '04',
    title: 'Cloud Infrastructure & Scaling',
    tagline: 'Bulletproof deployments, auto-scaling clusters, and ironclad security.',
    overview:
      'We take the stress out of server management. Whether you are migrating off legacy servers or preparing for a major product launch, we keep your infra fast and predictable.',
    deliverables: [
      'AWS / GCP cloud architecture & cost audits',
      'Docker containerization & Kubernetes orchestration',
      'Zero-downtime blue/green deployment pipelines',
      'Real-time uptime monitoring, logging & automated alerts',
    ],
    stack: ['AWS', 'Docker', 'Terraform', 'GitHub Actions', 'Cloudflare'],
    timeline: '2 – 4 Weeks',
    icon: ShieldCheck,
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <div className="min-h-screen bg-[#17191D] text-ivory pt-36 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime mb-4">
            Services & Capabilities
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-ivory leading-[1.1] mb-6">
            We partner with teams to ship fast, reliable software.
          </h1>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            Select a discipline below to inspect our deliverables, technical stack, and typical shipping timelines.
          </p>
        </div>

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Clickable Service Index */}
          <div className="lg:col-span-5 flex flex-col border-t border-steel/20">
            {servicesData.map((service, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left py-6 px-4 border-b border-steel/20 transition-all duration-200 flex items-start justify-between gap-4 group ${
                    isSelected
                      ? 'bg-[#111317] border-l-2 border-l-lime'
                      : 'hover:bg-[#111317]/40'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-mono text-xs transition-colors ${
                        isSelected ? 'text-lime font-bold' : 'text-steel'
                      }`}
                    >
                      {service.num}
                    </span>
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-semibold transition-colors ${
                          isSelected
                            ? 'text-ivory'
                            : 'text-steel group-hover:text-ivory'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-steel/80 mt-1 line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className={`shrink-0 mt-1 transition-transform duration-200 ${
                      isSelected
                        ? 'text-lime translate-x-0.5 -translate-y-0.5'
                        : 'text-steel/40 group-hover:text-ivory'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Inspector Panel */}
          <div className="lg:col-span-7 bg-[#111317] border border-steel/20 rounded-2xl p-6 sm:p-10 sticky top-28">
            <div className="flex items-center justify-between border-b border-steel/15 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-lime/10 border border-lime/30 flex items-center justify-center text-lime">
                  <ActiveIcon size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-steel block">
                    Discipline {activeService.num}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-ivory">
                    {activeService.title}
                  </h2>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <span className="text-[11px] font-mono uppercase text-steel block">
                  Avg. Timeline
                </span>
                <span className="text-sm font-mono font-semibold text-lime">
                  {activeService.timeline}
                </span>
              </div>
            </div>

            <p className="text-ivory/90 text-sm sm:text-base leading-relaxed mb-8">
              {activeService.overview}
            </p>

            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-steel mb-4">
                What You Actually Get
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {activeService.deliverables.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-ivory/85 bg-[#17191D]/70 px-4 py-3 rounded-xl border border-steel/10"
                  >
                    <Check size={16} className="text-lime shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-steel/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-[11px] font-mono uppercase text-steel block mb-2">
                  Core Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeService.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#17191D] text-steel border border-steel/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={`/contact?service=${activeService.id}`}
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-lime text-graphite font-semibold text-sm rounded-xl hover:bg-lime/90 transition-colors"
              >
                Scope This Project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

        </div>

        {/* NEW: Unsplash Visual Showcase Grid (Extending down nicely) */}
        <div className="mt-28 pt-16 border-t border-steel/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime mb-2">
                Execution & Craft
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-ivory">
                Built with precision, deployed for scale.
              </h2>
            </div>
            <p className="text-steel text-sm max-w-md">
              A glimpse into our technical environments, shader workspaces, and production pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group rounded-2xl overflow-hidden border border-steel/15 h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" 
                alt="Code architecture" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[11px] font-mono text-lime uppercase tracking-wider mb-1">01 / Architecture</span>
                <h4 className="text-lg font-bold text-ivory">Clean Type-Safe Codebases</h4>
              </div>
            </div>

            <div className="relative group rounded-2xl overflow-hidden border border-steel/15 h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" 
                alt="WebGL Shaders" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[11px] font-mono text-lime uppercase tracking-wider mb-1">02 / Shaders & 3D</span>
                <h4 className="text-lg font-bold text-ivory">Immersive GPU Interactions</h4>
              </div>
            </div>

            <div className="relative group rounded-2xl overflow-hidden border border-steel/15 h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                alt="Cloud Infrastructure" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[11px] font-mono text-lime uppercase tracking-wider mb-1">03 / Infrastructure</span>
                <h4 className="text-lg font-bold text-ivory">Scalable Cloud & CI/CD</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Models */}
        <div className="mt-24 pt-16 border-t border-steel/15">
          <div className="mb-10">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime mb-2">
              Flexible Partnership
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ivory">
              How we collaborate with your team.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#111317]/60 border border-steel/15">
              <span className="text-xs font-mono text-lime block mb-2">01 / FIXED SCOPE</span>
              <h3 className="text-lg font-bold text-ivory mb-2">MVP & Product Launch</h3>
              <p className="text-sm text-steel leading-relaxed">
                Clear deliverables, locked milestones, and a fixed timeline. Ideal when you know what needs to be built and want a dedicated team to ship it.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111317]/60 border border-steel/15">
              <span className="text-xs font-mono text-lime block mb-2">02 / RETAINER</span>
              <h3 className="text-lg font-bold text-ivory mb-2">Dedicated Engineering Pod</h3>
              <p className="text-sm text-steel leading-relaxed">
                Embed our senior frontend, backend, and UI engineers directly into your Slack and GitHub workflow on a monthly basis.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111317]/60 border border-steel/15">
              <span className="text-xs font-mono text-lime block mb-2">03 / AUDIT & SPRINT</span>
              <h3 className="text-lg font-bold text-ivory mb-2">Architecture & UI Overhaul</h3>
              <p className="text-sm text-steel leading-relaxed">
                A focused 2-week sprint to fix slow load times, refactor messy codebases, or redesign a critical user flow before fundraising.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
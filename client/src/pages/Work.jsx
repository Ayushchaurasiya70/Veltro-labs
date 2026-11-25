import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X, CheckCircle2, Layers, Cpu, Globe, ShieldCheck } from 'lucide-react';

const projectsData = [
  {
    id: 'project-apex',
    title: 'Project Apex',
    client: 'Apex Institutional Markets',
    category: 'Fintech & SaaS',
    year: '2026',
    summary: 'Real-time WebGL liquidity terminal and multi-chain orderbook engine handling 40k+ concurrent streams.',
    challenge: 'Legacy DOM-based trading dashboards froze during high-volatility market spikes, causing execution delays for institutional desks.',
    solution: 'We replaced heavy DOM tables with a custom GPU-accelerated WebGL canvas and a low-latency Rust/Node WebSocket ingestion layer.',
    metrics: [
      { label: 'Frame Rate', value: '60 FPS Locked' },
      { label: 'Tick Latency', value: '< 8ms' },
      { label: 'Daily Volume', value: '$420M+' },
    ],
    stack: ['React 19', 'Three.js', 'WebGL', 'Node.js', 'Redis'],
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'nexus-core',
    title: 'Nexus Core AI',
    client: 'Nexus Logistics Group',
    category: 'AI & Automation',
    year: '2026',
    summary: 'Autonomous supply-chain document parser and natural-language operations assistant across 14 warehouses.',
    challenge: 'Operations teams spent 60+ hours weekly manually cross-checking customs manifests, invoices, and shipment delays.',
    solution: 'Engineered a multi-agent RAG pipeline integrated directly with their ERP, automating 88% of manifest verification with human-in-the-loop review.',
    metrics: [
      { label: 'Manual Ops Cut', value: '-74%' },
      { label: 'Doc Accuracy', value: '99.4%' },
      { label: 'ROI Payback', value: '6 Weeks' },
    ],
    stack: ['Python', 'OpenAI / Claude', 'PostgreSQL', 'React', 'Docker'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'kinetix-studio',
    title: 'Kinetix Spatial Configurator',
    client: 'Kinetix Hardware',
    category: 'WebGL & 3D',
    year: '2025',
    summary: 'Interactive browser-based 3D hardware configurator with real-time PBR lighting and instant CAD-to-web compression.',
    challenge: 'Enterprise buyers struggled to visualize modular server racks from static PDF spec sheets before placing six-figure orders.',
    solution: 'Built a lightweight Three.js configurator with custom GLSL shaders and Draco mesh compression that loads in under 1.4 seconds on mobile and desktop.',
    metrics: [
      { label: 'Quote Requests', value: '+46%' },
      { label: 'Initial Load', value: '1.3s' },
      { label: 'Avg. Session', value: '4m 50s' },
    ],
    stack: ['Three.js', 'GLSL', 'TypeScript', 'Tailwind CSS', 'Cloudflare'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'veltro-cloud-mesh',
    title: 'Aether Cloud Mesh',
    client: 'Aether SaaS Infrastructure',
    category: 'Fintech & SaaS',
    year: '2025',
    summary: 'Multi-region Kubernetes orchestration control plane and real-time telemetry observability suite.',
    challenge: 'Growing SaaS platform suffered from cascading regional outages and blind spots during traffic surges.',
    solution: 'Architected automated blue/green deployments, distributed tracing, and self-healing AWS clusters with zero-downtime failover.',
    metrics: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Deploy Speed', value: '2.5 mins' },
      { label: 'Cloud Spend', value: '-31%' },
    ],
    stack: ['AWS', 'Kubernetes', 'Terraform', 'Go', 'React'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'synth-voice-ops',
    title: 'Veridian Voice & Support Agent',
    client: 'Veridian Health Tech',
    category: 'AI & Automation',
    year: '2026',
    summary: 'HIPAA-compliant patient scheduling and triage assistant with sub-500ms voice response latency.',
    challenge: 'High call-center wait times led to a 28% drop-off in appointment bookings during peak clinic hours.',
    solution: 'Built a streaming voice and chat orchestration layer with strict PII redaction and direct EHR calendar syncing.',
    metrics: [
      { label: 'Wait Time', value: '0 Sec' },
      { label: 'Bookings Up', value: '+34%' },
      { label: 'Compliance', value: 'HIPAA / SOC2' },
    ],
    stack: ['Node.js', 'WebSockets', 'Vector DB', 'TypeScript', 'AWS'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'monolith-commerce',
    title: 'Monolith Flagship Storefront',
    client: 'Monolith Audio',
    category: 'WebGL & 3D',
    year: '2025',
    summary: 'Headless commerce flagship combining editorial storytelling with interactive acoustic wave shaders.',
    challenge: 'Standard e-commerce theme felt generic and failed to communicate the engineering craftsmanship behind their ₹80,000+ studio monitors.',
    solution: 'Crafted a bespoke headless storefront with reactive audio-visual shaders and instant edge-cached checkout.',
    metrics: [
      { label: 'Conversion Lift', value: '+31%' },
      { label: 'Lighthouse Perf', value: '99 / 100' },
      { label: 'Bounce Rate', value: '-38%' },
    ],
    stack: ['Next.js', 'WebGL', 'Tailwind CSS', 'Stripe', 'GraphQL'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    featured: false,
  },
];

const categories = ['All Projects', 'Fintech & SaaS', 'WebGL & 3D', 'AI & Automation'];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [activeProject, setActiveProject] = useState(null);

  const featuredProject = projectsData.find((p) => p.featured);
  const filteredProjects =
    selectedCategory === 'All Projects'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#17191D] text-ivory pt-36 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime mb-4">
              Selected Work & Case Studies
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-ivory leading-[1.1] mb-6">
              Systems shipped to production, measured by real impact.
            </h1>
            <p className="text-steel text-base sm:text-lg leading-relaxed">
              Click any case study below to inspect the engineering problem, architectural decisions, and verified production metrics.
            </p>
          </div>

          {/* Quick Archive Stats */}
          <div className="flex gap-8 border-l border-steel/20 pl-6 shrink-0">
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-lime block">24+</span>
              <span className="text-xs font-mono uppercase text-steel">Systems Shipped</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-ivory block">99.9%</span>
              <span className="text-xs font-mono uppercase text-steel">Avg. Uptime</span>
            </div>
          </div>
        </div>

        {/* Flagship Spotlight Card */}
        {featuredProject && (
          <div
            onClick={() => setActiveProject(featuredProject)}
            className="mb-20 rounded-3xl bg-[#111317] border border-steel/20 hover:border-lime/50 transition-all duration-300 overflow-hidden cursor-pointer group shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 h-[320px] sm:h-[440px] relative overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute top-5 left-5 px-3 py-1 bg-graphite/90 backdrop-blur-md border border-lime/40 rounded-full text-[11px] font-mono uppercase tracking-wider text-lime">
                  Flagship Case Study • {featuredProject.year}
                </div>
              </div>

              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-steel mb-3">
                    <span>{featuredProject.client}</span>
                    <span className="text-lime">{featuredProject.category}</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold text-ivory mb-4 group-hover:text-lime transition-colors">
                    {featuredProject.title}
                  </h2>
                  <p className="text-steel text-sm sm:text-base leading-relaxed mb-8">
                    {featuredProject.summary}
                  </p>

                  {/* Spotlight Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {featuredProject.metrics.map((m, idx) => (
                      <div key={idx} className="bg-[#17191D] p-3.5 rounded-xl border border-steel/15">
                        <span className="text-base sm:text-xl font-bold font-mono text-lime block">
                          {m.value}
                        </span>
                        <span className="text-[10px] font-mono uppercase text-steel">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-steel/15">
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.stack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[#17191D] text-steel border border-steel/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-mono font-semibold text-lime group-hover:translate-x-1 transition-transform">
                    Inspect Build <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-steel/20">
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all border ${
                    isSelected
                      ? 'bg-lime text-graphite font-bold border-lime'
                      : 'bg-[#111317] text-steel border-steel/20 hover:border-lime/40 hover:text-ivory'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono text-steel">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
        </div>

        {/* Filterable Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="rounded-2xl bg-[#111317] border border-steel/15 hover:border-lime/50 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 text-[11px] font-mono px-2.5 py-1 rounded bg-graphite/90 text-lime border border-lime/30">
                    {project.category}
                  </span>
                  <span className="absolute top-4 right-4 text-[11px] font-mono px-2.5 py-1 rounded bg-graphite/90 text-steel">
                    {project.year}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-xs font-mono text-steel block mb-1">
                    {project.client}
                  </span>
                  <h3 className="text-xl font-bold text-ivory mb-3 group-hover:text-lime transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight size={18} className="text-steel group-hover:text-lime transition-colors" />
                  </h3>
                  <p className="text-sm text-steel leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-steel/15 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#17191D] text-steel border border-steel/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-lime font-semibold">
                  Read Case &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Engineering Standards & CTA */}
        <div className="mt-28 pt-16 border-t border-steel/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#111317] border border-steel/20 rounded-3xl p-8 sm:p-12">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono uppercase tracking-widest text-lime block mb-3">
                // READY FOR YOUR BUILD?
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-ivory mb-4">
                Want your product featured in our next case study?
              </h2>
              <p className="text-steel text-sm sm:text-base max-w-2xl leading-relaxed">
                Whether you are launching an MVP from scratch or re-architecting a high-traffic platform, our engineering team is ready to scope your build.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime text-graphite font-bold font-mono text-xs uppercase tracking-wider rounded-xl hover:bg-lime/90 transition-all shadow-[0_0_25px_rgba(132,204,22,0.3)]"
              >
                Start Your Project <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Case Study Inspector Modal */}
      {activeProject && (
        <div
          onClick={() => setActiveProject(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111317] border border-steel/30 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl my-8"
          >
            {/* Modal Banner Image */}
            <div className="h-60 sm:h-72 relative">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-[#111317]/40 to-transparent"></div>
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-graphite/90 border border-steel/30 text-ivory hover:text-lime hover:border-lime flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-1">
                  {activeProject.client} • {activeProject.category}
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-ivory">
                  {activeProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4">
                {activeProject.metrics.map((m, idx) => (
                  <div key={idx} className="bg-[#17191D] p-4 rounded-xl border border-steel/15">
                    <span className="text-lg sm:text-2xl font-bold font-mono text-lime block">
                      {m.value}
                    </span>
                    <span className="text-[11px] font-mono uppercase text-steel">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#17191D]/70 p-5 rounded-2xl border border-steel/15">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-steel mb-2">
                    01 / The Bottleneck
                  </h4>
                  <p className="text-sm text-ivory/90 leading-relaxed">
                    {activeProject.challenge}
                  </p>
                </div>

                <div className="bg-[#17191D]/70 p-5 rounded-2xl border border-lime/20">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-lime mb-2">
                    02 / Veltro Architecture
                  </h4>
                  <p className="text-sm text-ivory/90 leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              {/* Stack & CTA */}
              <div className="pt-4 border-t border-steel/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {activeProject.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-[#17191D] text-steel border border-steel/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/contact?ref=${activeProject.id}`}
                  onClick={() => setActiveProject(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-lime text-graphite font-semibold text-sm rounded-xl hover:bg-lime/90 transition-colors shrink-0"
                >
                  Build Something Similar <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
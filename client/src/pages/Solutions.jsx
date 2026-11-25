import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Zap, Shield, Cpu, Activity, Layers, Server } from 'lucide-react';

const solutionsData = [
  {
    id: 'fintech',
    tabName: 'Fintech & Web3',
    title: 'High-Frequency Financial Platforms & WebGL Trading UIs',
    subtitle: 'Engineered for sub-millisecond execution, ironclad security, and real-time data visualization.',
    description:
      'Traditional banking and crypto platforms often suffer from latency and clunky interfaces. We engineer high-performance WebGL dashboards and secure backend ledgers capable of handling massive transaction volumes without dropping a frame.',
    metrics: [
      { label: 'Latency Reduction', value: '< 12ms' },
      { label: 'Uptime Guarantee', value: '99.99%' },
      { label: 'Transaction Security', value: 'SOC2 Ready' },
    ],
    features: [
      'Real-time WebSocket data feeds with zero UI freezing',
      'Custom WebGL charts and 3D portfolio visualizers',
      'Encrypted transaction pipelines and audit logs',
      'Automated failover and multi-region cloud deployment',
    ],
    stack: ['React 19', 'Three.js', 'Node.js', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'ai-enterprises',
    tabName: 'AI & SaaS Scaleups',
    title: 'Autonomous Enterprise Workflows & RAG Knowledge Systems',
    subtitle: 'Scaling fast-growing SaaS products with robust microservices and intelligent automation.',
    description:
      'When your user base explodes from hundreds to hundreds of thousands, your infrastructure needs to scale instantly. We integrate custom LLM pipelines, vector databases, and resilient cloud architectures into your product.',
    metrics: [
      { label: 'Query Speedup', value: '4.2x' },
      { label: 'Ops Cost Saved', value: '35%' },
      { label: 'API Response', value: '180ms' },
    ],
    features: [
      'Custom RAG pipelines trained on internal company knowledge',
      'Automated customer support routing and document extraction',
      'Scalable multi-tenant database architecture',
      'Token usage caching and latency optimization',
    ],
    stack: ['OpenAI / Claude', 'Python', 'LangChain', 'Vector DB', 'AWS'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'ecommerce',
    tabName: 'High-End E-Commerce',
    title: 'Immersive Product Showcases & Headless Commerce',
    subtitle: 'Blazing-fast storefronts paired with interactive 3D product configurations.',
    description:
      'Standard template stores lose high-value buyers. We build custom headless commerce experiences featuring interactive 3D product models, lightning-fast static generation, and frictionless checkout flows.',
    metrics: [
      { label: 'Conversion Lift', value: '+28%' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Mobile Bounce Rate', value: '-42%' },
    ],
    features: [
      'Interactive 3D product models right in the browser',
      'Headless Shopify / MedusaJS backend integration',
      'Optimized global CDN delivery for instant asset loading',
      'Custom micro-interactions and high-end typography',
    ],
    stack: ['Next.js', 'Tailwind CSS', 'Three.js', 'Stripe API', 'GraphQL'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'infrastructure',
    tabName: 'DevOps & Security',
    title: 'Zero-Downtime Infrastructure & Automated CI/CD',
    subtitle: 'Bulletproof cloud environments designed to withstand high-traffic spikes and security audits.',
    description:
      'Eliminate server anxiety. We design automated containerized deployment pipelines, implement strict IAM security protocols, and configure 24/7 monitoring so your engineers can focus purely on shipping code.',
    metrics: [
      { label: 'Deployment Time', value: '< 3 mins' },
      { label: 'Security Score', value: 'A+' },
      { label: 'Downtime Incidents', value: '0' },
    ],
    features: [
      'Docker containerization and Kubernetes orchestration',
      'Automated GitHub Actions CI/CD test and deploy pipelines',
      'Cloudflare DDoS protection and WAF configuration',
      'Real-time metrics logging and automated Slack alerts',
    ],
    stack: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Cloudflare'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
  },
];

const roadmapSteps = [
  { step: '01', title: 'Technical Audit & Blueprint', desc: 'We analyze your current bottlenecks, security posture, and performance metrics.' },
  { step: '02', title: 'Architecture Prototyping', desc: 'Building high-fidelity interactive wireframes and scalable backend schemas.' },
  { step: '03', title: 'Agile Sprint Execution', desc: 'Bi-weekly shipping cycles with continuous staging deployments and reviews.' },
  { step: '04', title: 'Zero-Downtime Handover', desc: 'Smooth production migration, team training, and 24/7 monitoring setup.' },
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(0);
  const solution = solutionsData[activeTab];

  return (
    <div className="min-h-screen bg-[#17191D] text-ivory pt-36 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime mb-4">
            Industry Solutions
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-ivory leading-[1.1] mb-6">
            Tailored architectures for your exact market vertical.
          </h1>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            Explore how we solve complex technical bottlenecks across high-stakes industries with precision engineering.
          </p>
        </div>

        {/* Interactive Industry Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-steel/20 pb-6">
          {solutionsData.map((item, index) => {
            const isActive = index === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-lime text-graphite font-bold border-lime shadow-[0_0_20px_rgba(132,204,22,0.3)]'
                    : 'bg-[#111317] text-steel border-steel/20 hover:border-lime/40 hover:text-ivory'
                }`}
              >
                {item.tabName}
              </button>
            );
          })}
        </div>

        {/* Active Solution Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#111317] border border-steel/20 rounded-3xl p-8 sm:p-12 shadow-2xl">
          
          {/* Left: Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-block text-xs font-mono uppercase tracking-widest text-lime mb-3 px-3 py-1 bg-lime/10 border border-lime/30 rounded-full">
                // {solution.tabName.toUpperCase()}
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-ivory mb-4 leading-tight">
                {solution.title}
              </h2>
              <p className="text-lime text-sm sm:text-base font-mono mb-6">
                {solution.subtitle}
              </p>
              <p className="text-steel text-sm sm:text-base leading-relaxed mb-8">
                {solution.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-steel/15">
                {solution.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="bg-[#17191D] p-4 rounded-xl border border-steel/15">
                    <span className="block text-xl sm:text-2xl font-bold font-mono text-lime mb-1">
                      {m.value}
                    </span>
                    <span className="text-[11px] font-mono uppercase text-steel block">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-steel mb-3">
                  Core Engineering Highlights
                </h4>
                {solution.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 text-sm text-ivory/85">
                    <CheckCircle2 size={16} className="text-lime shrink-0 mt-1" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action & Stack */}
            <div className="pt-6 border-t border-steel/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-[11px] font-mono uppercase text-steel block mb-2">
                  Primary Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {solution.stack.map((s, sIdx) => (
                    <span key={sIdx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#17191D] text-steel border border-steel/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={`/contact?solution=${solution.id}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-lime text-graphite font-semibold text-sm rounded-xl hover:bg-lime/90 transition-colors shrink-0"
              >
                Discuss This Solution
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right: Visual Image Showcase */}
          <div className="lg:col-span-5 h-[400px] sm:h-[520px] rounded-2xl overflow-hidden border border-steel/20 relative group">
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-graphite/90 backdrop-blur-md rounded-xl border border-lime/30">
              <span className="text-[10px] font-mono uppercase tracking-wider text-lime block mb-1">
                Verified Architecture v2.4
              </span>
              <p className="text-xs text-ivory font-mono">
                Optimized for maximum speed, security, and enterprise uptime.
              </p>
            </div>
          </div>

        </div>

        {/* NEW SECTION: Proven Migration & Execution Roadmap */}
        <div className="mt-28 pt-20 border-t border-steel/15">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime mb-2">
              Execution Roadmap
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-ivory">
              How we take you from concept to production.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {roadmapSteps.map((r, rIdx) => (
              <div key={rIdx} className="p-6 rounded-2xl bg-[#111317]/70 border border-steel/15 relative">
                <span className="text-3xl font-mono font-bold text-lime/30 absolute top-4 right-4">
                  {r.step}
                </span>
                <span className="text-xs font-mono text-lime uppercase tracking-wider block mb-2">
                  Phase {r.step}
                </span>
                <h3 className="text-lg font-bold text-ivory mb-2">{r.title}</h3>
                <p className="text-xs sm:text-sm text-steel leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NEW SECTION: Unsplash Visual Grid for Infrastructure */}
        <div className="mt-28 pt-20 border-t border-steel/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime mb-2">
                Enterprise Standards
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-ivory">
                Engineered for uncompromising reliability.
              </h2>
            </div>
            <p className="text-steel text-sm max-w-md">
              Every system we deploy is stress-tested against high concurrency, security vulnerabilities, and latency spikes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden border border-steel/15 h-[320px] group">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt="Cloud data center" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/30 to-transparent p-8 flex flex-col justify-end">
                <span className="text-xs font-mono text-lime uppercase tracking-wider mb-1">Global Scale</span>
                <h3 className="text-xl font-bold text-ivory">Multi-Region Cloud Deployment</h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-steel/15 h-[320px] group">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop" 
                alt="Cyber security matrix" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/30 to-transparent p-8 flex flex-col justify-end">
                <span className="text-xs font-mono text-lime uppercase tracking-wider mb-1">Ironclad Defense</span>
                <h3 className="text-xl font-bold text-ivory">SOC2 & Enterprise Security Audits</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
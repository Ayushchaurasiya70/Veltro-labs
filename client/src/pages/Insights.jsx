import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Calendar, Tag } from 'lucide-react';

const articlesData = [
  {
    id: 'scaling-webgl-dashboards',
    title: 'Architecting 60FPS WebGL Financial Dashboards in React 19',
    category: 'Engineering & Performance',
    readTime: '6 min read',
    date: 'Nov 18, 2026',
    summary: 'Why traditional DOM-based tables choke during high-frequency data streams, and how we leverage custom GPU shaders and canvas layers to maintain butter-smooth 60fps.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'production-rag-pipelines',
    title: 'Beyond the Hype: Building Production-Grade RAG Pipelines for Enterprise',
    category: 'AI & Automation',
    readTime: '8 min read',
    date: 'Nov 10, 2026',
    summary: 'A deep architectural dive into vector indexing, chunking strategies, and latency caching when deploying LLMs across 14 enterprise warehouses.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'zero-downtime-kubernetes',
    title: 'Zero-Downtime Blue/Green Deployments on AWS Kubernetes',
    category: 'Cloud DevOps',
    readTime: '5 min read',
    date: 'Oct 29, 2026',
    summary: 'Eliminating deployment anxiety with automated CI/CD pipelines, robust health checks, and seamless traffic shifting using Cloudflare and Terraform.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'headless-commerce-speed',
    title: 'Why Headless Commerce is Replacing Monolithic E-Commerce Themes',
    category: 'Frontend Architecture',
    readTime: '4 min read',
    date: 'Oct 15, 2026',
    summary: 'How decoupling frontend storytelling from backend inventory management boosts conversion rates by 28% and achieves sub-second page loads.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    featured: false,
  },
];

const categories = ['All Articles', 'Engineering & Performance', 'AI & Automation', 'Cloud DevOps', 'Frontend Architecture'];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');

  const filteredArticles =
    selectedCategory === 'All Articles'
      ? articlesData
      : articlesData.filter((a) => a.category === selectedCategory);

  const featuredArticle = articlesData.find((a) => a.featured);

  return (
    <div className="min-h-screen bg-[#17191D] text-ivory pt-36 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime mb-4">
            Veltro Insights & Engineering Blog
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-ivory leading-[1.1] mb-6">
            Technical essays, architectural breakdowns, and studio notes.
          </h1>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            Deep-dives into how our engineering team builds high-performance web applications, custom shaders, and resilient cloud infrastructure.
          </p>
        </div>

        {/* Featured Flagship Article Spotlight */}
        {featuredArticle && selectedCategory === 'All Articles' && (
          <div className="mb-20 rounded-3xl bg-[#111317] border border-steel/20 hover:border-lime/50 transition-all duration-300 overflow-hidden group cursor-pointer shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 h-[300px] sm:h-[400px] relative overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute top-5 left-5 px-3 py-1 bg-graphite/90 backdrop-blur-md border border-lime/40 rounded-full text-[11px] font-mono uppercase tracking-wider text-lime">
                  Featured Paper • {featuredArticle.readTime}
                </div>
              </div>

              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs font-mono text-steel mb-3">
                    <span className="text-lime">{featuredArticle.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar size={13} /> {featuredArticle.date}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-ivory mb-4 group-hover:text-lime transition-colors leading-snug">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-steel text-sm sm:text-base leading-relaxed mb-8">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-steel/15">
                  <span className="text-xs font-mono text-steel flex items-center gap-1.5">
                    <Clock size={14} /> {featuredArticle.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-mono font-semibold text-lime group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-steel/20">
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
            {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} available
          </span>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="rounded-2xl bg-[#111317] border border-steel/15 hover:border-lime/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 text-[11px] font-mono px-2.5 py-1 rounded bg-graphite/90 text-lime border border-lime/30">
                    {article.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-mono text-steel mb-2">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-ivory mb-3 group-hover:text-lime transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-steel leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-steel/15 flex items-center justify-between">
                <span className="text-xs font-mono text-steel">By Veltro Engineering</span>
                <span className="text-xs font-mono text-lime font-semibold inline-flex items-center gap-1">
                  Read &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / Technical Digest CTA */}
        <div className="mt-28 pt-16 border-t border-steel/15">
          <div className="bg-[#111317] border border-steel/20 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-lime/5 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-lime mb-3 inline-block px-3 py-1 bg-lime/10 border border-lime/30 rounded-full">
                // ENGINEERING NEWSLETTER
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-ivory mb-4">
                Get our bi-weekly technical architecture digest.
              </h2>
              <p className="text-steel text-sm sm:text-base mb-8">
                No marketing fluff. Just deep engineering breakdowns, shader tricks, and backend scaling notes delivered straight to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-grow px-4 py-3.5 bg-[#17191D] border border-steel/30 rounded-xl text-ivory text-sm focus:outline-none focus:border-lime font-mono"
                />
                <button
                  type="button"
                  className="px-6 py-3.5 bg-lime text-graphite font-bold font-mono text-xs uppercase tracking-wider rounded-xl hover:bg-lime/90 transition-all shrink-0"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
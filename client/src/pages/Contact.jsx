import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Clock, Copy, Check } from 'lucide-react';

const serviceOptions = [
  { id: 'software-engineering', label: 'Product & Web Engineering' },
  { id: 'interactive-frontend', label: 'Interactive UI & 3D Web' },
  { id: 'ai-systems', label: 'AI & Workflow Automation' },
  { id: 'cloud-devops', label: 'Cloud & Infrastructure' },
  { id: 'audit-sprint', label: 'Architecture / UI Audit' },
];

const budgetRanges = [
  '₹1.5L – ₹3L',
  '₹3L – ₹7L',
  '₹7L – ₹15L',
  '₹15L+ / Retainer',
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState('software-engineering');
  const [selectedBudget, setSelectedBudget] = useState('₹3L – ₹7L');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    timeline: '1 – 2 Months',
    details: '',
  });

  // Auto-select service/solution if user clicked from another page
  useEffect(() => {
    const serviceParam = searchParams.get('service') || searchParams.get('solution');
    const refParam = searchParams.get('ref');

    if (serviceParam) {
      const match = serviceOptions.find((s) => s.id === serviceParam);
      if (match) setSelectedService(match.id);
    }

    if (refParam) {
      setFormData((prev) => ({
        ...prev,
        details: `Interested in building a system similar to ${refParam.replace('-', ' ')}.`,
      }));
    }
  }, [searchParams]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@veltrolabs.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#17191D] text-ivory pt-36 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime mb-4">
            Start a Conversation
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-ivory leading-[1.1] mb-6">
            Tell us what you’re building. We’ll handle the architecture.
          </h1>
          <p className="text-steel text-base sm:text-lg leading-relaxed">
            No sales fluff or generic pitch decks. You’ll speak directly with a principal engineer within 24 hours to scope timeline, stack, and deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Studio Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#111317] border border-steel/20">
              <span className="text-xs font-mono uppercase tracking-wider text-steel block mb-2">
                Direct Engineering Desk
              </span>
              <div className="flex items-center justify-between gap-4">
                <a
                  href="mailto:contact@veltrolabs.com"
                  className="text-lg sm:text-xl font-mono font-semibold text-ivory hover:text-lime transition-colors truncate"
                >
                  contact@veltrolabs.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-[#17191D] border border-steel/20 text-steel hover:text-lime hover:border-lime/40 transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-lime" /> : <Copy size={16} />}
                </button>
              </div>
              {copiedEmail && (
                <span className="text-[11px] font-mono text-lime mt-2 block">
                  Copied to clipboard!
                </span>
              )}
            </div>

            {/* What Happens Next Steps */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111317] border border-steel/20 space-y-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-lime">
                // WHAT HAPPENS AFTER YOU SUBMIT
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <span className="text-xs font-mono font-bold text-lime mt-0.5">01</span>
                  <div>
                    <h4 className="text-sm font-bold text-ivory">Technical Review (Under 24h)</h4>
                    <p className="text-xs text-steel leading-relaxed mt-1">
                      Our lead architect reviews your brief, current product links, or technical requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-xs font-mono font-bold text-lime mt-0.5">02</span>
                  <div>
                    <h4 className="text-sm font-bold text-ivory">30-Min Architecture Call</h4>
                    <p className="text-xs text-steel leading-relaxed mt-1">
                      A focused engineering discussion to align on system design, milestones, and trade-offs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-xs font-mono font-bold text-lime mt-0.5">03</span>
                  <div>
                    <h4 className="text-sm font-bold text-ivory">Fixed Scope & Sprint Plan</h4>
                    <p className="text-xs text-steel leading-relaxed mt-1">
                      You receive a transparent breakdown of deliverables, timeline, and engineering pod allocation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Coordinates */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#111317]/60 border border-steel/15">
                <MapPin size={18} className="text-lime mb-3" />
                <span className="text-xs font-mono text-steel block">Operations</span>
                <span className="text-sm font-semibold text-ivory">India • Global Remote</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#111317]/60 border border-steel/15">
                <Clock size={18} className="text-lime mb-3" />
                <span className="text-xs font-mono text-steel block">Response SLA</span>
                <span className="text-sm font-semibold text-ivory">&lt; 24 Business Hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Brief Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#111317] border border-steel/20 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-lime/10 border border-lime/30 text-lime flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <span className="text-xs font-mono uppercase tracking-widest text-lime">
                    Brief Received
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-ivory">
                    Thanks, {formData.name || 'Partner'}. We’re on it.
                  </h2>
                  <p className="text-sm text-steel leading-relaxed">
                    We have logged your project brief for{' '}
                    <span className="text-ivory font-medium">
                      {serviceOptions.find((s) => s.id === selectedService)?.label}
                    </span>
                    . Expect a direct reply from our engineering lead at{' '}
                    <span className="text-lime font-mono">{formData.email}</span> within 24 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', timeline: '1 – 2 Months', details: '' });
                  }}
                  className="px-6 py-3 rounded-xl bg-[#17191D] border border-steel/30 text-xs font-mono uppercase tracking-wider text-ivory hover:border-lime transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Service Selector Pills */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-steel block mb-3">
                    01 / What do you need help with?
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {serviceOptions.map((service) => {
                      const active = selectedService === service.id;
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setSelectedService(service.id)}
                          className={`px-4 py-2.5 rounded-xl font-mono text-xs transition-all border ${
                            active
                              ? 'bg-lime text-graphite font-bold border-lime'
                              : 'bg-[#17191D] text-steel border-steel/20 hover:border-lime/40 hover:text-ivory'
                          }`}
                        >
                          {service.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range Pills */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-steel block mb-3">
                    02 / Estimated Project Budget (INR)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {budgetRanges.map((budget) => {
                      const active = selectedBudget === budget;
                      return (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setSelectedBudget(budget)}
                          className={`px-3 py-2.5 rounded-xl font-mono text-xs transition-all border text-center ${
                            active
                              ? 'bg-lime/15 text-lime font-semibold border-lime'
                              : 'bg-[#17191D] text-steel border-steel/20 hover:border-steel/40 hover:text-ivory'
                          }`}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-steel block mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Aarav Sharma"
                      className="w-full px-4 py-3.5 bg-[#17191D] border border-steel/25 rounded-xl text-ivory text-sm focus:outline-none focus:border-lime transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-steel block mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="aarav@company.com"
                      className="w-full px-4 py-3.5 bg-[#17191D] border border-steel/25 rounded-xl text-ivory text-sm focus:outline-none focus:border-lime transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-steel block mb-2">
                      Company / Website
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="acme.io"
                      className="w-full px-4 py-3.5 bg-[#17191D] border border-steel/25 rounded-xl text-ivory text-sm focus:outline-none focus:border-lime transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-steel block mb-2">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#17191D] border border-steel/25 rounded-xl text-ivory text-sm focus:outline-none focus:border-lime transition-colors"
                    >
                      <option value="ASAP (< 1 Month)">ASAP (&lt; 1 Month)</option>
                      <option value="1 – 2 Months">1 – 2 Months</option>
                      <option value="2 – 4 Months">2 – 4 Months</option>
                      <option value="Ongoing Retainer">Ongoing Retainer</option>
                    </select>
                  </div>
                </div>

                {/* Project Brief Textarea */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-steel block mb-2">
                    Project Context & Goals *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Briefly describe your product, technical challenges, or target launch date..."
                    className="w-full px-4 py-3.5 bg-[#17191D] border border-steel/25 rounded-xl text-ivory text-sm focus:outline-none focus:border-lime transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-lime text-graphite font-bold font-mono text-xs uppercase tracking-wider rounded-xl hover:bg-lime/90 transition-all shadow-[0_0_25px_rgba(132,204,22,0.3)] flex items-center justify-center gap-2"
                >
                  Submit Project Brief <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
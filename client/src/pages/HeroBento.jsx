import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play } from 'lucide-react';
import ElectricLogo from '../components/ElectricLogo';
import CircularCarousel from '../components/CircularCarousel';
import DitherVeil from '../components/DitherVeil';
import TiltedCard, { TiltedCardLayer } from '../components/TiltedCard';
import CTASection from '../components/CTASection';

const serviceItems = [
  { src: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png', alt: 'Custom Software', title: 'Custom Software', subtitle: 'Enterprise Scale' },
  { src: 'https://cdn-icons-png.flaticon.com/512/2721/2721297.png', alt: 'WebGL Frontend', title: 'WebGL Frontend', subtitle: 'Immersive UI' },
  { src: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png', alt: 'Cloud DevOps', title: 'Cloud DevOps', subtitle: 'AWS / MERN' },
  { src: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png', alt: 'AI Automation', title: 'AI Automation', subtitle: 'Intelligent Workflows' },
  { src: 'https://cdn-icons-png.flaticon.com/512/2099/2099058.png', alt: 'Cyber Security', title: 'Cyber Security', subtitle: 'Secure Architecture' },
];

const techCards = [
  { name: 'React 19 / Vite', category: 'Frontend', top: '12%', left: '8%' },
  { name: 'Three.js / WebGL', category: '3D & Shaders', top: '12%', right: '8%' },
  { name: 'Tailwind CSS', category: 'Styling', top: '45%', left: '4%' },
  { name: 'Node.js / Express', category: 'Backend', top: '45%', right: '4%' },
  { name: 'TypeScript', category: 'Architecture', bottom: '8%', left: '20%' },
  { name: 'AWS / Docker', category: 'Cloud & CI/CD', bottom: '8%', right: '20%' },
];

const caseStudies = [
  { 
    title: "Project Apex", 
    subtitle: "WebGL 3D Financial Platform", 
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "Nexus Core", 
    subtitle: "Autonomous AI Enterprise System", 
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "Veltro Cloud", 
    subtitle: "Distributed Microservices Infrastructure", 
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-graphite text-ivory">
      
      {/* Section 1: Hero & Bento Grid */}
      <section className="min-h-[calc(100vh-80px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT SIDE: Title & Media Preview */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 z-10">
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-ivory leading-[1.05] uppercase font-heading mb-6">
                Technology <br />
                Built Around <br />
                <span className="text-lime">Your Business</span>
              </h1>
              <p className="text-steel text-sm sm:text-base leading-relaxed max-w-sm font-normal">
                We partner with ambitious startups and enterprises to engineer scalable web applications, custom software, and intelligent automation.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link 
                to="/portfolio" 
                className="w-12 h-12 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime hover:bg-lime hover:text-graphite transition-all shrink-0"
              >
                <Play size={20} className="ml-0.5" />
              </Link>
              <div className="text-xs text-steel">
                <span className="text-ivory font-semibold block uppercase font-mono tracking-wider">Explore Case Studies</span>
                <span>Watch how we engineer digital growth</span>
              </div>
            </div>
          </div>

          {/* CENTER: Seamless Electric Logo */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[480px] lg:min-h-[580px]">
            <div 
              className="w-full h-full flex items-center justify-center relative z-10 mix-blend-lighten" 
              style={{ 
                width: '100%', 
                height: '560px', 
                position: 'relative',
                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 76%)',
                maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 76%)'
              }}
            >
              <ElectricLogo
                src="/logo.png"
                color="#000000"
                glowColor="#84cc16"
                scale={0.85}
                strands={6}
                bend={0.7}
                crackle={2}
                arcs={1}
                speed={3}
                interactive={true}
                intensity={1.2}
                glow={0.8}
                thickness={0.5}
                flicker={1}
                fill={0}
                cursorIntensity={0.85}
                cursorRadius={100}
              />
            </div>
          </div>

          {/* RIGHT SIDE: Approved Badge, Text & CTA */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-8 lg:pl-4 z-10">
            <div className="bg-[#111317] border border-steel/20 rounded-2xl p-4 flex items-center gap-4 hover:border-lime/50 transition-all">
              <div className="w-14 h-14 rounded-xl bg-steel/10 overflow-hidden flex items-center justify-center shrink-0 border border-steel/20">
                <span className="text-xs font-mono text-lime font-bold">V1.0</span>
              </div>
              <div className="text-xs text-steel">
                <span className="text-ivory font-semibold block">APPROVED ARCHITECTURE</span>
                <span>Secure, Scalable & High-Performance MERN Stack</span>
              </div>
            </div>

            <div className="text-xs text-steel/80 leading-relaxed font-mono italic">
              "An inspiration for putting the business in the center of development, and not just new technologies."
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Link
                to="/contact"
                className="text-xs font-mono tracking-widest uppercase text-ivory hover:text-lime transition-colors flex items-center gap-2"
              >
                START A PROJECT <ArrowUpRight size={16} className="text-lime" />
              </Link>
              <Link
                to="/contact"
                className="w-12 h-12 rounded-full bg-ivory text-graphite flex items-center justify-center hover:bg-lime transition-all"
              >
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Core Services (3D Orbit Carousel) */}
      <section className="py-24 border-t border-steel/15 bg-[#111317]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-block text-xs font-mono uppercase tracking-widest text-lime mb-3">
            // OUR CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-ivory mb-4">
            Engineered For <span className="text-lime">Scale & Performance</span>
          </h2>
          <p className="text-steel max-w-xl mx-auto text-sm sm:text-base">
            Explore our core technological competencies rotating in real-time 3D space.
          </p>
        </div>
        
        <div className="w-full h-[560px] relative">
          <CircularCarousel
            items={serviceItems}
            preset="orbit"
            intro="rise"
            cardWidth={188}
            aspectRatio={0.75}
            speed={14}
            captions={true}
            gap={0}
            tilt={-16}
          />
        </div>
      </section>

      {/* Section 3: Seamless & Larger Dither Veil Shader with Floating Tech Stack Cards */}
      <section className="relative w-full py-28 bg-graphite overflow-hidden border-t border-steel/15">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-20 mb-8">
          <div className="inline-block text-xs font-mono uppercase tracking-widest text-lime mb-3">
            // ARCHITECTURE & CORE TECH
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-ivory mb-4">
            Powered By <span className="text-lime">Next-Gen Stack</span>
          </h2>
          <p className="text-steel max-w-lg mx-auto text-sm sm:text-base">
            Custom shaders, high-performance web components, and bulletproof backend infrastructure.
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto h-[600px] flex items-center justify-center px-4">
          <div className="w-[360px] h-[440px] sm:w-[460px] sm:h-[540px] rounded-3xl overflow-hidden bg-[#17191D] relative z-10">
            <DitherVeil
              src="https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1400&auto=format&fit=crop"
              pattern="bayer"
              pixelSize={2}
              inkColor="#17191D"
              paperColor="#84cc16"
              revealRadius={220}
              softness={0.6}
              linger={1}
              fit="contain"
              rimColor="#17191D"
              palette="duotone"
              levels={2}
              contrast={1.15}
              brightness={0.04}
              rim={0}
              reverse={false}
              wander={false}
              clickBurst
            />
          </div>

          {techCards.map((tech, index) => (
            <div
              key={index}
              style={{
                top: tech.top,
                bottom: tech.bottom,
                left: tech.left,
                right: tech.right,
              }}
              className="absolute hidden md:flex flex-col gap-1 px-4 py-3 bg-[#111317]/90 backdrop-blur-md border border-lime/30 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-30 min-w-[160px]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-lime">
                  {tech.category}
                </span>
                <span className="w-2 h-2 rounded-full bg-lime"></span>
              </div>
              <span className="text-sm font-semibold text-ivory">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Selected Case Studies (Tilted Cards) */}
      <section className="relative w-full py-28 bg-[#111317]/40 border-t border-steel/15">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <div className="inline-block text-xs font-mono uppercase tracking-widest text-lime mb-3">
            // FEATURED CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-ivory mb-4">
            Crafted With <span className="text-lime">Precision & Depth</span>
          </h2>
          <p className="text-steel max-w-lg mx-auto text-sm sm:text-base">
            Explore our flagship high-performance digital products engineered for industry leaders.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {caseStudies.map((study, index) => (
            <div key={index} className="w-full flex justify-center">
              <TiltedCard
                imageSrc={study.image}
                altText={study.title}
                captionText={study.title}
                containerHeight="360px"
                containerWidth="320px"
                imageHeight="360px"
                imageWidth="320px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                glare={0.4}
                shadow={0.5}
              >
                <TiltedCardLayer depth={30}>
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-graphite/90 backdrop-blur-md rounded-xl border border-lime/30 shadow-lg">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-lime block mb-1">
                      {study.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-ivory">
                      {study.title}
                    </h3>
                  </div>
                </TiltedCardLayer>
              </TiltedCard>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Final CTA Banner */}
      <CTASection />

    </div>
  );
}
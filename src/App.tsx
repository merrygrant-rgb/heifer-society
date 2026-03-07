import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, ArrowLeft, Menu, X, Calendar, Tag, 
  ShoppingBag, Clock, Check, Mail, Instagram, Twitter 
} from 'lucide-react';
import { 
  navigation, heroContent, breakingPoint, 
  whatIsAHeifer, theWork, footer, manifesto
} from './data/site'; { 
  blogPosts, products, services,
  type Product, type CoachingService, type BlogPost
} from './lib/content';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// COMPONENTS
// ============================================

const CurvedDivider = ({ color = '#7B2D3B', opacity = 0.1, height = 80 }: { 
  color?: string; opacity?: number; height?: number;
}) => (
  <div className="curved-divider" style={{ height: `${height}px` }}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: `${height}px` }}>
      <path d="M0,120 L0,60 Q300,0 600,60 T1200,60 L1200,120 Z" fill={color} fillOpacity={opacity} />
    </svg>
  </div>
);

const GoldCurvedLine = ({ className = '' }: { className?: string }) => {
  const lineRef = useRef<SVGPathElement>(null);
  useEffect(() => {
    if (lineRef.current) {
      const length = lineRef.current.getTotalLength();
      gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });
      ScrollTrigger.create({
        trigger: lineRef.current, start: 'top 90%', once: true,
        onEnter: () => gsap.to(lineRef.current, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.out' }),
      });
    }
  }, []);
  return (
    <svg viewBox="0 0 200 30" className={`w-[200px] h-[30px] ${className}`}>
      <path ref={lineRef} d="M10,25 Q100,5 190,25" className="gold-line" style={{ opacity: 0.7 }} />
    </svg>
  );
};

const AnimatedSection = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current, { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }}
      );
    }
  }, [delay]);
  return <div ref={sectionRef} className={className}>{children}</div>;
};

const PillarCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: index * 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', once: true }}
      );
    }
  }, [index]);
  return (
    <div ref={cardRef} className="bg-white/60 border border-oxblood/10 rounded-2xl p-8 min-h-[280px] card-lift">
      <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">{title}</h3>
      <p className="font-sans text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
};

// ============================================
// PRODUCT COMPONENTS
// ============================================

const ProductCard = ({ product, onClick, index }: { product: Product; onClick: () => void; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, delay: index * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', once: true }}
      );
    }
  }, [index]);
  
  return (
    <div ref={cardRef} onClick={onClick} className="group cursor-pointer">
      <div className="bg-gradient-to-br from-cream-dark/80 to-bone/60 rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-card-hover">
        <div className="aspect-square bg-charcoal/5 flex items-center justify-center">
          <ShoppingBag className="w-16 h-16 text-charcoal/20" />
        </div>
        <div className="p-6">
          <span className="text-micro text-oxblood mb-2 block">{product.category.toUpperCase()}</span>
          <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-oxblood transition-colors">{product.title}</h3>
          <p className="font-sans text-sm text-text-secondary mb-4 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl text-charcoal">${product.price}</span>
            {product.compareAtPrice && (
              <span className="font-sans text-sm text-text-muted line-through">${product.compareAtPrice}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// JOURNAL COMPONENTS
// ============================================

const JournalCard = ({ journal, onClick, index }: { journal: BlogPost; onClick: () => void; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, delay: index * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', once: true }}
      );
    }
  }, [index]);
  
  return (
    <div ref={cardRef} onClick={onClick} className="group cursor-pointer">
      <div className="bg-gradient-to-br from-cream-dark/80 to-bone/60 rounded-2xl p-10 min-h-[240px] transition-all duration-300 group-hover:shadow-card-hover">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-micro text-oxblood">{journal.category.toUpperCase()}</span>
          <span className="text-text-muted">·</span>
          <span className="text-micro text-text-muted">{journal.date}</span>
        </div>
        <h3 className="font-serif text-[26px] font-semibold text-charcoal mb-3 leading-tight group-hover:text-oxblood transition-colors duration-300">
          {journal.title}
        </h3>
        <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">{journal.excerpt}</p>
        <span className="inline-flex items-center gap-1 text-oxblood font-medium text-sm link-underline">
          Read <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
};

// ============================================
// COACHING SERVICE COMPONENTS
// ============================================

const ServiceCard = ({ service, onClick, index }: { service: CoachingService; onClick: () => void; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, delay: index * 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', once: true }}
      );
    }
  }, [index]);
  
  return (
    <div ref={cardRef} onClick={onClick} className="group cursor-pointer">
      <div className="bg-white/60 border border-oxblood/10 rounded-2xl p-8 h-full card-lift">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-oxblood" />
          <span className="text-micro text-oxblood">{service.duration}</span>
        </div>
        <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-oxblood transition-colors">{service.title}</h3>
        <p className="font-sans text-sm text-text-secondary mb-6">{service.description}</p>
        <div className="space-y-2 mb-6">
          {service.includes.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-olive" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-charcoal/10">
          <span className="font-serif text-2xl text-charcoal">{service.price}</span>
          <span className="text-oxblood font-medium text-sm link-underline">Learn More</span>
        </div>
      </div>
    </div>
  );
};

// ============================================
// NAVIGATION
// ============================================

type PageType = 'home' | 'journals' | 'journal' | 'shop' | 'work-with-me' | 'manifesto' | 'contact';

const Navigation = ({ currentPage, onNavigate }: { currentPage: string; onNavigate: (page: PageType) => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      onNavigate('home');
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else if (href === '/shop') onNavigate('shop');
    else if (href === '/work-with-me') onNavigate('work-with-me');
    else if (href === '/journals') onNavigate('journals');
    else if (href === '/manifesto') onNavigate('manifesto');
    else if (href === '/contact') onNavigate('contact');
    setMenuOpen(false);
  };
  
  const navItems = [
    { label: 'About', href: '#breaking-point' },
    { label: 'Journal', href: '/journals' },
    { label: 'Shop', href: '/shop' },
    { label: 'Work With Me', href: '/work-with-me' },
    { label: 'Manifesto', href: '/manifesto' },
    { label: 'Contact', href: '/contact' },
  ];
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-[6vw] py-6 flex justify-between items-center bg-bone/90 backdrop-blur-md">
    <button onClick={() => onNavigate('home')} className="hover:opacity-80 transition-opacity">
  <img 
    src="/Heifer Society Logo Only.png" 
    alt="Heifer Society" 
    className="h-8 w-auto"
  />
</button>
      
      <div className="hidden lg:flex items-center gap-6">
        {navItems.map((item) => (
          <button key={item.label} onClick={() => handleNavClick(item.href)}
            className={`text-micro text-charcoal/70 hover:text-charcoal link-underline transition-colors ${
              (item.href === '/shop' && currentPage === 'shop') ||
              (item.href === '/work-with-me' && currentPage === 'work-with-me') ||
              (item.href === '/journals' && currentPage === 'journals') ||
              (item.href === '/manifesto' && currentPage === 'manifesto') ||
              (item.href === '/contact' && currentPage === 'contact')
                ? 'text-oxblood' : ''
            }`}>
            {item.label}
          </button>
        ))}
      </div>
      
      <button className="lg:hidden text-charcoal" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {menuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-bone/98 flex flex-col items-center justify-center gap-8 lg:hidden">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => handleNavClick(item.href)}
              className="font-serif text-3xl text-charcoal hover:text-oxblood transition-colors">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// ============================================
// PAGES
// ============================================

// HOME PAGE
const HomePage = ({ onNavigate }: { onNavigate: (page: PageType) => void }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const curvedShapeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.2 })
        .fromTo('.hero-wordmark', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
        .fromTo('.hero-headline', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.4')
        .fromTo('.hero-subheadline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
        .fromTo('.hero-cta-primary', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .fromTo('.hero-cta-secondary', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.3');
    }, heroRef);
    return () => ctx.revert();
  }, []);
  
  useEffect(() => {
    if (curvedShapeRef.current) {
      gsap.to(curvedShapeRef.current, { y: -80, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 }
      });
    }
  }, []);
  
  return (
    <div className="pt-16">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div ref={curvedShapeRef} className="absolute bottom-0 right-0 w-[60vw] h-[40vh] pointer-events-none">
          <svg viewBox="0 0 600 400" className="w-full h-full">
            <path d="M600,400 L600,200 Q400,100 200,200 T0,300 L0,400 Z" fill="#7B2D3B" fillOpacity="0.08" />
          </svg>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
          <h1 className="hero-headline font-serif text-headline text-charcoal font-semibold mb-8">{heroContent.headline}</h1>
          <p className="hero-subheadline font-sans text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto mb-12 whitespace-pre-line">{heroContent.subheadline}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button onClick={() => document.getElementById('breaking-point')?.scrollIntoView({ behavior: 'smooth' })} className="hero-cta-primary btn-primary">
              {heroContent.ctaPrimary} <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => onNavigate('manifesto')} className="hero-cta-secondary text-charcoal/70 hover:text-charcoal link-underline font-medium transition-colors">
              {heroContent.ctaSecondary}
            </button>
          </div>
        </div>
      </section>
      
      {/* BREAKING POINT */}
      <section id="breaking-point" className="relative">
        <CurvedDivider color="#7B2D3B" opacity={0.1} height={80} />
        <div className="bg-bone py-20 md:py-32 px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="text-micro text-oxblood mb-6 block">{breakingPoint.label}</span>
            <div className="font-sans text-lg md:text-xl text-charcoal leading-[1.8] mb-10 whitespace-pre-line">{breakingPoint.content}</div>
            <button onClick={() => document.getElementById('what-is')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">{breakingPoint.cta}</button>
          </AnimatedSection>
        </div>
      </section>
      
      {/* WHAT IS A HEIFER */}
      <section id="what-is" className="relative">
        <CurvedDivider color="#5A6348" opacity={0.08} height={60} />
        <div className="bg-bone py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-[8vw] items-start">
              <AnimatedSection delay={0}>
                <span className="text-micro text-oxblood mb-4 block">{whatIsAHeifer.label}</span>
                <h2 className="font-serif text-headline-sm text-charcoal mb-8">{whatIsAHeifer.headline}</h2>
                <div className="space-y-6">
                  {whatIsAHeifer.paragraphs.map((para, i) => (
                    <p key={i} className="font-sans text-base text-charcoal leading-relaxed">{para}</p>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="bg-cream-dark rounded-3xl p-8 md:p-12">
                <GoldCurvedLine className="mb-8" />
                <blockquote className="font-serif text-xl md:text-2xl text-charcoal/80 italic leading-relaxed whitespace-pre-line">"{whatIsAHeifer.quote}"</blockquote>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* THE WORK */}
      <section id="work" className="relative">
        <CurvedDivider color="#7B2D3B" opacity={0.08} height={60} />
        <div className="bg-bone py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span className="text-micro text-oxblood mb-4 block">{theWork.label}</span>
              <h2 className="font-serif text-headline-sm text-charcoal">{theWork.headline}</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {theWork.pillars.map((pillar, index) => (
                <PillarCard key={pillar.title} title={pillar.title} description={pillar.description} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* JOURNAL PREVIEW */}
      <section id="journal" className="relative">
        <CurvedDivider color="#5A6348" opacity={0.08} height={60} />
        <div className="bg-bone py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="text-micro text-oxblood mb-4 block">Journal</span>
                <h2 className="font-serif text-headline-sm text-charcoal">Latest Notes</h2>
              </div>
              <button onClick={() => onNavigate('journals')} className="btn-primary text-sm py-3 px-6">
                View All <ArrowRight className="w-4 h-4" />
              </button>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map((journal, index) => (
                <JournalCard 
                  key={journal.id}
                  journal={journal}
                  onClick={() => onNavigate('journal')}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* MANIFESTO CALLOUT */}
      <section id="manifesto-callout" className="relative">
        <div className="relative h-[100px] overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[100px]">
            <path d="M0,0 L0,60 Q300,120 600,60 T1200,60 L1200,0 Z" fill="#EDE9E2" />
          </svg>
        </div>
        <div className="bg-cream-dark py-24 md:py-36 px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-headline-md text-charcoal mb-8">{manifesto.subtitle}</h2>
            <p className="font-sans text-lg md:text-xl text-text-secondary leading-relaxed mb-10">
              The manifesto is for the woman who is done shrinking. Who is ready to take up space without apology.
            </p>
            <button onClick={() => onNavigate('manifesto')} className="btn-primary">Read the Manifesto <ArrowRight className="w-4 h-4" /></button>
          </AnimatedSection>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="relative bg-charcoal">
        <div className="flex justify-center pt-12"><GoldCurvedLine /></div>
        <div className="py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
              {navigation.map((item) => (
                <button key={item.label} onClick={() => {
                  if (item.href.startsWith('#')) { onNavigate('home'); setTimeout(() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' }), 100); }
                  else if (item.href === '/shop') onNavigate('shop');
                  else if (item.href === '/work-with-me') onNavigate('work-with-me');
                  else if (item.href === '/journals') onNavigate('journals');
                  else if (item.href === '/manifesto') onNavigate('manifesto');
                  else if (item.href === '/contact') onNavigate('contact');
                }} className="text-micro text-bone/60 hover:text-bone transition-colors">{item.label}</button>
              ))}
            </div>
            <div className="text-center">
              <p className="font-serif text-xl md:text-2xl text-bone/50 italic">"{footer.tagline}"</p>
            </div>
            <div className="mt-12 pt-8 border-t border-bone/10 text-center">
              <p className="font-mono text-xs text-bone/40 tracking-wider">{footer.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// JOURNALS LIST PAGE
const JournalsPage = ({ onNavigate, onSelectJournal }: { onNavigate: (page: PageType) => void; onSelectJournal: (slug: string) => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo('.journals-header', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
    gsap.fromTo('.journal-item', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2 });
  }, []);
  
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-text-secondary hover:text-charcoal transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        
        <div className="journals-header mb-16">
          <span className="text-micro text-oxblood mb-4 block">Journal</span>
          <h1 className="font-serif text-headline-sm text-charcoal">All Notes</h1>
        </div>
        
        <div className="space-y-8">
          {blogPosts.map((journal) => (
            <div 
              key={journal.id}
              className="journal-item group cursor-pointer border-b border-charcoal/10 pb-8"
              onClick={() => onSelectJournal(journal.slug)}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-micro text-oxblood">{journal.category.toUpperCase()}</span>
                <span className="text-text-muted">·</span>
                <span className="text-micro text-text-muted flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {journal.date}
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-2 group-hover:text-oxblood transition-colors">
                {journal.title}
              </h2>
              <p className="font-sans text-text-secondary mb-4">{journal.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-oxblood font-medium text-sm link-underline">
                Read <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// SINGLE JOURNAL PAGE
const JournalPage = ({ slug, onBack }: { slug: string; onBack: () => void }) => {
  const journal = blogPosts.find(j => j.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo('.journal-content', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
  }, []);
  
  if (!journal) {
    return (
      <div className="pt-24 pb-20 px-6 text-center">
        <p className="text-text-secondary">Journal not found.</p>
        <button onClick={onBack} className="btn-primary mt-4">Go Back</button>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-text-secondary hover:text-charcoal transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </button>
        
        <article className="journal-content">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-micro text-oxblood flex items-center gap-1">
              <Tag className="w-3 h-3" /> {journal.category.toUpperCase()}
            </span>
            <span className="text-text-muted">·</span>
            <span className="text-micro text-text-muted flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {journal.date}
            </span>
          </div>
          
          <h1 className="font-serif text-headline-sm text-charcoal mb-8">
            {journal.title}
          </h1>
          
          <div className="prose whitespace-pre-line">
            {journal.content}
          </div>
        </article>
        
        <div className="mt-16 pt-12 border-t border-charcoal/10">
          <h3 className="font-serif text-xl text-charcoal mb-6">More Notes</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {blogPosts
              .filter(j => j.id !== journal.id)
              .slice(0, 2)
              .map(j => (
                <div 
                  key={j.id}
                  className="cursor-pointer group"
                  onClick={() => onBack()}
                >
                  <span className="text-micro text-oxblood mb-2 block">{j.category.toUpperCase()}</span>
                  <h4 className="font-serif text-lg text-charcoal group-hover:text-oxblood transition-colors">
                    {j.title}
                  </h4>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// SHOP PAGE
const ShopPage = ({ onNavigate }: { onNavigate: (page: PageType) => void }) => {
  const [productsList] = useState<Product[]>(products);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo('.shop-header', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
    gsap.fromTo('.product-card', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2 });
  }, []);
  
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-text-secondary hover:text-charcoal transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        
        <div className="shop-header mb-16">
          <span className="text-micro text-oxblood mb-4 block">Shop</span>
          <h1 className="font-serif text-headline-sm text-charcoal mb-4">The Collection</h1>
          <p className="font-sans text-text-secondary max-w-xl">Minimal pieces for the woman who handles her own. Designed with intention. Made to last.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsList.map((product, index) => (
            <div key={product._id} className="product-card">
              <ProductCard product={product} onClick={() => {}} index={index} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center py-12 bg-cream-dark rounded-2xl">
          <p className="font-serif text-lg text-charcoal/70 italic mb-4">More pieces coming soon.</p>
          <p className="font-sans text-sm text-text-secondary">Sign up for early access to new drops.</p>
        </div>
      </div>
    </div>
  );
};

// WORK WITH ME PAGE
const WorkWithMePage = ({ onNavigate }: { onNavigate: (page: PageType) => void }) => {
  const [servicesList] = useState<CoachingService[]>(services);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo('.work-header', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
    gsap.fromTo('.service-card', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out', delay: 0.2 });
  }, []);
  
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-text-secondary hover:text-charcoal transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        
        <div className="work-header mb-16">
          <span className="text-micro text-oxblood mb-4 block">Work With Me</span>
          <h1 className="font-serif text-headline-sm text-charcoal mb-4">Coaching & Training</h1>
          <p className="font-sans text-text-secondary max-w-2xl">
            For the woman ready to stop shrinking and start taking up space. Private coaching 
            designed to build boundaries, clarity, and unshakable confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {servicesList.map((service, index) => (
            <div key={service._id} className="service-card">
              <ServiceCard service={service} onClick={() => {}} index={index} />
            </div>
          ))}
        </div>
        
        <div className="bg-cream-dark rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl text-charcoal mb-4">Not sure which option is right?</h2>
            <p className="font-sans text-text-secondary mb-6">
              Let's have a conversation. No pressure, no sales pitch. Just clarity on what you need.
            </p>
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// MANIFESTO PAGE
const ManifestoPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo('.manifesto-header', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
    gsap.fromTo('.manifesto-section', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out', delay: 0.3 });
  }, []);
  
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-text-secondary hover:text-charcoal transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        
        <div className="manifesto-header text-center mb-16">
          <span className="text-micro text-oxblood mb-4 block">Manifesto</span>
          <h1 className="font-serif text-headline-sm text-charcoal mb-4">{manifesto.title}</h1>
          <p className="font-serif text-2xl text-charcoal/70 italic">{manifesto.subtitle}</p>
        </div>
        
        <div className="space-y-12">
          {manifesto.sections.map((section, index) => (
            <div key={index} className="manifesto-section">
              <h2 className="font-serif text-2xl text-charcoal mb-4">{section.heading}</h2>
              <div className="font-sans text-base text-text-secondary leading-relaxed whitespace-pre-line">{section.content}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-12 border-t border-charcoal/10 text-center">
          <p className="font-serif text-xl text-charcoal/50 italic">"{footer.tagline}"</p>
        </div>
      </div>
    </div>
  );
};

// CONTACT PAGE
const ContactPage = ({ onBack }: { onBack: () => void }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo('.contact-content', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-text-secondary hover:text-charcoal transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        
        <div className="contact-content">
          <div className="text-center mb-12">
            <span className="text-micro text-oxblood mb-4 block">Contact</span>
            <h1 className="font-serif text-headline-sm text-charcoal mb-4">Write to Us.</h1>
            <p className="font-sans text-text-secondary">Collaborations, questions, or just a note—our inbox is open.</p>
          </div>
          
          {submitted ? (
            <div className="text-center py-12 bg-cream-dark rounded-2xl">
              <h2 className="font-serif text-2xl text-charcoal mb-4">Thank You</h2>
              <p className="text-text-secondary">Your message has been sent. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-micro text-text-secondary block mb-2">NAME</label>
                <input type="text" required value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal focus:outline-none focus:border-oxblood transition-colors" />
              </div>
              <div>
                <label className="text-micro text-text-secondary block mb-2">EMAIL</label>
                <input type="email" required value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal focus:outline-none focus:border-oxblood transition-colors" />
              </div>
              <div>
                <label className="text-micro text-text-secondary block mb-2">MESSAGE</label>
                <textarea required rows={5} value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal focus:outline-none focus:border-oxblood transition-colors resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">Send Message <ArrowRight className="w-4 h-4" /></button>
            </form>
          )}
          
          <div className="mt-16 pt-12 border-t border-charcoal/10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="mailto:hello@heifersociety.com" className="flex items-center gap-2 text-charcoal hover:text-oxblood transition-colors">
                <Mail className="w-5 h-5" /> hello@heifersociety.com
              </a>
              <a href="https://instagram.com/heifersociety" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-charcoal hover:text-oxblood transition-colors">
                <Instagram className="w-5 h-5" /> Instagram
              </a>
              <a href="https://twitter.com/heifersociety" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-charcoal hover:text-oxblood transition-colors">
                <Twitter className="w-5 h-5" /> Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// MAIN APP
// ============================================

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'journals' | 'journal' | 'shop' | 'work-with-me' | 'manifesto' | 'contact'>('home');
  const [selectedJournalSlug, setSelectedJournalSlug] = useState<string>('');
  
  const navigate = (page: 'home' | 'journals' | 'journal' | 'shop' | 'work-with-me' | 'manifesto' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  const selectJournal = (slug: string) => {
    setSelectedJournalSlug(slug);
    setCurrentPage('journal');
    window.scrollTo(0, 0);
  };
  
  const goBackFromJournal = () => {
    setCurrentPage('journals');
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="relative bg-bone min-h-screen">
      <div className="grain-overlay" />
      <Navigation currentPage={currentPage} onNavigate={(href) => {
        if (href === 'home') setCurrentPage('home');
        else if (href === 'journals') setCurrentPage('journals');
        else if (href === 'shop') setCurrentPage('shop');
        else if (href === 'work-with-me') setCurrentPage('work-with-me');
        else if (href === 'manifesto') setCurrentPage('manifesto');
        else if (href === 'contact') setCurrentPage('contact');
      }} />
      
      {currentPage === 'home' && <HomePage onNavigate={navigate} />}
      {currentPage === 'journals' && <JournalsPage onNavigate={navigate} onSelectJournal={selectJournal} />}
      {currentPage === 'journal' && <JournalPage slug={selectedJournalSlug} onBack={goBackFromJournal} />}
      {currentPage === 'shop' && <ShopPage onNavigate={navigate} />}
      {currentPage === 'work-with-me' && <WorkWithMePage onNavigate={navigate} />}
      {currentPage === 'manifesto' && <ManifestoPage onBack={() => setCurrentPage('home')} />}
      {currentPage === 'contact' && <ContactPage onBack={() => setCurrentPage('home')} />}
    </div>
  );
}

export default App;

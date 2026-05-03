import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

type Work = {
  index: string
  title: string
  company: string
  description: string
  year: string
  accent: string
  href: string | null
  external?: boolean
  cta: string
}

const works: Work[] = [
  {
    index: '01',
    title: 'Payments: Bulk, Maker-Checker, Off-ramp',
    company: 'Gnosis Business',
    description: 'Designing trust into high-stakes financial workflows — bulk payment infrastructure and approval systems powering $1B+ in transactions.',
    year: '2022–Present',
    accent: '#DDD5C8',
    href: '/work/payments',
    cta: 'View case study →',
  },
  {
    index: '02',
    title: 'Freelancer Payments & Invoicing',
    company: 'Gnosis Business',
    description: 'Payments and invoicing product built from scratch for a new user segment — focused on clarity and ease of use.',
    year: '2023–2024',
    accent: '#D5CFC8',
    href: null,
    cta: 'Coming soon',
  },
  {
    index: '03',
    title: 'AI Chatbot Platform',
    company: 'Noodle Factory',
    description: 'Making AI feel human at institutional scale — conversational UI, admin console, and embeddable widgets for educational institutions.',
    year: '2019–2022',
    accent: '#CED8CE',
    href: '/works/noodle-factory-chatbot',
    cta: 'View case study →',
  },
  {
    index: '04',
    title: 'Branding & Website Design',
    company: 'PuzzlePros',
    description: 'Full brand identity and website design for a Singapore-based puzzle company.',
    year: '2023',
    accent: '#D8D0C5',
    href: 'https://puzzlepros.sg',
    external: true,
    cta: 'Visit site ↗',
  },
]

function WorkCard({ work }: { work: Work }) {
  const card = (
    <div className="group block">
      {/* Card image */}
      <div className="card-image-wrap mb-5 aspect-[4/3]">
        <div
          className="card-image-inner absolute inset-0 flex items-start p-7"
          style={{ backgroundColor: work.accent }}
        >
          <span
            className="font-display text-[#1C1C1A] opacity-[0.14] select-none leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            {work.index}
          </span>
        </div>

        {/* Hover overlay — gradient from dark bottom, fading up */}
        <div className="card-overlay">
          <div className="card-overlay-body">
            <p className="text-xs tracking-[0.18em] uppercase text-white/50 mb-3">{work.company}</p>
            <h3
              className="font-display italic text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(1.25rem, 2vw, 1.7rem)' }}
            >
              {work.title}
            </h3>
            <span className={`text-xs tracking-[0.15em] uppercase ${work.href ? 'text-[#C4A882]' : 'text-white/35 not-italic'}`}>
              {work.cta}
            </span>
          </div>
        </div>
      </div>

      {/* Below card */}
      <p className="text-sm text-[#999] mb-1.5">{work.company}</p>
      <h3
        className="font-display text-[#1C1C1A] leading-tight group-hover:opacity-60 transition-opacity duration-400"
        style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
      >
        {work.title}
      </h3>
    </div>
  )

  if (!work.href) return <div className="opacity-70">{card}</div>
  if (work.external) return <a href={work.href} target="_blank" rel="noopener noreferrer">{card}</a>
  return <Link href={work.href}>{card}</Link>
}

export default function Home() {
  return (
    <div className="page-enter">
      {/* Hero — Jules studio style */}
      <section className="pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="hero-1 mb-10">
          <span className="inline-block text-[11px] tracking-[0.22em] text-[#999] uppercase border border-[#DEDAD4] px-4 py-2 whitespace-nowrap">
            Product Designer
          </span>
        </div>

        <h1
          className="hero-2 font-display text-[#1C1C1A] leading-[1.0] tracking-tight mb-12"
          style={{ fontSize: 'clamp(3.8rem, 9vw, 8rem)' }}
        >
          Hello, I'm<br />
          <em>Prateeksha.</em>
        </h1>

        <div className="hero-3 flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-5xl">
          <p
            className="text-[#666] leading-relaxed max-w-xs"
            style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}
          >
            8+ years designing fintech and SaaS products
            that feel calm, clear, and effortless.
          </p>
          <div className="hero-4 flex items-center gap-7 flex-wrap shrink-0">
            <a
              href="#works"
              className="text-sm tracking-wide px-7 py-3.5 border border-[#1C1C1A] text-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white transition-colors duration-300"
            >
              See my work ↓
            </a>
            <Link
              href="/about"
              className="text-sm text-[#999] hover:text-[#1C1C1A] transition-colors duration-300 link-underline"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="px-6 md:px-12 max-w-7xl mx-auto pb-32 pt-12">
        <ScrollReveal className="mb-14">
          <span className="text-[11px] tracking-[0.28em] text-[#999] uppercase">Selected Works</span>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-18">
          {works.map((work, i) => (
            <ScrollReveal key={work.index} delay={i * 100}>
              <WorkCard work={work} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Availability */}
      <ScrollReveal>
        <section className="border-t border-[#EDEAE4] px-6 md:px-12 py-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-display text-[#1C1C1A]" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}>
            Open to IC lead and founding designer roles.
          </p>
          <Link
            href="/contact"
            className="text-sm text-[#999] hover:text-[#1C1C1A] transition-colors duration-300 link-underline shrink-0"
          >
            Let's talk →
          </Link>
        </section>
      </ScrollReveal>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Works — Prateeksha',
  description: 'Selected case studies in fintech, AI, branding, and SaaS product design.',
}

type Work = {
  index: string
  title: string
  company: string
  description: string
  year: string
  tags: string[]
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
    description: 'Designing trust into high-stakes financial workflows — bulk payment infrastructure and approval systems powering $1B+ in transactions across 200+ businesses.',
    year: '2022–Present',
    tags: ['Fintech', 'Enterprise', 'Complex Workflows'],
    accent: '#DDD5C8',
    href: '/work/payments',
    cta: 'View case study →',
  },
  {
    index: '02',
    title: 'Freelancer Payments & Invoicing',
    company: '',
    description: 'Designed a payments and invoicing product from scratch for freelancers — simplified UX for a new user segment with a focus on clarity and ease of use.',
    year: '2023–2024',
    tags: ['Fintech', '0→1', 'Payments'],
    accent: '#D5CFC8',
    href: '/work/freelancer-payments',
    cta: 'View case study →',
  },
  {
    index: '03',
    title: 'Corporate Visa Card',
    company: 'HQ.xyz / Gnosis Business',
    description: 'Designing a premium business card experience — physical card design, issuance flows, and a full spend management dashboard.',
    year: '2024',
    tags: ['Fintech', 'Card Product', 'Physical Design'],
    accent: '#C8C4BE',
    href: '/work/corporate-visa-card',
    cta: 'View case study →',
  },
  {
    index: '04',
    title: 'PuzzlePros',
    company: 'Brand & Website',
    description: 'Full brand identity and website design for a Singapore-based puzzle company — visual identity, art direction, and a customer-facing website.',
    year: '2024',
    tags: ['Branding', 'Web Design', 'Identity'],
    accent: '#D8D0C5',
    href: '/work/puzzlepros',
    cta: 'View case study →',
  },
]

function WorkCard({ work }: { work: Work }) {
  const inner = (
    <div className={`group flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-8 rounded-2xl border border-[#E2E0DA] transition-all duration-400 ${
      work.href ? 'hover:border-[#C4A882]/40 hover:bg-[#F0EDE6]' : 'opacity-80'
    }`}>
      {/* Visual */}
      <div
        className="w-full md:w-52 h-36 shrink-0 rounded-xl flex items-end p-5 overflow-hidden relative"
        style={{ backgroundColor: work.accent }}
      >
        <span
          className="font-display font-semibold text-[#1C1C1A] opacity-[0.15] select-none leading-none"
          style={{ fontSize: '4.5rem' }}
        >
          {work.index}
        </span>
        {work.href && (
          <div className="absolute inset-0 bg-[#1C1C1A] opacity-0 group-hover:opacity-[0.04] transition-opacity duration-400" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm text-[#555] tracking-wide">{work.company}</span>
            <span className="text-[#E2E0DA]">·</span>
            <span className="text-sm text-[#555]">{work.year}</span>
          </div>
          <h2
            className="font-display font-medium text-[#1C1C1A] leading-tight mb-3 group-hover:opacity-70 transition-opacity duration-300"
            style={{ fontSize: 'clamp(1.15rem, 2vw, 1.5rem)' }}
          >
            {work.title}
          </h2>
          <p className="text-sm text-[#555] leading-relaxed max-w-lg">
            {work.description}
          </p>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-[#555] border border-[#E2E0DA] rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className={`text-sm shrink-0 ml-4 transition-colors duration-300 ${
            work.href
              ? 'text-[#555] group-hover:text-[#1C1C1A]'
              : 'text-[#999] italic'
          }`}>
            {work.cta}
          </span>
        </div>
      </div>
    </div>
  )

  if (!work.href) return <div>{inner}</div>
  if (work.external) return (
    <a href={work.href} target="_blank" rel="noopener noreferrer">{inner}</a>
  )
  return <Link href={work.href}>{inner}</Link>
}

export default function Works() {
  return (
    <div className="page-enter pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <ScrollReveal className="mb-16">
        <div className="flex items-end justify-between">
          <span className="text-sm tracking-[0.22em] text-[#555] uppercase">Works</span>
          <span className="text-sm text-[#555]">{works.length} projects</span>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mb-20">
        <h1
          className="font-display font-semibold text-[#1C1C1A] leading-tight tracking-tight"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
        >
          Selected Works
        </h1>
      </ScrollReveal>

      <div className="space-y-5">
        {works.map((work, i) => (
          <ScrollReveal key={work.index} delay={i * 80}>
            <WorkCard work={work} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

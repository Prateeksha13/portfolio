import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Works — Prateeksha',
  description: 'Selected case studies in fintech, AI, and SaaS product design.',
}

const works = [
  {
    slug: 'gnosis-bulk-payments',
    index: '01',
    title: 'Bulk Payments & Maker-Checker Flow',
    company: 'Gnosis Business',
    description: 'Designing trust into high-stakes financial workflows — bulk payment infrastructure and approval systems powering $1B+ in transactions.',
    year: '2022–Present',
    tags: ['Fintech', 'Enterprise', 'Complex Workflows'],
    accent: '#DDD5C8',
  },
  {
    slug: 'noodle-factory-chatbot',
    index: '02',
    title: 'AI Chatbot Platform',
    company: 'Noodle Factory',
    description: 'Making AI feel human at institutional scale — conversational UI, admin console, and embeddable widgets for educational institutions.',
    year: '2019–2022',
    tags: ['AI/ML', 'EdTech', 'Conversational UI'],
    accent: '#CED8CE',
  },
]

export default function Works() {
  return (
    <div className="page-enter pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <ScrollReveal className="mb-16">
        <div className="flex items-end justify-between">
          <span className="text-xs tracking-[0.22em] text-[#8A8A82] uppercase">Works</span>
          <span className="text-xs text-[#8A8A82]">{works.length} case studies</span>
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
          <ScrollReveal key={work.slug} delay={i * 100}>
            <Link
              href={`/works/${work.slug}`}
              className="group flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-8 rounded-2xl border border-[#E2E0DA] hover:border-[#C4A882]/40 hover:bg-[#F0EDE6] transition-all duration-400"
            >
              {/* Visual */}
              <div
                className="w-full md:w-52 h-36 md:h-36 rounded-xl shrink-0 flex items-end p-5 overflow-hidden relative"
                style={{ backgroundColor: work.accent }}
              >
                <span
                  className="font-display font-semibold text-[#1C1C1A] opacity-[0.15] select-none leading-none"
                  style={{ fontSize: '4.5rem' }}
                >
                  {work.index}
                </span>
                <div className="absolute inset-0 bg-[#1C1C1A] opacity-0 group-hover:opacity-[0.04] transition-opacity duration-400" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-[#8A8A82] tracking-wide">{work.company}</span>
                    <span className="text-[#E2E0DA]">·</span>
                    <span className="text-xs text-[#8A8A82]">{work.year}</span>
                  </div>
                  <h2
                    className="font-display font-medium text-[#1C1C1A] leading-tight mb-3 group-hover:opacity-70 transition-opacity duration-300"
                    style={{ fontSize: 'clamp(1.15rem, 2vw, 1.5rem)' }}
                  >
                    {work.title}
                  </h2>
                  <p className="text-sm text-[#8A8A82] leading-relaxed max-w-lg">
                    {work.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[#8A8A82] border border-[#E2E0DA] rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-[#8A8A82] group-hover:text-[#1C1C1A] transition-colors duration-300 shrink-0 ml-4">
                    View case study →
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

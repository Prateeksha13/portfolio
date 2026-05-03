import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'AI Chatbot Platform — Noodle Factory · Prateeksha',
  description: 'Making AI feel human — at institutional scale.',
}

const sections = [
  {
    label: 'The Problem',
    content: `Educational institutions needed to support thousands of students simultaneously — answering questions, guiding coursework, handling repetitive queries — without scaling headcount. The challenge wasn't building the AI. It was making it feel approachable, trustworthy, and easy to manage.`,
  },
  {
    label: 'My Role',
    content: `UX Manager. Led design across the full platform — student-facing chatbot, admin management console, and embeddable widgets for third-party deployment. Managed a small design team and worked closely with product and engineering.`,
  },
]

const challenges = [
  'Designing a conversational UI that works across wildly different contexts — web app, embedded widget, mobile',
  'Building an admin interface that non-technical educators could actually use to train and manage the AI',
  'Making "talking to a bot" feel less robotic',
]

const decisions = [
  {
    title: 'Unified design system',
    description: 'Created a component system that scaled across all deployment contexts with minimal customisation. One source of truth — the embedded widget and the web app spoke the same visual language.',
  },
  {
    title: 'Educators first, AI second',
    description: "Designed the admin console around educators’ mental models — content first, AI second. The interface hid complexity behind familiar patterns, making AI training feel like editing a FAQ.",
  },
  {
    title: 'Personality through microcopy',
    description: "Introduced warmth through microcopy and response design, not just visual design. The tone of the bot's replies was part of the UX — carefully crafted to feel helpful rather than mechanical.",
  },
]

export default function NoodleFactoryCase() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#E2E0DA]">
        <ScrollReveal className="mb-6">
          <Link
            href="/works"
            className="text-xs tracking-[0.15em] text-[#8A8A82] uppercase hover:text-[#1C1C1A] transition-colors link-underline"
          >
            ← Works
          </Link>
        </ScrollReveal>
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <ScrollReveal delay={60}>
              <p className="text-sm text-[#8A8A82] mb-4">Noodle Factory · 2019–2022</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1
                className="font-display font-semibold text-[#1C1C1A] leading-[1.02] tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
              >
                AI Chatbot<br />Platform
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="font-display font-light text-[#8A8A82] italic" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
                Making AI feel human — at institutional scale
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200} className="flex flex-col gap-3 md:text-right">
            {[['Role', 'UX Manager'], ['Domain', 'AI / EdTech'], ['Scale', 'Multiple institutions']].map(([k, v]) => (
              <div key={k}>
                <p className="text-xs text-[#8A8A82] tracking-wide uppercase">{k}</p>
                <p className="text-sm text-[#1C1C1A] font-medium">{v}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Placeholder visual */}
      <ScrollReveal>
        <div className="w-full h-72 md:h-[480px]" style={{ backgroundColor: '#CED8CE' }}>
          <div className="h-full flex items-center justify-center">
            <span className="font-display text-[#1C1C1A] opacity-20 select-none" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
              Noodle Factory
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* Body */}
      <div className="px-6 md:px-12 max-w-4xl mx-auto py-20 space-y-20">
        {sections.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 60}>
            <div className="grid md:grid-cols-[160px_1fr] gap-6 md:gap-12">
              <p className="text-xs tracking-[0.2em] text-[#8A8A82] uppercase pt-1">{s.label}</p>
              <p className="text-[#1C1C1A]/80 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}>{s.content}</p>
            </div>
          </ScrollReveal>
        ))}

        <ScrollReveal>
          <div className="grid md:grid-cols-[160px_1fr] gap-6 md:gap-12">
            <p className="text-xs tracking-[0.2em] text-[#8A8A82] uppercase pt-1">Key Challenges</p>
            <ul className="space-y-4">
              {challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-[#C4A882] mt-1 shrink-0">—</span>
                  <p className="text-[#1C1C1A]/80 leading-relaxed">{c}</p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid md:grid-cols-[160px_1fr] gap-6 md:gap-12">
            <p className="text-xs tracking-[0.2em] text-[#8A8A82] uppercase pt-1">Design Decisions</p>
            <div className="space-y-8">
              {decisions.map((d, i) => (
                <div key={i} className="border-l border-[#E2E0DA] pl-6">
                  <h3 className="font-display font-medium text-[#1C1C1A] mb-2">{d.title}</h3>
                  <p className="text-[#1C1C1A]/70 leading-relaxed text-sm">{d.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-[#EDEAE4] rounded-2xl p-8 md:p-12">
            <p className="text-xs tracking-[0.2em] text-[#8A8A82] uppercase mb-6">Outcome</p>
            <p
              className="font-display font-light text-[#1C1C1A] leading-snug"
              style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}
            >
              Deployed across multiple educational institutions. Platform scaled without proportional increase in support staffing.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border-t border-[#E2E0DA] pt-10 flex items-center justify-between">
            <p className="text-sm text-[#8A8A82]">Previous case study</p>
            <Link
              href="/works/gnosis-bulk-payments"
              className="font-display font-medium text-[#1C1C1A] hover:opacity-60 transition-opacity link-underline"
            >
              ← Gnosis Bulk Payments
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

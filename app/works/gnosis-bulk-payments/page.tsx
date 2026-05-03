import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Bulk Payments & Maker-Checker — Gnosis Business · Prateeksha',
  description: 'Designing trust into high-stakes financial workflows.',
}

const sections = [
  {
    label: 'The Problem',
    content: `Businesses managing treasury across multiple accounts needed a way to send bulk payments — sometimes hundreds at a time — while maintaining strict approval controls. One wrong click could move thousands of dollars incorrectly. The existing flow was fragmented, error-prone, and generated constant support tickets.`,
  },
  {
    label: 'My Role',
    content: `Sole lead designer. Owned end-to-end — from discovery through to shipped product. Worked directly with the founding team and engineering. Every decision, every screen, every spec.`,
  },
]

const challenges = [
  'How do you design a bulk payment flow that feels safe, not scary?',
  "How do you build a maker-checker approval system that’s robust but doesn’t slow teams down?",
  'How do you surface errors before they become mistakes?',
]

const decisions = [
  {
    title: 'Pre-submission review screen',
    description: 'Introduced a summary screen that aggregated all payments before sending — giving users a single moment of clarity before committing. Reduced errors significantly.',
  },
  {
    title: 'Two-role approval system',
    description: 'Designed a maker-checker flow with clear role separation, status states, and a persistent audit trail. Checkers could see the full context of what they were approving.',
  },
  {
    title: 'Inline validation throughout',
    description: 'Caught errors at the point of entry — not at submission. Inline validation in the upload flow meant problems surfaced early, when they were cheapest to fix.',
  },
]

export default function GnosisCase() {
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
              <p className="text-sm text-[#8A8A82] mb-4">Gnosis Business · 2022–Present</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1
                className="font-display font-semibold text-[#1C1C1A] leading-[1.02] tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
              >
                Bulk Payments &<br />Maker-Checker Flow
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="font-display font-light text-[#8A8A82] italic" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
                Designing trust into high-stakes financial workflows
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200} className="flex flex-col gap-3 md:text-right">
            {[['Role', 'Sole Lead Designer'], ['Domain', 'Fintech / Enterprise'], ['Impact', '$1B+ GTV · 200+ businesses']].map(([k, v]) => (
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
        <div className="w-full h-72 md:h-[480px]" style={{ backgroundColor: '#DDD5C8' }}>
          <div className="h-full flex items-center justify-center">
            <span className="font-display text-[#1C1C1A] opacity-20 select-none" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
              Gnosis
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* Body */}
      <div className="px-6 md:px-12 max-w-4xl mx-auto py-20 space-y-20">
        {/* Problem + Role */}
        {sections.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 60}>
            <div className="grid md:grid-cols-[160px_1fr] gap-6 md:gap-12">
              <p className="text-xs tracking-[0.2em] text-[#8A8A82] uppercase pt-1">{s.label}</p>
              <p className="text-[#1C1C1A]/80 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}>{s.content}</p>
            </div>
          </ScrollReveal>
        ))}

        {/* Challenges */}
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

        {/* Design Decisions */}
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

        {/* Outcome */}
        <ScrollReveal>
          <div className="bg-[#EDEAE4] rounded-2xl p-8 md:p-12">
            <p className="text-xs tracking-[0.2em] text-[#8A8A82] uppercase mb-6">Outcome</p>
            <p
              className="font-display font-light text-[#1C1C1A] leading-snug"
              style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}
            >
              Powering $1B+ in GTV across 200+ businesses. Became the core workflow for Gnosis Business's enterprise clients.
            </p>
          </div>
        </ScrollReveal>

        {/* Next case study */}
        <ScrollReveal>
          <div className="border-t border-[#E2E0DA] pt-10 flex items-center justify-between">
            <p className="text-sm text-[#8A8A82]">Next case study</p>
            <Link
              href="/works/noodle-factory-chatbot"
              className="font-display font-medium text-[#1C1C1A] hover:opacity-60 transition-opacity link-underline"
            >
              AI Chatbot Platform →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

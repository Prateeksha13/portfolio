import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Corporate Visa Card — HQ.xyz · Prateeksha',
  description: 'Designing a premium business card experience — from physical card to full spend management.',
}

const scope = [
  'Empty state',
  'Create physical card flow',
  'Create virtual card flow',
  'Card dashboard with transaction history',
  'Card details and status states',
  'Activate card flow',
  'Report lost or stolen',
  'Edit card settings',
  'Dispute a transaction',
]

function ImagePlaceholder({
  label,
  caption,
  bg = '#E8E3DC',
}: {
  label: string
  caption: string
  bg?: string
}) {
  return (
    <ScrollReveal>
      <figure className="w-full mb-24">
        <div
          className="w-full flex items-center justify-center"
          style={{ backgroundColor: bg, height: 'clamp(240px, 45vw, 560px)' }}
        >
          <p className="text-sm text-[#AAA] italic select-none">{label}</p>
        </div>
        <figcaption className="px-6 md:px-12 max-w-[760px] mx-auto mt-4 text-xs text-[#AAA] italic">
          {caption}
        </figcaption>
      </figure>
    </ScrollReveal>
  )
}

export default function CorporateVisaCardCase() {
  return (
    <div className="page-enter">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-0">
        <div className="px-6 md:px-12 max-w-[760px] mx-auto mb-14">
          <ScrollReveal className="mb-8">
            <Link
              href="/#works"
              className="text-[11px] tracking-[0.2em] text-[#AAA] uppercase hover:text-[#1C1C1A] transition-colors link-underline"
            >
              ← Works
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#AAA] mb-10">
              <span>HQ.xyz (Now Gnosis Business)</span>
              <span>·</span>
              <span>Lead Product Designer</span>
              <span>·</span>
              <span>2024</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1
              className="font-display font-semibold text-[#1C1C1A] leading-[1.02] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}
            >
              Corporate<br />Visa Card
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p
              className="font-display font-light text-[#555] italic leading-snug"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}
            >
              Designing a premium business card experience —<br className="hidden md:block" />
              from physical card to full spend management.
            </p>
          </ScrollReveal>
        </div>

        {/* Hero image */}
        <ScrollReveal>
          <div
            className="w-full flex items-center justify-center"
            style={{ backgroundColor: '#C8C4BE', height: 'clamp(280px, 50vw, 640px)' }}
          >
            <span
              className="font-display font-semibold text-[#1C1C1A] opacity-[0.12] select-none leading-none"
              style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
            >
              HQ
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className="pt-20 pb-28">

        {/* Overview */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-6">Overview</p>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              At HQ.xyz, I designed the end-to-end corporate Visa debit card product — from the physical
              card itself to the full digital management experience. CFOs and finance managers could issue
              physical and virtual cards to employees, monitor transactions, and maintain custody of
              company funds — all within the same platform they used for payments.
            </p>
          </section>
        </ScrollReveal>

        {/* The Problem */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-6">The Problem</p>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              Businesses on HQ.xyz needed a way to give employees spending power without losing control
              of their treasury. Traditional corporate cards meant going to a bank, losing visibility,
              and managing a separate tool.
            </p>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed mt-5"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              The opportunity was to build a card product that lived natively inside HQ.xyz — connected
              to the same wallets, the same approval logic, the same dashboard.
            </p>
          </section>
        </ScrollReveal>

        {/* My Role */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-6">My Role</p>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              Lead designer. Designed the physical card, the issuance flows, the card management
              dashboard, and every state in the card lifecycle — from empty state through to dispute
              resolution.
            </p>
          </section>
        </ScrollReveal>

        <ImagePlaceholder
          label="Physical card — front and back"
          caption="Physical card design — front and back, matte black with silver HQ monogram"
          bg="#C8C4BE"
        />

        {/* The Scope */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-8">The Scope</p>
            <div>
              {scope.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 py-4 border-t border-[#EDEAE4]"
                >
                  <span
                    className="font-display text-[#E0DDD8] leading-none shrink-0 select-none w-8"
                    style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[#1C1C1A]/80 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ImagePlaceholder
          label="Card management dashboard"
          caption="Card management dashboard — transaction history and card status"
          bg="#D8D4CE"
        />

        {/* The Hardest Design Problem */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-6">
              The Hardest Design Problem
            </p>
            <p
              className="font-display font-light text-[#1C1C1A] leading-snug mb-8"
              style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)' }}
            >
              The physical card itself.
            </p>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed mb-5"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              This wasn't a UI problem — it was a brand and craft problem. It needed to communicate trust
              and legitimacy at a glance while carrying the Headquarters brand.
            </p>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              Solution: matte black finish, subtle wave texture, large silver HQ monogram.
            </p>
            <div className="border-l-2 border-[#C8C4BE] pl-6">
              <p className="text-[#555] text-sm leading-relaxed italic">
                Printed August 2024.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Outcome */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <div className="border-t-2 border-[#1C1C1A] pt-10">
              <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-8">Outcome</p>
              <p
                className="font-display font-light text-[#1C1C1A] leading-snug"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
              >
                Full card product designed and prototyped end-to-end. Physical cards printed.
                Launch paused due to Visa licensing requirements in Singapore — a regulatory blocker,
                not a design one.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ImagePlaceholder
          label="Full flow overview"
          caption="Full flow overview — from empty state to card lifecycle management"
          bg="#E8E3DC"
        />

        {/* Navigation */}
        <ScrollReveal>
          <div className="px-6 md:px-12 max-w-[760px] mx-auto border-t border-[#EDEAE4] pt-10 flex items-center justify-between">
            <Link
              href="/work/payments"
              className="font-display text-[#1C1C1A] hover:opacity-60 transition-opacity link-underline"
              style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}
            >
              ← Payments
            </Link>
            <Link
              href="/works/noodle-factory-chatbot"
              className="font-display text-[#1C1C1A] hover:opacity-60 transition-opacity link-underline"
              style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}
            >
              AI Chatbot →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

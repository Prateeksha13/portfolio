import type { Metadata } from 'next'
import Image from 'next/image'
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

function CaseImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <ScrollReveal>
      <figure className="w-full mb-24">
        <div className="w-full relative" style={{ height: 'clamp(240px, 45vw, 560px)' }}>
          <Image src={src} alt={alt} fill className="object-cover" />
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
              className="font-display text-[#1C1C1A] leading-[1.02] tracking-tight mb-8"
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
          <div className="w-full relative" style={{ height: 'clamp(280px, 50vw, 640px)' }}>
            <Image
              src="/images/corporate-visa-card/cover.png"
              alt="Corporate Visa Card cover"
              fill
              className="object-cover"
              priority
            />
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
              to the same wallets, the same dashboard.
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

        <CaseImage
          src="/images/corporate-visa-card/physical-card.png"
          alt="Physical card — front and back"
          caption="Physical card design — front and back, matte black with silver HQ monogram"
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

        <CaseImage
          src="/images/corporate-visa-card/dashboard.png"
          alt="Card management dashboard"
          caption="Card management dashboard — transaction history and card status"
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
              className="text-[#1C1C1A]/80 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              Solution: matte black finish, subtle wave texture, large silver HQ monogram.
            </p>
          </section>
        </ScrollReveal>

        {/* Outcome */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <div className="border-t-2 border-[#1C1C1A] pt-10">
              <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-8">Outcome</p>
              <p
                className="font-display font-light text-[#1C1C1A] leading-snug mb-8"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
              >
                Full card product designed and prototyped end-to-end. Physical cards printed.
              </p>
              <p
                className="text-[#1C1C1A]/80 leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
              >
                Following an acquisition, I also worked on updated card designs incorporating the
                new brand identity.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <CaseImage
          src="/images/corporate-visa-card/updated-card-designs.png"
          alt="Updated card designs — post-acquisition branding"
          caption="Updated card designs — post-acquisition branding"
        />

        {/* Navigation */}
        <ScrollReveal>
          <div className="px-6 md:px-12 max-w-[760px] mx-auto border-t border-[#EDEAE4] pt-10 flex items-center justify-between">
            <Link
              href="/work/freelancer-payments"
              className="font-display text-[#1C1C1A] hover:opacity-60 transition-opacity link-underline"
              style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}
            >
              ← Freelancer Payments
            </Link>
            <Link
              href="/work/puzzlepros"
              className="font-display text-[#1C1C1A] hover:opacity-60 transition-opacity link-underline"
              style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}
            >
              PuzzlePros →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

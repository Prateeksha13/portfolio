import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Payments: Bulk, Maker-Checker, Off-ramp — Gnosis Business · Prateeksha',
  description: 'Designing trust into high-stakes financial workflows — from bulk payments to off-ramp.',
}

const decisions = [
  {
    title: 'The Manage Drafts view as the control centre',
    description:
      'Primary workspace showing all pending payments, status, assigned reviewers, and actions at a glance. Every finance team member could orient instantly — no digging, no ambiguity about what needed attention.',
  },
  {
    title: 'Inline context on every payment',
    description:
      'Each draft carried tags, notes, account category, and file attachments so checkers could approve confidently without chasing the maker. Context lived with the payment, not in a separate email thread.',
  },
  {
    title: 'A clear send payment flow',
    description:
      'The send payment screen showed recipient, amount, and a full confirmation summary before execution. No ambiguity at the moment of highest stakes — every detail visible and reviewable before the payment goes out.',
  },
  {
    title: 'Off-ramp payment summary panel',
    description:
      'Clearly showed crypto in, fiat out, with all fees and rates visible before confirmation. No surprises at settlement — the rate, amount, and fee breakdown were locked and visible upfront.',
  },
  {
    title: 'Error states as a first-class design problem',
    description:
      'Every error was specific and actionable, not generic. Errors that previously created support tickets became self-service moments.',
  },
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

export default function PaymentsCase() {
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
              <span>Gnosis Business</span>
              <span>·</span>
              <span>Lead Product Designer</span>
              <span>·</span>
              <span>2022–Present</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1
              className="font-display text-[#1C1C1A] leading-[1.02] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}
            >
              Payments: Bulk,<br />
              Maker-Checker,<br />
              Off-ramp
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p
              className="font-display font-light text-[#555] italic leading-snug"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}
            >
              Designing trust into high-stakes financial workflows —<br className="hidden md:block" />
              from bulk payments to off-ramp.
            </p>
          </ScrollReveal>
        </div>

        {/* Hero image */}
        <ScrollReveal>
          <div className="w-full relative" style={{ height: 'clamp(280px, 50vw, 640px)' }}>
            <Image
              src="/images/payments/cover.jpg"
              alt="Payments case study cover"
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
              At Gnosis Business, I led the end-to-end design of the payments system used by CFOs and
              accountants across 200+ businesses. The product handles bulk payments, maker-checker
              approval flows, and crypto off-ramp — collectively powering $1B+ in GTV.
            </p>
          </section>
        </ScrollReveal>

        <CaseImage
          src="/images/payments/manage-drafts.jpg"
          alt="Manage Drafts"
          caption="Manage Drafts — payment list with status"
        />

        {/* The Problem */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-6">The Problem</p>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              Businesses managing treasury needed more than simple one-click payments. Their internal
              workflows required strict approval controls — no payment could go out without a second
              pair of eyes. At the same time, they needed to move fast, often paying dozens of
              recipients in a single batch.
            </p>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed mt-5"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              The existing product had basic payment functionality but no structure for approvals,
              no bulk capability, and no audit trail. For finance teams, this was a blocker.
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
              Sole lead designer. Owned the full design from flow mapping and wireframes through
              to shipped UI. Worked directly with the founding team and engineering to define scope
              and make product trade-offs.
            </p>
          </section>
        </ScrollReveal>

        {/* The Challenge */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-6">The Challenge</p>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed mb-8"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              The hardest problem was designing two payment paths that coexisted without confusing users.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-5 py-4 border-t border-[#EDEAE4]">
                <span className="font-display text-[#C4A882] text-sm font-medium tracking-wide shrink-0 pt-0.5">
                  Path A
                </span>
                <p className="text-[#555] text-sm leading-relaxed">
                  Create draft → submit for review → checker approves → payment executes.
                </p>
              </div>
              <div className="flex items-start gap-5 py-4 border-t border-[#EDEAE4]">
                <span className="font-display text-[#C4A882] text-sm font-medium tracking-wide shrink-0 pt-0.5">
                  Path B
                </span>
                <p className="text-[#555] text-sm leading-relaxed">
                  Create payment → pay directly, no approval needed.
                </p>
              </div>
            </div>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              Both paths needed to feel natural depending on the user's role and org setup.
            </p>
          </section>
        </ScrollReveal>

        <CaseImage
          src="/images/payments/payment-detail.jpg"
          alt="Payment detail panel"
          caption="Payment detail panel — recipient, amount, notes and file attachments"
        />

        {/* Key Design Decisions */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-10">
              Key Design Decisions
            </p>
            <div>
              {decisions.map((d, i) => (
                <div
                  key={i}
                  className="border-t border-[#EDEAE4] py-8 flex gap-6 md:gap-10"
                >
                  <span
                    className="font-display text-[#E0DDD8] leading-none shrink-0 select-none"
                    style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3
                      className="font-display text-[#1C1C1A] mb-3"
                      style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)' }}
                    >
                      {d.title}
                    </h3>
                    <p className="text-[#555] text-sm leading-relaxed">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <CaseImage
          src="/images/payments/send-payment.jpg"
          alt="Send payment screen"
          caption="Send payment — recipient details, amount, and confirmation before execution"
        />

        {/* Outcome */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <div className="border-t-2 border-[#1C1C1A] pt-10">
              <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-8">Outcome</p>
              <p
                className="font-display font-light text-[#1C1C1A] leading-snug"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
              >
                $1B+ in GTV across 200+ businesses. Large enterprise clients adopted the product
                specifically because the maker-checker flow matched their internal approval
                requirements. Finance teams reported the flow felt more secure and auditable.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal>
          <div className="px-6 md:px-12 max-w-[760px] mx-auto border-t border-[#EDEAE4] pt-10 flex items-center justify-end">
            <Link
              href="/work/freelancer-payments"
              className="font-display text-[#1C1C1A] hover:opacity-60 transition-opacity link-underline"
              style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}
            >
              Freelancer Payments →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

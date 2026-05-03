import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Freelancer Payments — Gnosis Business · Prateeksha',
  description: 'No onboarding. No friction. Just connect your wallet and get paid.',
}

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

export default function FreelancerPaymentsCase() {
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
              <span>2023–2024</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1
              className="font-display text-[#1C1C1A] leading-[1.02] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}
            >
              Freelancer<br />Payments
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p
              className="font-display font-light text-[#555] italic leading-snug"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}
            >
              No onboarding. No friction.<br className="hidden md:block" />
              Just connect your wallet and get paid.
            </p>
          </ScrollReveal>
        </div>

        {/* Hero image */}
        <ScrollReveal>
          <div
            className="w-full flex items-center justify-center"
            style={{ backgroundColor: '#D5CFC8', height: 'clamp(280px, 50vw, 640px)' }}
          >
            <span
              className="font-display text-[#1C1C1A] opacity-[0.12] select-none leading-none"
              style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
            >
              GB
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
              Gnosis Business primarily served finance teams at mid-sized companies. But a recurring
              pattern emerged: freelancers and contractors who worked with those businesses needed a
              way to receive payments — without signing up for a full business account. The product
              was built around payment links, with the option to attach an invoice. Freelancers could
              create a payment link, share it with a client, and get notified by email when the
              payment arrived.
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
              Freelancers don't think in treasury management or approval workflows. They think in
              jobs and "has the money arrived yet?" The existing platform was built for finance
              managers — layered with permissions, multi-step onboarding, and concepts that meant
              nothing to a solo contractor.
            </p>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed mt-5"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              The challenge was designing a payment experience for a fundamentally different user —
              one with low patience for complexity, no institutional context, and an immediate goal:
              get paid, fast.
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
              Lead designer. Responsible for the branding, UX flows, and end-to-end design of the
              freelancer product. The product was built around payments and payment links, with
              upcoming features including cards and off-ramp.
            </p>
          </section>
        </ScrollReveal>

        <ImagePlaceholder
          label="Freelancer dashboard — wallet view and payment links"
          caption="Dashboard — active payment links, payment status, and wallet balance at a glance"
          bg="#D5CFC8"
        />

        {/* The Core Design Decision */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-6">
              The Core Design Decision
            </p>
            <p
              className="font-display font-light text-[#1C1C1A] leading-snug mb-8"
              style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)' }}
            >
              Skip the account. Start with the wallet.
            </p>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed mb-5"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              Early research made it clear: freelancers would drop off at a traditional sign-up
              flow. Name, business type, lengthy verification — all of it felt like a bank
              application. Instead, a freelancer could connect an existing crypto wallet in one step
              and immediately generate a payment link to share with their client.
            </p>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              An email notification system kept freelancers updated when payments arrived — no need
              to check in manually. Progressive profiling filled in optional details only when the
              user needed them, not upfront.
            </p>
          </section>
        </ScrollReveal>

        <ImagePlaceholder
          label="Payment link creation flow"
          caption="Payment link creation flow — minimal fields, shareable link, email notification on receipt"
          bg="#C8C4BE"
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
              href="/work/corporate-visa-card"
              className="font-display text-[#1C1C1A] hover:opacity-60 transition-opacity link-underline"
              style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}
            >
              Corporate Visa Card →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Freelancer Payments & Invoicing — Gnosis Business · Prateeksha',
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
              className="font-display font-semibold text-[#1C1C1A] leading-[1.02] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}
            >
              Freelancer<br />Payments &<br />Invoicing
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
              className="font-display font-semibold text-[#1C1C1A] opacity-[0.12] select-none leading-none"
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
              way to receive payments and issue invoices — without having to sign up for a full
              business account. I designed a standalone freelancer-facing product that let contractors
              get paid directly to a wallet, generate invoices, and track payment status — all
              without the overhead of the main platform's onboarding.
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
              jobs, invoices, and "has the money arrived yet?" The existing platform was built for
              finance managers — layered with permissions, multi-step onboarding, and concepts that
              meant nothing to a solo contractor.
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
              Lead designer, 0 to 1. Defined the product scope with the PM, conducted interviews
              with freelancers across Singapore and India, designed all flows from wallet connection
              through invoice delivery, and shipped a prototype used in early pilot testing.
            </p>
          </section>
        </ScrollReveal>

        <ImagePlaceholder
          label="Freelancer dashboard — wallet view and invoice list"
          caption="Dashboard — active invoices, payment status, and wallet balance at a glance"
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
              flow. Name, business type, tax ID — all of it felt like a bank application. We cut
              it. Instead, a freelancer could connect an existing crypto wallet in one step and
              immediately generate a payment link to send to their client.
            </p>
            <p
              className="text-[#1C1C1A]/80 leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
            >
              Progressive profiling filled in the gaps — invoice details, tax info, preferred
              currency — only when the user needed them, not upfront. The result was a time-to-first-invoice
              of under two minutes in testing.
            </p>
            <div className="border-l-2 border-[#C8C4BE] pl-6">
              <p className="text-[#555] text-sm leading-relaxed italic">
                The biggest pushback came internally — "what if they don't complete their profile?"
                The answer: a partial profile that generates an invoice is better than a complete
                form that never gets submitted.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ImagePlaceholder
          label="Invoice creation flow"
          caption="Invoice creation — minimal fields, instant preview, one-tap send to client"
          bg="#C8C4BE"
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
                Product designed and piloted with a cohort of freelancers across Singapore and
                India. Onboarding completion rates were significantly higher than the main platform's
                equivalent flow. Full case study in progress.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal>
          <div className="px-6 md:px-12 max-w-[760px] mx-auto border-t border-[#EDEAE4] pt-10 flex items-center justify-between">
            <Link
              href="/work/corporate-visa-card"
              className="font-display text-[#1C1C1A] hover:opacity-60 transition-opacity link-underline"
              style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}
            >
              ← Corporate Visa Card
            </Link>
            <Link
              href="/work/payments"
              className="font-display text-[#1C1C1A] hover:opacity-60 transition-opacity link-underline"
              style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}
            >
              Payments →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

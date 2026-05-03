import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'PuzzlePros — Brand & Website · Prateeksha',
  description: 'From blank canvas to full brand — logo, identity, and website for a puzzle experience company.',
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

export default function PuzzleProsCase() {
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
              <span>Brand Design</span>
              <span>·</span>
              <span>Visual Identity</span>
              <span>·</span>
              <span>Website Design & Development</span>
              <span>·</span>
              <span>2024</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1
              className="font-display text-[#1C1C1A] leading-[1.02] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}
            >
              PuzzlePros
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p
              className="font-display font-light text-[#555] italic leading-snug"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}
            >
              From blank canvas to full brand —<br className="hidden md:block" />
              logo, identity, and website for a puzzle experience company.
            </p>
          </ScrollReveal>
        </div>

        {/* Hero image */}
        <ScrollReveal>
          <div
            className="w-full flex items-center justify-center"
            style={{ backgroundColor: '#D8D0C5', height: 'clamp(280px, 50vw, 640px)' }}
          >
            <span
              className="font-display text-[#1C1C1A] opacity-[0.12] select-none leading-none"
              style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
            >
              PP
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
              PuzzlePros brings puzzle experiences to kids, elderly, and corporate teams across
              Singapore. They had a website but no brand identity — no logo, no visual system, no
              design direction. I worked across the full brand: strategy, logo design, visual
              identity, and a rebuilt Framer website.
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
              PuzzlePros needed to appeal to three very different audiences — playful enough for
              kids' birthday parties, trustworthy enough for corporate team-building, and accessible
              enough for elderly groups. A single brand had to stretch across all three without
              feeling inconsistent.
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
              Solo. Brand strategy, logo design, visual identity system, website design, and
              website development on Framer.
            </p>
          </section>
        </ScrollReveal>

        <ImagePlaceholder
          label="Logo explorations — three directions, pixel letterform"
          caption="Logo explorations — three directions, pixel letterform with multi-colour palette"
          bg="#D8D0C5"
        />

        {/* The Design Decisions */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-10">The Design Decisions</p>

            {/* Logo */}
            <div className="mb-16">
              <p className="text-[11px] tracking-[0.2em] text-[#C4A882] uppercase mb-5">Logo</p>
              <p
                className="text-[#1C1C1A]/80 leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
              >
                The brief was fun and clean. Three directions were explored — each using a pixel and
                block letterform that nodded to puzzle pieces without being too literal. The
                multi-colour approach made the brand feel energetic and inclusive. The white stroke
                outline gave it a sticker-like quality that works across any background.
              </p>
            </div>

            {/* Website */}
            <div>
              <p className="text-[11px] tracking-[0.2em] text-[#C4A882] uppercase mb-5">Website</p>
              <p
                className="text-[#1C1C1A]/80 leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
              >
                Three audience segments needed clear pathways without the homepage feeling
                cluttered. Bold hero with a single CTA, then three illustrated cards letting users
                self-select their experience. Illustrated characters added warmth while keeping it
                professional enough for B2B. A four-step process section simplified booking into
                something anyone could understand.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ImagePlaceholder
          label="Website homepage — hero, audience cards, process section"
          caption="Website homepage — hero section, three audience pathway cards, and the four-step booking process"
          bg="#C8C4BE"
        />

        <ImagePlaceholder
          label="Brand in context — colours, typography, illustrated characters"
          caption="Brand system — colour palette, typography, and illustrated characters across applications"
          bg="#E8E3DC"
        />

        {/* Outcome */}
        <ScrollReveal>
          <section className="px-6 md:px-12 max-w-[760px] mx-auto mb-24">
            <div className="border-t-2 border-[#1C1C1A] pt-10">
              <p className="text-[11px] tracking-[0.28em] text-[#AAA] uppercase mb-8">Outcome</p>
              <p
                className="font-display font-light text-[#1C1C1A] leading-snug mb-10"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
              >
                Full brand system delivered and live. Website built and launched on Framer.
              </p>
              <a
                href="https://puzzlepros.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-wide px-7 py-3.5 border border-[#1C1C1A] text-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white transition-colors duration-300"
              >
                View Website → puzzlepros.sg
              </a>
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

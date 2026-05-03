import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Contact — Prateeksha',
  description: 'Open to IC lead and founding designer roles.',
}

export default function Contact() {
  return (
    <div className="page-enter pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <ScrollReveal className="mb-16">
        <span className="text-xs tracking-[0.22em] text-[#8A8A82] uppercase">Contact</span>
      </ScrollReveal>

      <div className="max-w-2xl">
        <ScrollReveal>
          <h1
            className="font-display font-semibold text-[#1C1C1A] leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
          >
            Let's talk.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-[#8A8A82] leading-relaxed mb-12" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)' }}>
            Open to IC lead and founding designer roles. If you're building something ambitious and need
            a designer who can think in systems and move fast — I'd love to hear from you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <a
            href="mailto:prateeksha.ink@gmail.com"
            className="group inline-flex items-center gap-3 font-display font-medium text-[#1C1C1A] hover:text-[#C4A882] transition-colors duration-300"
            style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}
          >
            prateeksha.ink@gmail.com
            <span className="text-[#8A8A82] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={260} className="mt-8">
          <a
            href="https://www.linkedin.com/in/prateeksha"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-display font-medium text-[#1C1C1A] hover:text-[#C4A882] transition-colors duration-300"
            style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}
          >
            LinkedIn
            <span className="text-[#8A8A82] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={340} className="mt-20 pt-10 border-t border-[#E2E0DA]">
          <p className="text-sm text-[#8A8A82]">Based in Singapore · Available for remote and hybrid roles</p>
        </ScrollReveal>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'About — Prateeksha',
  description: 'Lead Product Designer with 8+ years in fintech and SaaS.',
}

const skills = [
  {
    category: 'Design',
    items: ['UX/UI Design', 'Design Systems', 'Interaction Design', 'Information Architecture', 'User Research', 'Usability Testing', 'Visual Design'],
  },
  {
    category: 'Speciality',
    items: ['Complex Workflows', 'Transaction Systems', 'Conversational UI', 'Data-heavy Interfaces', '0→1 Products'],
  },
  {
    category: 'Tools',
    items: ['Figma', 'Framer', 'Webflow', 'Illustrator', 'Claude', 'Figma AI'],
  },
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'HTML/CSS'],
  },
  {
    category: 'Leadership',
    items: ['Founding Designer', 'Stakeholder Management', 'Cross-functional Collaboration', 'Product Strategy'],
  },
]

export default function About() {
  return (
    <div className="page-enter pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Page label */}
      <ScrollReveal className="mb-16">
        <span className="text-sm tracking-[0.22em] text-[#555] uppercase">About</span>
      </ScrollReveal>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-[1fr_380px] gap-16 lg:gap-24">
        {/* Left: bio */}
        <div>
          <ScrollReveal>
            <h1
              className="font-display font-semibold text-[#1C1C1A] leading-[1.05] tracking-tight mb-10"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              I turn complex systems into calm, intuitive experiences.
            </h1>
          </ScrollReveal>

          <div className="space-y-5 text-[#1C1C1A]/80 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}>
            <ScrollReveal delay={80}>
              <p>
                I'm Prateeksha — a Lead Product Designer who turns complex systems into calm, intuitive experiences.
                I believe the best design doesn't announce itself. It just works, and leaves people feeling capable.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <p>
                Over 8 years, I've designed payment infrastructure, AI platforms, and 0→1 products across fintech and SaaS.
                My background in frontend engineering means I think in systems and ship with clarity — no hand-wavy specs,
                no lost-in-translation moments with engineers.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p>
                Most recently at Gnosis Business, I led design of payment and asset management products now powering $1B+
                in transactions across 200+ businesses. Before that, I built AI-powered conversational platforms,
                no-code app builders, and design systems from scratch.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p>
                I work best close to the problem — partnering directly with founders and engineers, making product
                decisions, not just design deliverables.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <p className="text-[#555]">
                Based in Singapore. Previously Bangalore.
              </p>
            </ScrollReveal>
          </div>

          {/* Pull quote */}
          <ScrollReveal className="mt-16 md:mt-20">
            <blockquote
              className="font-display font-light text-[#AAAAAA] italic"
              style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}
            >
              "Do more with less."
            </blockquote>
          </ScrollReveal>

          <ScrollReveal className="mt-10">
            <p className="text-sm text-[#555]">
              Available for IC lead and founding designer roles.{' '}
              <a
                href="mailto:prateeksha.ink@gmail.com"
                className="text-[#1C1C1A] link-underline"
              >
                Get in touch →
              </a>
            </p>
          </ScrollReveal>
        </div>

        {/* Right: skills */}
        <div className="space-y-10">
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 80}>
              <div>
                <p className="text-sm tracking-[0.2em] text-[#555] uppercase mb-4">{group.category}</p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-[#1C1C1A]/80 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#C4A882] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}

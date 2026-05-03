import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Résumé — Prateeksha',
  description: 'Lead Product Designer — 8+ years in fintech and SaaS.',
}

const experience = [
  {
    title: 'Lead Product Designer',
    company: 'Gnosis Business',
    period: '2022 – Present',
    location: 'Singapore',
    bullets: [
      'Sole designer leading end-to-end product design for payment and asset management products',
      'Designed bulk payment infrastructure and maker-checker approval workflows, now powering $1B+ in GTV across 200+ businesses',
      'Established design systems, component libraries, and documentation for engineering handoff',
      'Partnered directly with founders on product strategy and roadmap decisions',
    ],
  },
  {
    title: 'UX Manager',
    company: 'Noodle Factory',
    period: '2019 – 2022',
    location: 'Singapore',
    bullets: [
      'Led design across AI chatbot platform — student-facing product, admin console, and embeddable widgets',
      'Built and managed a small design team; introduced design processes and rituals from scratch',
      'Created a unified design system deployed across web, mobile, and third-party integrations',
      'Designed conversational UX and microcopy strategy to improve bot approachability and engagement',
    ],
  },
  {
    title: 'Product Designer',
    company: 'Earlier Roles',
    period: '2016 – 2019',
    location: 'Bangalore',
    bullets: [
      'Designed 0→1 products across SaaS and consumer domains',
      'Built no-code app builders and design systems from scratch',
      'Frontend engineering background informed pixel-level design and engineering collaboration',
    ],
  },
]

const skills = [
  { category: 'Design', items: 'UX/UI, Design Systems, Interaction Design, Information Architecture, User Research, Usability Testing, Visual Design' },
  { category: 'Speciality', items: 'Complex Workflows, Transaction Systems, Conversational UI, Data-heavy Interfaces, 0→1 Products' },
  { category: 'Tools', items: 'Figma, Framer, Webflow, Illustrator, Claude, Figma AI' },
  { category: 'Frontend', items: 'React, JavaScript, HTML/CSS' },
  { category: 'Leadership', items: 'Founding Designer, Stakeholder Management, Cross-functional Collaboration, Product Strategy' },
]

export default function Resume() {
  return (
    <div className="page-enter pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      {/* Header */}
      <ScrollReveal className="flex items-start justify-between mb-16 flex-wrap gap-4">
        <div>
          <span className="text-xs tracking-[0.22em] text-[#8A8A82] uppercase block mb-4">Résumé</span>
          <h1 className="font-display font-semibold text-[#1C1C1A] text-4xl md:text-5xl">Prateeksha</h1>
          <p className="text-[#8A8A82] mt-2">Lead Product Designer · Singapore</p>
        </div>
        <a
          href="mailto:prateeksha.ink@gmail.com?subject=Resume Request"
          className="inline-flex items-center gap-2 border border-[#1C1C1A] text-[#1C1C1A] text-sm px-5 py-3 rounded-full hover:bg-[#1C1C1A] hover:text-[#F5F4F0] transition-all duration-300 self-end"
        >
          Download PDF ↓
        </a>
      </ScrollReveal>

      {/* Summary */}
      <ScrollReveal className="mb-16 pb-16 border-b border-[#E2E0DA]">
        <p className="text-[#1C1C1A]/80 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}>
          Lead Product Designer with 8+ years designing complex systems in fintech and SaaS. Frontend engineering
          background. Strong product intuition. I work best close to the problem — with founders, engineers, and
          real users.
        </p>
      </ScrollReveal>

      {/* Experience */}
      <ScrollReveal className="mb-3">
        <p className="text-xs tracking-[0.22em] text-[#8A8A82] uppercase">Experience</p>
      </ScrollReveal>

      <div className="mb-16 space-y-12">
        {experience.map((role, i) => (
          <ScrollReveal key={i} delay={i * 80} className="border-b border-[#E2E0DA] pb-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-5">
              <div>
                <h2 className="font-display font-medium text-[#1C1C1A] text-xl">{role.title}</h2>
                <p className="text-[#8A8A82] text-sm mt-1">{role.company} · {role.location}</p>
              </div>
              <span className="text-sm text-[#8A8A82] shrink-0 md:mt-1">{role.period}</span>
            </div>
            <ul className="space-y-2">
              {role.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-[#1C1C1A]/75 leading-relaxed">
                  <span className="text-[#C4A882] mt-1.5 shrink-0 text-xs">◆</span>
                  {b}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>

      {/* Skills */}
      <ScrollReveal className="mb-3">
        <p className="text-xs tracking-[0.22em] text-[#8A8A82] uppercase">Skills</p>
      </ScrollReveal>

      <div className="mb-16 space-y-5">
        {skills.map((s, i) => (
          <ScrollReveal key={s.category} delay={i * 60} className="grid grid-cols-[120px_1fr] gap-6 text-sm">
            <span className="text-[#8A8A82] shrink-0 pt-0.5">{s.category}</span>
            <span className="text-[#1C1C1A]/80">{s.items}</span>
          </ScrollReveal>
        ))}
      </div>

      {/* Education placeholder */}
      <ScrollReveal className="mb-3">
        <p className="text-xs tracking-[0.22em] text-[#8A8A82] uppercase">Education</p>
      </ScrollReveal>

      <ScrollReveal className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 text-sm">
        <div>
          <p className="font-display font-medium text-[#1C1C1A]">Bachelor of Engineering</p>
          <p className="text-[#8A8A82] mt-1">Computer Science · Bangalore</p>
        </div>
        <span className="text-[#8A8A82]">2012 – 2016</span>
      </ScrollReveal>
    </div>
  )
}

import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Résumé — Prateeksha',
  description: 'Lead Product Designer — 8+ years in fintech and SaaS.',
}

const experience = [
  {
    title: 'Lead Product Designer / Founding Designer',
    company: 'Gnosis Business',
    period: 'Nov 2022 – Present',
    bullets: [
      'Led design of payment and asset management systems across the Gnosis Business app (batch payments, off-ramp, approvals), powering $1B+ in GTV across 200+ businesses.',
      'Owned a 0→1 freelancer product for payments, invoicing, and transaction management with simplified UX.',
      'Built payment link flows improving transaction accessibility and usability across user types.',
      'Designed mobile experience for treasury visibility — balances, cash flow, and transactions on the go.',
      'Designed self-custody Corporate Visa debit card and management dashboard for end-to-end transaction visibility.',
      'Established a scalable design system enabling faster product iteration and reducing inconsistencies.',
      'Partnered closely with engineering to define product priorities and make product trade-offs.',
    ],
  },
  {
    title: 'Senior UX Designer',
    company: 'Kaddra',
    period: 'Jun 2022 – Oct 2022',
    bullets: [
      'Led product and UI design for a no-code mobile app builder and white-label e-commerce applications.',
      'Designed mobile-first e-commerce experiences enabling brands to launch customizable apps.',
      'Built and maintained a design system improving consistency across products.',
    ],
  },
  {
    title: 'UX Manager',
    company: 'Noodle Factory',
    period: 'Sep 2019 – May 2022',
    bullets: [
      'Designed an AI-powered conversational platform used across educational institutions.',
      'Built chatbot tools, web applications, and embeddable widgets to support scalable deployment.',
    ],
  },
  {
    title: 'Software Development Engineer II',
    company: 'CoWrks',
    period: 'Jun 2018 – Aug 2019',
    bullets: [
      'Developed React-based applications for booking, onboarding, and admin management systems.',
      'Led UI development across 5+ products, improving performance and usability.',
    ],
  },
]

const skills = [
  {
    category: 'Design',
    items: 'UX/UI, Design Systems, Interaction Design, User Flows, Information Architecture, User Research, Usability Testing, Brand/Visual Design',
  },
  {
    category: 'Systems',
    items: 'Complex Workflows, Transaction Systems, Data-heavy Interfaces',
  },
  {
    category: 'Tools',
    items: 'Figma, Webflow, Framer, Wix, WordPress, Illustrator',
  },
  {
    category: 'Frontend',
    items: 'React, JavaScript, HTML/CSS',
  },
  {
    category: 'Leadership',
    items: 'Stakeholder Management, Cross-functional Collaboration, Product Strategy, Prioritisation',
  },
  {
    category: 'AI Tools',
    items: 'AI-assisted UX workflows (ideation, UX writing, prototyping), Claude, Figma AI, UX Pilot, Stitch',
  },
]

export default function Resume() {
  return (
    <div className="page-enter pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">

      {/* Header */}
      <ScrollReveal className="mb-14">
        <div className="flex items-start justify-between flex-wrap gap-5">
          <div>
            <span className="text-sm tracking-[0.22em] text-[#555] uppercase block mb-4">Résumé</span>
            <h1 className="font-display font-semibold text-[#1C1C1A] mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Prateeksha
            </h1>
            <p className="text-base text-[#555] mb-1">Lead Product Designer / Founding Designer</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm text-[#555]">
              <a href="https://prateeksha.ink" className="hover:text-[#1C1C1A] transition-colors link-underline" target="_blank" rel="noopener noreferrer">
                prateeksha.ink
              </a>
              <span className="text-[#E2E0DA]">·</span>
              <span>Singapore</span>
              <span className="text-[#E2E0DA]">·</span>
              <a href="mailto:prateeksha.ink@gmail.com" className="hover:text-[#1C1C1A] transition-colors link-underline">
                prateeksha.ink@gmail.com
              </a>
              <span className="text-[#E2E0DA]">·</span>
              <a
                href="https://www.linkedin.com/in/prateekshatomar/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1C1C1A] transition-colors link-underline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
          {/* Download button — add Prateeksha-Resume.pdf to /public to activate */}
          <a
            href="/Prateeksha-Resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-[#1C1C1A] text-[#1C1C1A] text-sm px-5 py-3 rounded-full hover:bg-[#1C1C1A] hover:text-[#F5F4F0] transition-all duration-300 self-start shrink-0"
          >
            Download Resume ↓
          </a>
        </div>
      </ScrollReveal>

      {/* Summary */}
      <ScrollReveal className="mb-14 pb-14 border-b border-[#E2E0DA]">
        <p className="text-sm text-[#555] uppercase tracking-[0.18em] mb-4">Summary</p>
        <p className="text-base text-[#1C1C1A]/80 leading-relaxed">
          8+ years designing 0→1 and scalable products across fintech and SaaS. Led design of payment systems
          supporting $1B+ in transaction value. Built and scaled products including fintech systems used by
          200+ businesses. Strong in simplifying complex workflows and driving product decisions with founders
          and engineering.
        </p>
      </ScrollReveal>

      {/* Experience */}
      <ScrollReveal className="mb-6">
        <p className="text-sm text-[#555] uppercase tracking-[0.18em]">Experience</p>
      </ScrollReveal>

      <div className="mb-14 space-y-10">
        {experience.map((role, i) => (
          <ScrollReveal key={i} delay={i * 60} className="border-b border-[#E2E0DA] pb-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-4">
              <div>
                <h2 className="font-display font-medium text-[#1C1C1A] text-lg leading-snug">{role.title}</h2>
                <p className="text-base text-[#555] mt-0.5">{role.company}</p>
              </div>
              <span className="text-sm text-[#555] shrink-0 md:mt-0.5">{role.period}</span>
            </div>
            <ul className="space-y-2">
              {role.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-[#1C1C1A]/80 leading-relaxed">
                  <span className="text-[#C4A882] mt-[5px] shrink-0">◆</span>
                  {b}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>

      {/* Skills */}
      <ScrollReveal className="mb-6">
        <p className="text-sm text-[#555] uppercase tracking-[0.18em]">Skills</p>
      </ScrollReveal>

      <div className="mb-14 space-y-4 border-b border-[#E2E0DA] pb-14">
        {skills.map((s, i) => (
          <ScrollReveal key={s.category} delay={i * 50}>
            <div className="grid grid-cols-[140px_1fr] gap-4 text-sm">
              <span className="text-[#555] shrink-0 pt-0.5 font-medium">{s.category}</span>
              <span className="text-[#1C1C1A]/80 leading-relaxed">{s.items}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Education */}
      <ScrollReveal className="mb-6">
        <p className="text-sm text-[#555] uppercase tracking-[0.18em]">Education</p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
          <div>
            <p className="font-display font-medium text-[#1C1C1A] text-base">B.E, Computer Science</p>
            <p className="text-sm text-[#555] mt-1">Reva Institute of Technology and Management</p>
          </div>
        </div>
      </ScrollReveal>

    </div>
  )
}

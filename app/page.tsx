import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const works = [
  {
    slug: 'gnosis-bulk-payments',
    index: '01',
    title: 'Bulk Payments & Maker-Checker Flow',
    company: 'Gnosis Business',
    description: 'Designing trust into high-stakes financial workflows',
    year: '2022–Present',
    accent: '#DDD5C8',
  },
  {
    slug: 'noodle-factory-chatbot',
    index: '02',
    title: 'AI Chatbot Platform',
    company: 'Noodle Factory',
    description: 'Making AI feel human — at institutional scale',
    year: '2019–2022',
    accent: '#CED8CE',
  },
]

export default function Home() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 pt-32 max-w-7xl mx-auto">
        <div className="hero-1 mb-4">
          <span className="text-xs tracking-[0.22em] text-[#8A8A82] uppercase font-body">
            Lead Product Designer
          </span>
        </div>
        <h1 className="hero-2 font-display font-semibold text-[#1C1C1A] leading-[0.88] tracking-tight mb-10"
          style={{ fontSize: 'clamp(4.5rem, 13vw, 12rem)' }}>
          Prateeksha
        </h1>
        <div className="hero-3 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p
            className="font-display font-light text-[#1C1C1A] leading-snug max-w-xl"
            style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)' }}
          >
            I design complex systems<br />that feel effortless.
          </p>
          <div className="hero-4 flex gap-6">
            <Link
              href="/works"
              className="text-sm text-[#8A8A82] hover:text-[#1C1C1A] transition-colors duration-300 link-underline"
            >
              View works ↓
            </Link>
            <Link
              href="/about"
              className="text-sm text-[#8A8A82] hover:text-[#1C1C1A] transition-colors duration-300 link-underline"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
        <ScrollReveal className="mb-12 flex items-center justify-between">
          <span className="text-xs tracking-[0.22em] text-[#8A8A82] uppercase">Selected Works</span>
          <Link
            href="/works"
            className="text-xs text-[#8A8A82] hover:text-[#1C1C1A] transition-colors link-underline"
          >
            All works →
          </Link>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {works.map((work, i) => (
            <ScrollReveal key={work.slug} delay={i * 120}>
              <Link href={`/works/${work.slug}`} className="group block">
                {/* Card image area */}
                <div className="card-image-wrap mb-5 aspect-[4/3] relative overflow-hidden rounded-xl">
                  <div
                    className="card-image-inner absolute inset-0 flex items-end p-8"
                    style={{ backgroundColor: work.accent }}
                  >
                    <span
                      className="font-display font-semibold text-[#1C1C1A] opacity-[0.12] select-none leading-none"
                      style={{ fontSize: 'clamp(5rem, 12vw, 9rem)' }}
                    >
                      {work.index}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1C1C1A] opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500" />
                  {/* Arrow */}
                  <div className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#1C1C1A]/20 bg-[#F5F4F0]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
                    <span className="text-xs text-[#1C1C1A]">↗</span>
                  </div>
                </div>

                {/* Card meta */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-[#8A8A82] mb-1 tracking-wide">{work.company}</p>
                    <h3 className="font-display font-medium text-[#1C1C1A] leading-tight mb-2 group-hover:opacity-70 transition-opacity duration-300"
                      style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)' }}>
                      {work.title}
                    </h3>
                    <p className="text-sm text-[#8A8A82]">{work.description}</p>
                  </div>
                  <span className="text-xs text-[#8A8A82] shrink-0 mt-5">{work.year}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Availability strip */}
      <ScrollReveal>
        <section className="border-t border-[#E2E0DA] px-6 md:px-12 py-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-display text-[#1C1C1A]" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}>
            Open to IC lead and founding designer roles.
          </p>
          <Link
            href="/contact"
            className="text-sm text-[#8A8A82] hover:text-[#1C1C1A] transition-colors duration-300 link-underline shrink-0"
          >
            Let's talk →
          </Link>
        </section>
      </ScrollReveal>
    </div>
  )
}

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E0DA] mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-sm text-[#1C1C1A] mb-1">Prateeksha</p>
          <p className="text-sm text-[#555]">Lead Product Designer · Singapore</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <a
            href="mailto:prateeksha.ink@gmail.com"
            className="text-sm text-[#555] hover:text-[#1C1C1A] transition-colors duration-300 link-underline"
          >
            prateeksha.ink@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/prateekshatomar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#555] hover:text-[#1C1C1A] transition-colors duration-300 link-underline"
          >
            LinkedIn ↗
          </a>
          <Link
            href="/resume"
            className="text-sm text-[#555] hover:text-[#1C1C1A] transition-colors duration-300 link-underline"
          >
            Resume
          </Link>
        </div>
        <p className="text-sm text-[#555]">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

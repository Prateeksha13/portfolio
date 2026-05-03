import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prateeksha — Lead Product Designer',
  description:
    'Lead Product Designer with 8+ years in fintech and SaaS. I design complex systems that feel effortless.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full text-[#1C1C1A]">
        {/* Floating gradient background */}
        <div className="gradient-canvas" aria-hidden="true">
          <div className="g-blob g-blob-1" />
          <div className="g-blob g-blob-2" />
          <div className="g-blob g-blob-3" />
        </div>
        {/* Content sits above gradient */}
        <div className="content-layer flex flex-col min-h-screen">
          <CustomCursor />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

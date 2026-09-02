import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Cairo } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-latin',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Z International | Global Freight & Logistics',
  description:
    'Z International delivers end-to-end freight forwarding by air, ocean and land, backed by real-time tracking and a global partner network.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#d61f26',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light bg-background ${manrope.variable} ${cairo.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

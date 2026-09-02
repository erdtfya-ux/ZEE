"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"

export function SiteHeader() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-4 transition-all duration-300 sm:px-6",
          scrolled
            ? "border-border bg-background/80 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-white/15 bg-white/10 backdrop-blur-md",
        )}
      >
        <Link href="/" className="flex items-center gap-2" aria-label={t.brand.name}>
          <Image
            src="/z-international-logo.png"
            alt="Z International Logistic"
            width={160}
            height={52}
            priority
            className="h-11 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  scrolled ? "text-foreground/80 hover:bg-accent" : "text-white/90 hover:bg-white/15",
                  active && (scrolled ? "bg-accent text-primary" : "bg-white/20 text-white"),
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher variant={scrolled ? "light" : "dark"} />
          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            {t.nav.cta}
            <ArrowRight className="size-4 rtl:rotate-180" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className={cn(
              "grid size-10 place-items-center rounded-full border transition-colors lg:hidden",
              scrolled ? "border-border text-foreground" : "border-white/25 text-white",
            )}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    active ? "bg-accent text-primary" : "text-foreground/80 hover:bg-muted",
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              {t.nav.cta}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

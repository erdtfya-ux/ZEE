"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  WhatsappIcon,
} from "@/components/social-icons"

export function SiteFooter() {
  const { t } = useLanguage()

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.contact },
  ]

  const socials = [
    { Icon: FacebookIcon, label: "Facebook" },
    { Icon: TwitterIcon, label: "Twitter" },
    { Icon: LinkedinIcon, label: "LinkedIn" },
    { Icon: InstagramIcon, label: "Instagram" },
    { Icon: WhatsappIcon, label: "WhatsApp" },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/z-international-logo.png"
              alt="Z International Logistic"
              width={180}
              height={58}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{t.footer.about}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{t.footer.quickLinks}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{t.footer.servicesTitle}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {t.services.items.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <Link href="/services" className="text-white/70 transition-colors hover:text-primary">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{t.footer.newsletterTitle}</h3>
            <p className="mt-4 text-sm text-white/70">{t.footer.newsletterText}</p>
            <form
              className="mt-4 flex overflow-hidden rounded-full bg-white/10 p-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder={t.footer.newsletterPlaceholder}
                className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="submit"
                aria-label={t.footer.subscribe}
                className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="size-4 rtl:rotate-180" />
              </button>
            </form>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{t.contact.addressValue}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <span dir="ltr">+966 11 234 5678</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                <span>info@zinternational.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {t.brand.name}. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              {t.footer.privacy}
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

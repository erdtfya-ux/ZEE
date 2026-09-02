"use client"

import Link from "next/link"
import { Plane, Ship, Truck, Warehouse, Boxes, Container, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { PageHero } from "@/components/page-hero"

const icons = [Plane, Ship, Truck, Warehouse, Container, Boxes]

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero title={t.services.title} subtitle={t.services.subtitle} />

      <section className="bg-primary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((service, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
                >
                  <div className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-7" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{service.desc}</p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    {t.nav.cta}
                    <ArrowRight className="size-4 rtl:rotate-180" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center sm:px-12">
            <h2 className="text-balance text-2xl font-bold text-white sm:text-3xl">{t.home.ctaTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">{t.home.ctaText}</p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
            >
              {t.home.ctaButton}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

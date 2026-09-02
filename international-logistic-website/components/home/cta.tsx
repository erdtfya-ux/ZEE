"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function CtaBanner() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center sm:px-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.6) 0 2px, transparent 2px 22px)",
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold text-primary-foreground sm:text-4xl">
            {t.home.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">{t.home.ctaText}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-[1.04]"
          >
            {t.home.ctaButton}
            <ArrowRight className="size-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  )
}

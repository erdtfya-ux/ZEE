"use client"

import Link from "next/link"
import { ArrowRight, PackageCheck } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/fleet-hero.png)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/55 to-black/85"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-4 pb-20 pt-36 sm:px-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          <PackageCheck className="size-4 text-primary" />
          {t.home.heroKicker}
        </span>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          {t.home.heroTitle}
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80">
          {t.home.heroSubtitle}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.04]"
          >
            {t.home.heroPrimary}
            <ArrowRight className="size-4 rtl:rotate-180" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            {t.home.heroSecondary}
          </Link>
        </div>
      </div>
    </section>
  )
}

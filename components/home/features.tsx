"use client"

import { Globe, Clock, ShieldCheck, Truck } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const icons = [Globe, Truck, Clock, ShieldCheck]

export function Features() {
  const { t } = useLanguage()

  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
            {t.home.featuresKicker}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-primary-foreground sm:text-4xl">
            {t.home.featuresTitle}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.features.map((feature, i) => {
            const Icon = icons[i]
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

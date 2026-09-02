"use client"

import { Target, Eye, Users, ShieldCheck, Star, Route } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { PageHero } from "@/components/page-hero"

const whyIcons = [Users, Star, Route, ShieldCheck]

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero title={t.about.title} subtitle={t.about.subtitle} />

      <section className="bg-primary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-primary-foreground/85">
            {t.about.intro}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Target className="size-6" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-foreground">{t.about.missionTitle}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{t.about.mission}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Eye className="size-6" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-foreground">{t.about.visionTitle}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{t.about.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-white">{t.about.whyTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.why.map((item, i) => {
              const Icon = whyIcons[i]
              return (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                  <Icon className="size-7 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-primary-foreground">{t.about.teamTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {t.about.team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="mx-auto grid size-20 place-items-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

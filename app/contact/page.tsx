"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CircleCheck } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { PageHero } from "@/components/page-hero"

export default function ContactPage() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const info = [
    { Icon: MapPin, label: t.contact.address, value: t.contact.addressValue },
    { Icon: Phone, label: t.contact.phone, value: "+20 10 99366869⁩", ltr: true },
    { Icon: Mail, label: t.contact.email, value: "op@zinternationalgroup.org", ltr: true },
    { Icon: Clock, label: t.contact.hours, value: t.contact.hoursValue },
  ]

  return (
    <>
      <PageHero title={t.contact.title} subtitle={t.contact.subtitle} />

      <section className="bg-primary">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CircleCheck className="size-14 text-primary" />
                  <p className="mt-4 max-w-sm text-lg font-medium text-foreground">{t.contact.formSuccess}</p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    {t.contact.formSubmit}
                  </button>
                </div>
              ) : (
                <form
                  className="grid gap-5"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={t.contact.formName}>
                      <input type="text" required className={inputClass} />
                    </Field>
                    <Field label={t.contact.formPhone}>
                      <input type="tel" required className={inputClass} />
                    </Field>
                  </div>
                  <Field label={t.contact.formEmail}>
                    <input type="email" required className={inputClass} />
                  </Field>
                  <Field label={t.contact.formService}>
                    <select required defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        {t.contact.formServicePlaceholder}
                      </option>
                      {t.services.items.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label={t.contact.formMessage}>
                    <textarea rows={4} required className={`${inputClass} resize-none`} />
                  </Field>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    {t.contact.formSubmit}
                    <Send className="size-4 rtl:rotate-180" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-primary-foreground">{t.contact.infoTitle}</h2>
            <div className="mt-6 space-y-5">
              {info.map(({ Icon, label, value, ltr }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15 text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary-foreground/70">{label}</div>
                    <div className="mt-0.5 font-medium text-primary-foreground" dir={ltr ? "ltr" : undefined}>
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/20">
              <iframe
                title={t.contact.mapLabel}
                src="https://www.openstreetmap.org/export/embed.html?bbox=46.62%2C24.66%2C46.78%2C24.78&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  )
}

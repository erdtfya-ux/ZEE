"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])
  return value
}

function Stat({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, active)
  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold text-white sm:text-5xl">
        {count}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-white/70">{label}</div>
    </div>
  )
}

export function Stats() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-secondary">
      <div ref={ref} className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">{t.home.statsTitle}</h2>
        <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {t.home.stats.map((s) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}

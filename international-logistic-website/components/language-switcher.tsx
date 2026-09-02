"use client"

import { useEffect, useRef, useState } from "react"
import { Globe, ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"
import { LANGS } from "@/lib/i18n"

export function LanguageSwitcher({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  const current = LANGS.find((l) => l.code === lang)!

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Choose language"
        className={cn(
          "flex items-center gap-1.5 rounded-full border px-3 py-2 text-sm font-medium transition-colors",
          variant === "light"
            ? "border-border bg-background/60 text-foreground hover:bg-accent"
            : "border-white/25 bg-white/10 text-white hover:bg-white/20",
        )}
      >
        <Globe className="size-4" />
        <span>{current.native}</span>
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 top-[calc(100%+0.5rem)] z-50 w-44 overflow-hidden rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xl"
        >
          {LANGS.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === lang}>
              <button
                type="button"
                onClick={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                  l.code === lang ? "bg-accent text-accent-foreground font-semibold" : "hover:bg-muted",
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                    {l.flag}
                  </span>
                  <span>{l.native}</span>
                </span>
                {l.code === lang && <Check className="size-4 text-primary" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

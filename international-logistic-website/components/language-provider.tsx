"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { dictionary, type Lang, type Dict } from "@/lib/i18n"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "z-international-lang"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    const stored = (typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY)) as Lang | null
    if (stored === "en" || stored === "ar") {
      setLangState(stored)
    }
  }, [])

  useEffect(() => {
    const dir = dictionary[lang].dir
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: dictionary[lang],
    dir: dictionary[lang].dir as "ltr" | "rtl",
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}

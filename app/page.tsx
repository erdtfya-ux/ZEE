import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { Stats } from "@/components/home/stats"
import { CtaBanner } from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <CtaBanner />
    </>
  )
}

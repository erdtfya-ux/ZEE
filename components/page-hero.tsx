export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden bg-secondary pb-14 pt-36 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #fff 0 2px, transparent 2px 26px)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-balance text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-white/70">{subtitle}</p>
      </div>
    </section>
  )
}

const stats = [
  { value: "SSC · CBSE · ICSE", label: "School boards covered" },
  { value: "HSC · IB · IGCSE", label: "Plus international pathways" },
  { value: "Commerce", label: "Junior college & graduation" },
  { value: "Chembur", label: "Based in Mumbai" },
] as const;

export function Stats() {
  return (
    <section className="border-y border-brand/10 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-brand/10 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="bg-white px-5 py-7 text-center sm:px-6">
            <p className="font-display text-xl font-bold text-brand-deep sm:text-2xl">
              {item.value}
            </p>
            <p className="mt-1 text-xs font-medium text-ink-muted sm:text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

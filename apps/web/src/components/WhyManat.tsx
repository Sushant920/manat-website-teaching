import { DecorBlob } from "./Decor";
import { whyPoints } from "@/lib/site";

export function WhyManat() {
  return (
    <section
      id="why"
      className="relative scroll-mt-28 overflow-hidden bg-surface-muted py-16 sm:py-24"
    >
      <DecorBlob variant="grid" className="-right-12 top-8 h-52 w-52" />
      <DecorBlob variant="triangles" className="-left-16 bottom-8 h-48 w-48" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="section-label">Why Manat</p>
        <h2 className="heading-display mt-3 max-w-3xl text-3xl sm:text-4xl">
          Why parents and students choose Manat
        </h2>
        <p className="mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">
          The essentials families look for in a coaching institute - clear programs,
          credible mentorship, and a path from enquiry to enrolment.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((item, index) => (
            <article
              key={item.title}
              className="rounded-xl border border-brand/10 bg-white p-6 shadow-soft"
            >
              <p className="font-display text-3xl font-bold text-brand">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

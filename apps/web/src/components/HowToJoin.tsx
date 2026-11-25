import Link from "next/link";
import { DecorBlob } from "./Decor";
import { joinSteps, site } from "@/lib/site";

export function HowToJoin() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <DecorBlob variant="orb" className="-right-20 top-10 h-56 w-56" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="section-label">Admissions</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              How to join Manat
            </h2>
            <ol className="mt-10 space-y-6">
              {joinSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="rounded-xl bg-brand-deep p-8 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Admission
            </p>
            <p className="mt-3 font-display text-4xl font-bold">Open</p>
            <p className="mt-2 text-white/75">
              Seats are limited by batch. Enquire early for school, junior college
              commerce, or commerce graduation coaching in {site.location}.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3.5 text-sm font-bold text-brand-deep transition-colors hover:bg-brand-mist"
              >
                Apply Online
              </Link>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center justify-center rounded-md border-2 border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { DecorBlob } from "./Decor";
import { programs } from "@/lib/site";

export function Programs() {
  return (
    <section
      id="offerings"
      className="relative scroll-mt-28 overflow-hidden bg-white py-16 sm:py-24"
    >
      <DecorBlob variant="triangles" className="-left-10 top-16 h-44 w-44" />
      <DecorBlob variant="rings" className="-right-20 bottom-10 h-56 w-56" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="section-label">What we offer</p>
          <h2 className="heading-display mt-3 text-3xl sm:text-4xl md:text-[2.75rem]">
            What we teach at Manat
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Everything parents ask first - which stage, which board, which subjects.
            Here is the full picture of our coaching services.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {programs.map((program, index) => (
            <article
              key={program.id}
              className="relative overflow-hidden rounded-2xl border border-brand/15 bg-brand-pale p-6 shadow-soft sm:p-8"
            >
              <div className="absolute right-4 top-4 font-display text-5xl font-bold text-brand/15 sm:text-6xl">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                    {program.ages}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold text-ink">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {program.blurb}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-light">
                      Boards / streams
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {program.boards.map((board) => (
                        <li
                          key={board}
                          className="rounded-md bg-white px-2.5 py-1 text-xs font-bold text-brand-deep shadow-sm"
                        >
                          {board}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex text-sm font-bold text-brand hover:text-brand-deep"
                  >
                    {program.cta} →
                  </Link>
                </div>

                <div className="rounded-xl border border-brand/10 bg-white p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-light">
                    Subjects covered
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
                    {program.subjects.map((subject) => (
                      <li
                        key={subject}
                        className="flex items-start gap-2 text-sm text-ink-soft"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                          aria-hidden
                        />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

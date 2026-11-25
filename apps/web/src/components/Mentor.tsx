import { DecorBlob } from "./Decor";

export function Mentor() {
  return (
    <section className="relative overflow-hidden bg-brand py-16 text-white sm:py-20">
      <DecorBlob variant="rings" className="-right-10 -top-10 h-64 w-64 opacity-40" />
      <DecorBlob variant="grid" className="-left-16 bottom-0 h-56 w-56 opacity-30" />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
            Faculty & Mentorship
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Learn under Manat
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            Parents want to know who will actually teach their child. At Manat, coaching
            is led personally by an academically accomplished mentor - not a faceless
            brand promise.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "School topper",
              body: "Methods shaped by first-hand excellence - disciplined, practical, and exam-aware.",
            },
            {
              title: "CA Finalist",
              body: "Commerce taught with professional depth for junior college and graduation students.",
            },
            {
              title: "Multi-board school support",
              body: "SSC, CBSE, ICSE, HSC pathway, IB, IGCSE - with complete subject coverage up to Class 10.",
            },
            {
              title: "Student-first approach",
              body: "Clear explanations, steady follow-up, and guidance families can trust.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-white/20 bg-brand-deep/40 p-5 backdrop-blur-sm"
            >
              <h3 className="font-display text-xl font-bold text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

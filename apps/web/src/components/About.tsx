import Link from "next/link";
import { DecorBlob } from "./Decor";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 overflow-hidden bg-surface py-16 sm:py-24"
    >
      <DecorBlob variant="dots" className="-left-4 top-20 h-40 w-28" />
      <DecorBlob variant="orb" className="-right-24 bottom-0 h-64 w-64" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className="section-label">Our Story</p>
          <h2 className="heading-display mt-3 text-3xl sm:text-4xl md:text-[2.75rem]">
            Coaching built on academic excellence
          </h2>
          <div aria-hidden className="mt-5 h-1 w-14 rounded-full bg-brand" />
        </div>
        <div className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>
            Manat Coaching Classes is a professional tuition institute in Chembur,
            Mumbai. We support students from school through junior college commerce
            and into commerce graduation - with teaching that values clarity over
            shortcuts.
          </p>
          <p>
            Led by a school topper and CA Finalist, Manat brings strong academic
            grounding and patient mentorship. Families come for structure, honest
            guidance, and a coach who treats every student&apos;s progress seriously.
          </p>
          <Link href="/contact" className="btn-outline mt-2 inline-flex">
            Read more & enquire →
          </Link>
        </div>
      </div>
    </section>
  );
}

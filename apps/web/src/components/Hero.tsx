import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { DecorBlob } from "./Decor";
import { boards, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-pale">
      <DecorBlob variant="orb" className="-left-24 -top-16 h-72 w-72" />
      <DecorBlob variant="rings" className="-right-16 top-10 h-64 w-64" />
      <DecorBlob variant="grid" className="bottom-0 left-1/3 hidden h-48 w-48 opacity-70 lg:block" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:py-20">
        <div>
          <p className="section-label">
            School · Junior College · Commerce Graduation
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.2rem)] font-bold leading-[1.12] text-ink">
            Where knowledge
            <br />
            grows into success
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Professional coaching in {site.location}. Clear programs, familiar subjects,
            and mentorship families can trust.
          </p>
          <p className="mt-3 font-display text-xl italic text-brand">
            {site.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {boards.map((board) => (
              <span
                key={board}
                className="rounded-md border border-brand/20 bg-white px-2.5 py-1 text-xs font-bold text-brand-deep"
              >
                {board}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#offerings" className="btn-primary">
              See what we teach
            </Link>
            <Link href="/contact" className="btn-secondary">
              Apply for Admission
            </Link>
          </div>
        </div>

        <div className="relative rounded-xl border border-brand/15 bg-white p-5 shadow-card sm:p-7">
          <DecorBlob variant="dots" className="-right-6 -top-8 h-28 w-20 opacity-80" />
          <p className="section-label">Quick Enquiry</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-ink">
            Request a call back
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Leave your details - we will help you choose the right course.
          </p>
          <div className="mt-5">
            <ContactForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}

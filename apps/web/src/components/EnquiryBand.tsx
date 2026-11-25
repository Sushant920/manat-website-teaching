import { ContactForm } from "./ContactForm";
import { DecorBlob } from "./Decor";
import { site } from "@/lib/site";

export function EnquiryBand() {
  return (
    <section
      id="enquire"
      className="relative scroll-mt-28 overflow-hidden bg-brand-deep py-16 sm:py-20"
    >
      <DecorBlob variant="rings" className="-left-16 top-0 h-64 w-64 opacity-40" />
      <DecorBlob variant="orb" className="-right-20 bottom-0 h-72 w-72 opacity-30" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-start">
        <div className="text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            Admissions open
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Tell us about your child&apos;s goals
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Share class, board or stream, and we will suggest the right Manat program
            in {site.location}.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/80">
            <li>
              Phone:{" "}
              <a href={`tel:${site.phoneTel}`} className="font-semibold text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-white">
                {site.email}
              </a>
            </li>
            <li>Location: {site.location}</li>
          </ul>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-card sm:p-8">
          <h3 className="font-display text-2xl font-bold text-ink">
            Request a call back
          </h3>
          <p className="mt-2 text-sm text-ink-muted">
            Fill in the form and we will get back to you.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

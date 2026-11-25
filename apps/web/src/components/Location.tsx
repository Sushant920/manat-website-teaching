import { DecorBlob } from "./Decor";
import { site } from "@/lib/site";

export function Location() {
  return (
    <section className="relative overflow-hidden border-y border-brand/10 bg-brand-pale py-16 sm:py-20">
      <DecorBlob variant="dots" className="right-6 top-8 h-36 w-24" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="section-label">Location</p>
        <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
          Coaching classes in Chembur, Mumbai
        </h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Visit or call Manat for school, junior college commerce, and commerce
          graduation coaching close to home in Chembur.
        </p>

        <div className="mt-8 rounded-xl border border-brand/15 bg-white p-6 shadow-soft sm:p-8">
          <h3 className="font-display text-2xl font-bold text-ink">
            Manat Coaching Classes
          </h3>
          <p className="mt-2 text-ink-muted">{site.location}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${site.phoneTel}`} className="btn-primary">
              {site.phoneDisplay}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp for directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

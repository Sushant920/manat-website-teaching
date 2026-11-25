import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { DecorBlob } from "@/components/Decor";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Manat Coaching Classes in ${site.location}. Call, WhatsApp, or send an enquiry.`,
};

export default function ContactPage() {
  return (
    <section className="bg-surface">
      <div className="relative overflow-hidden bg-brand px-5 py-12 text-white sm:px-8 sm:py-16">
        <DecorBlob variant="rings" className="-right-10 -top-8 h-56 w-56 opacity-40" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
            Contact Us
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            We would be glad to hear from you
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Enquire about school coaching (SSC, CBSE, ICSE, HSC, IB, IGCSE), junior
            college commerce, or commerce graduation courses at Manat.
          </p>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <DecorBlob variant="dots" className="-left-4 top-8 h-36 w-24" />
        <div>
          <ul className="space-y-6">
            <ContactLine label="Phone / WhatsApp">
              <a
                href={`tel:${site.phoneTel}`}
                className="font-semibold text-brand hover:text-brand-deep"
              >
                {site.phoneDisplay}
              </a>
            </ContactLine>
            <ContactLine label="Email">
              <a
                href={`mailto:${site.email}`}
                className="break-all font-semibold text-brand hover:text-brand-deep"
              >
                {site.email}
              </a>
            </ContactLine>
            <ContactLine label="Location">
              <span className="font-semibold text-ink">{site.location}</span>
            </ContactLine>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Chat on WhatsApp
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn-outline">
              Call now
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-brand/15 bg-white p-6 shadow-card sm:p-8">
          <h2 className="font-display text-2xl font-bold text-ink">
            Send an enquiry
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Share a few details and we will get back to you shortly.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-light">
        {label}
      </p>
      <div className="mt-1.5 text-base">{children}</div>
    </li>
  );
}

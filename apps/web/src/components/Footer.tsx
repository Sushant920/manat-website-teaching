import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <Logo inverted />
          <p className="max-w-sm text-sm leading-relaxed text-white/65">
            {site.fullName}: school coaching (SSC, CBSE, ICSE, HSC, IB, IGCSE), junior
            college commerce, and commerce graduation in {site.location}.
          </p>
          <p className="font-display text-lg italic text-brand-soft">
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-soft">
            Quick links
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <Link href="/#about" className="hover:text-brand-soft">
                About
              </Link>
            </li>
            <li>
              <Link href="/#offerings" className="hover:text-brand-soft">
                What We Teach
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-brand-soft">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-soft">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-soft">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-brand-soft">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:text-brand-soft">
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
          <Link href="/contact" className="btn-primary mt-6 inline-flex">
            Enquire Now
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {site.fullName} · {site.location}
      </div>
    </footer>
  );
}

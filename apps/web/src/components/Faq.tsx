"use client";

import { useState } from "react";
import { DecorBlob } from "./Decor";
import { faqs } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-28 overflow-hidden bg-surface py-16 sm:py-24"
    >
      <DecorBlob variant="triangles" className="-right-12 top-12 h-44 w-44" />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <p className="section-label text-center">FAQ</p>
        <h2 className="heading-display mt-3 text-center text-3xl sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-ink-muted">
          Quick answers parents usually need before enquiring.
        </p>

        <div className="mt-10 divide-y divide-brand/10 rounded-xl border border-brand/15 bg-white">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span className="font-semibold text-ink">{item.q}</span>
                  <span
                    className={`mt-1 text-brand transition ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted sm:px-6">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { site } from "@/lib/site";

export function TopBar() {
  return (
    <div className="bg-brand text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-xs sm:px-8 sm:text-sm">
        <p className="font-medium tracking-wide text-white/90">
          Coaching Classes in {site.location}
        </p>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href={`tel:${site.phoneTel}`}
            className="font-semibold hover:text-white"
          >
            Call: {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hidden font-medium text-white/85 hover:text-white sm:inline"
          >
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}

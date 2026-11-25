import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  /** On dark backgrounds, place the logo on a light pad so navy artwork stays visible. */
  inverted?: boolean;
};

export function Logo({ className = "", inverted = false }: LogoProps) {
  const image = (
    <Image
      src="/manat-logo.png"
      alt="Manat Coaching Classes"
      width={320}
      height={200}
      className="h-12 w-auto object-contain sm:h-14"
      priority
    />
  );

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Manat home"
    >
      {inverted ? (
        <span className="rounded-xl bg-white px-3 py-2 shadow-soft">{image}</span>
      ) : (
        image
      )}
    </Link>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Logo({
  size = 34,
  showWordmark = true,
  className = "",
  href = "/",
}: {
  size?: number;
  showWordmark?: boolean;
  className?: string;
  href?: string | null;
}) {
  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={size}
        height={Math.round(size * 1.4145)}
        priority
        className="shrink-0"
        style={{ width: size, height: Math.round(size * 1.4145) }}
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-[0.24em] text-foreground">
            HIVE
          </span>
          <span className="text-[0.6rem] font-medium tracking-[0.35em] text-gold-500 mt-1">
            METRIC
          </span>
        </span>
      )}
    </span>
  );

  const pathname = usePathname();

  if (href === null) return content;

  const handleClick = () => {
    // Clicking the logo while already on the target page (e.g. scrolled down
    // the homepage with no hash in the URL) is a same-URL Link navigation,
    // which Next.js treats as a no-op and won't scroll to top on its own.
    if (href === pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link href={href} aria-label="Hive Metric home" className="inline-flex" onClick={handleClick}>
      {content}
    </Link>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    // Plain `overflow: hidden` doesn't reliably stop background scroll/rubber-band
    // on iOS Safari, which can shift page content mid-tap and cause taps on the
    // menu to silently miss. Pin the body in place instead, and restore the exact
    // scroll position on close.
    const scrollY = window.scrollY;
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl container-px h-18 flex items-center justify-between py-3">
          <Logo size={30} />

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {site.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.label === "Founder"
                    ? "text-sm font-medium nav-founder-glow transition-colors"
                    : "text-sm text-foreground/75 hover:text-foreground transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={site.headerCta.href} size="md">
              {site.headerCta.label}
            </Button>
          </div>

          <button
            className="lg:hidden flex h-11 w-11 items-center justify-center text-foreground -mr-2 touch-manipulation"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Rendered outside <header> deliberately: backdrop-blur-md on the scrolled
          header creates a CSS containing block for fixed-position descendants,
          which would collapse this overlay's bottom-0 height to ~0. */}
      {open && (
        <div className="fixed inset-x-0 top-18 bottom-0 z-40 lg:hidden bg-background overflow-y-auto overscroll-contain touch-pan-y">
          <div className="container-px py-6 flex flex-col gap-1">
            {site.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  link.label === "Founder"
                    ? "py-3 text-base font-medium nav-founder-glow border-b border-border/60 last:border-0 touch-manipulation"
                    : "py-3 text-base text-foreground/85 border-b border-border/60 last:border-0 touch-manipulation"
                }
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={site.headerCta.href}
              onClick={() => setOpen(false)}
              className="mt-5 w-full touch-manipulation"
            >
              {site.headerCta.label}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

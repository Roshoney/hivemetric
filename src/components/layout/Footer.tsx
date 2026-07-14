import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content";

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.6 4.78 6v6.25h-4v-5.55c0-1.32-.02-3.02-1.85-3.02-1.85 0-2.13 1.44-2.13 2.93V21h-4V9Z" />
  ),
  instagram: (
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.06 1.97.24 2.43.42.6.23 1.03.5 1.48.95.45.45.72.88.95 1.48.18.46.36 1.26.42 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.24 1.97-.42 2.43a4 4 0 0 1-.95 1.48c-.45.45-.88.72-1.48.95-.46.18-1.26.36-2.43.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.97-.24-2.43-.42a4 4 0 0 1-1.48-.95 4 4 0 0 1-.95-1.48c-.18-.46-.36-1.26-.42-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.06-1.17.24-1.97.42-2.43.23-.6.5-1.03.95-1.48.45-.45.88-.72 1.48-.95.46-.18 1.26-.36 2.43-.42C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.73.07-.96.04-1.48.2-1.83.34-.46.18-.78.39-1.13.74-.35.35-.56.67-.74 1.13-.14.35-.3.87-.34 1.83-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.04.96.2 1.48.34 1.83.18.46.39.78.74 1.13.35.35.67.56 1.13.74.35.14.87.3 1.83.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.83-.34.46-.18.78-.39 1.13-.74.35-.35.56-.67.74-1.13.14-.35.3-.87.34-1.83.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.83a2.2 2.2 0 0 0-.74-1.13 2.2 2.2 0 0 0-1.13-.74c-.35-.14-.87-.3-1.83-.34-1.23-.06-1.58-.07-4.73-.07Zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm5.72-2.02a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z" />
  ),
  x: (
    <path d="M18.24 3H21l-6.55 7.49L22.2 21h-6.19l-4.85-6.34L5.6 21H2.8l7.01-8.02L2 3h6.34l4.38 5.79L18.24 3Zm-1.08 16.17h1.53L7.9 4.74H6.26l10.9 14.43Z" />
  ),
  youtube: (
    <path d="M21.8 8.2a3 3 0 0 0-2.1-2.1C17.9 5.6 12 5.6 12 5.6s-5.9 0-7.7.5A3 3 0 0 0 2.2 8.2 31.5 31.5 0 0 0 1.7 12a31.5 31.5 0 0 0 .5 3.8 3 3 0 0 0 2.1 2.1c1.8.5 7.7.5 7.7.5s5.9 0 7.7-.5a3 3 0 0 0 2.1-2.1c.34-1.24.5-2.52.5-3.8a31.5 31.5 0 0 0-.5-3.8ZM10 15V9l5.2 3-5.2 3Z" />
  ),
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 flex flex-col gap-4">
            <Logo size={30} />
            <p className="text-sm text-muted max-w-xs">{site.description}</p>
            <div className="flex items-center gap-4 mt-2">
              {Object.entries(site.social).map(([key, url]) =>
                url ? (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="text-muted hover:text-gold-500 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      {socialIcons[key]}
                    </svg>
                  </a>
                ) : null
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              {site.footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Services</h3>
            <ul className="flex flex-col gap-3">
              {site.footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-2">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>{site.addressLine}</p>
        </div>
      </Container>
    </footer>
  );
}

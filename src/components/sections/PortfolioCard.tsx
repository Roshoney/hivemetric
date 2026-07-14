import Link from "next/link";
import Image from "next/image";
import { PortfolioItem } from "@/lib/types";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { SampleBadge } from "@/components/ui/SampleBadge";

const categoryIcon: Record<string, string> = {
  "Meta Ads": "performance",
  Automation: "automation",
  CRM: "crm",
  "Sales Systems": "sales",
  Analytics: "analytics",
  "Funnel Optimization": "funnel",
};

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-elevated transition-colors hover:border-gold-500/50"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-elevated-2">
        {item.featuredImage ? (
          <Image
            src={item.featuredImage}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_20%,rgba(232,184,75,0.16),transparent_60%)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/25 bg-gold-900/40 text-gold-400">
              <ServiceIcon name={categoryIcon[item.category] ?? "strategy"} className="w-6 h-6" />
            </div>
            <span className="text-xs text-muted-2">{item.client}</span>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-border-strong bg-background/80 px-3 py-1 text-[0.65rem] font-medium tracking-wide text-gold-400 backdrop-blur">
          {item.category}
        </span>
        {item.isSample && (
          <SampleBadge className="absolute right-4 top-4 bg-background/80 backdrop-blur" />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs text-muted-2">{item.client} &middot; {item.industry}</span>
        <h3 className="text-lg font-medium text-foreground text-balance">{item.title}</h3>
        <p className="text-sm text-muted">{item.summary}</p>

        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-4">
          {item.metrics.slice(0, 2).map((m) => (
            <div key={m.label} className="flex flex-col">
              <span className="text-base font-semibold text-gold-400">{m.value}</span>
              <span className="text-[0.7rem] text-muted-2">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

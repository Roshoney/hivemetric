"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioItem } from "@/lib/types";
import { PortfolioCard } from "@/components/sections/PortfolioCard";

export function PortfolioGrid({
  items,
  categories,
}: {
  items: PortfolioItem[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter portfolio by category">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === cat
                ? "border-gold-500 bg-gold-500/10 text-gold-400"
                : "border-border-strong text-muted hover:text-foreground hover:border-foreground/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-16 text-center text-sm text-muted-2"
          >
            No projects in this category yet — check back soon.
          </motion.p>
        ) : (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

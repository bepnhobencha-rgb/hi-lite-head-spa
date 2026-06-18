"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { q: string; a: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl bg-white shadow-sm"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className="text-sm font-semibold text-hl-black pr-4">
              {item.q}
            </span>
            <ChevronDown
              size={18}
              className={cn(
                "flex-shrink-0 text-hl-gold transition-transform duration-200",
                open === i ? "rotate-180" : ""
              )}
            />
          </button>

          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-hl-muted">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

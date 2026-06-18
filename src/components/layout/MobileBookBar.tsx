"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";

export function MobileBookBar({
  label,
  bookingUrl,
}: {
  label: string;
  bookingUrl: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-hl-black border-t border-hl-gold/20 px-4 py-3 pb-safe">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-hl-gold py-3.5 text-sm font-semibold text-hl-black"
        >
          <CalendarDays size={16} />
          {label}
        </a>
      </div>
    </div>
  );
}

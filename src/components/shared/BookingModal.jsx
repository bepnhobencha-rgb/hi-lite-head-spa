import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { BUSINESS, BOOKING_URL } from "@/lib/constants";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

export default function BookingModal({ isOpen, onClose }) {
  const { lang } = useLang();
  const tx = t[lang].bookingModal;
  const fallbackText =
    lang === "es"
      ? "¿No carga? Abrir la página de reservas"
      : "Not loading? Open the booking page";

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal — embedded Square booking; customer stays on this site */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 flex w-full max-w-3xl h-[90vh] sm:h-[85vh] flex-col overflow-hidden rounded-sm border border-border bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3 shrink-0">
              <h2 className="font-heading text-lg font-light tracking-wide text-foreground">
                {tx.title}
              </h2>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            {/* Embedded booking (Square) */}
            <iframe
              src={BOOKING_URL}
              title="Book an appointment"
              className="w-full flex-1 border-0 bg-white"
              loading="lazy"
              allow="payment"
            />

            {/* Footer: hours + open-in-new-tab fallback */}
            <div className="flex items-center justify-between gap-3 border-t border-border px-5 py-2.5 shrink-0">
              <span className="font-body text-xs text-muted-foreground">
                {BUSINESS.hours}
              </span>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-xs text-muted-foreground transition-colors hover:text-gold"
              >
                {fallbackText} <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

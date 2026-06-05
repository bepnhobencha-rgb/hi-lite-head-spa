import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Phone, ArrowRight, CalendarCheck } from "lucide-react";
import { BUSINESS, BOOKING_URL } from "@/lib/constants";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

export default function BookingModal({ isOpen, onClose }) {
  const { lang } = useLang();
  const tx = t[lang].bookingModal;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative bg-background border border-border rounded-sm shadow-2xl max-w-md w-full p-10 z-10"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-8 text-center">
              <CalendarCheck size={32} className="mx-auto mb-4 text-gold" strokeWidth={1.5} />
              <h2 className="font-heading text-2xl font-light text-foreground tracking-wide mb-2">
                {tx.title}
              </h2>
              <p className="font-body text-sm text-muted-foreground">
                {tx.subtitle}
              </p>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-sm mb-4">
              <Clock size={18} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">{tx.hoursLabel}</p>
                <p className="font-body text-sm text-foreground font-medium">{BUSINESS.hours}</p>
              </div>
            </div>

            {/* After-hours notice */}
            <div className="flex items-start gap-4 p-5 bg-gold/10 border border-gold/30 rounded-sm mb-8">
              <Phone size={18} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">{tx.afterHoursLabel}</p>
                <p className="font-body text-sm text-foreground">
                  {tx.afterHoursText}{" "}
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="font-medium text-gold hover:underline"
                  >
                    {BUSINESS.phone}
                  </a>{" "}
                  {tx.afterHoursSuffix}
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-center gap-3 w-full py-4 bg-foreground text-background text-sm font-body tracking-widest rounded-full hover:opacity-85 hover:shadow-[0_0_18px_rgba(0,0,0,0.2)] transition-all duration-300"
            >
              {tx.proceedButton} <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
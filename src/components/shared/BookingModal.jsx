import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Phone, ArrowRight, CalendarCheck } from "lucide-react";
import { BUSINESS, BOOKING_URL } from "@/lib/constants";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

// Head-spa brand gold (hsl(38 65% 55%) ≈ rgb(215,160,66)). Matches the
// hi-lite-studio modal layout but tuned to this site's gold brand.
const GOLD = "#d7a042";
const GOLD_DARK = "#b8842e";
const GOLD_RGB = "215,160,66";
const GOLD_GRADIENT = `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`;

export default function BookingModal({ isOpen, onClose }) {
  const { lang } = useLang();
  const tx = t[lang].bookingModal;
  const notNow = lang === "es" ? "Ahora no" : "Not now";

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
              {/* Top accent */}
              <div className="h-1 w-full" style={{ background: GOLD_GRADIENT }} />

              <div className="p-8 sm:p-10">
                {/* Close */}
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute top-5 right-5 text-[#AEAEAE] hover:text-[#2C2C2C] transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #fbf3e6, #f3e6cf)" }}
                  >
                    <CalendarCheck size={28} strokeWidth={1.4} style={{ color: GOLD }} />
                  </div>
                </div>

                {/* Title + subtitle */}
                <h2 className="font-heading text-2xl md:text-3xl font-light text-center text-foreground tracking-wide mb-2">
                  {tx.title}
                </h2>
                <p className="font-body text-sm text-[#8E8E8E] text-center leading-relaxed mb-8">
                  {tx.subtitle}
                </p>

                {/* Hours + after-hours notice */}
                <div className="bg-[#F8F5F0] border border-[#ede8e0] rounded-2xl p-5 mb-8">
                  <div className="flex items-start gap-3 mb-3">
                    <Clock size={16} className="mt-0.5 shrink-0" style={{ color: GOLD }} />
                    <div>
                      <p className="font-body text-sm font-medium text-[#2C2C2C]">{tx.hoursLabel}</p>
                      <p className="font-body text-xs text-[#8E8E8E] mt-0.5">{BUSINESS.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="mt-0.5 shrink-0" style={{ color: GOLD }} />
                    <div>
                      <p className="font-body text-sm font-medium text-[#2C2C2C]">{tx.afterHoursLabel}</p>
                      <p className="font-body text-xs text-[#8E8E8E] mt-0.5">
                        {tx.afterHoursText}{" "}
                        <a
                          href={`tel:${BUSINESS.phone}`}
                          className="font-semibold transition-opacity hover:opacity-75"
                          style={{ color: GOLD }}
                        >
                          {BUSINESS.phone}
                        </a>{" "}
                        {tx.afterHoursSuffix}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2.5 w-full py-4 text-sm font-body font-medium tracking-[0.18em] rounded-full transition-all duration-300 mb-3"
                  style={{
                    background: GOLD_GRADIENT,
                    color: "#fff",
                    boxShadow: `0 8px 28px rgba(${GOLD_RGB},0.45)`,
                  }}
                >
                  {tx.proceedButton} <ArrowRight size={15} />
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-3 text-sm font-body text-[#AEAEAE] hover:text-[#2C2C2C] transition-colors tracking-wide"
                >
                  {notNow}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

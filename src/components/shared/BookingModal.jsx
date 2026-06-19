import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Clock, Phone, ArrowRight, CalendarCheck } from "lucide-react";
import { BUSINESS, EMBED_URL } from "@/lib/constants";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

const GOLD = "#d7a042";
const GOLD_DARK = "#b8842e";
const GOLD_RGB = "215,160,66";
const GOLD_GRADIENT = `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`;

// Two-step modal: (1) "Before You Book" notice + Continue → (2) "Book Your
// Appointment" with the NailIQ booking embedded (auto-sized to content, portal
// to <body>, solid render).
export default function BookingModal({ isOpen, onClose }) {
  const { lang } = useLang();
  const tx = t[lang].bookingModal;
  const notNow = lang === "es" ? "Ahora no" : "Not now";
  const bookingTitle = lang === "es" ? "Reservar Cita" : "Book Your Appointment";
  const [step, setStep] = useState("notice");
  const [frameHeight, setFrameHeight] = useState(460);

  useEffect(() => {
    if (isOpen) {
      setStep("notice");
      setFrameHeight(460);
    }
  }, [isOpen]);

  useEffect(() => {
    function onMessage(e) {
      const d = e && e.data;
      if (
        d &&
        d.source === "nailiq-embed" &&
        d.type === "resize" &&
        typeof d.height === "number" &&
        d.height > 0
      ) {
        setFrameHeight(d.height);
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (!isOpen) return null;
  if (typeof document === "undefined") return null;

  const embedSrc = `${EMBED_URL}?lang=en`;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center px-3 py-6 sm:px-4"
      style={{ zIndex: 9999 }}
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden flex flex-col"
        style={{ maxHeight: "92vh" }}
      >
        <div className="h-1 w-full shrink-0" style={{ background: GOLD_GRADIENT }} />

        {step === "notice" ? (
          <div className="p-8 sm:p-10">
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 text-[#AEAEAE] hover:text-[#2C2C2C] transition-colors"
            >
              <X size={20} />
            </button>
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #fbf3e6, #f3e6cf)" }}
              >
                <CalendarCheck size={28} strokeWidth={1.4} style={{ color: GOLD }} />
              </div>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-light text-center text-foreground tracking-wide mb-2">
              {tx.title}
            </h2>
            <p className="font-body text-sm text-[#8E8E8E] text-center leading-relaxed mb-8">
              {tx.subtitle}
            </p>
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
            <button
              onClick={() => setStep("booking")}
              className="flex items-center justify-center gap-2.5 w-full py-4 text-sm font-body font-medium tracking-[0.18em] rounded-full transition-all duration-300 mb-3"
              style={{ background: GOLD_GRADIENT, color: "#fff", boxShadow: `0 8px 28px rgba(${GOLD_RGB},0.45)` }}
            >
              {tx.proceedButton} <ArrowRight size={15} />
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 text-sm font-body text-[#AEAEAE] hover:text-[#2C2C2C] transition-colors tracking-wide"
            >
              {notNow}
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between px-5 py-3 shrink-0 border-b border-[#ede8e0]">
              <h2 className="font-heading text-lg font-light text-foreground tracking-wide">
                {bookingTitle}
              </h2>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-[#AEAEAE] hover:text-[#2C2C2C] transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="overflow-y-auto" style={{ flex: 1, minHeight: 0 }}>
              <iframe
                src={embedSrc}
                title="Book your appointment"
                className="w-full block"
                style={{ border: 0, height: frameHeight + "px" }}
                allow="clipboard-write; payment"
              />
            </div>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}

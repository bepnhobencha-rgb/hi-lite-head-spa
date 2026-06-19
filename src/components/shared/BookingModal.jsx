import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { EMBED_URL } from "@/lib/constants";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

const GOLD = "#d7a042";
const GOLD_DARK = "#b8842e";
const GOLD_GRADIENT = `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`;

export default function BookingModal({ isOpen, onClose }) {
  const { lang } = useLang();
  const tx = t[lang].bookingModal;

  if (!isOpen) return null;
  if (typeof document === "undefined") return null;

  const embedSrc = `${EMBED_URL}?lang=en`;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            style={{ zIndex: 9998 }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 flex items-center justify-center px-3 py-6 sm:px-4"
            style={{ zIndex: 9999 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden flex flex-col"
              style={{ maxHeight: "92vh" }}
            >
              <div className="h-1 w-full shrink-0" style={{ background: GOLD_GRADIENT }} />
              <div className="flex items-center justify-between px-5 py-3 shrink-0 border-b border-[#ede8e0]">
                <h2 className="font-heading text-lg font-light text-foreground tracking-wide">
                  {tx.title}
                </h2>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="text-[#AEAEAE] hover:text-[#2C2C2C] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <iframe
                src={embedSrc}
                title="Book your appointment"
                className="w-full grow"
                style={{ border: 0, minHeight: "60vh" }}
                allow="clipboard-write; payment"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

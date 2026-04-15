import React, { createContext, useContext, useState } from "react";
import BookingModal from "@/components/shared/BookingModal";

const BookingModalContext = createContext(null);

export function BookingModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookingModalContext.Provider value={{ openBookingModal: () => setIsOpen(true) }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  return useContext(BookingModalContext);
}
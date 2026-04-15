import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { BookingModalProvider } from "@/lib/BookingModalContext";

export default function Layout() {
  return (
    <BookingModalProvider>
      <div className="min-h-screen flex flex-col font-body">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </BookingModalProvider>
  );
}
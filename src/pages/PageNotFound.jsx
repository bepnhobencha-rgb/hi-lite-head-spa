import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-center px-4 pt-20">
      <div>
        <p className="font-heading text-9xl font-light text-gold/30 mb-2">404</p>
        <h1 className="font-heading text-3xl font-light text-foreground mb-4 tracking-wide">Page Not Found</h1>
        <p className="font-body text-sm text-muted-foreground mb-10">The page you are looking for doesn't exist.</p>
        <Link to="/" className="px-10 py-3.5 bg-foreground text-background text-sm font-body tracking-wider rounded-full hover:opacity-85 transition-all duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

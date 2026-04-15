import React, { createContext, useContext, useState } from "react";

const LANGS = ["en", "es", "vi"];

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const toggle = () => setLang((l) => {
    const idx = LANGS.indexOf(l);
    return LANGS[(idx + 1) % LANGS.length];
  });
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
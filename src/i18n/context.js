import { createContext, useContext, useState, useCallback } from "react";
import es from "./es";
import en from "./en";

const translations = { es, en };

const LanguageContext = createContext();

function lookup(obj, path) {
  const keys = path.split(".");
  let value = obj;
  for (const key of keys) {
    if (value && typeof value === "object") value = value[key];
    else return undefined;
  }
  return value;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  const t = useCallback(
    (path) => {
      let value = lookup(translations[lang], path);
      if (value !== undefined) return value;
      value = lookup(translations["es"], path);
      return value !== undefined ? value : path;
    },
    [lang]
  );

  const toggleLang = useCallback((l) => setLang(l), []);

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

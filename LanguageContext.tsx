import React, { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("ro");

  const contextValue = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export default function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

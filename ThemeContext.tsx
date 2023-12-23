import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedTheme =
    typeof window !== "undefined"
      ? localStorage.getItem("selectedTheme")
      : null;

  const [theme, setTheme] = useState(storedTheme || "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("selectedTheme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [storedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

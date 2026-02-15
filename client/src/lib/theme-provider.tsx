'use client';

import { createContext, useContext, useEffect } from 'react';

// Single theme: Dark
type Theme = 'dark'; 

const ThemeContext = createContext({
  theme: 'dark' as Theme,
  setTheme: (theme: Theme) => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Force dark mode on mount
    const root = window.document.documentElement;
    root.classList.remove('light');
    root.classList.add('dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark', setTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

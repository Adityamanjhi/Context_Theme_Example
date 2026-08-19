import React, { useContext, createContext, useState, useMemo } from 'react';

const ThemeContext = createContext();

const darkTheme = {
  mode: 'dark',
  background: '#121212',
  text: '#FFFFFF',
  primary: '#0A84FF',
};

const lightTheme = {
  mode: 'light',
  background: '#FFFFFF',
  text: '#000000',
  primary: '#007AFF',
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const theme = useMemo(() => {
    return isDark ? darkTheme : lightTheme;
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

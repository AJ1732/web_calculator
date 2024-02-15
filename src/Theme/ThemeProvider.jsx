import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const value = {
    theme,
    toggleTheme: () => setTheme(theme === 'light'? 'dark': 'light')
  }

  return (
    <ThemeContext.Provider value={ value }>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);


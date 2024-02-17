import React, { createContext, useContext, useState } from 'react'

export const ValueContext = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [value, setValue] = useState(null);

  const valueObject = {
    value,
    setValue
    // inputValue: () => setTheme(theme === 'light'? 'dark': 'light')
  }

  return (
    <ValueContext.Provider value={ valueObject }>
      {children}
    </ValueContext.Provider>
  )
}

export const useValueContext = () => useContext(ValueContext);
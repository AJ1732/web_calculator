import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';

const Heading = ({ children }) => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  return (
    <h1 className={`
      text-3xl font-bold
      ${ themeBoolean ? 'text-blue-dark': 'text-blue-darker' }
    `}>
      {children}
    </h1> 
  )
}

export default Heading
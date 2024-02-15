import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';

const Calc = () => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  return (
    <main className={`
      max-w-[375rem]
      ${ themeBoolean? '': '' }
    `}>
      
    </main>
  )
}

export default Calc
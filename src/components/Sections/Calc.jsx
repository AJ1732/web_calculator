import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';

const Calc = () => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  return (
    <main className={`
      max-w-96 max-h-[50.75rem] w-96 h-[50.75rem] 
      m-auto | duration-300 ease-in-out | rounded-[2.5rem] 
      ${ themeBoolean? 'bg-white': 'bg-blue-darker' }
    `}>
      
      <div className={`
        
      `}>

      </div>
    </main>
  )
}

export default Calc
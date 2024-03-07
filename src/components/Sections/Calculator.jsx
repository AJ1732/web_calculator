import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';

import CalulatorPad from './CalulatorPad';
import CalculatorDisplay from './CalculatorDisplay';

const Calculator = () => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  return (
    <main className={`
      max-w-96 max-h-[50.75rem] w-96 h-[50.75rem] 
      m-auto p-8 | rounded-[2.5rem] 
      grid grid-rows-[15rem_1fr] gap-5
      duration-300 ease-in-out
      ${ themeBoolean? 'bg-lm-bg': 'bg-dm-bg' }
    `}>
      <CalculatorDisplay />      
      <CalulatorPad />
    </main>
  )
}

export default Calculator
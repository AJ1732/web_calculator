import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';
import { useValueContext } from '../../Context/ContextProvider';

const CalculatorDisplay = () => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  const { value, previousOperand, currentOperand, operation } = useValueContext();
  console.log(value, 'clicked');


  return (
    <section className='
      bg-[#ccc] h-full | p-10 rounded-2xl
      grid place-items-end 
    '>
      {/* Previous Operand */}
      <div className='text-input-text'>
        {previousOperand} {operation}
      </div>
      {/* Current Operand */}
      <div className='text-input-text'>{currentOperand}</div>

      <h2 className={`
        font-medium text-5xl
        ${themeBoolean? 'text-lm-answer-text': 'text-dm-answer-text'} 
      `}>
        {value}</h2>
    </section>
  )
}

export default CalculatorDisplay
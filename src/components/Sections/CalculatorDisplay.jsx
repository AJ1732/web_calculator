import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';
import { useValueContext } from '../../Context/ContextProvider';

const CalculatorDisplay = () => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  const { value } = useValueContext();
  const numValue = Number(value)
  console.log(typeof(numValue), numValue, 'clicked');
  console.log(typeof(value), value, 'clicked');

  return (
    <section className='
      bg-[#ccc] h-full | p-10 rounded-2xl
      grid place-items-end 
    '>
      <h2 className={`
        font-medium text-5xl
        ${themeBoolean? 'text-lm-answer-text': 'text-dm-answer-text'} 
      `}>
        {value}</h2>
    </section>
  )
}

export default CalculatorDisplay
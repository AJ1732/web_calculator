import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';
import { useValueContext } from '../../Context/ContextProvider';
import NumButton from '../Buttons/NumButton';
import OperatorButton from '../Buttons/OperatorButton';
import EqualButton from '../Buttons/EqualButton';
import ActionButton from '../Buttons/ActionButton';
import FunctionButton from '../Buttons/FunctionButton';

const Calculator = () => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  const { value } = useValueContext();
  console.log(value, 'clicked');

  return (
    <main className={`
      max-w-96 max-h-[50.75rem] w-96 h-[50.75rem] 
      grid grid-rows-[15rem_1fr] gap-5
      m-auto p-8 | duration-300 ease-in-out | rounded-[2.5rem] 
      ${ themeBoolean? 'bg-lm-bg': 'bg-dm-bg' }
    `}>
      <section className='h-full bg-[#ccc] rounded-2xl'></section>
      
      <section className={`
        m-auto
        grid grid-cols-[repeat(4,_60px)] grid-rows-[40px_repeat(5,_60px)] gap-5 place-content-center
      `}>
        {/* FUNCTION BUTTONS */}
        {['e', 'µ', 'sin', 'deg'].map(item => (
          <FunctionButton key={item} className='row-start-1 | bg-[#ccc] rounded-2xl'>{item}</FunctionButton>
        ))}

        {/* NUMBER BUTTONS */}
        {[1, 2, 3].map(item => (
          <NumButton key={item} className='row-start-3'>{item}</NumButton>
        ))}
        {[4, 5, 6].map(item => (
          <NumButton key={item} className='row-start-4 | rounded-2xl'>{item}</NumButton>
        ))}
        {[7, 8, 9].map(item => (
          <NumButton key={item} className='row-start-5 | rounded-2xl'>{item}</NumButton>
        ))}
        <NumButton 
          className={` 
            row-start-6 col-start-1 col-span-2
            text-2xl font-medium rounded-2xl
            ${themeBoolean? 'bg-lm-num-btn-bg text-lm-num-btn-text': 'bg-dm-num-btn-bg text-dm-num-btn-text'} `}
        >0</NumButton>
        <NumButton className='row-start-6 col-start-3 | rounded-2xl'>.</NumButton>
        
        {/* ACTION BUTTONS */}
        {['Ac', '←'].map(item => (
          <ActionButton key={item} className='row-start-2 | bg-[#ccc] rounded-2xl'>{item}</ActionButton>
        ))}

        {/* OPERATOR BUTTONS */}
        <OperatorButton className='row-start-2 | rounded-2xl'>/</OperatorButton>
        <OperatorButton className='row-start-2 | rounded-2xl'>*</OperatorButton>
        <OperatorButton className='row-start-3 col-start-4 | rounded-2xl'>-</OperatorButton>
        <div className='grid grid-cols-subgrid gap-5 row-start-4 row-span-3 rounded-2xl'>
          <OperatorButton className='row-start-1 row-span-1 | rounded-2xl'>+</OperatorButton>
          <EqualButton className='row-start-2 row-span-1 | rounded-2xl'>=</EqualButton>
        </div>
      </section>
    </main>
  )
}

export default Calculator
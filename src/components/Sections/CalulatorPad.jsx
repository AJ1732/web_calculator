import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';
import NumButton from '../Buttons/NumButton';
import OperatorButton from '../Buttons/OperatorButton';
import EqualButton from '../Buttons/EqualButton';
import ActionButton from '../Buttons/ActionButton';
import FunctionButton from '../Buttons/FunctionButton';

const CalulatorPad = () => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  return (
    <section className={`
        m-auto | grid gap-5 place-content-center
        grid-cols-[repeat(4,_60px)] 
        grid-rows-[40px_repeat(5,_60px)] 
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
  )
}

export default CalulatorPad
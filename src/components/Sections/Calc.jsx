import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';
import NumButton from '../Buttons/NumButton';
import OperatorButton from '../Buttons/OperatorButton';

const Calc = () => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  return (
    <main className={`
      max-w-96 max-h-[50.75rem] w-96 h-[50.75rem] 
      grid grid-rows-[15rem_1fr] gap-5
      m-auto p-8 | duration-300 ease-in-out | rounded-[2.5rem] 
      ${ themeBoolean? 'bg-lm-bg': 'bg-dm-bg' }
    `}>
      <div className='h-full bg-[#ccc] rounded-2xl'></div>
      
      <div className={`
        m-auto
        grid grid-cols-[repeat(4,_60px)] grid-rows-[40px_repeat(5,_60px)] gap-5 place-content-center
      `}>
        {/* FUNCTION BUTTONS */}
        {['e', 'µ', 'sin', 'deg'].map(item => (
          <div key={item} className='row-start-1 | bg-[#ccc] rounded-2xl'>{item}</div>
        ))}

        {/* NUMBER BUTTONS */}
        {[1, 2, 3].map(item => (
          <NumButton key={item} className='row-start-3'>{item}</NumButton>
        ))}
        {[4, 5, 6].map(item => (
          <NumButton key={item} className='row-start-4 | bg-[#ccc] rounded-2xl'>{item}</NumButton>
        ))}
        {[7, 8, 9].map(item => (
          <NumButton key={item} className='row-start-5 | bg-[#ccc] rounded-2xl'>{item}</NumButton>
        ))}
        <button 
          className={` 
            row-start-6 col-start-1 col-span-2
            text-2xl font-medium rounded-2xl
            ${themeBoolean? 'bg-lm-num-btn-bg text-lm-num-btn-text': 'bg-dm-num-btn-bg text-dm-num-btn-text'} `}
        >0</button>
        
        {/* ACTION BUTTONS */}
        {['Ac', '←', '/'].map(item => (
          <div key={item} className='row-start-2 | bg-[#ccc] rounded-2xl'>{item}</div>
        ))}

        {/* OPERATOR BUTTONS */}
        <div className='row-start-2 | bg-[#ccc] rounded-2xl'>*</div>
        <div className='row-start-6 col-start-3 | bg-[#ccc] rounded-2xl'>.</div>
        <div className='row-start-3 col-start-4 | bg-[#ccc] rounded-2xl'>-</div>
        <div className='grid grid-cols-subgrid gap-5 row-start-4 row-span-3 rounded-2xl |'>
          <div className='row-start-1 row-span-1 | bg-[#ccc] rounded-2xl'>+</div>
          <div className='row-start-2 row-span-1 | bg-[#ccc] rounded-2xl'>=</div>
        </div>
      </div>
    </main>
  )
}

export default Calc
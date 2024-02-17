import React from 'react'
import { useValueContext } from '../../Context/ContextProvider';

const CalculatorDisplay = () => {
  const { value } = useValueContext();
  console.log(value, 'clicked');

  return (
    <section className='h-full bg-[#ccc] rounded-2xl'>
      <h2>{value}</h2>
    </section>
  )
}

export default CalculatorDisplay
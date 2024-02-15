import React from 'react'
import Heading from '../Elements/Heading'
import Switch from '../../Theme/Switch/index'

const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <Heading>Web Calculator</Heading>
      <Switch />
    </header>
  )
}

export default Header
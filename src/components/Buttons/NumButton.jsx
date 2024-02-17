import React from 'react'
import Button from './Button';
import { useTheme } from '../../Theme/ThemeProvider';

const NumButton = ({ children, className }) => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  return (
    <Button 
      type={`num`}
      className={` 
        ${className}
        ${themeBoolean? 'bg-lm-num-btn-bg text-lm-num-btn-text': 'bg-dm-num-btn-bg text-dm-num-btn-text'} `}
    >
      {children}
    </Button>
  )
}

export default NumButton
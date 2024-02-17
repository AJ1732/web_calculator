import React from 'react'
import Button from './Button';
import { useTheme } from '../../Theme/ThemeProvider';

const EqualButton = ({ children, className }) => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  return (
    <Button 
      type={`equal`}
      className={` 
        ${className}
        ${themeBoolean? 'bg-lm-equal-btn-bg text-lm-equal-btn-text': 'bg-dm-operator-btn-bg text-dm-operator-btn-text'} `}
    >
      {children}
    </Button>
  )
}

export default EqualButton
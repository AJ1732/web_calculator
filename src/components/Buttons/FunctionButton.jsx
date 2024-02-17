import React from 'react'
import Button from './Button';
import { useTheme } from '../../Theme/ThemeProvider';

const FunctionButton = ({ children, className }) => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  return (
    <Button 
      type={`function`}
      className={` 
        ${className}
        ${themeBoolean? 'bg-lm-function-btn-bg text-lm-function-btn-text': 'bg-dm-function-btn-bg text-dm-function-btn-text'} `}
    >
      {children}
    </Button>
  )
}

export default FunctionButton
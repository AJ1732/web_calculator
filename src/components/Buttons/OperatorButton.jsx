import React from 'react'
import Button from './Button';
import { useTheme } from '../../Theme/ThemeProvider';

const OperatorButton = ({ children, className }) => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  return (
    <Button 
      className={` 
        ${className}
        ${themeBoolean? 'bg-lm-operator-btn-bg text-lm-operator-btn-text': 'bg-dm-operator-btn-bg text-dm-operator-btn-text'} `}
    >
      {children}
    </Button>
  )
}

export default OperatorButton
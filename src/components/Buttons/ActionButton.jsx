import React from 'react'
import Button from './Button';
import { useTheme } from '../../Theme/ThemeProvider';

const ActionButton = ({ children, className }) => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  return (
    <Button 
      className={` 
        ${className}
        ${themeBoolean? 'bg-lm-action-btn-bg text-lm-action-btn-text': 'bg-dm-action-btn-bg text-dm-action-btn-text'} `}
    >
      {children}
    </Button>
  )
}

export default ActionButton
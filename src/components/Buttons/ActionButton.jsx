import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';

const ActionButton = ({ children, className }) => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  const handleClick = (e) => {
    console.log(e.target.value, 'clicked!');
  }

  return (
    <button 
      className={` 
        ${className}
        duration-300 ease-in-out
        rounded-2xl text-3xl font-medium
        ${themeBoolean? 'bg-lm-action-btn-bg text-lm-action-btn-text': 'bg-dm-action-btn-bg text-dm-action-btn-text'} `}
      value={children}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default ActionButton
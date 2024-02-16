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
        rounded-2xl text-2xl font-medium
        ${themeBoolean? 'bg-lm-num-btn-bg text-lm-num-btn-text': 'bg-dm-num-btn-bg text-dm-num-btn-text'} `}
      value={children}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default ActionButton
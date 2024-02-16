import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';

const FunctionButton = ({ children, className }) => {
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
        rounded-2xl text-xl font-medium
        ${themeBoolean? 'bg-lm-function-btn-bg text-lm-function-btn-text': 'bg-dm-function-btn-bg text-dm-function-btn-text'} `}
      value={children}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default FunctionButton
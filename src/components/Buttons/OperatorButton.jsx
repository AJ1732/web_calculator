import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';

const OperatorButton = ({ children, className }) => {
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
        ${themeBoolean? 'bg-lm-operator-btn-bg text-lm-operator-btn-text': 'bg-dm-operator-btn-bg text-dm-operator-btn-text'} `}
      value={children}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default OperatorButton
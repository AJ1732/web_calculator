import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';


const EqualButton = ({ children, className }) => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  const handleClick = (e) => {
    console.log(e.target.value, 'clicked!');
  }

  return (
    <button 
      className={` 
        ${className}
        rounded-2xl text-2xl font-medium
        ${themeBoolean? 'bg-lm-equal-btn-bg text-lm-equal-btn-text': 'bg-dm-operator-btn-bg text-dm-operator-btn-text'} `}
      value={children}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default EqualButton
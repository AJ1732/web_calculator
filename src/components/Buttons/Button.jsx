import React from 'react'
import { useTheme } from '../../Theme/ThemeProvider';
import { useValueContext } from '../../Context/ContextProvider';

const Button = ({ children, className, type }) => {
  const { theme } = useTheme();
  const themeBoolean = theme === 'light';

  const { setValue } = useValueContext();

  const handleClick = (e) => {
    setValue(e.target.value)
  }

  return (
    <button 
      className={` 
        ${className}
        origin-center duration-300 ease-in-out
        rounded-2xl text-xl font-medium
        active:scale-105
        hover:ring hover:bg-opacity-80
        hover:${themeBoolean && 'ring-lm-operator-btn-bg'}
        hover:${type == 'equal' && 'ring-lm-operator-btn-bg'}
        hover:${type == 'operator' && 'ring-lm-operator-btn-bg'}
      `}
      value={children}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
import React from 'react'

const Button = ({ children, className, ...restProps }) => {
  const handleClick = (e) => {
    console.log(e.target.value, 'clicked!');
  }

  return (
    <button 
      className={` 
        ${className}
        duration-300 ease-in-out
        rounded-2xl text-xl font-medium
      `}
      value={children}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
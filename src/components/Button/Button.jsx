import React from 'react'

function Button({children, className}) {
  return (
    <button className={`button ${className}`} type='button'>
      {children}
    </button>
  )
}

export default Button
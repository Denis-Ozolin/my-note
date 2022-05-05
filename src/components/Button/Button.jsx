function Button({children, className, onClick}) {
  return (
    <button onClick={onClick} className={`button ${className}`} type='button'>
      {children}
    </button>
  )
}

export default Button;
"use client"
import { Link } from "react-router-dom"

export const WesternButton = ({ children, to, onClick, className = "", variant = "primary" }) => {
  const baseClasses =
    "western-button relative inline-flex items-center justify-center px-4 py-2 font-western uppercase tracking-wider transition-all duration-300"

  const variantClasses = {
    primary: "bg-western-primary hover:bg-western-secondary text-western-light border-2 border-western-accent",
    secondary: "bg-western-dark hover:bg-western-dark/80 text-western-gold border-2 border-western-gold",
    ghost: "bg-transparent hover:bg-western-primary/20 text-western-light border-2 border-western-accent/50",
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}


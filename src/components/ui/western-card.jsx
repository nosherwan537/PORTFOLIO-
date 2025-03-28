export const WesternCard = ({ children, className = "", variant = "default" }) => {
  const baseClasses = "western-card relative p-4 rounded-md"

  const variantClasses = {
    default: "bg-western-dark/80 border-2 border-western-accent shadow-western",
    paper: "bg-western-paper/90 border-2 border-western-secondary text-western-dark shadow-western",
    leather: "bg-western-leather/80 border-2 border-western-gold shadow-western",
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  return <div className={classes}>{children}</div>
}


"use client"

import { useEffect, useRef } from "react"

const ScrollReveal = ({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  direction = "up", // up, down, left, right
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("reveal-active")
          }, delay)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold,
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    // Ensure visibility even if IntersectionObserver fails
    setTimeout(() => {
      if (currentRef && !currentRef.classList.contains("reveal-active")) {
        currentRef.classList.add("reveal-active")
      }
    }, 1000 + delay)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, delay])

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return "translate-y-10"
      case "down":
        return "-translate-y-10"
      case "left":
        return "translate-x-10"
      case "right":
        return "-translate-x-10"
      default:
        return "translate-y-10"
    }
  }

  return (
    <div
      ref={ref}
      className={`reveal-element ${getDirectionClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal


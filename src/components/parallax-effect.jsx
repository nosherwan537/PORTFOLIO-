"use client"

import { useEffect, useRef } from "react"

const ParallaxEffect = ({
  children,
  className = "",
  speed = 0.03, // Reduced speed for subtler effect
  direction = "both", // 'both', 'horizontal', 'vertical'
}) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = elementRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = e.clientX
      const mouseY = e.clientY

      const distanceX = (mouseX - centerX) * speed
      const distanceY = (mouseY - centerY) * speed

      let transform = ""

      if (direction === "both" || direction === "horizontal") {
        transform += `translateX(${distanceX}px) `
      }

      if (direction === "both" || direction === "vertical") {
        transform += `translateY(${distanceY}px)`
      }

      el.style.transform = transform
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [speed, direction])

  return (
    <div ref={elementRef} className={`transition-transform duration-300 ease-out ${className}`}>
      {children}
    </div>
  )
}

export default ParallaxEffect


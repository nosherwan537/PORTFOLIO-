"use client"

import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const Homepage = () => {
  const titleRef = useRef(null)

  useEffect(() => {
    // Animate the title letters on load
    const titleElement = titleRef.current
    if (titleElement) {
      const text = titleElement.innerText
      titleElement.innerHTML = ""

      text.split("").forEach((char, index) => {
        const span = document.createElement("span")
        span.innerText = char
        span.style.opacity = "0"
        span.style.transform = "translateY(20px)"
        span.style.transition = `opacity 0.5s ease, transform 0.5s ease`
        span.style.transitionDelay = `${index * 50}ms`

        setTimeout(() => {
          span.style.opacity = "1"
          span.style.transform = "translateY(0)"
        }, 100)

        titleElement.appendChild(span)
      })
    }

    // Initialize particles
    const createParticles = () => {
      const particlesContainer = document.querySelector(".particles-container")
      if (!particlesContainer) return

      particlesContainer.innerHTML = ""

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div")
        particle.classList.add("particle")

        // Random position
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`

        // Random size
        const size = Math.random() * 3 + 1
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`

        // Random opacity
        particle.style.opacity = `${Math.random() * 0.3 + 0.1}`

        // Random animation
        particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`
        particle.style.animationDelay = `${Math.random() * 5}s`

        particlesContainer.appendChild(particle)
      }
    }

    createParticles()

    // Force reveal all elements after a delay
    setTimeout(() => {
      document.querySelectorAll(".reveal-element").forEach((el) => {
        if (!el.classList.contains("reveal-active")) {
          el.classList.add("reveal-active")
        }
      })
    }, 1000)

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <div className="min-h-screen pt-20 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="particles-container"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center z-10">
        <div className="mb-4 opacity-100">
          <span className="font-accent text-theme-accent text-lg md:text-xl block text-center">
            Welcome to my world
          </span>
        </div>

        <div className="mb-6">
          <h1 ref={titleRef} className="font-display text-5xl md:text-7xl lg:text-8xl text-center leading-tight">
            <span className="text-theme-light">NOSHERWAN</span>
            <br />
            <span className="text-gradient">TAHIR</span>
          </h1>
        </div>

        <div className="mb-8 max-w-2xl text-center opacity-100">
          <p className="text-lg md:text-xl text-theme-light leading-relaxed">
            <span className="text-theme-primary font-semibold">Full Stack Web Developer</span> |
            <span className="text-theme-accent font-semibold"> AI Enthusiast</span> |
            <span className="text-theme-rust font-semibold"> Software Engineer</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link to="/about" className="btn-primary group">
            <span className="relative z-10">Discover My Story</span>
          </Link>

          <Link to="/projects" className="btn-secondary">
            View My Work
          </Link>
        </div>

      
      </div>

    </div>
  )
}

export default Homepage


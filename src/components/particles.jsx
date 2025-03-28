"use client"

import { useEffect, useRef } from "react"

const Particles = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5 // Smaller particles
        this.speedX = Math.random() * 0.3 - 0.15 // Slower movement
        this.speedY = Math.random() * 0.3 - 0.15
        this.color = this.getRandomColor()
      }

      getRandomColor() {
        const colors = [
          "rgba(255, 107, 53, 0.3)", // theme-primary with lower opacity
          "rgba(241, 178, 74, 0.3)", // theme-accent with lower opacity
          "rgba(193, 73, 83, 0.3)", // theme-rust with lower opacity
          "rgba(255, 255, 255, 0.3)", // white with lower opacity
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particle array - fewer particles
    const particlesArray = []
    const numberOfParticles = Math.min(50, (canvas.width * canvas.height) / 30000)

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Connect particles with lines - less visible connections
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 80) {
            // Shorter connection distance
            const opacity = 1 - distance / 80
            ctx.strokeStyle = `rgba(255, 107, 53, ${opacity * 0.1})` // Lower opacity
            ctx.lineWidth = 0.3 // Thinner lines
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesArray.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-50" />
}

export default Particles


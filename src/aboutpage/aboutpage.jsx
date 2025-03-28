"use client"

import { useEffect } from "react"
import dpImage from "../assets/dp.jpeg"
import ScrollReveal from "../components/scroll-reveal"
import ParallaxEffect from "../components/parallax-effect"

const AboutPage = () => {
  useEffect(() => {
    // Initialize scroll reveal animation
    const revealElements = document.querySelectorAll(".reveal")

    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active")
        }
      }
    }

    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll() // Check on load

    return () => window.removeEventListener("scroll", revealOnScroll)
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="section-title text-center mb-16">About Me</h1>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left column for image and contact */}
          <div className="lg:w-1/3 flex flex-col items-center lg:sticky lg:top-24">
            <ScrollReveal delay={300}>
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-theme-primary/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-theme-accent/20 rounded-lg transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                <ParallaxEffect speed={0.02}>
                  <img
                    className="relative z-10 h-64 w-64 object-cover rounded-lg border-2 border-theme-primary shadow-lg transform transition-transform duration-500 group-hover:scale-105"
                    src={dpImage || "/placeholder.svg?height=300&width=300"}
                    alt="Nosherwan Tahir"
                  />
                </ParallaxEffect>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500} className="w-full max-w-xs">
              <div className="glass-card p-6 backdrop-blur-md">
                <h2 className="font-display text-xl text-theme-primary mb-4 accent-border inline-block">
                  Contact Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-theme-primary/20 flex items-center justify-center group-hover:bg-theme-primary/40 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-theme-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a
                      href="mailto:tahirnosherwan@gmail.com"
                      className="text-theme-light group-hover:text-theme-primary transition-colors duration-300"
                    >
                      tahirnosherwan@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-theme-accent/20 flex items-center justify-center group-hover:bg-theme-accent/40 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-theme-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-theme-light">19 Years</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column for text content */}
          <div className="lg:w-2/3">
            <ScrollReveal delay={700}>
              <div className="modern-card p-8 backdrop-blur-md">
                <h2 className="font-display text-3xl text-gradient mb-6">The Story of Nosherwan</h2>

                <div className="space-y-6 text-theme-light/90">
                  <p className="reveal reveal-delay-1 leading-relaxed">
                    I am Nosherwan Tahir, a passionate BE Software Engineering student at National University of Science
                    and Technology, Islamabad. My journey in the digital realm has been one of constant exploration and
                    growth, mastering tools like React.js, Next.js, and Node.js along the way.
                  </p>

                  <p className="reveal reveal-delay-2 leading-relaxed">
                    My technical arsenal includes proficiency in languages like C++, Java, and Javascript - each a
                    powerful tool in my development toolkit. The frontier of Artificial Intelligence has captured my
                    imagination, leading me to dive into Machine Learning courses as I prepare to make my mark in this
                    exciting field.
                  </p>

                  <p className="reveal reveal-delay-3 leading-relaxed">
                    What sets me apart is my versatility and adaptability. I don't limit myself to a single path or
                    technology. Instead, I follow my passions across the diverse landscapes of Computer Science, always
                    seeking new challenges and opportunities for innovation.
                  </p>

                  <p className="reveal reveal-delay-4 leading-relaxed">
                    Every project I undertake is an opportunity to push boundaries and create something meaningful.
                    Whether it's crafting intuitive user interfaces, optimizing backend systems, or exploring the
                    possibilities of machine learning, I approach each challenge with creativity, precision, and a drive
                    for excellence.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-theme-light/10">
                  <h3 className="font-display text-xl text-theme-accent mb-4">My Philosophy</h3>
                  <p className="reveal reveal-delay-5 text-theme-light/80 italic">
                    "Technology should enhance human experience, not complicate it. I strive to create digital solutions
                    that are not just functional, but intuitive, accessible, and meaningful."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage


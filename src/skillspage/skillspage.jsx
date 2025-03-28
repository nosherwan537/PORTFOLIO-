"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import ScrollReveal from "../components/scroll-reveal"

const SkillsPage = () => {
  const handleButtonClick = () => {
    window.location.href = "https://github.com/nosherwan537"
  }

  useEffect(() => {
    // Initialize skill bars animation
    const skillBars = document.querySelectorAll(".skill-bar-fill")

    const animateSkillBars = () => {
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width")
        bar.style.width = width
      })
    }

    setTimeout(animateSkillBars, 500)
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="section-title text-center">Skills & Expertise</h1>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-center text-theme-light/70 max-w-2xl mx-auto mb-16">
            My technical toolkit is diverse and constantly evolving, allowing me to tackle a wide range of challenges.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-8">
            <ScrollReveal delay={400}>
              <SkillCategory
                title="LANGUAGES"
                skills={[
                  { name: "JavaScript", level: "90%" },
                  { name: "Python", level: "75%" },
                  { name: "Java", level: "80%" },
                  { name: "C++", level: "85%" },
                  { name: "SQL", level: "70%" },
                ]}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-theme-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                }
                color="theme-primary"
              />
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <SkillCategory
                title="FRAMEWORKS"
                skills={[
                  { name: "React", level: "95%" },
                  { name: "Node.js", level: "85%" },
                  { name: "Next.js", level: "80%" },
                  { name: "Express", level: "75%" },
                  { name: "Flask", level: "65%" },
                ]}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-theme-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                }
                color="theme-accent"
              />
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <SkillCategory
                title="TOOLS & PLATFORMS"
                skills={[
                  { name: "Git/GitHub", level: "90%" },
                  { name: "Docker", level: "70%" },
                  { name: "AWS", level: "65%" },
                  { name: "Firebase", level: "80%" },
                  { name: "MongoDB", level: "75%" },
                ]}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-theme-rust"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                }
                color="theme-rust"
              />
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            <ScrollReveal delay={500}>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-theme-denim"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <h2 className="font-display text-xl text-theme-denim">NOTABLE PROJECTS</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Portfolio",
                    "TWITTER CLONE",
                    "SPOTIFY CLONE",
                    "CHAT APP",
                    "AI CHATBOT",
                    "UNIVERSITY TRANSPORT APP",
                    "SFML C++ 2D GAME",
                    "Realtime Story Writing App",
                  ].map((project, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-theme-dark/30 transition-colors duration-300"
                    >
                      <span className="text-theme-accent">✦</span>
                      <span className="text-theme-light">{project}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button className="btn-primary" onClick={handleButtonClick}>
                    GitHub Repository
                  </button>

                  <Link to="/projects">
                    <button className="btn-secondary">Live Projects</button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={700}>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-theme-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h2 className="font-display text-xl text-theme-sage">CURRENT PURSUITS</h2>
                </div>

                <p className="text-theme-light mb-6">Currently exploring and mastering:</p>

                <div className="space-y-4">
                  {[
                    "Advanced React Patterns",
                    "Machine Learning Applications",
                    "Web3 Development",
                    "Cloud Architecture",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-2 h-2 rounded-full bg-theme-sage group-hover:bg-theme-primary transition-colors duration-300"></div>
                      <div className="h-px flex-grow bg-theme-sage/30 group-hover:bg-theme-primary/30 transition-colors duration-300"></div>
                      <span className="text-theme-light group-hover:text-theme-primary transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}

const SkillCategory = ({ title, skills, icon, color }) => {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className={`font-display text-xl text-${color}`}>{title}</h2>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-theme-light">{skill.name}</span>
              <span className={`text-${color}`}>{skill.level}</span>
            </div>
            <div className="h-2 bg-theme-dark/50 rounded-full overflow-hidden">
              <div
                className={`h-full bg-${color} skill-bar-fill transition-all duration-1000 ease-out`}
                data-width={skill.level}
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsPage


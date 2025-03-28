"use client"

import { useState } from "react"
import ScrollReveal from "../components/scroll-reveal"

const LiveProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      name: "EcosDeEpica",
      image: "/projpic.png",
      link: "https://ecos-de-pica-client.vercel.app/login",
      details:
        "A real-time story writing and editing web application made in Next.js and Express. The app features version control and AI mentor support.",
      tags: ["Next.js", "Express", "AI"],
      color: "theme-primary",
    },
    {
      name: "Portfolio Website",
      image: "/images.jpeg",
      link: "#",
      details:
        "My personal portfolio website showcasing my skills, projects, and experience. Built with React and modern design principles.",
      tags: ["React", "Tailwind CSS", "Vite"],
      color: "theme-accent",
    },
    {
      name: "Twitter Clone",
      image: "/images.jpeg",
      link: "#",
      details:
        "A Twitter clone with core functionalities like tweeting, following, and timeline. Built with React, Node.js, and MongoDB.",
      tags: ["React", "Node.js", "MongoDB"],
      color: "theme-rust",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="section-title text-center">Featured Projects</h1>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-center text-theme-light/70 max-w-2xl mx-auto mb-16">
            A showcase of my recent work and ongoing projects. Each one represents a unique challenge and learning
            experience.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={400 + index * 200}>
              <ProjectCard
                project={project}
                isHovered={hoveredProject === index}
                onHover={() => setHoveredProject(index)}
                onLeave={() => setHoveredProject(null)}
              />
            </ScrollReveal>
          ))}

          {/* Placeholder for future projects */}
          <ScrollReveal delay={1000}>
            <div className="glass-card h-80 flex flex-col items-center justify-center text-center border border-dashed border-theme-light/20 group hover:border-theme-primary/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-theme-dark/50 flex items-center justify-center mb-4 group-hover:bg-theme-primary/20 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-theme-light/50 group-hover:text-theme-primary transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-theme-light/50 group-hover:text-theme-primary mb-2 transition-all duration-300">
                More Coming Soon
              </h3>
              <p className="text-theme-light/30 group-hover:text-theme-light/70 transition-all duration-300">
                New adventures on the horizon
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ project, isHovered, onHover, onLeave }) => {
  return (
    <div
      className={`glass-card overflow-hidden transition-all duration-500 ${
        isHovered ? "transform scale-105 shadow-glow" : ""
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() => window.open(project.link, "_blank")}
    >
      <div className="relative overflow-hidden h-48">
        <div
          className={`absolute inset-0 bg-gradient-to-t from-theme-dark to-transparent z-10 opacity-${isHovered ? "30" : "50"} transition-opacity duration-300`}
        ></div>
        <img
          src={project.image || "/placeholder.svg?height=300&width=500"}
          alt={project.name}
          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute top-4 right-4 z-20 bg-${project.color} text-theme-light px-3 py-1 rounded-full text-sm font-semibold transform ${isHovered ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"} transition-all duration-300`}
        >
          View Project
        </div>
      </div>

      <div className="p-6">
        <h3 className={`font-display text-xl text-${project.color} mb-2`}>{project.name}</h3>

        <p className="text-theme-light/80 mb-4 line-clamp-3">{project.details}</p>

        {project.tags && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, idx) => (
              <span key={idx} className={`text-xs bg-${project.color}/20 text-${project.color} px-2 py-1 rounded-full`}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default LiveProjects


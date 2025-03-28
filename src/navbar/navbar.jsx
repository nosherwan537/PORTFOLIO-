"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-theme-dark/95 backdrop-blur-md shadow-lg" : "py-4 bg-theme-dark/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/home" className="group flex items-center gap-2">
          <div className="relative overflow-hidden">
            <span className="font-display text-2xl md:text-3xl text-theme-primary group-hover:opacity-0 transition-opacity duration-300">
              NT
            </span>
            <span className="font-accent text-2xl md:text-3xl text-theme-accent absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-full">
              NT
            </span>
          </div>
          <div className="h-8 w-0.5 bg-theme-accent/30"></div>
          <span className="font-body text-sm uppercase tracking-widest text-theme-light">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/home" isActive={isActive("/home")}>
            Home
          </NavLink>
          <NavLink to="/about" isActive={isActive("/about")}>
            About
          </NavLink>
          <NavLink to="/skills" isActive={isActive("/skills")}>
            Skills
          </NavLink>
          <NavLink to="/education" isActive={isActive("/education")}>
            Education
          </NavLink>
          <NavLink to="/projects" isActive={isActive("/projects")}>
            Projects
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-theme-light focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute h-0.5 w-full bg-theme-light transform transition-all duration-300 ${isMenuOpen ? "rotate-45 top-2" : "top-0"}`}
            ></span>
            <span
              className={`absolute h-0.5 w-full bg-theme-light top-2 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`absolute h-0.5 w-full bg-theme-light transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-2" : "top-4"}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-theme-secondary/95 backdrop-blur-md transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 py-0 overflow-hidden"
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col gap-4">
          <MobileNavLink to="/home" isActive={isActive("/home")} onClick={() => setIsMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/about" isActive={isActive("/about")} onClick={() => setIsMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink to="/skills" isActive={isActive("/skills")} onClick={() => setIsMenuOpen(false)}>
            Skills
          </MobileNavLink>
          <MobileNavLink to="/education" isActive={isActive("/education")} onClick={() => setIsMenuOpen(false)}>
            Education
          </MobileNavLink>
          <MobileNavLink to="/projects" isActive={isActive("/projects")} onClick={() => setIsMenuOpen(false)}>
            Projects
          </MobileNavLink>
        </nav>
      </div>
    </header>
  )
}

const NavLink = ({ to, children, isActive }) => {
  return (
    <Link
      to={to}
      className={`relative px-2 py-1 font-body text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden group
        ${isActive ? "text-theme-primary" : "text-theme-light hover:text-theme-accent"}
      `}
    >
      <span className="relative z-10">{children}</span>
      {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-primary"></span>}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-theme-accent group-hover:w-full transition-all duration-300"></span>
    </Link>
  )
}

const MobileNavLink = ({ to, children, isActive, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`py-3 px-4 border-l-2 transition-all duration-300
        ${
          isActive
            ? "border-theme-primary text-theme-primary bg-theme-dark/20"
            : "border-transparent text-theme-light hover:border-theme-accent hover:text-theme-accent"
        }
      `}
    >
      {children}
    </Link>
  )
}

export default Navbar


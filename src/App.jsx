"use client"

import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom"
import "./AppBg.css"
import Navbar from "./navbar/navbar"
import Homepage from "./homepage/homepage"
import Footer from "./footer/footer"
import AboutPage from "./aboutpage/aboutpage"
import SkillsPage from "./skillspage/skillspage"
import EducationPage from "./educationpage/educationpage"
import LiveProjects from "./liveprojects/liveprojects"
import NotFound from "./components/not-found"
import Particles from "./components/particles"

// Page transition wrapper
const PageTransition = ({ children }) => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState("fadeIn")

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut")
    }
  }, [location, displayLocation])

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn")
      setDisplayLocation(location)
    }
  }

  return (
    <div className={`page-transition-${transitionStage}`} onAnimationEnd={handleAnimationEnd}>
      {children}
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden font-body">
        {/* Background elements with lower z-index */}
        <div className="fixed inset-0 z-0">
          <div className="background-overlay"></div>
          <div className="background-pattern"></div>
          <div className="grid-pattern"></div>
          <div className="animated-gradient"></div>
          <div className="noise-texture"></div>
          <Particles />
        </div>

        {/* Content with higher z-index */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pb-16 pt-16">
            <Routes>
              <Route
                path="/home"
                element={
                  <PageTransition>
                    <Homepage />
                  </PageTransition>
                }
              />
              <Route
                path="/about"
                element={
                  <PageTransition>
                    <AboutPage />
                  </PageTransition>
                }
              />
              <Route
                path="/skills"
                element={
                  <PageTransition>
                    <SkillsPage />
                  </PageTransition>
                }
              />
              <Route
                path="/projects"
                element={
                  <PageTransition>
                    <LiveProjects />
                  </PageTransition>
                }
              />
              <Route
                path="/education"
                element={
                  <PageTransition>
                    <EducationPage />
                  </PageTransition>
                }
              />
              <Route
                path="/404"
                element={
                  <PageTransition>
                    <NotFound />
                  </PageTransition>
                }
              />
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-theme-dark flex flex-col items-center justify-center z-50">
      <div className="relative">
        <div className="text-6xl font-display text-theme-primary mb-4 animate-pulse">NT</div>
        <div className="w-32 h-1 bg-theme-secondary/30 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-theme-primary via-theme-accent to-theme-primary animate-pulse-slow"></div>
        </div>
      </div>
    </div>
  )
}

export default App


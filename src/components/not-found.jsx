import { Link } from "react-router-dom"
import ParallaxEffect from "./parallax-effect"

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ParallaxEffect speed={0.05}>
        <div className="glass-card max-w-lg w-full text-center p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-theme-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-theme-accent/10 rounded-full blur-3xl"></div>

          <h1 className="font-display text-8xl text-gradient mb-4">404</h1>
          <div className="w-16 h-1 bg-theme-primary/50 mx-auto mb-6"></div>
          <h2 className="text-2xl font-display text-theme-light mb-6">Page Not Found</h2>
          <p className="mb-8 text-theme-light/70">The page you're looking for doesn't exist or has been moved.</p>

          <Link to="/home" className="btn-primary inline-block">
            Back to Homepage
          </Link>
        </div>
      </ParallaxEffect>
    </div>
  )
}

export default NotFound


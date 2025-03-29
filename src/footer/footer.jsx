const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: <LinkedInIcon />, url: "https://linkedin.com/in/yourprofile" },
    { name: "GitHub", icon: <GitHubIcon />, url: "https://github.com/nosherwan537" },
    { name: "Fiverr", icon: <FiverrIcon />, url: "https://www.fiverr.com/s/38L8q4m" },
    { name: "Upwork", icon: <UpworkIcon />, url: "https://www.upwork.com/freelancers/~01728fa60bd06ee68a?mp_source=share" },
  ]

  return (
    <footer className="bg-theme-dark/90 backdrop-blur-md border-t border-theme-primary/20 text-theme-light py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="font-display text-xl text-theme-primary">NT</span>
              <div className="h-6 w-px bg-theme-accent/30"></div>
              <span className="font-body text-sm uppercase tracking-widest text-theme-light/80">Portfolio</span>
            </div>
            <p className="text-xs md:text-sm text-theme-light/60">
              &copy; {new Date().getFullYear()} Nosherwan Tahir. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-2 rounded-md bg-theme-secondary/30 hover:bg-theme-primary/20 transition-all duration-300"
                aria-label={link.name}
              >
                <span className="text-theme-light/70 group-hover:text-theme-primary transition-colors duration-300">
                  {link.icon}
                </span>
                <span className="text-sm text-theme-light/70 group-hover:text-theme-primary transition-colors duration-300">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-theme-light/10 text-center">
          <p className="text-xs text-theme-light/40">Designed and built with passion and modern web technologies</p>
        </div>
      </div>
    </footer>
  )
}

// Social Icons
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
  </svg>
)

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const FiverrIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 50 50">
    <path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 26.5 11 C 21.579 11 18.409109 14.037 18.037109 19 L 14 19 L 14 25 L 18 25 L 18 36 L 24 36 L 24 25 L 28 25 L 28 36 L 34 36 L 34 19 L 24.066406 19 C 24.360406 17.001 25.579 17 26.5 17 L 29.03125 17 L 29.03125 11 L 26.5 11 z"></path>
  </svg>
)

const UpworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 50 50">
    <path d="M 1 9 A 1.0001 1.0001 0 0 0 0 10 L 0 24.5 C 0 30.832314 5.1676857 36 11.5 36 C 17.222701 36 21.784718 31.707225 22.650391 26.220703 C 23.266946 27.074852 23.852862 27.94719 24.548828 28.728516 C 23.305285 33.997601 21.75435 40.586226 21.003906 43.771484 A 1.0001 1.0001 0 0 0 21.976562 45 L 28.140625 45 A 1.0001 1.0001 0 0 0 29.115234 44.228516 C 29.796783 41.335284 30.661366 37.663644 31.474609 34.212891 C 33.325586 35.182074 35.46699 36 38 36 C 44.607457 36 50 30.607457 50 24 C 50 17.392543 44.607457 12 38 12 C 33.351597 12 29.329494 14.73649 27.349609 18.787109 C 25.250367 15.153046 23.679535 11.321256 23.107422 9.671875 A 1.0001 1.0001 0 0 0 22.162109 9 L 16 9 A 1.0001 1.0001 0 0 0 15 10 L 15 24.5 C 15 26.438477 13.438477 28 11.5 28 C 9.5615232 28 8 26.438477 8 24.5 L 8 10 A 1.0001 1.0001 0 0 0 7 9 L 1 9 z"></path>
  </svg>
)


export default Footer


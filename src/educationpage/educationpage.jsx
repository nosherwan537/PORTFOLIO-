import ScrollReveal from "../components/scroll-reveal"

const EducationPage = () => {
  const educationData = [
    {
      title: "SCHOOL",
      institution: "OPF COLLEGE",
      location: "H-8/4 ISLAMABAD",
      years: "2010 - 2021",
      icon: "🏫",
      color: "theme-primary",
    },
    {
      title: "COLLEGE",
      institution: "OPF BOYS COLLEGE",
      location: "H-8/4 ISLAMABAD",
      qualification: "FSc Pre-Engineering",
      years: "2021 - 2023",
      icon: "🎓",
      color: "theme-accent",
    },
    {
      title: "UNIVERSITY",
      institution: "NATIONAL UNIVERSITY OF SCIENCES AND TECHNOLOGY",
      qualification: "Bachelors in Software Engineering",
      years: "2023 - Present",
      icon: "🏛️",
      color: "theme-rust",
    },
    {
      title: "CERTIFICATIONS",
      items: [
        "Machine Learning Specialization by Andrew Ng",
        "Java course by Krish Valley (Udemy)",
        "Javascript course by YouAccel Training",
      ],
      icon: "📜",
      color: "theme-denim",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="section-title text-center">Educational Journey</h1>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-center text-theme-light/70 max-w-2xl mx-auto mb-16">
            My academic path has equipped me with both theoretical knowledge and practical skills, forming the
            foundation of my technical expertise.
          </p>
        </ScrollReveal>

        <div className="relative mt-20">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-theme-secondary"></div>

          {/* Education items */}
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              data={item}
              position={index % 2 === 0 ? "left" : "right"}
              delay={400 + index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const TimelineItem = ({ data, position, delay }) => {
  return (
    <div className="relative flex flex-col items-center justify-center mb-16 md:flex-row">
      <ScrollReveal
        delay={delay}
        direction={position === "left" ? "right" : "left"}
        className={`w-full md:w-5/12 ${position === "right" ? "md:ml-auto" : "md:mr-auto"}`}
      >
        <div
          className={`glass-card p-6 border-l-4 border-${data.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{data.icon}</span>
            <h2 className={`font-display text-xl text-${data.color}`}>{data.title}</h2>
          </div>

          {data.institution && <p className="text-theme-light font-semibold mb-1">{data.institution}</p>}

          {data.location && <p className="text-theme-light/80 mb-1">{data.location}</p>}

          {data.qualification && <p className={`text-${data.color} mb-1`}>{data.qualification}</p>}

          {data.years && <p className="text-theme-light/70 italic mb-2">{data.years}</p>}

          {data.items && (
            <ul className="mt-3 space-y-2">
              {data.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className={`text-${data.color} mt-1`}>•</span>
                  <span className="text-theme-light">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </ScrollReveal>

      {/* Timeline dot remains centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-${data.color} z-10 shadow-glow hidden md:block"></div>
    </div>
  );
};


export default EducationPage


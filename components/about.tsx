"use client"

export default function About() {
  const skills = [
    { name: "Python", icon: "🐍", color: "#3776ab" },
    { name: "MySQL", icon: "🗄️", color: "#00758f" },
    { name: "AI", icon: "🧠", color: "#6c5ce7" },
    { name: "ML", icon: "🤖", color: "#0984e3" },
    { name: "JavaScript", icon: "⚛️", color: "#f7df1e" },
    { name: "RAG", icon: "📚", color: "#ff7675" },
    { name: "LLMs", icon: "💬", color: "#a29bfe" },
    { name: "Kubernetes", icon: "⚙️", color: "#326ce5" },
    { name: "GCP", icon: "☁️", color: "#4285f4" },
  ]

  return (
    <section id="about" className="section-container relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2
          className="section-title font-bold text-center mb-4"
          style={{
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          Tech Stack & Skills
        </h2>
        <p
          className="section-subtitle text-center mb-16"
          style={{
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          }}
        >
          Expertise in cutting-edge technologies and modern development practices
        </p>

        {/* Skills grid with enhanced styling */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center group cursor-pointer"
              style={{
                animation: `fade-in-up 600ms ease-out ${100 * (idx + 1)}ms both`,
              }}
            >
              <div
                className="relative flex items-center justify-center w-20 h-20 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                style={{
                  background:"linear-gradient(135deg,rgba(4, 4, 27, 0.72) 50%, rgba(34, 63, 253, 0.1) 120%)",
                  border: "1.5px solid rgba(224, 224, 224, 0.08)",
                  boxShadow: "0 0 30px rgba(200, 200, 200, 0.02), inset 0 0 20px rgba(255, 255, 255, 0.02)",
                }}
              >
                <div
                  className="text-4xl transition-all duration-300"
                  style={{
                    textShadow: `0 0 0px ${skill.color}00`,
                    transition: "all 300ms ease-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = `0 0 15px ${skill.color}, 0 0 30px ${skill.color}60`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = `0 0 0px ${skill.color}00`
                  }}
                >
                  {skill.icon}
                </div>
              </div>
              <p
                className="text-xs font-medium mt-3 text-center transition-colors duration-300 group-hover:text-white"
                style={{ color: "#999999", fontFamily: "'Inter', sans-serif" }}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

export default function SkillsEnhanced() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "MySQL", "JavaScript"],
      icon: "💻",
    },
    {
      category: "Soft Skills",
      skills: ["Interpersonal Skills", "Teamwork", "Adaptivity", "Problem Solving"],
      icon: "🤝",
    },
    {
      category: "Frameworks",
      skills: ["Streamlit", "FastAPI", "Flask", "HDFS", "TensorFlow"],
      icon: "⚙️",
    },
    {
      category: "Tools & Platforms",
      skills: ["Kubernetes", "GCP", "GitHub", "ElevenLabs", "n8n", "VSCode", "LangChain"],
      icon: "🛠️",
    },
    {
      category: "Technologies",
      skills: ["AI Agents", "Machine Learning", "Computer Vision", "XGBoost", "Pandas"],
      icon: "🚀",
    },
  ]

  return (
    <section id="skills" className="section-container relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title font-poppins">Technical Skills</h2>
        <p className="section-subtitle">Expertise across programming, AI/ML, and cloud technologies</p>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIdx) => (
            <div
              key={categoryIdx}
              className="glass-panel p-6 md:p-8 hover:shadow-xl transition-all duration-500"
              style={{
                background:"linear-gradient(175deg,rgba(4, 4, 27, 0.72) 50%, rgba(34, 63, 253, 0.1) 120%)",
                animation: `slide-in-up 600ms ease-out ${150 * (categoryIdx + 1)}ms both`,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold font-poppins">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg group cursor-default"
                    style={{
                      background: "rgba(58, 58, 58, 0.6)",
                      border: "1px solid rgba(224, 224, 224, 0.1)",
                      color: "#e0e0e0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(34, 211, 238, 0.4)"
                      e.currentTarget.style.boxShadow = "0 0 15px rgba(34, 211, 238, 0.63)"
                      e.currentTarget.style.background = "rgba(9, 10, 55, 0.89)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(224, 224, 224, 0.1)"
                      e.currentTarget.style.boxShadow = "none"
                      e.currentTarget.style.background = "rgba(58, 58, 58, 0.6)"
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

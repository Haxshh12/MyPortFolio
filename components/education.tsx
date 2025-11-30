"use client"

export default function Education() {
  const education = [
    {
      degree: "Masters in Computer Applications",
      institution: "PCET's Pimpri Chinchwad University, Pune",
      year: "2024 - 2026",
      cgpa: "8.21",
      description: "Advanced studies in computer applications with focus on AI/ML and software development",
    },
    {
      degree: "Bachelor of Commerce (Computer Applications)",
      institution: "KES Shroff College of Arts & Commerce, Mumbai",
      year: "2021 - 2024",
      cgpa: "7.89",
      description: "Foundation in commerce with specialization in computer applications",
    },
  ]

  return (
    <section id="education" className="section-container relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title font-poppins">Education</h2>
        <h3 className="section-subtitle">Academic background and qualifications</h3>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 md:p-8 hover:shadow-xl transition-all duration-500 group"
              style={{
                background:"linear-gradient(135deg,rgba(4, 4, 27, 0.72) 50%, rgba(34, 63, 253, 0.1) 120%)",
                animation: `slide-in-up 600ms ease-out ${150 * (idx + 1)}ms both`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-poppins mb-2 group-hover:text-white transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: "#999999" }}>
                    {edu.institution}
                  </p>
                  <p className="text-sm" style={{ color: "#666666" }}>
                    {edu.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold mb-1" style={{ color: "#e0e0e0" }}>
                    {edu.year}
                  </p>
                  <p className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {edu.cgpa}
                  </p>
                </div>
              </div>
              <div
                className="h-1 rounded-full mt-4"
                style={{
                  background: "linear-gradient(90deg, rgba(34, 211, 238, 0.5) 0%, rgba(59, 130, 246, 0.5) 100%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

export default function Certifications() {
  const certifications = [
    {
      name: "Virtual Internship- Android Dev",
      issuer: "Google",
      icon: "🔍",
      color: "#4285F4",
      file:"/cert/eduskills.pdf"
    },
    {
      name: "Acquiring Data - AI",
      issuer: "Accenture",
      icon: "💾",
      color: "#3776AB",
      file:"/cert/accenture.pdf"
    },
    {
      name: "Generative AI Automation",
      issuer: "Vanderbilt University",
      icon: "⚡",
      color: "#FF6B6B",
      file:"/cert/prompt.pdf"
    },
    {
      name: "Introduction to Data Science",
      issuer: "Coursera",
      icon: "📊",
      color: "#0F66AA",
      file:"/cert/data-science.pdf"
    },
    {
      name: "Google AI Essentials",
      issuer: "Google",
      icon: "🤖",
      color: "#9C27B0",
      file:"/cert/googleai.pdf"
    },
    {
      name: "Organizational Behavior",
      issuer: "IBM",
      icon: "💼",
      color: "#0F62FE",
      file:"/cert/org-behavior.pdf"
    },
    {
    name: "GenAI Fundamentals",
    issuer: "IBM",
    icon: "🎯",
    color: "#3776AB",
    file:"/cert/ibm-ai.pdf"
    },
    {
      name: "Python Projects",
      issuer: "Infosys",
      icon: "🐍",
      color: "#3776AB",
      file:"/cert/info.pdf"
    },
    {
      name: "Azure for AI and Machine Learning",
      issuer: "Infosys",
      icon: "🎚️",
      color: "#3776AB",
      file:"/cert/info.pdf"
    },
    {
      name: "AI/ML Techniques and Algorithms",
      issuer: "Microsoft",
      icon: "⚙️",
      color: "#9C27B0",
      file:"/cert/ml.pdf"
    },
  ]

    return (
    <section id="certifications" className="section-container relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title font-poppins">Certifications & Achievements</h2>
        <p className="section-subtitle">Professional credentials and completed programs</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.file}   // <-- opens real certificate
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 text-center group hover:shadow-lg transition-all duration-500 cursor-pointer block"
              style={{
                background:
                  "linear-gradient(145deg,rgba(7, 7, 46, 0.61) 50%, rgba(6, 10, 38, 0.1) 120%)",
                animation: `slide-in-up 600ms ease-out ${150 * (idx + 1)}ms both`,
              }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {cert.icon}
              </div>

              <h3 className="font-bold font-poppins mb-2 group-hover:text-white transition-colors duration-300">
                {cert.name}
              </h3>

              <p className="text-sm" style={{ color: "#999999" }}>
                {cert.issuer}
              </p>

              <div
                className="h-1 rounded-full mt-4 mx-auto w-1/3"
                style={{
                  background: cert.color,
                  opacity: 0.3,
                  transition: "all 300ms",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

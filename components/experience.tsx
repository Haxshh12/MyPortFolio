"use client"

export default function Experience() {
  const experiences = [
    {
      title: "MindPulse - AI Mental Health Platform",
      description:
        "Developed an AI-powered mental health platform using Python and Streamlit with RandomForestClassifier ML model",
      highlights: [
        "83% accuracy in risk level prediction from real-time inputs",
        "Secure authentication with interactive visual reports (radar, pie, line charts)",
        "Admin panel for risk history tracking - 25% improvement in follow-up effectiveness",
        "Integration of psychologist recommendations",
      ],
      tech: ["Python", "Streamlit", "Scikit-learn", "Seaborn", "Plotly", "NumPy"],
      type: "Featured Project",
    },
    {
      title: "BizzEye - AI Business Analytics Platform",
      description: "Built an intelligent business analytics platform analyzing sales data from 10,000+ records",
      highlights: [
        "90% precision in sales trend prediction using XGBoost and scikit-learn",
        "Real-time anomaly detection and marketing insights",
        "15% increase in targeted campaign efficiency",
        "Interactive visualizations and CSV data ingestion",
      ],
      tech: ["Python", "XGBoost", "Machine Learning", "Plotly", "Google Gemini", "Collab"],
      type: "Featured Project",
    },
    {
      title: "Doc-AI",
      description: "RAG + LLM System for analyzing Documents",
      highlights: [
      "Achieved high-accuracy responses powered by LLM reasoning with source-level traceability",
      "Optimized retrieval pipelines for fast, context-aware document search",
      "Reduced hallucinations through grounded generation and reference validation",
      "Supports PDFs, reports, manuals, and enterprise knowledge bases with secure data access",
      ],
      tech: ["Python", "LangChain", "Vector Databases", "RAG", "LLMs", "FastAPI"],
      type: "Featured Project",
    },    
    {
      title: "IT Company Professional Exposure",
      description: "Gained valuable industry experience and evaluated professional workflow",
      highlights: [
        "Real-world problem-solving techniques",
        "Professional development practices",
        "Industry standards and best practices",
      ],
      tech: ["Professional Development", "Workflow Analysis"],
      type: "Internship",
    },
  ]

  return (
    <section id="experience" className="section-container relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title font-poppins"> Projects</h2>
        <p className="section-subtitle">Showcasing real-world impact and technical expertise</p>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 md:p-8 hover:shadow-xl transition-all duration-500 group"
              style={{
                background:"linear-gradient(145deg,rgba(4, 4, 27, 0.72) 50%, rgba(34, 63, 253, 0.1) 120%)",
                animation: `slide-in-up 600ms ease-out ${150 * (idx + 1)}ms both`,
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="px-3 py-1 text-xs font-semibold rounded-full"
                      style={{
                        background:
                          exp.type === "Featured Project" ? "rgba(34, 211, 238, 0.2)" : "rgba(99, 102, 241, 0.2)",
                        color: exp.type === "Featured Project" ? "#22d3ee" : "#6366f1",
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-poppins mb-2 group-hover:text-white transition-colors duration-300">
                    {exp.title}
                  </h3>
                </div>
              </div>

              <p className="mb-4" style={{ color: "#b0b0b0" }}>
                {exp.description}
              </p>

              <div className="mb-5 space-y-1.8">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span style={{ color: "#666666" }} className="mt-1.5">
                    ▪️
                    </span>
                    <span style={{ color: "#999999" }} className="text-sm">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: "rgba(58, 58, 58, 0.6)",
                      border: "1px solid rgba(224, 224, 224, 0.1)",
                      color: "#b0b0b0",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

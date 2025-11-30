"use client"

import { useState } from "react"
import Image from "next/image"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "BizzEye System",
      category: "development",
      description: "Predictive Analytics for Sales & Marketing using AI/ML Logics and Models.",
      image: "/unnamed.jpg",
      tags: ["Python", "XGBoost", "ML","Gemini-2.0"],
      github:"https://github.com/Haxshh12/BizzEye"
    },
    {
      id: 2,
      title: "Analytical Dashboards",
      category: "development",
      description: "Interactive dashboard with smooth animations and refined UI using Power BI ",
      image: "/powerBI.png",
      tags: ["Python", "Power BI", "Animations"],
    },
    {
      id: 4,
      title: "Data Visualization",
      category: "development",
      description: "Real-time data visualization with elegant charts",
      image: "/data-visualization-abstract.png",
      tags: ["Regression", "Classification", "Clusterings","Seaborn",'Matplotlib'],
    },
    {
      id: 5,
      title: "Automation Agents",
      category: "design",
      description: "Built Autommated workflow on n8n ",
      image: "/n8n.png",
      tags: ["n8n",'Agentic AI', 'Automation'],
      github:"https://n8n.io/?ps_partner_key=ZTRmNmY5NmFjYTI2&ps_xid=vESAblCbSErHzP&gsxid=vESAblCbSErHzP&gspk=ZTRmNmY5NmFjYTI2&gad_source=1&gad_campaignid=23290680658&gbraid=0AAAABCHf_l30V1z6pAUKA1QVf6H5V9S55&gclid=Cj0KCQiAxJXJBhD_ARIsAH_JGjghWrtfeEShvz8HUV_j2BOsthRAXxRuWuh5-XtAf7y22C8AjbF0zRIaAms8EALw_wcB"
    },
    {
      id: 6,
      title: "Mindpulse",
      category: "development",
      description: "Mental Health Risk Prediction and Psychologist Reccommendation System",
      image: "/mindpulse.jpg",
      tags: ["Python", "Streamlit", "ML Models","LLMs"],
      github:"https://github.com/Haxshh12/MindPulse"
    },
  ]

  const filters = ["all", "design", "development"]
  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="work" className="section-container relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title font-poppins">Selected Work</h2>
        <p className="section-subtitle">Showcasing premium designs and elegant development</p>

        <div className="flex flex-wrap gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-medium capitalize transition-all duration-300 border glass-panel ${
                activeFilter === filter ? "hover:shadow-lg" : "hover:border-white/20"
              }`}
              style={
                activeFilter === filter
                  ? {
                      borderColor: "rgba(224, 224, 224, 0.3)",
                      color: "#39ececff",
                      boxShadow: "0 0 20px rgba(171, 160, 160, 0.1), inset 0 0 20px rgba(224, 224, 224, 0.05)",
                      background: "rgba(96, 96, 96, 0.6)",
                    }
                  : { borderColor: "rgba(224, 224, 224, 0.06)", color: "#999999" }
              }
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
            key={project.id}
            className="glass-panel-hover group overflow-hidden"
            style={{
              animation: `slide-in-up 600ms ease-out ${150 * (idx + 1)}ms both`,
            }}
          >
            <div
              className="relative h-48 overflow-hidden"
              style={{
                background: "linear-gradient(135deg,rgba(4, 4, 27, 0.72) 50%, rgba(34, 63, 253, 0.1) 120%)",
              }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white font-poppins mb-2 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm mb-4" style={{ color: "#999999" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium rounded-md transition-all duration-300 border"
                    style={{
                      borderColor: "rgba(224, 224, 224, 0.1)",
                      color: "#b0b0b0",
                      background: "rgba(95, 91, 91, 0.4)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub Repo Button */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border"
                  style={{
                    borderColor: "rgba(224, 224, 224, 0.15)",
                    color: "#ffffff",
                    background: "rgba(96, 96, 96, 0.4)",
                  }}
                >
                  🔗 View GitHub Repo
                </a>
              )}
            </div>
          </div>

          ))}
        </div>
      </div>
    </section>
  )
}

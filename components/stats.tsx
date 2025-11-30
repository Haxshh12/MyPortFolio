"use client"

import { useEffect, useState } from "react"

export default function Stats() {
  const [counts, setCounts] = useState({ projects: 0, experience: 0, certifications: 0 })

  useEffect(() => {
    const animateCount = (start: number, end: number, duration: number, key: string) => {
      let current = start
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          current = end
          clearInterval(timer)
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, 16)
    }

    animateCount(0, 5, 1000, "projects")
    animateCount(0, 3, 1200, "experience")
    animateCount(0, 9, 1400, "certifications")
  }, [])

  const stats = [
    { label: "Major Projects", value: counts.projects, suffix: "+" },
    { label: "Years Learning", value: counts.experience, suffix: "+" },
    { label: "Certifications", value: counts.certifications, suffix: "+" },
  ]

  return (
    <section className="section-container relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 text-center hover:shadow-xl transition-all duration-500 group"
              style={{
                background:"linear-gradient(135deg,rgba(4, 4, 27, 0.72) 50%, rgba(34, 63, 253, 0.1) 120%)",
                animation: `scale-pop-animation 600ms ease-out ${150 * idx}ms both`,
              }}
            >
              <h3 className="text-5xl font-bold font-poppins mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                {stat.value}
                {stat.suffix}
              </h3>
              <p style={{ color: "#999999" }} className="font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

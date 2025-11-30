"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(135deg, rgba(224, 224, 224, 0.08) 0%, rgba(160, 160, 160, 0.05) 50%, rgba(224, 224, 224, 0.08) 100%)",
          transform: `skewY(-5deg) translateY(${offset}px)`,
          transition: "all 700ms cubic-bezier(0.23, 1, 0.320, 1)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="section-title font-poppins mb-6 leading-tight text-balance">
            Premium Design <span className="shimmer-text">& Development</span>
          </h1>

          <p className="section-subtitle mb-8 max-w-2xl mx-auto text-balance">
            Creating sophisticated digital experiences with matte aesthetics and smooth interactions. Precision-crafted
            interfaces for modern brands.
          </p>

          <div
            className="glass-panel p-8 md:p-12 max-w-xl mx-auto mb-12 scale-pop-animation"
            style={{
              borderLeft: "2px solid #e0e0e0",
              background: "linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(26, 26, 26, 0.3) 100%)",
            }}
          >
            <p className="text-lg mb-6" style={{ color: "#999999" }}>
              Elegant design systems with glassmorphic elements and refined interactions for discerning clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#work" className="glass-button neon-glow group overflow-hidden relative">
                <span className="relative z-10">View Work</span>
              </a>
              <a
                href="#contact"
                className="glass-button group overflow-hidden relative"
                style={{
                  backgroundColor: "rgba(74, 74, 74, 0.6)",
                  borderColor: "rgba(224, 224, 224, 0.15)",
                }}
              >
                <span className="relative z-10">Contact Me</span>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Satisfied Clients" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className="glass-panel p-6 glass-panel-hover"
                style={{
                  animation: `slide-in-up 600ms ease-out ${100 * (idx + 1)}ms both`,
                }}
              >
                <div className="text-3xl font-bold font-poppins mb-2 shimmer-text">{stat.number}</div>
                <div className="text-sm" style={{ color: "#999999" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

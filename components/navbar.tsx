"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false) // hides navbar on scroll down
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const lastY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastY.current = typeof window !== "undefined" ? window.scrollY : 0

    const handleScroll = () => {
      const currentY = window.scrollY

      // set 'scrolled' state for backdrop when past threshold
      setIsScrolled(currentY > 10)

      // throttle with rAF to avoid too many updates
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const delta = currentY - lastY.current

          // if scrolled down by at least 5px, hide; if scrolled up, show
          if (delta > 5 && currentY > 60) {
            setIsHidden(true)
          } else if (delta < -5) {
            setIsHidden(false)
          }
          lastY.current = currentY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* floating pointer (keeps existing custom cursor) */}
      <div
        className="fixed pointer-events-none z-40 w-8 h-8 rounded-full border border-white/30"
        style={{
          left: `${mousePos.x - 16}px`,
          top: `${mousePos.y - 16}px`,
          transition: "all 0.1s ease-out",
          boxShadow: "0 0 20px rgba(224, 224, 224, 0.2)",
        }}
      />
      <div
        className="fixed pointer-events-none z-40 w-2 h-2 rounded-full bg-white"
        style={{
          left: `${mousePos.x - 4}px`,
          top: `${mousePos.y - 4}px`,
          transition: "all 0.05s ease-out",
          opacity: 0.6,
        }}
      />

      <nav
        // translateY up when hidden; smooth transition
        className={`fixed top-0 left-0 right-0 z-50 transform-gpu transition-transform duration-500 will-change-transform`}
        style={{
          transform: isHidden ? "translateY(-120%)" : "translateY(0)",
          ...(isScrolled
            ? { backgroundColor: "rgba(26, 26, 26, 0.45)", borderBottom: "1px solid rgba(224,224,224,0.06)", backdropFilter: "blur(8px)" }
            : { backgroundColor: "transparent" }),
        }}
      >
        <div className="section-container py-4 px 4">
          <div className="flex items-center justify-between">
            {/* logo (uses your uploaded image file) */}
            <Link href="/" className="flex items-center gap-3 relative z-1000">
              {/* <img
                src="/logo3.png"
                alt="logo"
                className="w-25 h-17 rounded-xl object-cover"
                style={{ display: "block" }}
              /> */}
              <span className="text-3xl font-bold text-white font-poppins tracking-tight">Harsh Jethwa</span>
            </Link>

            {/* desktop menu */}
            <div className="hidden md:flex items-center gap-12">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium hover:text-white transition-colors duration-300 relative group font-inter"
                  style={{ color: "#999999" }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500 ease-out" />
                </a>
              ))}
            </div>

            {/* mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* mobile menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 space-y-3" style={{ borderTop: "1px solid rgba(224, 224, 224, 0.06)" }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm hover:text-white transition-colors"
                  style={{ color: "#999999" }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-container relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title font-poppins">Let's Collaborate</h2>
        <p className="section-subtitle mb-12">Have a project in mind? Let's create something extraordinary together.</p>

        <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 space-y-6 scale-pop-animation" style={{ background:"linear-gradient(135deg,rgba(4, 4, 27, 0.72) 50%, rgba(34, 63, 253, 0.1) 120%)",}}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2 font-poppins">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                style ={{background:"linear-gradient(165deg, rgba(95, 128, 136, 0.19) 15%,rgba(113, 193, 209, 0.55) 60%, rgba(18, 21, 34, 0.26) 100%)",}}
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="glass-form-input"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2 font-poppins">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style ={{background:"linear-gradient(145deg, rgba(95, 128, 136, 0.19) 15%,rgba(113, 193, 209, 0.55) 60%, rgba(18, 21, 34, 0.26) 100%)",}}
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="glass-form-input"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white mb-2 font-poppins">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              style ={{background:"linear-gradient(145deg, rgba(95, 128, 136, 0.19) 15%,rgba(113, 193, 209, 0.55) 60%, rgba(18, 21, 34, 0.26) 100%)",}}
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Details"
              className="glass-form-input"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2 font-poppins">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              style ={{background:"linear-gradient(145deg, rgba(95, 128, 136, 0.19) 15%,rgba(113, 193, 209, 0.55) 60%, rgba(18, 21, 34, 0.26) 100%)",}}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              className="glass-form-input resize-none"
              required
            />
          </div>

          <button type="submit" className="w-full glass-button neon-glow justify-center group relative overflow-hidden"style ={{background:"linear-gradient(145deg,rgba(221, 195, 27, 0.65) 20%, rgba(246, 225, 72, 0.63) 45%,rgba(221, 195, 27, 0.65) 60%, rgba(227, 239, 123, 0.73) 100%)",}}>
            <span className="relative z-10 font-poppins font-semibold" >
              {submitted ? "Message Sent ✓" : "Send Message"}
            </span>
          </button>

          {submitted && (
            <div
              className="text-center text-sm font-medium animate-slide-in-up"
              style={{ color: "#999999", animation: "slide-in-up 700ms ease-out" }}
            >
              Thanks for reaching out! I'll respond soon.
            </div>
          )}
        </form>
                {/* ---------- SOCIAL LINKS ---------- */}
        <div className="mt-10 flex items-center justify-center gap-6">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-all hover:scale-110 hover:text-blue-400"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-all hover:scale-110 hover:text-gray-300"
          >
            <i className="fab fa-github"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-all hover:scale-110 hover:text-pink-400"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-all hover:scale-110 hover:text-blue-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>

      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"

export default function ProfileHeader() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) {
      setMounted(true)
      return
    }

    const t = setTimeout(() => {
      setMounted(true)
    }, 80)

    return () => clearTimeout(t)
  }, [])

  const resumePath = "/resume/HarshJethwa.pdf"

  return (
    <section
      className="
        relative min-h-[70vh]
        flex items-center justify-center
        pt-32 
        px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48
        overflow-hidden
      "
    >
      {/* subtle global gradient layer — keep empty if set in layout */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-50 w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-20">
          {/* ---------- PROFILE PHOTO (animated center -> left on md+) ---------- */}
          <div
            className={`relative profile-photo-wrapper ${mounted ? "photo-enter" : "photo-init"} mx-auto md:mx-0`}
            style={{ willChange: "transform, opacity" }}
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(224,224,224,0.28), rgba(240,240,240,0.36))",
                animation: "float-animation 9s ease-in-out infinite",
              }}
            />

            <div
              className="
                relative rounded-full overflow-hidden
                w-52 h-52 sm:w-60 sm:h-60
                md:w-76 md:h-76 lg:w-85 lg:h-85
              "
              style={{
                border: "2px solid rgba(245, 252, 145, 0.25)",
                boxShadow: "0 0 40px rgba(244, 214, 65, 0.5)",
                background: "linear-gradient(135deg, rgba(60,60,60,0.8), rgba(40,40,40,0.8))",
              }}
            >
              <img
                src="/images/hero-mock.png"
                alt="Harsh Jethwa — Profile"
                className="w-full h-full object-cover"
                width={900}
                height={900}
              />
            </div>
          </div>

          {/* ---------- TEXT BLOCK (animated) ---------- */}
          <div
            className={`text-center md:text-right max-w-2xl transform-gpu will-change-transform ${
              mounted ? "text-enter" : "text-init"
            }`}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight"
              style={{
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              Aspiring AI/ML & Software Developer <span className="shimmer-text">&</span> Innovation Builder
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 md:mb-12"
              style={{
                color: "#b8c0cc",
                fontWeight: 400,
              }}
            >
              Building data-driven, scalable solutions through AI agents, machine learning, and cloud technologies.
              Passionate about turning complex data into actionable insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end items-center">
              <a
                href="#work"
                className="glass-button"
                style={{
                  background:
                    "linear-gradient(145deg,rgba(236, 209, 33, 0.65) 20%, rgba(246, 225, 72, 0.63) 45%, rgba(221, 195, 27, 0.65) 60%, rgba(227, 239, 123, 0.73) 100%)",
                  borderColor: "rgba(16, 11, 11, 0.2)",
                }}
              >
                <span className="relative z-10 font-medium">View My Work</span>
              </a>

              <a
                href={resumePath}
                download
                className={`glass-button resume-btn ${mounted ? "resume-enter" : "resume-init"}`}
                style={{
                  background:
                    "linear-gradient(145deg,rgba(236, 209, 33, 0.65) 20%, rgba(246, 225, 72, 0.63) 45%, rgba(221, 195, 27, 0.65) 60%, rgba(227, 239, 123, 0.73) 100%)",
                  borderColor: "rgba(224, 224, 224, 0.18)",
                }}
                aria-label="Download resume"
              >
                <span className="relative z-10 font-medium">View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Component-scoped animation CSS (responsive + buttery easing) ---------- */}
      <style>{`
        /* ---------- INITIAL STATES ---------- */
        .photo-init {
          opacity: 0;
          transform: translate3d(0, 18px, 0);
          will-change: transform, opacity;
        }
        .text-init {
          opacity: 0;
          transform: translate3d(0, 18px, 0);
          will-change: transform, opacity;
        }
        .resume-init {
          opacity: 0;
          transform: translateY(-6px) scale(0.98);
        }

        /* ---------- ENTER STATES (Mobile: subtle; MD+: directional) ---------- */
        .photo-enter {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: transform 9000ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms ease-out;
          backface-visibility: hidden;
        }

        .text-enter {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: transform 9200ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms ease-out;
          backface-visibility: hidden;
        }

        .resume-enter {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1), opacity 420ms ease-out;
          transition-delay: 180ms;
        }

        /* ---------- MD+: photo moves left and text nudges right to recreate previous layout/feel ---------- */
        @media (min-width: 768px) {
          /* photo slides left on larger screens */
          .photo-enter {
            transform: translate3d(-220px, 0, 0);
          }
          .text-enter {
            transform: translate3d(1px, 0, 0);
          }
        }

        /* larger screens: increase separation a bit */
        @media (min-width: 1200px) {
          .photo-enter {
            transform: translate3d(-120px, 0, 0);
          }
          .text-enter {
            transform: translate3d(90px, 0, 0);
          }
        }

        /* keep image crisp */
        .profile-photo-wrapper img {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity;
        }

        /* subtle floating highlight behind photo */
        @keyframes float-animation {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        /* reduce motion: disable animations */
        @media (prefers-reduced-motion: reduce) {
          .photo-init, .photo-enter, .text-init, .text-enter, .resume-init, .resume-enter {
            transition: none !important;
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
          [style*="float-animation"] { animation: none !important; }
        }

        /* resume btn micro-interaction */
        .resume-btn {
          display: inline-block;
          padding: 0.9rem 1rem;
          border-radius: 0.5rem;
        }
        .resume-btn:hover {
          transform: translateY(-3px) scale(1.02);
          transition: transform 220ms cubic-bezier(0.22,1,0.36,1);
        }
      `}</style>
    </section>
  )
}

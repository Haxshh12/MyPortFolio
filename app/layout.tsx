import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})


export const metadata: Metadata = {
  title: "Portfolio | Creative Designer & Developer",
  description: "A futuristic glassmorphism portfolio showcasing cutting-edge design and development work.",
  generator: "v0.app",
}

// ✅ FIX: separate viewport export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style>{`
          :root {
            --font-poppins: ${poppins.style.fontFamily};
            --font-inter: ${inter.style.fontFamily};
          }
        `}</style>
      </head>

      <body className={`${inter.variable} font-sans antialiased relative`}>
        {/* Global background */}
        <div
          className="fixed inset-0 -z-10 opacity-60 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(15, 225, 215, 0.45) 0%, rgba(7, 7, 24, 0.64) 50%, rgba(12, 12, 79, 0.72) 50%, rgba(226, 173, 14, 0.56) 100%)",
            animation: "gradient-shift 35s ease-in-out infinite",
            backgroundSize: "200% 200%",
          }}
        />
        {children}
      </body>
    </html>
  )
}

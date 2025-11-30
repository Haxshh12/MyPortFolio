"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10" style={{ borderTop: "1px solid rgba(224, 224, 224, 0.82)" }}>
      <div className="glass-panel m-6 p-12"style={{ background:"linear-gradient(135deg,rgba(4, 4, 27, 0.72) 50%, rgba(34, 63, 253, 0.1) 120%)",}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <p className="text-xl font-bold text-white font-poppins mb-2">Harsh Jethwa</p>
              <p className="text-sm leading-relaxed" style={{ color: "#999999" }}>
                Crafting premium digital experiences with sophistication and precision.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 font-poppins text-white">Navigation</h4>
              <div className="space-y-2 text-sm">
                {["About", "Work", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block transition-all duration-300 hover:translate-x-1 hover:text-white"
                    style={{ color: "#999999" }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 font-poppins text-white">Connect</h4>
              <div className="space-y-2 text-sm">
                {["LinkedIn", "Twitter", "GitHub", "Email"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="block transition-all duration-300 hover:translate-x-1 hover:text-white"
                    style={{ color: "#999999" }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
            style={{ borderTop: "1px solid rgba(215, 32, 32, 0.06)", color: "#999999" }}
          >
            <p>© {currentYear} Portfolio. All rights reserved by HarshJethwa</p>
            <div className="flex gap-6">
              <a href="#" className="transition-all duration-300 hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition-all duration-300 hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

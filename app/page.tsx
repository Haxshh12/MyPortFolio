import Navbar from "@/components/navbar"
import ProfileHeader from "@/components/profile-header"
import About from "@/components/about"
import SkillsEnhanced from "@/components/skills-enhanced"
import Stats from "@/components/stats"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <ProfileHeader />
      <About />
      <Stats />
      <Education />
      <SkillsEnhanced />
      <Experience />
      <Portfolio />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}

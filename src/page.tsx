import ProjectsSection from "./components/seccions/Proyect"
import { heroData, aboutMeData, projects, skillsData, historyData } from "./data/data"
import Hero from "./components/seccions/Hero"
import Header from "./components/seccions/Header"
import AboutMe from "./components/seccions/AboutMe"
import Skills, { SkillsData } from "./components/seccions/Skills"
import Path from "./components/seccions/History"
import Contacto from "./components/seccions/Contact"
import Footer from "./components/seccions/Footer"

const skills: SkillsData = skillsData();

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-stretch bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <Hero heroData={heroData}/>
        <AboutMe data={aboutMeData}/>
        <ProjectsSection projects={projects}/>
        <Skills categories={skills.categories}/>
        <Path data={historyData} />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}


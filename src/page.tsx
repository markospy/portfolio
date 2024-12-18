import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin } from 'lucide-react'


import ProjectsSection from "./components/seccions/Proyect"
import { heroData, aboutMeData, projects, skillsData } from "./data/data"
import Hero from "./components/seccions/Hero"
import Header from "./components/seccions/Header"
import AboutMe from "./components/seccions/AboutMe"
import Skills, { SkillsData } from "./components/seccions/Skills"

const skills: SkillsData = skillsData();

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-stretch bg-background text-foreground">

      {/* Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero heroData={heroData}/>

        {/* About Me Section */}
        <AboutMe data={aboutMeData}/>

        {/* Projects Section */}
        <ProjectsSection projects={projects}/>

        {/* Skills Section */}
        <Skills categories={skills.categories}/>

        {/* Experience and Education Section */}
        <section id="trayectoria" className="py-20 px-4  flex justify-center bg-primary/10">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Mi Trayectoria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">Experiencia Laboral</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li>
                      <h3 className="font-bold text-foreground">Freelance</h3>
                      <p className="text-muted-foreground">Desarrollo de proyectos para diversos clientes</p>
                    </li>
                    <li>
                      <h3 className="font-bold text-foreground">Bots de Trading</h3>
                      <p className="text-muted-foreground">Desarrollo de sistemas automatizados de trading</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">Formación</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-bold text-foreground">Autodidacta</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Cursos online de desarrollo web y programación</li>
                    <li>Estudio de documentación técnica</li>
                    <li>Desarrollo de proyectos personales</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-20 px-4  flex justify-center">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Contáctame</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input placeholder="Nombre" className="bg-card border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                <Input type="email" placeholder="Correo electrónico" className="bg-card border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                <Textarea placeholder="Mensaje" className="bg-card border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Enviar</Button>
              </form>
              <div className="mt-8 flex justify-center space-x-4">
                <a href="mailto:tu-email@ejemplo.com" className="text-primary hover:text-primary/90 transition-colors">
                  <Mail className="inline-block mr-2" />
                  Email
                </a>
                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="inline-block mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted w-full text-muted-foreground py-8 px-4  flex justify-center">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mr-4 text-blue-400 hover:text-blue-300 transition-colors">
                <Linkedin className="inline-block" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-muted transition-colors">
                <Github className="inline-block" />
              </a>
            </div>
            <Button variant="outline" className="mb-4 md:mb-0 text-muted-foreground border-muted-foreground hover:bg-muted/50">Descargar CV</Button>
            <p className="text-sm text-muted">&copy; 2024 Marcos Ávila. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


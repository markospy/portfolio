import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"

// Importamos solo el logo de React
import ReactLogo from '@/components/logos/ReactLogo'
import TypeScriptLogo from "./components/logos/TypeScript"
import HTML5Logo from "./components/logos/HtmlLogo"
import JavaScriptLogo from "./components/logos/JavaScriptLogo"
import TailwindCSSLogo from "./components/logos/TailwindLogo"
import CssLogo from "./components/logos/CssLogo"
import PythonLogo from "./components/logos/PythonLogo"
import FastApiLogo from "./components/logos/FastApiLogo"
import SQLAlchemyLogo from "./components/logos/SQLAlchemyLogo"
import DockerLogo from "./components/logos/DockerLogo"
import GitLogo from "./components/logos/GitLogo"
import GithubLogo from "./components/logos/GithubLogo"
import SQLLogo from "./components/logos/SQLLogo"
import MysqlLogo from "./components/logos/MysqlLogo"
import PostgresqlLogo from "./components/logos/PostgresqlLogo"
import MongodbLogo from "./components/logos/MongodbLogo"
import SeleniumLogo from "./components/logos/SeleniumLogo"
import BeautifulSoupLogo from "./components/logos/BeautifulSoupLogo"
import PytestLogo from "./components/logos/PytestLogo"
import JupyterLogo from "./components/logos/JupyterLogo"
import LinuxLogo from "./components/logos/LinuxLogo"
import SqlModelLogo from "./components/logos/SqlModelLogo"
import PydanticLogo from "./components/logos/PydanticLogo"
import RedisLogo from "./components/logos/RedisLogo"
import FirebaseLogo from "./components/logos/FirebaseLogo"
import ProjectsSection from "./components/seccions/Proyect"
import { projects } from "./data/data"




export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="text-xl font-bold text-primary">Marcos Ávila - Full Stack Developer</div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <nav>
              <ul className="flex space-x-4">
                {['Inicio', 'Sobre mí', 'Proyectos', 'Habilidades', 'Contacto'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="inicio" className="py-20 bg-primary/10">
          <div className="container flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Marcos Antonio Ávila Morales"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4 text-primary">Marcos Antonio Ávila Morales</h1>
              <h2 className="text-2xl text-muted-foreground mb-4">Full Stack Developer | Python y JavaScript</h2>
              <p className="text-xl mb-6 text-muted-foreground">Apasionado por desarrollar soluciones digitales escalables y de calidad</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button className="bg-primary hover:bg-primary/90">Contactarme</Button>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">Descargar CV</Button>
                <Button variant="outline" className="text-muted-foreground border-gray-300 hover:bg-gray-100">
                  <Github className="mr-2 h-4 w-4" /> Ver mi GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="sobre-mí" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Sobre mí</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="mb-4 text-muted-foreground">
                Soy un desarrollador Full Stack apasionado por crear soluciones digitales innovadoras. 
                Con experiencia en Python y JavaScript, me especializo en desarrollar aplicaciones web 
                robustas y escalables.
              </p>
              <ul className="list-disc list-inside text-left text-muted-foreground mb-6">
                <li>Experiencia como autodidacta en desarrollo web y programación</li>
                <li>Desarrollo de bots de trading y proyectos personales</li>
                <li>Comprometido con el aprendizaje continuo y las mejores prácticas de desarrollo</li>
              </ul>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">Idiomas</h3>
                <ul className="flex justify-center space-x-4">
                  <li className="bg-primary/10 text-primary px-3 py-1 rounded-full">Español (Nativo)</li>
                  <li className="bg-primary/10 text-primary px-3 py-1 rounded-full">Inglés (Fluido)</li>
                  {/* Agrega más idiomas aquí si es necesario */}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection projects={projects}/>

        {/* Skills Section */}
        <section id="habilidades" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Mis Habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Frontend',
                  skills: [
                    {name: 'HTML', logo: <HTML5Logo className="w-6 h-6" />},
                    { name: 'CSS', logo: <CssLogo className="w-6 h-6" /> },
                    { name: 'JavaScript', logo: <JavaScriptLogo className="w-6 h-6" /> },
                    { name: 'Tailwind', logo: <TailwindCSSLogo className="w-6 h-6" /> },
                    { name: 'TypeScript', logo: <TypeScriptLogo className="w-6 h-6" /> },
                    { name: 'React', logo: <ReactLogo className="w-6 h-6" /> },
                  ]
                },
                {
                  title: 'Backend',
                  skills: [
                    { name: 'Python', logo: <PythonLogo className="w-6 h-6" /> },
                    { name: 'FastAPI', logo: <FastApiLogo className="w-6 h-6" /> },
                    { name: 'SQLAlchemy', logo: <SQLAlchemyLogo className="w-12 h-12" /> },
                    { name: 'SqlModel', logo: <SqlModelLogo className="w-6 h-6" /> },
                    { name: 'Pydantic', logo: <PydanticLogo className="w-6 h-6" /> },
                    { name: 'Pytest', logo: <PytestLogo className="w-6 h-6" /> },
                  ]
                },
                {
                  title: 'DevOps',
                  skills: [
                    { name: 'Linux', logo: <LinuxLogo className="w-6 h-6" /> },
                    { name: 'Docker', logo: <DockerLogo className="w-6 h-6" /> },
                    { name: 'Git', logo: <GitLogo className="w-6 h-6" /> },
                    { name: 'GitHub', logo: <GithubLogo className="w-6 h-6" /> },
                  ]
                },
                {
                  title: 'Databases',
                  skills: [
                    { name: 'SQL', logo: <SQLLogo className="w-6 h-6" /> },
                    { name: 'MySQL', logo: <MysqlLogo className="w-6 h-6" /> },
                    { name: 'PostgreSQL', logo: <PostgresqlLogo className="w-6 h-6" /> },
                    { name: 'MongoDB', logo: <MongodbLogo className="w-6 h-6" /> },
                  ]
                },
                {
                  title: 'Web Scraping and Data',
                  skills: [
                    { name: 'Selenium', logo: <SeleniumLogo className="w-6 h-6" /> },
                    { name: 'BeautifulSoup', logo: <BeautifulSoupLogo className="w-6 h-6" /> },
                    { name: 'Jupyter', logo: <JupyterLogo className="w-6 h-6" /> },
                  ]
                },
                {
                  title: 'What am I studying?',
                  skills: [
                    { name: 'Redis', logo: <RedisLogo className="w-6 h-6" /> },
                    { name: 'Firebase', logo: <FirebaseLogo className="w-6 h-6" /> },
                    { name: 'LangChain', logo: <FirebaseLogo className="w-6 h-6" /> },
                  ]
                },
              ].map((category) => (
                <Card key={category.title} className="bg-card shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-primary">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.skills?.map((skill) => (
                        <li key={skill?.name} className="flex items-center space-x-2">
                          {skill?.logo}
                          <span>{skill?.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience and Education Section */}
        <section id="trayectoria" className="py-20 bg-primary/10">
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
        <section id="contacto" className="py-20">
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
      <footer className="bg-muted text-muted-foreground py-8">
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


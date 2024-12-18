import useOnScreen from "@/hooks/useOnScreen";
import { useRef } from "react";

export default function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <section id="about-me" className="py-20 bg-card">
      <div ref={ref} className="container">
        <h2 className={`text-3xl font-bold mb-8 text-center text-primary transition-all duration-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>About me</h2>
        <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
  )
}

import { Github } from 'lucide-react'
import { Button } from '../ui/button'
import Photo from "../../assets/photo.jpg"
import useOnScreen from '@/hooks/useOnScreen';
import { useRef } from 'react';

interface HeroData {
    name: string;
    title: string;
    description: string;
    github: string;
  }


export default function Hero({heroData}: {heroData: HeroData}) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
      <section id="hero" className="py-20 px-4 flex justify-center bg-primary/10">
        <div className="container flex flex-col items-center justify-center md:flex-row">
          <div ref={ref} className={`md:w-1/2 mb-8 md:mb-0 flex justify-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img
              src={Photo} // Asegúrate de que Photo esté importado
              alt={heroData.name} // Usar el nombre como texto alternativo
              width={300}
              height={300}
              className="rounded-full shadow-lg outline outline-muted"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left flex justify-center">
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-4xl font-bold mb-4 text-primary">{heroData.name}</h1>
              <h2 className="text-2xl text-muted-foreground mb-4">{heroData.title}</h2>
              <p className="text-xl mb-6 text-muted-foreground">{heroData.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button className="bg-primary hover:bg-primary/90">Contact me</Button>
                <a href="/src/assets/Marcos_Avila_CV.pdf" download>
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">Download CV</Button>
                </a>
                <Button
                  asChild
                  variant="outline"
                  className="text-muted-foreground border-gray-300 hover:bg-gray-100"
                >
                  <a href={heroData.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> See my github
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


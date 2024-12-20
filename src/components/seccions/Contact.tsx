import { Mail, Github, Linkedin } from 'lucide-react';
import React, { useRef } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import useOnScreen from '@/hooks/useOnScreen';

const Contacto = () => {
const ref = useRef<HTMLDivElement>(null);
const isVisible = useOnScreen(ref);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Formulario enviado');
  };

  return (
    <section id="contact" className="py-20 px-4 flex justify-center">
      <div ref={ref} className="container">
        <h2 className={`text-3xl font-bold mb-8 text-center text-primary transition-all duration-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Contact Me</h2>
        <div className={`max-w-md mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input placeholder="Name" className="bg-input border-border focus:border-ring transition-colors duration-300" />
            <Input type="email" placeholder="Email" className="bg-input border-border focus:border-ring transition-colors duration-300" />
            <Textarea placeholder="Message"  className="bg-input border-border focus:border-ring h-28 transition-colors duration-300" />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/70 text-primary-foreground border-2 border-ring transition-colors duration-300">Send</Button>
          </form>
          <div className="mt-8 flex justify-center space-x-5">
            <a href="mailto:tu-email@ejemplo.com" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
              <Mail className="inline-block mr-2 align-middle" />
              Email
            </a>
            <a href="https://github.com/markospy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              <Github className="inline-block mr-2 align-middle" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <Linkedin className="inline-block mr-2 align-middle" />
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
import { Mail, Github } from 'lucide-react';
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
            <Input placeholder="Name" className="bg-card border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
            <Input type="email" placeholder="Email" className="bg-card border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
            <Textarea placeholder="Message"  className="bg-card border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Send</Button>
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="mailto:tu-email@ejemplo.com" className="text-primary hover:text-primary/90 transition-colors">
              <Mail className="inline-block mr-2" />
              Email
            </a>
            <a href="https://github.com/markospy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="inline-block mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
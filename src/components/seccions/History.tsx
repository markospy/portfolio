import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import useOnScreen from '@/hooks/useOnScreen';
import { Flame } from 'lucide-react';
import { useRef } from 'react';

export interface PathData {
  experienciaLaboral: {
    titulo: string;
    descripcion: string;
  }[];
  formacion: {
    titulo: string;
    detalles: string[];
  };
}

interface PathProps {
  data: PathData;
}

const Path = ({ data }: PathProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  return (
    <section id="my-path" className="py-20 px-4 flex justify-center bg-primary/10 transition-colors duration-300">
      <div ref={ref}  className="container">
        <h2 className={`text-3xl font-bold mb-8 text-center text-primary transition-all duration-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>My Path</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-card shadow-lg transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-primary transition-colors duration-300">Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {data.experienciaLaboral.map((item, index) => (
                  <li key={index}>
                    <h3 className="font-bold text-primary/80 transition-colors duration-300">{item.titulo}</h3>
                    <p className="text-muted-foreground transition-colors duration-300">{item.descripcion}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-lg transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-primary transition-colors duration-300">Training</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold text-primary/80 transition-colors duration-300">{data.formacion.titulo}</h3>
              <ul className="text-muted-foreground transition-colors duration-300">
                {data.formacion.detalles.map((detalle, index) => (
                  <li key={index} className="[&>svg]:inline-block"><Flame className="text-orange-400 fill-orange-500 animate-pulse"/> {detalle}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Path;
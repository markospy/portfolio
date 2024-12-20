import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import useOnScreen from '@/hooks/useOnScreen';
import { Flame } from 'lucide-react';

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
    <section id="my-path" className="py-20 px-4 flex justify-center bg-primary/10">
      <div ref={ref}  className="container">
        <h2 className={`text-3xl font-bold mb-8 text-center text-primary transition-all duration-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>My Path</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-card shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary">Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {data.experienciaLaboral.map((item, index) => (
                  <li key={index}>
                    <h3 className="font-bold text-primary/80">{item.titulo}</h3>
                    <p className="text-muted-foreground">{item.descripcion}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary">Training</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold text-primary/80">{data.formacion.titulo}</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {data.formacion.detalles.map((detalle, index) => (
                  <li key={index} className="flex gap-2"><Flame className="text-orange-400 fill-orange-500 animate-pulse"/> {detalle}</li>
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
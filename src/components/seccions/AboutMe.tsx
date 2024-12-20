import useOnScreen from "@/hooks/useOnScreen";
import { Flame } from "lucide-react";
import { useRef } from "react";


interface AboutMeData {
  description: string[];
  list: string[];
  languages: string[];
}

interface AboutMeProps {
  data: AboutMeData;
}

export default function AboutMe({ data }: AboutMeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <section id="about-me" className="py-20 px-4 flex justify-center">
      <div ref={ref} className="container">
        <h2 className={`text-3xl font-bold mb-8 text-center text-primary transition-all duration-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>About me</h2>
        <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {data.description.map((text, index) => (
            <p key={index} className="mb-4 text-muted-foreground">
              {text}
            </p>
          ))}
          <ul className="list-disc list-inside text-left text-muted-foreground mb-6">
            {data.list.map((item, index) => (
              <li key={index} className="flex gap-2"><Flame className="text-orange-400 fill-orange-500 animate-pulse"/> {item}</li>
            ))}
          </ul>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 text-primary/80">Languages</h3>
            <ul className="flex justify-center space-x-4">
              {data.languages.map((language, index) => (
                <li key={index} className="bg-primary/10 text-primary/80 px-3 py-1 rounded-full">
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import useOnScreen from "@/hooks/useOnScreen";
import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface Skill {
    name: string;
    logo: JSX.Element; // Asumiendo que los logos son componentes de React
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface SkillsData {
  categories: SkillCategory[];
}


const Skills = ({ categories }: SkillsData) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <section id="my-skills" className="py-20 px-4 flex justify-center">
    <div ref={ref} className="container">
      <h2 className={`text-3xl font-bold mb-8 text-center text-primary transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>My Skills</h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {categories.map((category) => {
        return (
        <Card key={category.title} className="bg-card shadow-lg  transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-primary/80  transition-colors duration-300">{category.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
            {category.skills.map((skill) => (
              <li key={skill.name} className="flex items-center space-x-2 text-muted-foreground  transition-colors duration-300">
              {skill.logo}
              <span>{skill.name}</span>
              </li>
            ))}
            </ul>
          </CardContent>
        </Card>
        )
      })}
      </div>
    </div>
    </section>
  );
};

export default Skills;
import { Proyecto } from "@/components/seccions/Proyect";

// Importamos solo el logo de React
import ReactLogo from '@/components/logos/ReactLogo'
import TypeScriptLogo from "@/components/logos/TypeScript"
import HTML5Logo from "@/components/logos/HtmlLogo"
import JavaScriptLogo from "@/components/logos/JavaScriptLogo"
import TailwindCSSLogo from "@/components/logos/TailwindLogo"
import CssLogo from "@/components/logos/CssLogo"
import PythonLogo from "@/components/logos/PythonLogo"
import FastApiLogo from "@/components/logos/FastApiLogo"
import SQLAlchemyLogo from "@/components/logos/SQLAlchemyLogo"
import DockerLogo from "@/components/logos/DockerLogo"
import GitLogo from "@/components/logos/GitLogo"
import GithubLogo from "@/components/logos/GithubLogo"
import SQLLogo from "@/components/logos/SQLLogo"
import MysqlLogo from "@/components/logos/MysqlLogo"
import PostgresqlLogo from "@/components/logos/PostgresqlLogo"
import MongodbLogo from "@/components/logos/MongodbLogo"
import SeleniumLogo from "@/components/logos/SeleniumLogo"
import BeautifulSoupLogo from "@/components/logos/BeautifulSoupLogo"
import PytestLogo from "@/components/logos/PytestLogo"
import JupyterLogo from "@/components/logos/JupyterLogo"
import LinuxLogo from "@/components/logos/LinuxLogo"
import SqlModelLogo from "@/components/logos/SqlModelLogo"
import PydanticLogo from "@/components/logos/PydanticLogo"
import RedisLogo from "@/components/logos/RedisLogo"
import FirebaseLogo from "@/components/logos/FirebaseLogo"
import { SkillsData } from "@/components/seccions/Skills";

export const projects: Proyecto[] = [
    {
        name: "Portfolio Personal",
        technologies: ["React", "TypeScript", "CSS"],
        description: "Un portafolio personal para mostrar mis proyectos y habilidades.",
        imageUrl: "https://via.placeholder.com/400x200?text=Portfolio+Personal",
        githubUrl: "https://github.com/usuario/portfolio-personal",
        demoUrl: "https://usuario.github.io/portfolio-personal"
    },
    {
        name: "E-commerce App",
        technologies: ["Node.js", "Express", "MongoDB"],
        description: "Una aplicación de comercio electrónico con carrito de compras y gestión de usuarios.",
        imageUrl: "https://via.placeholder.com/400x200?text=E-commerce+App",
        githubUrl: "https://github.com/usuario/ecommerce-app",
        demoUrl: "https://usuario.github.io/ecommerce-app"
    },
    {
        name: "Blog Personal",
        technologies: ["Next.js", "GraphQL", "Apollo"],
        description: "Un blog personal donde comparto mis pensamientos y artículos sobre tecnología.",
        imageUrl: "https://via.placeholder.com/400x200?text=Blog+Personal",
        githubUrl: "https://github.com/usuario/blog-personal",
        demoUrl: "https://usuario.github.io/blog-personal"
    },
    {
        name: "Aplicación de Clima",
        technologies: ["React Native", "Expo", "OpenWeather API"],
        description: "Una aplicación móvil que muestra el clima actual y pronósticos utilizando la API de OpenWeather.",
        imageUrl: "https://via.placeholder.com/400x200?text=Weather+App",
        githubUrl: "https://github.com/usuario/aplicacion-clima",
        demoUrl: "https://usuario.github.io/aplicacion-clima"
    }
];

export const heroData = {
    name: "Marcos Antonio Avila Morales",
    title: "Full Stack Developer | Python y JavaScript",
    description: "I'm a backend who learned how to center divs decently.",
    github: "https://github.com/markospy"
  };


export const aboutMeData = {
    description: [
      "Soy un desarrollador Full Stack apasionado por crear soluciones digitales innovadoras. Con experiencia en Python y JavaScript, me especializo en desarrollar aplicaciones web robustas y escalables."
    ],
    list: [
      "Experiencia como autodidacta en desarrollo web y programación",
      "Desarrollo de bots de trading y proyectos personales",
      "Comprometido con el aprendizaje continuo y las mejores prácticas de desarrollo"
    ],
    languages: [
      "Español (Nativo)",
      "Inglés (Fluido)"
    ]
  };

  export const skillsData = (): SkillsData => ({
    categories: [
      {
        title: 'Frontend',
        skills: [
          { name: 'HTML', logo: <HTML5Logo className="w-6 h-6" /> },
          { name: 'CSS', logo: <CssLogo className="w-6 h-6" /> },
          { name: 'JavaScript', logo: <JavaScriptLogo className="w-6 h-6" /> },
          { name: 'Tailwind', logo: <TailwindCSSLogo className="w-6 h-6" /> },
          { name: 'TypeScript', logo: <TypeScriptLogo className="w-6 h-6" /> },
          { name: 'React', logo: <ReactLogo className="w-6 h-6" /> },
        ],
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
        ],
      },
      {
        title: 'DevOps',
        skills: [
          { name: 'Linux', logo: <LinuxLogo className="w-6 h-6" /> },
          { name: 'Docker', logo: <DockerLogo className="w-6 h-6" /> },
          { name: 'Git', logo: <GitLogo className="w-6 h-6" /> },
          { name: 'GitHub', logo: <GithubLogo className="w-6 h-6" /> },
        ],
      },
      {
        title: 'Databases',
        skills: [
          { name: 'SQL', logo: <SQLLogo className="w-6 h-6" /> },
          { name: 'MySQL', logo: <MysqlLogo className="w-6 h-6" /> },
          { name: 'PostgreSQL', logo: <PostgresqlLogo className="w-6 h-6" /> },
          { name: 'MongoDB', logo: <MongodbLogo className="w-6 h-6" /> },
        ],
      },
      {
        title: 'Web Scraping and Data',
        skills: [
          { name: 'Selenium', logo: <SeleniumLogo className="w-6 h-6" /> },
          { name: 'BeautifulSoup', logo: <BeautifulSoupLogo className="w-6 h-6" /> },
          { name: 'Jupyter', logo: <JupyterLogo className="w-6 h-6" /> },
        ],
      },
      {
        title: 'What am I studying?',
        skills: [
          { name: 'Redis', logo: <RedisLogo className="w-6 h-6" /> },
          { name: 'Firebase', logo: <FirebaseLogo className="w-6 h-6" /> },
          { name: 'LangChain', logo: <FirebaseLogo className="w-6 h-6" /> },
        ],
      },
    ],
  });

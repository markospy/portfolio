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
import { TrayectoriaData } from "@/components/seccions/History";
import { FlaskConical, Link } from "lucide-react";

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
    description: "Following my passion has been the best decision of my life.",
    github: "https://github.com/markospy"
  };


export const aboutMeData = {
    description: [
      "I am a Full Stack developer with experience in Python and JavaScript, passionate about self-improvement and developing scalable projects. After leaving medical school, I found my true calling in programming, which has allowed me to create solutions in both frontend and backend. My commitment to continuous learning and my ability to overcome challenges are the pillars that guide me in each project.",
    ],
    list: [],
    languages: [
      "Spanish (Native)",
      "English (A2)"
    ]
  };

  export const skillsData = (): SkillsData => ({
    categories: [
      {
        title: 'Frontend',
        skills: [
          { name: 'HTML', logo: <HTML5Logo className="w-6 h-6 animate-pulse" /> },
          { name: 'CSS', logo: <CssLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'JavaScript', logo: <JavaScriptLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'Tailwind', logo: <TailwindCSSLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'TypeScript', logo: <TypeScriptLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'React', logo: <ReactLogo className="w-6 h-6 animate-pulse" /> },
        ],
      },
      {
        title: 'Backend',
        skills: [
          { name: 'Python', logo: <PythonLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'FastAPI', logo: <FastApiLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'SQLAlchemy', logo: <FlaskConical className="w-6 h-6 text-blue-400" /> },
          { name: 'SqlModel', logo: <SqlModelLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'Pydantic', logo: <PydanticLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'Pytest', logo: <PytestLogo className="w-6 h-6 animate-pulse" /> },
        ],
      },
      {
        title: 'DevOps',
        skills: [
          { name: 'Linux', logo: <LinuxLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'Docker', logo: <DockerLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'Git', logo: <GitLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'GitHub', logo: <GithubLogo className="w-6 h-6 animate-pulse" /> },
        ],
      },
      {
        title: 'Databases',
        skills: [
          { name: 'SQL', logo: <SQLLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'MySQL', logo: <MysqlLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'PostgreSQL', logo: <PostgresqlLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'MongoDB', logo: <MongodbLogo className="w-6 h-6 animate-pulse" /> },
        ],
      },
      {
        title: 'Web Scraping and Data',
        skills: [
          { name: 'Selenium', logo: <SeleniumLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'BeautifulSoup', logo: <BeautifulSoupLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'Jupyter', logo: <JupyterLogo className="w-6 h-6 animate-pulse" /> },
        ],
      },
      {
        title: 'What am I studying?',
        skills: [
          { name: 'Redis', logo: <RedisLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'Firebase', logo: <FirebaseLogo className="w-6 h-6 animate-pulse" /> },
          { name: 'LangChain', logo: <Link className="w-6 h-6 animate-pulse" /> },
        ],
      },
    ],
  });


export const historyData: TrayectoriaData = {
  experienciaLaboral: [
    {
      titulo: 'Freelance',
      descripcion: 'I have developed at least 2 projects for clients using python and javascript.',
    },
    {
      titulo: 'Trading Bots',
      descripcion: 'Developed around 10 trading bots.',
    },
  ],
  formacion: {
    titulo: 'Autodidact',
    detalles: [
      'Online web development and programming courses.',
      'Technical documentation study.',
      'Learning from other sources: YouTube, books, blogs, forums.',
      'Development of personal projects.',
    ],
  },
};

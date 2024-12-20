import { Proyecto } from "@/components/seccions/Project";

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
import { PathData } from "@/components/seccions/History";
import { FlaskConical, Link } from "lucide-react";

import Biodash from "../assets/biodash.png"
import Landing from "../assets/bet_master.png"
import Portfolio from "../assets/portfolio.png"

const image2 = "data:image/jpeg;base64,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"

export const projects: Proyecto[] = [
    {
        name: "Contacts",
        technologies: ["FastAPI", "MongoDB", "Pydantic", "React", "React Router", "TanStack Query", "Axios", "Zod"],
        description: "Contact is a web application that allows users to create, read, update and delete contacts easily and efficiently.",
        imageUrl: "https://github.com/markospy/contacts/raw/main/doc/form.png",
        githubUrl: "https://github.com/markospy/contacts",
        demoUrl: ""
    },
    {
        name: "BioDash",
        technologies: ["FastAPI", "Postgres", "SQLAlchemy", "Pydantic", "React", "React Router", "TanStack Query", "Axios", "Zod"],
        description: "BioDash is a full-stack web application designed for recording and monitoring cardiovascular parameters and blood glucose levels of patients. I am currently working on the frontend.",
        imageUrl: Biodash,
        githubUrl: "https://github.com/markospy/biodash",
        demoUrl: ""
    },
    {
        name: "Bet Master",
        technologies: ["Astro"],
        description: "Landing page showing the profit history of a sports betting hipster.",
        imageUrl: Landing,
        githubUrl: "https://github.com/markospy/landing_bet_master",
        demoUrl: "https://www.master-pro.net/"
    },
    {
      name: "Personal Finance Management System",
      technologies: ["React Native", "Expo", "React", "React Router", "TanStack Query", "Axios", "Zod", "FastApi", "Postgres", "SqlAlchemy", "Pydantic", "Docker"],
      description: "A web and mobile application to manage personal finances. The web version is finished and I am currently working on the mobile version.",
      imageUrl: image2,
      githubUrl: "https://github.com/markospy/personal_finance_management",
      demoUrl: ""
    },
    {
        name: "My personal portfolio",
        technologies: ["React", "Shadcn"],
        description: "This portfolio 😁",
        imageUrl: Portfolio,
        githubUrl: "https://github.com/markospy/portfolio_v2",
        demoUrl: "https://markospy.github.io/portfolio_v2/"
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
          { name: 'SQLAlchemy', logo: <FlaskConical className="w-6 h-6 text-blue-400 animate-pulse" /> },
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


export const historyData: PathData = {
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

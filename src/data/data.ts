import { Proyecto } from "@/components/seccions/Proyect";

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
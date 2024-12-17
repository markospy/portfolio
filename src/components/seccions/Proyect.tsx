import { useRef } from 'react';
import { Github, Eye } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import useOnScreen from '@/hooks/useOnScreen';

export interface Proyecto {
	name: string; // Nombre del proyecto
	technologies: string[]; // Array de tecnologías usadas
	description: string; // Breve descripción del proyecto
	imageUrl: string; // Enlace a la imagen del proyecto
	githubUrl: string; // Enlace a GitHub
	demoUrl?: string; // Enlace a la demo (opcional)
}

interface ProjectsSectionProps {
	projects: Proyecto[]; // Array de proyectos
}
const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(ref);
	return (
			<section id="proyectos" className="py-20 bg-muted flex justify-center">
					<div className="container">
							<h2 className="text-3xl font-bold mb-8 text-center text-primary">Mis Proyectos</h2>
							<div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
									{projects.map((project) => {
										return ( // Asegúrate de retornar el componente Card
											<Card
												key={project.name}
												className={`h-full bg-card shadow-lg hover:shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
											>
												<CardHeader className="p-0">
													<img
														src={project.imageUrl}
														alt={`Proyecto ${project.name}`}
														className="rounded-t-lg w-full"
													/>
												</CardHeader>
												<CardContent className="flex flex-col justify-end p-6">
													<CardTitle className="mb-2 text-primary">{project.name}</CardTitle>
													<p className="text-sm text-muted-foreground">{project.technologies.join(', ')}</p>
													<p className="mb-4 text-muted-foreground">{project.description}</p>
													<div className='flex flex-col gap-2'>
														<Button variant="outline" className="w-full text-primary border-primary hover:bg-primary/10">
															<link href={project.githubUrl} />
															<Github className="mr-2 h-4 w-4" /> Ver en GitHub
														</Button>
														{project.demoUrl && (
															<Button variant="outline" className="w-full text-primary border-primary hover:bg-primary/10">
																<link href={project.demoUrl} />
																<Eye className="mr-2 h-4 w-4" /> Ver Demo
															</Button>
														)}
													</div>
												</CardContent>
											</Card>
										);
									})}
							</div>
					</div>
			</section>
	);
};

export default ProjectsSection;
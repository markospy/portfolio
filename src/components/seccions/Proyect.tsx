import { useRef } from 'react';
import useOnScreen from '@/hooks/useOnScreen';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

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
			<section id="my-proyects" className="py-20 px-4 bg-muted flex justify-center bg-primary/10">
				<div className="container">
					<h2 className={`text-3xl font-bold mb-8 text-center text-primary transition-all duration-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Explore My Proyects</h2>
					<div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
						{projects.map((project) => {
							return (
								<div className='group'>
									<Card
										key={project.name}
										className="h-full bg-card shadow-lg group-hover:filter group-hover:brightness-90 dark:group-hover:brightness-125"
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
										</CardContent>
									</Card>
								</div>
							)
						})}
					</div>
				</div>
			</section>
	);
};

export default ProjectsSection;



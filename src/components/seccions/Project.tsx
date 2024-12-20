import { useState } from 'react';
import { useRef } from 'react';
import useOnScreen from '@/hooks/useOnScreen';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Modal from '../Modal';
import { ExternalLink, Github } from 'lucide-react';

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

const Projects = ({ projects }: ProjectsSectionProps) => {
	const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(ref);

	const handleCardClick = (project: Proyecto) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedProject(null);
	};

	return (
		<section id="projects" className="py-20 px-4 flex justify-center bg-primary/10  transition-colors duration-300">
			<div className="container">
				<h2 className={`text-3xl font-bold mb-8 text-center text-primary transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Explore my Projects</h2>
				<div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					{projects.map((project) => {
						return (
							<div className='group' key={project.name} onClick={() => handleCardClick(project)}>
								<Card className="h-full bg-card shadow-lg hover:shadow-2xl hover:animate-slide-out-top cursor-pointer transition-colors duration-300">
									<CardHeader className="p-0">
										<img
											src={project.imageUrl}
											alt={`Proyecto ${project.name}`}
											className="rounded-t-lg w-full"
										/>
									</CardHeader>
									<CardContent className="flex flex-col justify-end p-6">
										<CardTitle className="mb-2 text-primary/80 transition-colors duration-300">{project.name}</CardTitle>
									</CardContent>
								</Card>
							</div>
						);
					})}
				</div>
			</div>
			{isModalOpen && selectedProject && (
				<Modal onClose={closeModal}>
					<h2 className="text-2xl font-bold text-primary transition-colors duration-300">{selectedProject.name}</h2>
					<img src={selectedProject.imageUrl} alt={`Proyecto ${selectedProject.name}`} className ="w-full rounded-lg mb-4" />
					<p className="mb-2 text-muted-foreground transition-colors duration-300">{selectedProject.description}</p>
					<p className="font-semibold text-muted-foreground transition-colors duration-300">Tecnologías: {selectedProject.technologies.join(', ')}.</p>
					<div className="mt-4 flex gap-4 justify-end">
						<a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 flex gap-2"><Github /></a>
						{selectedProject.demoUrl && (
							<a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 ml-4 flex gap-2"><ExternalLink /></a>
						)}
					</div>
				</Modal>
			)}
		</section>
	);
};

export default Projects;

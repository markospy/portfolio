import { Github, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';


const Footer = () => {
  return (
    <footer className="bg-muted w-full text-muted-foreground py-8 px-4 flex justify-center">
      <div className="container">
        <div className="flex flex-col justify-between items-center">
          <div className="mb-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Linkedin className="inline-block" />
            </a>
            <a
              href="https://github.com/markospy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-muted transition-colors"
            >
              <Github className="inline-block" />
            </a>
          </div>
          <a href="/src/assets/Marcos_Avila_CV.pdf" download>
            <Button variant="outline" className="mb-4 text-muted-foreground border-muted-foreground hover:bg-muted/50">
              Download CV
            </Button>
          </a>
          <p className="text-sm text-muted-foreground">&copy; 2025 Marcos Avila. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
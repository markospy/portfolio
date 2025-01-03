import { ArrowDownToLine } from 'lucide-react';
import { Button } from '../ui/button';


const Footer = () => {
  return (
    <footer className="flex justify-center bg-muted px-4 py-8 w-full text-muted-foreground transition-colors duration-300">
      <div className="flex flex-col justify-between items-center">
        <a href="Currículum Vitae Cv Marcos Antonio Avila.pdf" download>
          <Button variant="outline" className="border-muted-foreground bg-secondary hover:bg-secondary/10 mb-4 hover:border-ring text-secondary-foreground transition-colors duration-300">
            <ArrowDownToLine />Download CV
          </Button>
        </a>
        <p className="text-muted-foreground text-sm transition-colors duration-300">&copy; 2025 Marcos Avila. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
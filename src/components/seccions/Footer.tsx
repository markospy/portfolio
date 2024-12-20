import { ArrowDownToLine } from 'lucide-react';
import { Button } from '../ui/button';


const Footer = () => {
  return (
    <footer className="bg-muted w-full text-muted-foreground py-8 px-4 flex justify-center transition-colors duration-300">
      <div className="flex flex-col justify-between items-center">
        <a href="/src/assets/Marcos_Avila_CV.pdf" download>
          <Button variant="outline" className="mb-4 text-secondary-foreground border-muted-foreground bg-secondary hover:bg-secondary/10 hover:border-ring transition-colors duration-300">
            <ArrowDownToLine />Download CV
          </Button>
        </a>
        <p className="text-sm text-muted-foreground transition-colors duration-300">&copy; 2025 Marcos Avila. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
import { ThemeToggle } from '../theme-toggle';
import useScroll from '@/hooks/useScroll';

export default function Header() {
  const isScrolled = useScroll();

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-muted shadow-md bg-opacity-80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-around py-4">
        <div className="text-xl font-bold text-primary">Marcos Ávila - Full Stack Developer</div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <nav>
            <ul className="flex space-x-4">
              {['Hero', 'About me', 'My Proyects', 'My Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
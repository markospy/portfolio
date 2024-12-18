import { useState } from 'react';
import { ThemeToggle } from '../theme-toggle';
import useScroll from '@/hooks/useScroll';

export default function Header() {
  const isScrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 flex justify-center transition-colors duration-300 ${isScrolled && 'md:bg-primary/10'}`}>
      <div className="md:hidden w-full flex items-center justify-end gap-4 px-4">
        <ThemeToggle />
        <button onClick={toggleMenu}>
          {/* Icono de hamburguesa */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* Menú desplegable */}
      {isMenuOpen && (
        <nav className={`md:hidden bg-muted backdrop-blur-3xl fixed top-9 left-60 w-full z-50 transform transition-all duration-300 ${isScrolled ? 'shadow-md bg-muted backdrop-blur-3xl' : 'bg-primary/10'} ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
          <ul className="flex flex-col space-y-2 p-4 pl-8 shadow-md">
            {['Hero', 'About me', 'My Projects', 'My Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors" onClick={closeMenu}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {/* Menú en versión de escritorio */}
      <div className="container hidden md:flex items-center justify-around py-4">
        <div className="text-xl font-bold text-primary">Marcos Avila - Full Stack Developer</div>
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
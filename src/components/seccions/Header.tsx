import { useState } from 'react';
import { ThemeToggle } from '../theme-toggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 flex justify-center border-b border-gray-500/20 shadow-sm bg-primary/10 backdrop-blur-xl transition-colors duration-300`}>
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
        <nav className={`md:hidden fixed top-9 left-60 w-full z-50 backdrop-blur-sm bg-accent rounded-bl-lg shadow-lg transform transition-all duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="flex flex-col space-y-2 p-4 pl-8">
            {['Hero', 'About me', 'Projects', 'My Skills', 'My Path', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary  transition-colors duration-300" onClick={closeMenu}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {/* Menú en versión de escritorio */}
      <div className="container hidden md:flex items-center justify-center space-x-28 py-4">
        <div className="text-xl font-bold text-primary transition-colors duration-300">Marcos Avila - Full Stack Developer</div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <nav>
            <ul className="flex space-x-4">
              {['Hero', 'About me', 'Projects', 'My Skills', 'My Path', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:underline hover:decoration-2 hover:text-primary  transition-colors duration-300">
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
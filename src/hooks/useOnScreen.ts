import { useEffect, useState } from 'react';


const useOnScreen = (ref, delay = 300) => { // Puedes ajustar el delay aquí
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    setIsVisible(true);
                }, delay); // Retraso antes de hacer visible el componente
                observer.unobserve(entry.target); // Dejar de observar una vez que se ha hecho visible
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, delay]);

    return isVisible;
};

export default useOnScreen;
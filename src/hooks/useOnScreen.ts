import React, { useEffect, useState } from 'react';


const useOnScreen = (ref: React.RefObject<HTMLElement>, delay = 300) => { // Puedes ajustar el delay aquí
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
        const refVar = ref.current;

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (refVar) {
                observer.unobserve(refVar);
            }
        };
    }, [ref, delay]);

    return isVisible;
};

export default useOnScreen;
const Telegram: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg 
            width="24px" 
            height="24px" 
            strokeWidth="1.5" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            color="#3B82F6"
            {...props}
        >
            <path 
                d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229" 
                stroke="#3B82F6" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Telegram;
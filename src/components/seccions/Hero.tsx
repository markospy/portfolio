import { ArrowDownToLine, Github, Hand } from 'lucide-react'
import { Button } from '../ui/button'
import Photo from "../../assets/photo.png"
import useOnScreen from '@/hooks/useOnScreen';
import { useRef, useState } from 'react';
import Modal from '../Modal';
import React from 'react';
import { Textarea } from '../ui/textarea';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const success = () => toast('The message was sent successfully ✅. Marcos will be in touch with you very soon.');
const failed = () => toast('An error has occurred ❌. Please try again.');

const YOUR_SERVICE_ID = 'service_a7zeqkr';
const YOUR_TEMPLATE_ID = 'template_ctwrpnw';
const YOUR_PUBLIC_KEY = 'KLalvGa4DteU5sIy_';
interface HeroData {
    name: string;
    title: string;
    description: string;
    github: string;
  }


export default function Hero({heroData}: {heroData: HeroData}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonState, setbuttonState] = useState('Send');
  const ref = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const isVisible = useOnScreen(ref);

	const showModal = () => {
		setIsModalOpen(!isModalOpen);
	};

  const sendEmail = (e:React.FormEvent) => {
    e.preventDefault();
    setbuttonState('Sending')

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current as HTMLFormElement, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          success()
          setIsModalOpen(false)
          setbuttonState('Send');
        },
        () => {
          failed();
        },
      );
  };

  return (
    <section id="hero" className="flex justify-center bg-primary/10 px-4 py-20 transition-colors duration-300">
      <div className="flex md:flex-row flex-col justify-center items-center container">
        <div ref={ref} className={`mb-8 md:mb-0 flex justify-center transition-all duration-500 w-72 h-72 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <img
            src={Photo} // Asegúrate de que Photo esté importado
            alt={heroData.name} // Usar el nombre como texto alternativo
            width={300}
            height={300}
            className="shadow-lg rounded-full w-full h-full transform transition-colors duration-300 object-cover outline outline-muted"
          />
        </div>
        <div className="flex justify-center md:w-1/2 text-center md:text-left">
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="mb-4 font-bold text-4xl text-primary transition-colors duration-300">{heroData.name}</h1>
            <h2 className="mb-4 text-2xl text-muted-foreground transition-colors duration-300">{heroData.title}</h2>
            <p className="mb-6 text-muted-foreground text-xl transition-colors duration-300">{heroData.description}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button onClick={showModal} className="bg-primary hover:bg-primary/90 shadow-sm hover:shadow-lg text-primary-foreground transition-all duration-300">
               <Hand className='animate-rotational-wave'/>Say Hello!
              </Button>
              <a href="Currículum Vitae Cv Marcos Antonio Avila.pdf" download>
                <Button variant="outline" className="border-primary hover:bg-primary/10 shadow-sm hover:shadow-lg text-primary hover:text-primary transition-all duration-300">
                  <ArrowDownToLine />Download CV
                </Button>
              </a>
              <Button
                asChild
                variant="outline"
                className="border-muted hover:bg-muted shadow-sm hover:shadow-lg text-muted-foreground transition-all duration-300"
              >
                <a href={heroData.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 w-4 h-4" /> See my github
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
			{isModalOpen && (
				<Modal onClose={showModal} >
          <form ref={form} className="space-y-4 px-2 pt-4 w-full" onSubmit={sendEmail}>
            <Textarea name="message" placeholder="Message"  className="bg-input focus:border-ring border-border h-40 transition-colors duration-300" />
            <Button
              type="submit"
              className="border-2 bg-primary hover:bg-primary/70 border-ring w-full text-primary-foreground transition-colors duration-300"
              disabled={buttonState==='Send'? false : true}
            >
              {buttonState}
            </Button>
          </form>
				</Modal>
			)}
      <Toaster />
    </section>
  );
}


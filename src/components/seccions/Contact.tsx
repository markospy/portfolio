import { Mail, Github, Linkedin } from 'lucide-react';
import { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import useOnScreen from '@/hooks/useOnScreen';
import Telegram from '../logos/Telegram';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const success = () => toast('The message was sent successfully ✅. Marcos will be in touch with you very soon.');
const failed = () => toast('An error has occurred ❌. Please try again.');

const YOUR_SERVICE_ID = 'service_a7zeqkr';
const YOUR_TEMPLATE_ID = 'template_ctwrpnw';
const YOUR_PUBLIC_KEY = 'KLalvGa4DteU5sIy_';

const Contacto = () => {
  const ref = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const isVisible = useOnScreen(ref);
  const [buttonState, setbuttonState] = useState('Send');

  const sendEmail = (e:React.FormEvent) => {
    e.preventDefault();
    setbuttonState('Sending')
    const formRef = form.current as HTMLFormElement;

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formRef, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          success();
          formRef.reset();
          setbuttonState('Send');
        },
        () => {
          failed();
        },
      );
  };

  return (
    <section id="contact" className="flex justify-center px-4 py-20">
      <div ref={ref} className="container">
        <h2 className={`text-3xl font-bold mb-8 text-center text-primary transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Contact Me</h2>
        <div className={`max-w-md mx-auto transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form ref={form} className="space-y-4" onSubmit={sendEmail}>
            <Input name="user_name" placeholder="Name" className="bg-input focus:border-ring border-border transition-colors duration-300" />
            <Input name="user_email" type="email" placeholder="Email" className="bg-input focus:border-ring border-border transition-colors duration-300" />
            <Textarea name="message" placeholder="Message" className="bg-input focus:border-ring border-border h-28 transition-colors duration-300" />
            <Button
              type="submit"
              className="border-2 bg-primary hover:bg-primary/70 border-ring w-full text-primary-foreground transition-colors duration-300"
              disabled={buttonState==='Send'? false : true}
            >
              {buttonState}
            </Button>
          </form>
          <div className="flex justify-center space-x-5 mt-8">
            <a href="mailto:marco.developer@outlook.com" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
              <Mail className="inline-block mr-2 align-middle" />
              Email
            </a>
            <a href="https://github.com/markospy" target="_blank" rel="noopener noreferrer" className="mr-4 text-blue-500 hover:text-blue-600 transition-colors duration-300">
              <Github className="inline-block mr-2 align-middle" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <Linkedin className="inline-block mr-2 align-middle" />
              Linkedin
            </a>
            <a
              href="https://t.me/markospy"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <Telegram className="inline-block mr-2 align-middle" />
              Telegram
            </a>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contacto;
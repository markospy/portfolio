import { SquareX } from "lucide-react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-xl">
      <div className="relative bg-card rounded-lg shadow-lg p-6 max-w-lg w-full border-2 border-muted">
        <button onClick={onClose} className="absolute right-1 top-1 z-60 text-gray-500 hover:text-gray-700">
          <SquareX className="text-destructive fill-destructive-foreground size-6"/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
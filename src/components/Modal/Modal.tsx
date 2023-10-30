import { ModalContainer, ModalPoster } from "./ModalStyles";

interface ModalProps {
  src: string;
  onClose: () => void;
}

export default function Modal({src, onClose}: ModalProps) {
  return (
    <ModalContainer onClick={onClose}>
      <ModalPoster src={src} alt="modal" onClick={(e) => e.stopPropagation()} />
    </ModalContainer>
  );
}
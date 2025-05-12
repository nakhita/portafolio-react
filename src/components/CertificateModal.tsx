import React from "react";
import CloseButton from "../components/animations/CloseButtonProps";

interface CertificateModalProps {
  imageSrc: string;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  imageSrc,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded-lg max-w-[90%] max-h-[90%] shadow-xl">
        <CloseButton onClick={onClose} />
        <img
          src={imageSrc}
          alt="Certificate"
          className="max-w-full max-h-[80vh] object-contain"
        />
      </div>
    </div>
  );
};

export default CertificateModal;

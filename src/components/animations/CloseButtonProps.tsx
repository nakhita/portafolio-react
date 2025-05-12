interface CloseButtonProps {
  onClick: () => void;
  className?: string;
}

const CloseButton = ({ onClick, className }: CloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label="Cerrar"
      className={`absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full shadow-md hover:text-purple-500 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 ${
        className ?? ""
      }`}
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24">
        <path
          d="M18 6L6 18M6 6l12 12"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default CloseButton;

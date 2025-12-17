"use client";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const ThankYouModal = ({ isOpen, onClose, title = "Thank You!", message = "We'll get back to you soon." }: ThankYouModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <svg
            className="h-10 w-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
          {title}
        </h3>

        {/* Message */}
        <p className="text-center text-gray-600 mb-8">
          {message}
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full rounded-full bg-[#FF7A00] px-6 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#E66A00] hover:shadow-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;

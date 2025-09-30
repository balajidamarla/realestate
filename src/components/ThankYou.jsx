import React, { useState, useEffect } from "react";
import { CheckCircle, Sparkles, Mail, X } from "lucide-react";

const ThankYouModal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Auto-close after 5s
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setTimeout(() => {
      onClose?.(); // trigger parent close
    }, 500); // match transition
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div
        className={`relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl shadow-2xl overflow-hidden p-8 text-center max-w-lg w-full transition-all duration-500 transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success icon */}
        <div className="mb-6 inline-block relative">
          <div className="absolute inset-0 bg-emerald-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          <div className="relative bg-white rounded-full p-6 shadow-2xl">
            <CheckCircle
              className="w-16 h-16 text-emerald-500"
              strokeWidth={2}
            />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-7 h-7 text-yellow-400 animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-emerald-600 mb-2">Thank You!</h1>

        {/* Subtext */}
        <p className="text-gray-600 text-lg mb-6">
          Your message has been sent successfully.
        </p>

        {/* Info card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 border border-white/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-emerald-600" />
            <p className="text-gray-700 font-medium">
              We'll get back to you soon
            </p>
          </div>
          <p className="text-sm text-gray-500">Typically within 24-48 hours</p>
        </div>

        {/* Decorative bouncing dots */}
        <div className="mt-8 flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;

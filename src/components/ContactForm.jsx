// src/components/ContactForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import ThankYouModal from "./ThankYou";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xgvnklaw", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    setIsSubmitting(false);

    if (response.ok) {
      setShowThankYou(true);
    } else {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-700 rounded-2xl shadow-lg shadow-emerald-500/30 mb-4">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-700">
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Drop us a message and
            we'll get back to you soon.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                      focusedField === "name"
                        ? "text-emerald-600"
                        : "text-gray-400"
                    }`}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:bg-white focus:outline-none transition-all duration-300"
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Input */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        focusedField === "email"
                          ? "text-emerald-600"
                          : "text-gray-400"
                      }`}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:bg-white focus:outline-none transition-all duration-300"
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField("")}
                      required
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        focusedField === "phone"
                          ? "text-emerald-600"
                          : "text-gray-400"
                      }`}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 585-585-5855"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:bg-white focus:outline-none transition-all duration-300"
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare
                    className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                      focusedField === "message"
                        ? "text-emerald-600"
                        : "text-gray-400"
                    }`}
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                    rows="5"
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField("")}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative group overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>

            {/* Status Messages */}
            {status === "error" && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-700 font-medium">
                  Oops! There was a problem submitting your form. Please try
                  again.
                </p>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Or reach us directly at{" "}
              <a
                href="mailto:hello@realestate.com"
                className="text-emerald-700 font-semibold hover:underline"
              >
                abc@realestate.com
              </a>
            </p>
          </div>
        </div>
      </div>
      {showThankYou && <ThankYouModal onClose={() => setShowThankYou(false)} />}
    </div>
  );
};

export default ContactForm;

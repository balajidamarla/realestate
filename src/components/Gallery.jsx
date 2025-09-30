// src/components/Gallery.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Image } from "lucide-react";

const Gallery = () => {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-700 to-teal-600 rounded-2xl shadow-lg shadow-emerald-500/30 mb-4">
          <Image className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-700">
          Gallery
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our exclusive collection of high-quality images showcasing our
          properties, amenities, and lifestyle.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center">
        {/* Left button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Images */}
        <div className="flex items-center justify-center perspective-[1200px] w-full max-w-5xl h-96">
          {images.map((src, index) => {
            const position = index - currentIndex;

            // Wrap around
            const adjustedPos =
              position < -Math.floor(images.length / 2)
                ? position + images.length
                : position > Math.floor(images.length / 2)
                ? position - images.length
                : position;

            let transform = "";
            let zIndex = 0;
            let opacity = 1;

            if (adjustedPos === 0) {
              // Center image
              transform = "translateX(0) scale(1) rotateY(0deg)";
              zIndex = 10;
            } else if (adjustedPos === -1) {
              // Left side
              transform = "translateX(-220px) scale(0.85) rotateY(25deg)";
              zIndex = 5;
              opacity = 0.9;
            } else if (adjustedPos === 1) {
              // Right side
              transform = "translateX(220px) scale(0.85) rotateY(-25deg)";
              zIndex = 5;
              opacity = 0.9;
            } else {
              // Hide others
              transform = "translateX(0) scale(0.7)";
              opacity = 0;
            }

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-in-out cursor-pointer"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  width: "300px",
                  height: "100%",
                }}
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            );
          })}
        </div>

        {/* Right button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

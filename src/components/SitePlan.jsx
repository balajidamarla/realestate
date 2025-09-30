// src/components/SitePlan.jsx
import { useState } from "react";
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Layout,
  Home,
  Trees,
  Car,
} from "lucide-react";

const SitePlan = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const features = [
    { icon: Home, label: "Residential Blocks", count: "12 Towers" },
    { icon: Trees, label: "Green Spaces", count: "60% Area" },
    { icon: Car, label: "Parking Slots", count: "500+ Spaces" },
    { icon: Layout, label: "Total Area", count: "15 Acres" },
  ];

  const amenities = [
    "Swimming Pool",
    "Clubhouse",
    "Kids Play Area",
    "Gym & Spa",
    "Jogging Track",
    "Yoga Pavilion",
    "Sports Courts",
    "Party Lawn",
  ];

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-lg shadow-emerald-500/30 mb-4">
          <Layout className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Master Site Plan
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Explore our thoughtfully designed layout featuring modern
          architecture, abundant green spaces, and world-class amenities.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-emerald-100"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md mb-3">
                <Icon className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {feature.count}
              </p>
              <p className="text-sm text-gray-600 mt-1">{feature.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Site Plan Image Section */}
        <div className="lg:col-span-2">
          {/* Control Bar */}
          <div className="flex justify-between items-center bg-white rounded-t-2xl p-4 shadow-md border border-b-0 border-gray-200">
            <div className="flex gap-2">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                title={isZoomed ? "Zoom Out" : "Zoom In"}
              >
                {isZoomed ? (
                  <ZoomOut className="w-5 h-5 text-gray-700" />
                ) : (
                  <ZoomIn className="w-5 h-5 text-gray-700" />
                )}
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                title="Fullscreen"
              >
                <Maximize2 className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div
            className={`relative bg-white rounded-b-2xl overflow-hidden shadow-2xl border border-t-0 border-gray-200 ${
              isFullscreen ? "fixed inset-0 z-50 rounded-none" : ""
            }`}
          >
            {isFullscreen && (
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}

            <div className="relative group">
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

              {/* Watermark badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-20">
                <p className="text-sm font-bold text-emerald-600">
                  Master Plan
                </p>
              </div>

              <img
                src="/godrej-plots-panipat-master-plan.jpg"
                alt="Site Plan"
                className={`w-full transition-all duration-500 ${
                  isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
                } ${
                  isFullscreen
                    ? "max-h-screen object-contain"
                    : "max-h-[470px] object-contain"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
            </div>
          </div>
        </div>

        {/* Amenities Sidebar */}
        <div className="space-y-6">
          {/* Amenities List */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
              Premium Amenities
            </h3>
            <div className="space-y-2">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-transparent rounded-xl hover:from-emerald-100 transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-gray-700 font-medium">{amenity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitePlan;

// src/components/Location.jsx
import { useState } from "react";
import {
  MapPin,
  Navigation,
  Building,
  Train,
  Bus,
  School,
  ShoppingBag,
  Coffee,
  Car,
} from "lucide-react";

const Location = () => {
  const [mapView, setMapView] = useState("roadmap");

  // Map view types with different embed URLs
  const mapViews = {
    roadmap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.9321150715696!2d78.52412813858271!3d17.370264945878503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f7397b0663%3A0x409cedfd10599351!2sDILSUKHNAGAR%20BUS%20STAND%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500060!5e0!3m2!1sen!2sin!4v1759144295185!5m2!1sen!2sin",
    satellite:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.9321150715696!2d78.52412813858271!3d17.370264945878503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f7397b0663%3A0x409cedfd10599351!2sDILSUKHNAGAR%20BUS%20STAND%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500060!5e1!3m2!1sen!2sin!4v1759144295185!5m2!1sen!2sin",
    terrain:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.9321150715696!2d78.52412813858271!3d17.370264945878503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f7397b0663%3A0x409cedfd10599351!2sDILSUKHNAGAR%20BUS%20STAND%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500060!5e3!3m2!1sen!2sin!4v1759144295185!5m2!1sen!2sin",
  };

  const nearbyPlaces = [
    { icon: Bus, name: "Dilsukhnagar Bus Stand", distance: "100m" },
    { icon: Train, name: "Metro Station", distance: "1.5km" },
    { icon: ShoppingBag, name: "Shopping Mall", distance: "800m" },
    { icon: School, name: "Top Schools", distance: "2km" },
    { icon: Building, name: "IT Parks", distance: "5km" },
    { icon: Coffee, name: "Coffee Shop", distance: "2km" },
    { icon: Car, name: "Car Parking", distance: "2km" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-lg shadow-emerald-500/30 mb-4">
          <MapPin className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Project Location
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Located in the heart of Dilsukhnagar, Hyderabad with excellent
          connectivity and proximity to all major landmarks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Section */}
        <div className="lg:col-span-2">
          {/* Map View Selector */}
          <div className="flex gap-2 mb-4 bg-white rounded-xl p-2 shadow-md">
            <button
              onClick={() => setMapView("roadmap")}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                mapView === "roadmap"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Roadmap
            </button>
            <button
              onClick={() => setMapView("satellite")}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                mapView === "satellite"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Satellite
            </button>
            <button
              onClick={() => setMapView("terrain")}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                mapView === "terrain"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Terrain
            </button>
          </div>

          {/* Map Container with Modern Styling */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <iframe
              key={mapView}
              title="Location Map"
              className="w-full h-[500px] transition-opacity duration-500"
              src={mapViews[mapView]}
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-tr-full"></div>
          </div>

          {/* Map Actions */}
          <div className="flex gap-4 mt-4">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=17.370264945878503,78.52412813858271`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
            >
              Get Directions
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=17.370264945878503,78.52412813858271`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white border-2 border-emerald-600 text-emerald-700 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 text-center"
            >
              View Larger Map
            </a>
          </div>
        </div>

        {/* Nearby Places Sidebar */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Building className="w-6 h-6 text-emerald-700" />
              Nearby Landmarks
            </h3>
            <div className="space-y-3">
              {nearbyPlaces.map((place, index) => {
                const Icon = place.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-white rounded-xl hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">
                        {place.name}
                      </p>
                      <p className="text-sm text-gray-500">{place.distance}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

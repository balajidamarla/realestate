// src/components/About.jsx
import { useState, useEffect } from "react";
import { Building2, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Building2, value: "500+", label: "Properties" },
    { icon: Users, value: "10K+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Side with Animation */}
        <div
          className={`relative transition-all duration-1000 transform ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/80 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/80 rounded-full blur-2xl"></div>

          {/* Main Image Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className=" "></div>
            <img
              src="/Gemini_Generated_Image_6m4ho96m4ho96m4h.png"
              alt="Modern Real Estate"
              className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Floating Badge */}
            <div className="absolute top-6 right-6 bg-emerald-50/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg z-20 animate-bounce">
              <p className="text-sm font-bold text-emerald-600">
                Premium Properties
              </p>
            </div>
          </div>

          {/* Secondary Image */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
            <img
              src="/pexels-weirdfish-2640604.jpg"
              alt="Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Side */}
        <div
          className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-700 ">
            About the Project
          </h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            We are dedicated to transforming the real estate landscape with
            innovative solutions and exceptional service. Our commitment to
            excellence has made us a trusted name in the industry.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            This project showcases our vision of modern living spaces that
            combine luxury, comfort, and sustainability. With state-of-the-art
            amenities and strategic locations, we create homes that inspire and
            elevate your lifestyle.
          </p>

          {/* Features List */}
          <div className="space-y-4 mb-8">
            {[
              "Prime locations in growing neighborhoods",
              "Modern architecture and smart home features",
              "Eco-friendly and sustainable design",
              "World-class amenities and facilities",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <p className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <Icon className="w-8 h-8 text-emerald-700 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

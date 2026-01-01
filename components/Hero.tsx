'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-medium"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow-reverse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Ona Ara
              </span>
              <br />
              <span className="text-slate-800">Pentecostal Church</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-2xl sm:text-3xl font-semibold text-blue-600">OAPCC</span>
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* Vision Statement Highlight */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 font-medium leading-relaxed">
              Raising men and women of{' '}
              <span className="text-blue-600 font-semibold">Godly character</span>
              <br />
              in all spheres of life all over the world
            </p>
          </div>

          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Reaching out to the lost souls all over the world through the leading of the{' '}
              <span className="text-blue-600 font-medium">Holy Spirit</span>
              <br />
              using the <span className="text-yellow-500 font-medium">Bible</span> as our road map
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#vision"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-700 hover:to-blue-800"
            >
              Discover Our Vision
            </a>
            <a
              href="#values"
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:bg-blue-50"
            >
              Our Core Values
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <a href="#vision" className="flex flex-col items-center text-slate-500 hover:text-blue-600 transition-colors">
              <span className="text-sm mb-2">Scroll to explore</span>
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(40px, -60px) scale(1.05);
          }
          50% {
            transform: translate(-30px, 40px) scale(0.95);
          }
          75% {
            transform: translate(50px, 20px) scale(1.02);
          }
        }
        
        @keyframes float-medium {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-50px, -40px) scale(1.08);
          }
          66% {
            transform: translate(30px, 50px) scale(0.92);
          }
        }
        
        @keyframes float-fast {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          20% {
            transform: translate(60px, -30px) scale(1.1);
          }
          40% {
            transform: translate(-40px, 60px) scale(0.9);
          }
          60% {
            transform: translate(50px, 30px) scale(1.05);
          }
          80% {
            transform: translate(-30px, -50px) scale(0.95);
          }
        }
        
        @keyframes float-slow-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-40px, 60px) scale(0.95);
          }
          50% {
            transform: translate(30px, -40px) scale(1.05);
          }
          75% {
            transform: translate(-50px, -20px) scale(0.98);
          }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 12s ease-in-out infinite;
        }
        
        .animate-float-slow-reverse {
          animation: float-slow-reverse 18s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}


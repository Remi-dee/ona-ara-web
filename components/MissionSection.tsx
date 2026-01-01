'use client';

import { useEffect, useState, useRef } from 'react';
import { Target, Globe, BookOpen, Sparkles } from 'lucide-react';

const floatStyles = `
  @keyframes float-gentle {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(30px, -30px) scale(1.05);
    }
  }
  
  @keyframes float-gentle-reverse {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(-30px, 30px) scale(0.95);
    }
  }
  
  .animate-float-gentle {
    animation: float-gentle 25s ease-in-out infinite;
  }
  
  .animate-float-gentle-reverse {
    animation: float-gentle-reverse 22s ease-in-out infinite;
  }
`;

export default function MissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full -ml-48 -mt-48 opacity-20 animate-float-gentle"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full -mr-48 -mb-48 opacity-20 animate-float-gentle-reverse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="flex justify-center mb-2">
                <Target className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Mission Statement Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start space-x-4 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                  Mission Statement
                </h3>
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                  <span className="font-semibold text-blue-600">Reaching out to the lost souls</span> all over the
                  world through the leading of the{' '}
                  <span className="font-semibold text-blue-600">Holy Spirit</span> using the{' '}
                  <span className="font-semibold text-yellow-500">Bible</span> as our road map.
                </p>
              </div>
            </div>

            {/* Mission Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="mb-3">
                  <Globe className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Global Reach</h4>
                <p className="text-slate-600 text-sm">
                  Extending our mission to all corners of the world
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200">
                <div className="mb-3">
                  <BookOpen className="w-8 h-8 text-yellow-600" strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Bible-Centered</h4>
                <p className="text-slate-600 text-sm">
                  Using Scripture as our foundation and guide
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="mb-3">
                  <Sparkles className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Spirit-Led</h4>
                <p className="text-slate-600 text-sm">
                  Following the leading of the Holy Spirit
                </p>
              </div>
            </div>

            {/* Scripture Reference */}
            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl text-white">
              <p className="text-lg font-medium text-center">
                &quot;Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.&quot;
              </p>
              <p className="text-sm text-yellow-100 text-center mt-2">Matthew 28:19</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{floatStyles}</style>
    </section>
  );
}


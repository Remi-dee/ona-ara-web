'use client';

import { useEffect, useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';

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

export default function VisionSection() {
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
      id="vision"
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -mr-48 -mt-48 opacity-30 animate-float-gentle"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full -ml-48 -mb-48 opacity-20 animate-float-gentle-reverse"></div>

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
                <Sparkles className="w-10 h-10 text-yellow-400" strokeWidth={1.5} />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Our Vision
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Vision Statement Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 sm:p-12 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                  Vision Statement
                </h3>
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                  <span className="font-semibold text-blue-600">Raising men and women of Godly character</span> in all
                  spheres of life all over the world.
                </p>
              </div>
            </div>

            {/* Highlight Box */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white">
              <p className="text-lg font-medium text-center">
                &quot;For I know the plans I have for you,&quot; declares the Lord, &quot;plans to prosper you and not to harm you, plans to give you hope and a future.&quot;
              </p>
              <p className="text-sm text-blue-100 text-center mt-2">Jeremiah 29:11</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{floatStyles}</style>
    </section>
  );
}


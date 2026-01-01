"use client";

import { useEffect, useState, useRef } from "react";
import { HandHeart, Target, Sparkles, Cross, Heart } from "lucide-react";

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

export default function CoreValuesSection() {
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

  const coreValues = [
    {
      letter: "O",
      title: "Obedience",
      subtitle: "To God's Word",
      description:
        "We commit to living in complete obedience to the teachings and commandments found in God's Word.",
      Icon: HandHeart,
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      letter: "A",
      title: "Alignment",
      subtitle: "With The Will of God",
      description:
        "We strive to align every aspect of our lives and ministry with God's perfect will and purpose.",
      Icon: Target,
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      letter: "P",
      title: "Purpose-Driven",
      subtitle: "Church With",
      description:
        "We are a church driven by divine purpose, committed to fulfilling God's calling in our generation.",
      Icon: Sparkles,
      color: "from-yellow-400 to-yellow-500",
      bgColor: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200",
    },
    {
      letter: "C",
      title: "Christ",
      subtitle: "As The",
      description:
        "Jesus Christ is the foundation, the cornerstone, and the center of everything we do and believe.",
      Icon: Cross,
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      letter: "C",
      title: "Centre",
      subtitle: "Of Our Message",
      description:
        "The message of Christ's love, sacrifice, and salvation is at the heart of all we proclaim.",
      Icon: Heart,
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
  ];

  return (
    <section
      id="values"
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -mr-48 -mt-48 opacity-30 animate-float-gentle"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full -ml-48 -mb-48 opacity-20 animate-float-gentle-reverse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex justify-center mb-2">
                <Sparkles
                  className="w-10 h-10 text-blue-600"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                OAPCC Core Values
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our values define who we are and guide everything we do as a
              church community
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${value.bgColor} rounded-2xl p-6 border-2 ${value.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {value.letter}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <value.Icon
                        className="w-7 h-7 text-slate-700"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium">
                      {value.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* OAPCC Acronym Display */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
                OAPCC - Our Foundation
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8">
                {coreValues.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 border-2 border-white/30">
                      <span className="text-2xl font-bold">{value.letter}</span>
                    </div>
                    <p className="text-sm font-medium text-blue-100">
                      {value.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-lg font-medium mb-2">
                  A Purpose-Driven Church with Christ as the Centre of Our
                  Message
                </p>
                <p className="text-blue-200 text-sm">
                  Built on obedience, alignment, and purpose
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{floatStyles}</style>
    </section>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { Target, Clock, Music, Sprout, Users, Globe } from "lucide-react";

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

export default function ObjectivesSection() {
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

  const objectives = [
    {
      number: "01",
      title: "Eternal Priority",
      description: "To make eternity our priority.",
      verse: "John 17:3",
      verseText:
        '"Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent."',
      Icon: Clock,
      color: "from-blue-600 to-blue-700",
    },
    {
      number: "02",
      title: "True Worship",
      description: "To worship God in spirit and truth.",
      verse: "John 4:24",
      verseText:
        '"God is spirit, and his worshipers must worship in the Spirit and in truth."',
      Icon: Music,
      color: "from-blue-600 to-blue-700",
    },
    {
      number: "03",
      title: "Soul Winning",
      description:
        "To win the souls of the lost through the preaching of the gospel of Jesus Christ and manifesting Godly character.",
      verse: "Mark 16:15",
      verseText:
        '"Go into all the world and preach the gospel to all creation."',
      Icon: Sprout,
      color: "from-yellow-400 to-yellow-500",
    },
    {
      number: "04",
      title: "Discipleship",
      description:
        "To raise disciples of Christ that will take the gospel of Jesus Christ to every nation of the world.",
      verse: "Matthew 28:19",
      verseText:
        '"Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."',
      Icon: Users,
      color: "from-blue-600 to-blue-700",
    },
    {
      number: "05",
      title: "Global Expansion",
      description:
        "To establish branches of our Church in all villages, towns, cities and nations of the world.",
      verse: "Acts 1:8",
      verseText:
        '"But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth."',
      Icon: Globe,
      color: "from-blue-600 to-blue-700",
    },
  ];

  return (
    <section
      id="objectives"
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full -ml-48 -mt-48 opacity-20 animate-float-gentle"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full -mr-48 -mb-48 opacity-20 animate-float-gentle-reverse"></div>

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
                <Target
                  className="w-10 h-10 text-yellow-400"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Our Objectives
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Five foundational objectives that guide our mission and ministry
            </p>
          </div>

          {/* Objectives List */}
          <div className="max-w-5xl mx-auto space-y-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Number and Icon */}
                  <div className="flex-shrink-0 flex items-start space-x-4">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${objective.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <objective.Icon
                        className="w-10 h-10 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="pt-2">
                      <div className="text-3xl font-bold text-slate-300">
                        {objective.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
                      {objective.title}
                    </h3>
                    <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                      {objective.description}
                    </p>

                    {/* Scripture Reference */}
                    <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-5 border-l-4 border-blue-600">
                      <p className="text-slate-700 italic mb-2">
                        &quot;{objective.verseText}&quot;
                      </p>
                      <p className="text-blue-600 font-semibold text-sm">
                        {objective.verse}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-12 text-white text-center shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Join Us in Fulfilling God&apos;s Purpose
              </h3>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                Together, we can make a difference in our communities and around
                the world through the power of the Gospel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#home"
                  className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Learn More
                </a>
                <a
                  href="#values"
                  className="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-white/30"
                >
                  Our Values
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{floatStyles}</style>
    </section>
  );
}

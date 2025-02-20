'use client';
import React, { useState, useRef, useEffect } from 'react';

interface section {
  id: string;
  title: string;
  content: string;
}

interface ScrollingSectionProps {
  data: section[];
}

const ScrollingSection: React.FC<ScrollingSectionProps> = ({data}) => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<(HTMLElement | null)[]>(new Array(4).fill(null));

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8,
      rootMargin: '10px',
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionsRef.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = sectionsRef.current.find(s => s?.id === id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-fill bg-white p-6 mx-4 my-4 md:mx-12 md:my-8 max-w-7xl rounded-xl">
      {/* Navigation Sidebar */}
      <div className="w-full lg:w-1/4 lg:sticky lg:top-24 lg:h-fit bg-[#101044] rounded-md lg:border-r lg:border-gray-100">
        <nav className="p-4 lg:p-6 space-y-2">
          <div className="lg:hidden p-4 mb-4 bg-white/10 rounded-lg">
            <h2 className="text-white text-lg font-semibold">Navigation</h2>
          </div>
          {data.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative w-full text-left p-4 rounded-lg transition-all duration-300 transform hover:translate-x-2
                ${activeSection === section.id
                  ? 'bg-white/10 backdrop-blur-sm text-white border-l-4 border-red-500'
                  : 'text-gray-300 hover:bg-white/20'}`}
            >
              <span className="text-sm font-medium tracking-wide">{section.title}</span>
              <div className={`absolute w-1 bg-red-500 right-0 top-1/2 -translate-y-1/2 rounded-l transition-all duration-300 
                ${activeSection === section.id ? 'h-3/5 opacity-100' : 'h-0 opacity-0'}`} />
            </button>
          ))}
        </nav>
      </div>

      {/* Content Sections */}
      <div className="flex-1 overflow-y-auto lg:pl-8">
        {data.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            ref={el => {
              if (el) {
                sectionsRef.current[index] = el;
              }
            }}
            className="flex items-center justify-center px-6 py-12 lg:px-12 lg:py-12 bg-gradient-to-br from-white to-gray-50 rounded-lg mb-0"
          >
            <div className="max-w-3xl space-y-8">
              <div className="flex items-center gap-4">
                <div className={`md:w-12 md:h-12 w-10 h-10 aspect-square rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out
                  ${activeSection === section.id ? 'bg-red-500 scale-110' : 'bg-gray-200 scale-100'}`}>
                  <span className="font-semibold text-white">{index + 1}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                  {section.title}
                </h2>
              </div>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl">
                {section.content}
              </p>
              <div className={`h-1 bg-red-500 rounded-full mt-8 transition-all duration-500 ease-in-out 
                ${activeSection === section.id ? 'w-24' : 'w-0'}`} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ScrollingSection;
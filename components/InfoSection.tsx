"use client";

import React from "react";
import Image from "next/image";

interface Content {
  title: string;
  description: string;
  image: string;
  alignment: string;
  anchor: string;
}

interface InfoSectionProps {
  sections: Content[];
}

const InfoSection: React.FC<InfoSectionProps> = ({ sections }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-20">
        {sections.map((section, index) => (
          <div 
            key={index}
            id={section.anchor}
            className="relative bg-white rounded-2xl shadow-xl transition-all hover:shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Sticky Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-20 border-b border-gray-100">
              <div className="px-8 py-6 lg:px-12 lg:py-8">
                <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                  {section.title}
                </h2>
              </div>
            </div>

            {/* Content Container */}
            <div className="px-8 py-6 lg:px-12 lg:py-10">
              <div
                className={`flex flex-col ${
                  section.alignment === "right" ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-12`}
              >
                {/* Image Container */}
                <div className="w-full md:w-1/2 relative aspect-video">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                    priority={index === 0}
                  />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-4">
                  <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md">
                    Solicite um Orçamento
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
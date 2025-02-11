"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
          <motion.div 
            key={index}
            id={section.anchor}
            className="relative bg-white rounded-2xl shadow-xl transition-all hover:shadow-2xl border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Animated Sticky Header */}
            <motion.div 
              className="sticky top-0 bg-white/95 backdrop-blur-sm z-20 border-b border-gray-100"
              initial={{ boxShadow: "0 1px 0 rgba(0,0,0,0.05)" }}
              whileInView={{ boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}
              transition={{ duration: 0.05 }}
            >
              <div className="px-8 py-6 lg:px-12 lg:py-8">
                <motion.h2 
                  className="text-3xl font-semibold text-gray-900 tracking-tight origin-left"
                  initial={{ scale: 0.98, opacity: 0.8 }}
                  whileInView={{ 
                    scale: 1,
                    opacity: 1,
                    transition: { 
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    } 
                  }}
                  viewport={{ once: true }}
                >
                  {section.title}
                </motion.h2>
              </div>
            </motion.div>

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
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
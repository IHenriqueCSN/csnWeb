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
      <div className="space-y-16">
        {sections.map((section, index) => (
          <motion.div 
            key={index}
            id={section.anchor}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            initial={{ 
              opacity: 0,
              x: section.alignment === "right" ? 40 : -40,
            }}
            whileInView={{ 
              opacity: 1,
              x: 0,
              transition: { 
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut" 
              }
            }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          >
            <div className="px-6 py-4 border-b border-gray-100 overflow-hidden">
              <motion.h2
                className="text-2xl font-semibold text-gray-900"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ 
                  clipPath: 'inset(0 0% 0 0)',
                  transition: { 
                    duration: 0.4,
                    delay: 0.2 + index * 0.1,
                    ease: "linear" 
                  }
                }}
                viewport={{ once: true }}
              >
                {section.title}
              </motion.h2>
            </div>

            <div className="px-6 py-8">
              <div className={`flex flex-col ${
                section.alignment === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8`}>
                <motion.div 
                  className="w-full md:w-1/2 relative aspect-video"
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ 
                    opacity: 1,
                    scale: 1,
                    transition: { 
                      duration: 0.3,
                      delay: 0.3 + index * 0.1,
                      ease: "easeOut" 
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="rounded-lg object-cover"
                    priority={index === 0}
                  />
                </motion.div>

                <motion.div 
                  className="w-full md:w-1/2 space-y-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ 
                    opacity: 1,
                    y: 0,
                    transition: { 
                      duration: 0.3,
                      delay: 0.4 + index * 0.1,
                      ease: "easeOut" 
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                  <motion.button 
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Saiba Mais
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
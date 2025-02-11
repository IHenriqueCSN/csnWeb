"use client";
import React from "react";
import Image from "next/image";

interface Service {
  image: string;
  name: string;
  anchor: string;
}

interface ServicesGridProps {
  services: Service[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
  const handleScrollTo = (anchor: string) => {
    const navbar = document.querySelector('nav') || document.querySelector('#navbar');
    const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 64; // Fallback to 64px
    
    const element = document.getElementById(anchor);
    if (element) {
      // Calculate adjusted scroll position
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 24; // 24px extra spacing

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Add scroll-margin-top to the target element
      element.style.scrollMarginTop = `${navbarHeight + 24}px`;
      
      window.history.replaceState(null, '', `#${anchor}`);
    } else {
      console.warn(`Element with id ${anchor} not found`);
    }
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
            <a className="cursor-pointer" key={index} onClick={(e) => { e.preventDefault(); handleScrollTo(service.anchor); }}>
            <div
            className="text-center bg-white shadow-xl rounded-lg overflow-hidden transition transform flex flex-col"
            >
            <div className="relative flex-shrink-0">
              <Image
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
              width={640}
              height={384}
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20"></div>
            </div>

            <div className="p-6 relative flex-grow pb-16">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
              {service.name}
              </h3>
            </div>
            </div>
            </a>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
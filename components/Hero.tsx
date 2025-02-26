"use client";
import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface HeroTranslations {
  welcome: string;
  description: string;
  motto: string;
  cta_call: string;
}

export default function Hero({ t }: {t: HeroTranslations}) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const yPos = window.scrollY * 0.5; // 50% scroll speed
        bgRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative h-[50vh] md:h-[60vh] overflow-hidden pt-20 md:pt-20">
      {/* Parallax Layer - Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transition: 'transform 0.1s linear' }} // Smooths the parallax effect
      >
        <Image
          src="/images/header-bg.jpg"
          alt="Header Background"
          fill
          className="object-cover opacity-90"
          priority // Prevents lazy-loading for critical image
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4 sm:px-6 pb-4">
        <h1 className="mb-2 md:mb-4 text-4xl md:text-5xl font-bold px-2">
          {/* Bem-vindo à <span className="text-blue-400 block md:inline">CSN Technology™</span> */}
          {t.welcome}
        </h1>
        <p className="text-base md:text-xl max-w-[90%] md:max-w-2xl font-medium mt-2">
          {/* Soluções integradas em Glovia® ERP, desenvolvimento sob medida e infraestrutura de alta performance para impulsionar seu negócio. */}
          {t.description}
        </p>
          <p>
            <span className="hidden sm:block mt-2 sm:text-lg">
              {/* Transformamos desafios tecnológicos em vantagens competitivas. */}
            {t.motto}
            </span>
          </p>
        <button className="mt-6 md:mt-8 rounded-md bg-blue-800 px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-bold transition hover:bg-blue-700 hover:scale-105"
          onClick={() => window.location.href = "/contact"}>
          {/* Solicite uma Demonstração */}
          {t.cta_call}
        </button>
      </div>
    </header>
  )
}
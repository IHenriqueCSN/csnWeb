import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = ({ currentLocale }: { currentLocale: string }) => {
  const [isHovered, setIsHovered] = useState<'en' | 'pt' | null>(null);
  const currentPath = usePathname();
  
  const getLocalizedPath = (locale: string) => {
    const segments = currentPath.split('/');
    const newSegments = [...segments];
    
    if (newSegments[1] === 'en' || newSegments[1] === 'pt') {
      newSegments[1] = locale;
    } else {
      newSegments.splice(1, 0, locale);
    }
    return newSegments.join('/');
  };

  return (
    <div className="flex gap-2">
      <Link
        href={getLocalizedPath('en')}
        className={`relative px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
          currentLocale === 'en'
            ? 'bg-blue-800/50 text-white'
            : 'text-gray-300 hover:bg-blue-800/30 hover:text-white'
        }`}
        onMouseEnter={() => setIsHovered('en')}
        onMouseLeave={() => setIsHovered(null)}
      >
        <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isHovered === 'en' ? 'opacity-0' : 'opacity-100'
        }`}>
          {/* US Flag SVG */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1235 650"
            className="w-6 h-4" // Adjust size here
          >
            <path d="M0 0h1235v650H0z" fill="#fff"/>
            <path 
              stroke="#b22234" 
              strokeDasharray="50" 
              strokeWidth="2470" 
              d="M0 0v651"
            />
            <path d="M0 0h494v350H0z" fill="#3c3b6e"/>
            <g id="stars">
              <g id="row1">
                <g id="star-group">
                  <path 
                    id="star" 
                    d="m30 50.6 12-36 12 36-30.8-22H61z" 
                    fill="#fff"
                  />
                  <use href="#star" x="82"/>
                </g>
                <use href="#star-group" x="164"/>
                <use href="#star" x="328"/>
              </g>
              <use href="#row1" x="41" y="35"/>
              <use href="#row1" y="70"/>
              <use href="#row1" y="140"/>
              <use href="#row1" y="280"/>
            </g>
          </svg>
        </span>
        <span className={`transition-opacity duration-300 ${
          isHovered === 'en' ? 'opacity-100' : 'opacity-0'
        }`}>
          EN
        </span>
      </Link>

      <Link
        href={getLocalizedPath('pt')}
        className={`relative px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
          currentLocale === 'pt'
            ? 'bg-blue-800/50 text-white'
            : 'text-gray-300 hover:bg-blue-800/30 hover:text-white'
        }`}
        onMouseEnter={() => setIsHovered('pt')}
        onMouseLeave={() => setIsHovered(null)}
      >
        <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isHovered === 'pt' ? 'opacity-0' : 'opacity-100'
        }`}>
          {/* Brazil Flag SVG */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 55.2 38.4" 
            className="w-6 h-4"
          >
            <path d="M3.03 0h49.13c1.67 0 3.03 1.36 3.03 3.03v32.33c0 1.67-1.36 3.03-3.03 3.03H3.03C1.36 38.4 0 37.04 0 35.37V3.03C0 1.36 1.36 0 3.03 0z" fill="#009B3A"/>
            <path d="M27.6 34.11L4.24 19.2 27.6 4.29l23.36 14.91L27.6 34.11z" fill="#FEDF00"/>
            <path d="M27.6 9.35c5.44 0 9.85 4.41 9.85 9.85 0 5.44-4.41 9.85-9.85 9.85-5.44 0-9.85-4.41-9.85-9.85C17.75 13.76 22.16 9.35 27.6 9.35z" fill="#002776"/>
            <path fill="#FFF" d="M18.59 15.22c1.1-.16 2.23-.24 3.38-.24 5.86 0 11.22 2.11 15.38 5.6-.07.54-.19 1.06-.35 1.56-3.98-3.58-9.25-5.76-15.03-5.76-1.33 0-2.64.12-3.91.34.19.52.37 1.02.59 1.5z"/>
            {/* Stars */}
            <g fill="#FFF">
              <path d="M19.56 17.01l-.13.4.2.07-.07-.47zM19.96 17.3h-.42v.21h.42zM19.16 17.3h.42v.21h-.42zM19.81 17.77l-.13-.4-.2.07.33.33zM19.31 17.77l.13-.4.2.07-.33.33zM20.43 21.15l-.13.4.2.07-.07-.47zM20.83 21.44h-.42v.21h.42zM20.03 21.44h.42v.21h-.42zM20.68 21.91l-.13-.4-.2.07.33.33zM20.18 21.91l.13-.4.2.07-.33.33zM19.22 22.11l-.1.33.16.05-.06-.38zM19.56 22.35h-.35v.17h.35zM18.89 22.35h.35v.17h-.35zM19.43 22.74l-.11-.34-.17.06.28.28zM19.02 22.74l.11-.34.17.06-.28.28zM21.4 20.77l-.07.19.1.03-.03-.22zM21.59 20.91h-.2v.1h.2zM21.2 20.91h.2v.1h-.2zM21.51 21.13l-.06-.19-.1.03.16.16zM21.28 21.13l.06-.19.1.03-.16.16zM22.48 22.2l-.11.33.17.06-.06-.39zM22.82 22.44h-.36v.18h.36zM22.15 22.44h.36v.18h-.36zM22.69 22.84l-.11-.34-.17.06.28.28zM22.28 22.84l.11-.34.17.06-.28.28zM22.19 23.25l-.09.27.13.04-.04-.31zM22.45 23.44h-.28v.14h.28zM21.92 23.44h.28v.14h-.28zM22.35 23.76l-.09-.27-.13.04.22.23zM22.02 23.76l.09-.27.13.04-.22.23zM30.66 15.72l-.13.4.2.07-.07-.47zM31.06 16.02h-.43v.21h.43zM30.25 16.02h.43v.21h-.43zM30.9 16.49l-.13-.4-.2.07.33.33zM30.41 16.49l.13-.4.2.07-.33.33zM34.5 22.24l-.13.4.2.07-.07-.47zM34.9 22.53h-.42v.21h.42zM34.1 22.53h.42v.21h-.42zM34.75 23l-.13-.4-.2.07.33.33zM34.25 23l.13-.4.2.07-.33.33zM35.87 22.47l-.09.27.13.04-.04-.31zM36.13 22.66h-.28v.14h.28zM35.6 22.66h.28v.14h-.28zM36.03 22.98l-.08-.27-.13.04.21.23zM35.7 22.98l.08-.27.13.04-.21.23zM34.9 23.18l-.11.33.17.06-.06-.39zM35.24 23.42h-.36v.17h.36zM34.57 23.42h.36v.17h-.36zM35.11 23.81l-.11-.33-.17.06.28.27zM34.7 23.81l.11-.33.17.06-.28.27zM32.53 25.24l-.11.33.17.06-.06-.39zM32.87 25.48h-.36v.18h.36zM32.2 25.48h.36v.18h-.36zM32.74 25.88l-.11-.34-.17.06.28.28zM32.33 25.88l.11-.34.17.06-.28.28zM32.52 26.3l-.09.27.13.04-.04-.31zM32.78 26.5h-.28v.14h.28zM32.25 26.5h.28v.14h-.28zM32.68 26.81l-.08-.27-.13.04.21.23zM32.35 26.81l.08-.27.13.04-.21.23zM33.51 24.53l-.09.27.13.04-.04-.31zM33.78 24.73h-.28v.14h.28zM33.24 24.73h.28v.14h-.28zM33.67 25.04l-.08-.27-.13.04.21.23zM33.34 25.04l.08-.27.13.04-.21.23zM34.3 23.97l-.11.33.17.06-.06-.39zM34.63 24.21h-.36v.18h.36zM33.97 24.21h.36v.18h-.36zM34.51 24.6l-.11-.33-.17.06.28.27zM34.09 24.6l.11-.33.17.06-.28.27zM32.49 24.34l-.09.27.13.04-.04-.31zM32.76 24.54h-.28v.14h.28zM32.22 24.54h.28v.14h-.28zM32.66 24.85l-.08-.27-.13.04.21.23zM32.33 24.85l.08-.27.13.04-.21.23zM23.85 19.25l-.11.33.17.06-.06-.39zM24.18 19.49h-.36v.18h.36zM23.51 19.49h.36v.18h-.36zM24.05 19.89l-.1-.34-.17.06.27.28zM23.64 19.89l.1-.34.17.06-.27.28zM30.28 18.42l-.09.27.13.04-.04-.31zM30.55 18.62h-.28v.14h.28zM30.01 18.62h.28v.14h-.28zM30.44 18.93l-.08-.26-.13.04.21.22zM30.12 18.93l.08-.26.13.04-.21.22zM27.6 23.2l-.13.4.2.07-.07-.47zM28 23.49h-.42v.21h.42zM27.2 23.49h.42v.21h-.42zM27.85 23.96l-.13-.4-.2.07.33.33zM27.35 23.96l.13-.4.2.07-.33.33zM28.74 21.31l-.11.34.17.06-.06-.4zM29.07 21.56h-.36v.17h.36zM28.41 21.56h.36v.17h-.36zM28.95 21.95l-.11-.33-.17.06.28.27zM28.53 21.95l.11-.33.17.06-.28.27zM27.6 20.43l-.11.33.17.06-.06-.39zM27.93 20.67h-.36v.18h.36zM27.27 20.67h.36v.18h-.36zM27.81 21.07l-.11-.34-.17.06.28.28zM27.39 21.07l.11-.34.17.06-.28.28zM26.61 21.38l-.09.27.13.04-.04-.31zM26.88 21.58h-.28v.14h.28zM26.34 21.58h.28v.14h-.28zM26.77 21.89l-.08-.26-.13.04.21.22zM26.44 21.89l.08-.26.13.04-.21.22zM27.1 22.15l-.06.19.1.03-.04-.22zM27.29 22.29h-.2v.1h.2zM26.91 22.29h.2v.1h-.2zM27.22 22.51l-.06-.19-.1.03.16.16zM26.99 22.51l.06-.19.1.03-.16.16zM30.55 25.48l-.11.34.17.06-.06-.4zM30.88 25.72h-.36v.17h.36zM30.21 25.72h.36v.17h-.36zM30.75 26.12l-.1-.34-.17.06.27.28zM30.34 26.12l.1-.34.17.06-.27.28zM31.39 24.68l-.09.27.13.04-.04-.31zM31.66 24.87h-.28v.15h.28zM31.12 24.87h.28v.15h-.28zM31.56 25.19l-.09-.27-.13.04.22.23zM31.23 25.19l.09-.27.13.04-.22.23zM29.77 24.44l-.09.27.13.04-.04-.31zM30.04 24.64h-.28v.13h.28zM29.5 24.64h.28v.13h-.28zM29.93 24.95l-.08-.27-.13.04.21.23zM29.61 24.95l.08-.27.13.04-.21.23zM23.65 24l-.13.41.2.07-.07-.48zM24.05 24.3h-.42v.21h.42zM23.25 24.3h.42v.21h-.42zM23.9 24.77l-.14-.41-.2.07.34.34zM23.4 24.77l.14-.41.2.07-.34.34zM27.6 26.76l-.04.14.06.02-.02-.16zM27.73 26.86h-.14v.07h.14zM27.47 26.86h.14v.07h-.14zM27.68 27.02l-.04-.13-.06.02.1.11zM27.52 27.02l.04-.13.06.02-.1.11z"/>
              </g>
          </svg>
        </span>
        <span className={`transition-opacity duration-300 ${
          isHovered === 'pt' ? 'opacity-100' : 'opacity-0'
        }`}>
          PT
        </span>
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
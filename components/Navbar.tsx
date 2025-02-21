"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaCog, FaTimes, FaBars, FaChevronDown } from "react-icons/fa";
import { FaWalkieTalkie } from "react-icons/fa6";
import LanguageSwitcher from "./LanguageSwitcher";

const MobileMenuButton = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <button
    onClick={toggle}
    aria-label="Toggle menu"
    className="p-2 rounded-md text-white"
  >
    {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
  </button>
);

const NavLink = ({
  route,
  currentPath,
  isMobile,
  onClick,
}: {
  route: Route;
  currentPath: string;
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  const isServices = route.href === "#";
  const isActive = currentPath.startsWith("/services");

  return isServices ? (
    <button
      className={`text-lg transition-all px-4 py-2 rounded-md ${
        isActive ? "bg-blue-800/50 text-white" : "text-gray-300 hover:text-white hover:bg-blue-800/30"
      } ${isMobile ? "w-full text-center" : ""}`}
    >
      <div className="flex justify-center items-center gap-2">
        <route.icon />
        {route.label}
        {!isMobile && <FaChevronDown className="w-4 h-4 mt-0.5" />}
      </div>
    </button>
  ) : (
    <Link
      href={route.href}
      onClick={onClick}
      className={`text-lg transition-all px-4 py-2 rounded-md ${
        currentPath === route.href
          ? "bg-blue-800/50 text-white cursor-default"
          : "text-gray-300 hover:text-white hover:bg-blue-800/30"
      } ${isMobile ? "w-full text-center" : ""}`}
    >
      <div className="flex justify-center items-center gap-2">
        <route.icon />
        {route.label}
      </div>
    </Link>
  );
};

interface NavBarTranslations {
  home: string;
  about_us: string;
  services: string;
  contact: string;
}

interface ServiceTranslations {
  upgrades: string;
  glovia: string;
  integration: string;
  webdesign: string;
  infrastructure: string;
  support: string;
}

type Route = {
  href: string;
  label: string;
  icon: React.ComponentType;
}

const NavBar = ({ n, s }: { n: NavBarTranslations; s: ServiceTranslations }) => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Get current locale from path
  const segments = currentPath.split('/');
  const currentLocale = (segments[1] === 'pt' || segments[1] === 'en') ? segments[1] : 'en';

  // Generate localized routes
  const ROUTES: Route[] = [
    { href: `/${currentLocale}`, label: n.home, icon: FaHome },
    { href: `/${currentLocale}/about-us`, label: n.about_us, icon: FaUser },
    { href: "#", label: n.services, icon: FaCog },
    { href: `/${currentLocale}/contact`, label: n.contact, icon: FaWalkieTalkie }
  ];

  const SERVICES = [
    { href: `/${currentLocale}/services/upgrades`, label: s.upgrades },
    { href: `/${currentLocale}/services/glovia`, label: s.glovia },
    { href: `/${currentLocale}/services/integration`, label: s.integration },
    { href: `/${currentLocale}/services/webdesign`, label: s.webdesign },
    { href: `/${currentLocale}/services/infrastructure`, label: s.infrastructure },
    { href: `/${currentLocale}/services/support`, label: s.support },
  ];

  // Language switcher logic
  const getLocalizedPath = (locale: string) => {
    const newSegments = [...segments];
    if (newSegments[1] === 'en' || newSegments[1] === 'pt') {
      newSegments[1] = locale;
    } else {
      newSegments.splice(1, 0, locale);
    }
    return newSegments.join('/');
  };

  const ServicesDropdown = ({ currentPath }: { currentPath: string }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div 
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <NavLink
          route={ROUTES[2]}
          currentPath={currentPath}
        />
        
        {isOpen && (
          <div className="absolute top-full left-0 mt-0 w-56 bg-[#101044] rounded-lg shadow-xl py-2">
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`block px-6 py-3 text-sm transition-colors ${
                  currentPath === service.href
                    ? "bg-blue-800/50 text-white"
                    : "text-gray-300 hover:bg-blue-800/30 hover:text-white"
                }`}
              >
                {service.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#101044] shadow-md">
    <div className="max-w-7xl mx-auto px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <NavLink route={ROUTES[0]} currentPath={currentPath} />
          <NavLink route={ROUTES[1]} currentPath={currentPath} />
        </div>
        
        {/* Centered logo */}
        <div className="flex justify-center">
          <Link href={`/${currentLocale}`} className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="CSN Technology"
              width={50}
              height={50}
              className="h-12 w-12"
            />
          </Link>
        </div>

        {/* Right side navigation */}
        <div className="flex items-center gap-4">
          <ServicesDropdown currentPath={currentPath} />
          <NavLink route={ROUTES[3]} currentPath={currentPath} />
          
          {/* Language switcher positioned separately */}
          <LanguageSwitcher
            currentLocale={currentLocale}
            onLanguageChange={(locale) => {
              const newPath = getLocalizedPath(locale);
              window.location.href = newPath;
            }}
          />
        </div>
      </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="CSN Technology"
              width={50}
              height={50}
              className="h-12 w-12"
            />
            <span className="text-white font-semibold text-xl">CSN Technology</span>
          </Link>
          <MobileMenuButton
            isOpen={isMenuOpen}
            toggle={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-2 bg-[#101044] p-4 border-t border-blue-600">
            {ROUTES.map((route) => (
              route.href === "#" ? (
                <div key={route.label} className="flex flex-col">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-lg px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-blue-800/30"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <route.icon />
                      {route.label}
                      <FaChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}/>
                    </div>
                  </button>
                  
                  {isServicesOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                          className="text-gray-300 px-4 py-2 rounded-md hover:text-white hover:bg-blue-800/30"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={route.href}
                  route={route}
                  currentPath={currentPath}
                  isMobile
                  onClick={() => setIsMenuOpen(false)}
                />
              )
            ))}
            <div className="flex gap-2 mt-4">
              <Link
                href={getLocalizedPath('en')}
                onClick={() => setIsMenuOpen(false)}
                className={`flex-1 text-center px-4 py-2 rounded-md text-sm font-medium ${
                  currentLocale === 'en' 
                    ? 'bg-blue-800/50 text-white' 
                    : 'text-gray-300 hover:bg-blue-800/30 hover:text-white'
                }`}
              >
                English
              </Link>
              <Link
                href={getLocalizedPath('pt')}
                onClick={() => setIsMenuOpen(false)}
                className={`flex-1 text-center px-4 py-2 rounded-md text-sm font-medium ${
                  currentLocale === 'pt' 
                    ? 'bg-blue-800/50 text-white' 
                    : 'text-gray-300 hover:bg-blue-800/30 hover:text-white'
                }`}
              >
                Português
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaCog, FaTimes, FaBars, FaChevronDown } from "react-icons/fa";
import { FaWalkieTalkie } from "react-icons/fa6";

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

  const ROUTES: Route[] = [
    { href: "/", label: n.home, icon: FaHome },
    { href: "/about-us", label: n.about_us, icon: FaUser },
    { href: "#", label: n.services, icon: FaCog },
    { href: "/contact", label: n.contact, icon: FaWalkieTalkie }
  ];

  const SERVICES = [
    { href: "/services/upgrades", label: s.upgrades },
    { href: "/services/glovia", label: s.glovia },
    { href: "/services/integration", label: s.integration },
    { href: "/services/webdesign", label: s.webdesign },
    { href: "/services/infrastructure", label: s.infrastructure },
    { href: "/services/support", label: s.support },
  ];

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
        <div className="hidden md:grid grid-cols-5 items-center h-16">
          <NavLink route={ROUTES[0]} currentPath={currentPath} />
          <NavLink route={ROUTES[1]} currentPath={currentPath} />
          
          <Link href="/" className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="CSN Technology"
              width={50}
              height={50}
              className="h-12 w-12"
            />
          </Link>

          <ServicesDropdown currentPath={currentPath} />
          <NavLink route={ROUTES[3]} currentPath={currentPath} />
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaHome, FaUser, FaCog, FaShoppingBasket, FaTimes, FaBars } from 'react-icons/fa';

const ROUTES = [
  { href: "/", label: "Home", icon: FaHome },
  { href: "/products", label: "Products", icon: FaShoppingBasket },
  { href: "/profile", label: "Profile", icon: FaUser },
  { href: "/settings", label: "Settings", icon: FaCog },
] as const;

const MobileMenuButton = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => (
  <button
    onClick={toggle}
    aria-label="Toggle menu"
    className="md:hidden p-2 rounded-lg hover:bg-blue-800/30 mr-4"
  >
    {isOpen ? <FaTimes className="w-6 h-6 text-white" /> : <FaBars className="w-6 h-6 text-white" />}
  </button>
);

const NavLink = ({ route, currentPath, isMobile, onClick }: { 
  route: typeof ROUTES[number];
  currentPath: string;
  isMobile?: boolean;
  onClick?: () => void;
}) => (
  <Link 
    href={route.href} 
    onClick={onClick}
    className={`text-lg text-white hover:text-blue-300 transition-all ${
      currentPath === route.href 
      ? "bg-blue-800/50 cursor-default" 
      : "hover:bg-blue-800/30"
    } px-4 py-2 rounded-lg ${isMobile ? 'w-full text-center' : ''}`}
    aria-current={currentPath === route.href ? "page" : undefined}
  >
    <div className="flex items-center gap-2">
      <route.icon className="w-5 h-5" />
      {route.label}
    </div>
  </Link>
);

const NavBar = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const routes = ROUTES;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-500 p-4 flex flex-col md:flex-row md:justify-between shadow-md">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="/" className="hover:opacity-80 transition-opacity ml-4 md:ml-6">
          <Image 
            src="/images/logo.png"
            alt="CSN Technology"
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </Link>
        <MobileMenuButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>

      <div className="hidden md:flex flex-1 justify-center items-center gap-6">
        {routes.map(route => (
          <NavLink key={route.href} route={route} currentPath={currentPath} />
        ))}
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 bg-blue-500 p-4 absolute top-full left-0 right-0 border-b border-blue-600 max-h-[80vh] overflow-y-auto">
          {routes.map(route => (
            <NavLink 
              key={route.href}
              route={route}
              currentPath={currentPath}
              isMobile
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
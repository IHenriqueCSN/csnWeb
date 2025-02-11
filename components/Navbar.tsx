"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaCog, FaTimes, FaBars } from "react-icons/fa";
import { FaWalkieTalkie } from "react-icons/fa6";

const ROUTES = [
  { href: "/", label: "Home", icon: FaHome },
  { href: "/about-us", label: "Quem Somos", icon: FaUser },
  { href: "/services", label: "Serviços", icon: FaCog },
  { href: "/contact", label: "Contato", icon: FaWalkieTalkie },
] as const;

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
  route: typeof ROUTES[number];
  currentPath: string;
  isMobile?: boolean;
  onClick?: () => void;
}) => (
  <Link
    href={route.href}
    onClick={onClick}
    className={`text-lg transition-all px-4 py-2 rounded-md ${
      currentPath === route.href
        ? "bg-blue-800/50 text-white cursor-default"
        : "text-gray-300 hover:text-white hover:bg-blue-800/30"
    } ${isMobile ? "w-full text-center" : ""}`}
    aria-current={currentPath === route.href ? "page" : undefined}
  >
    <div className="flex justify-center items-center gap-2">
      <route.icon className="w-5 h-5" />
      {route.label}
    </div>
  </Link>
);

const NavBar = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="hidden md:grid grid-cols-5 items-center h-16">
          <NavLink route={ROUTES[0]} currentPath={currentPath} />
          <NavLink route={ROUTES[1]} currentPath={currentPath} />
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="CSN Technology"
              width={50}
              height={50}
              className="h-12 w-12 mx-auto"
            />
          </Link>
          <NavLink route={ROUTES[2]} currentPath={currentPath} />
          <NavLink route={ROUTES[3]} currentPath={currentPath} />
        </div>

        <div className="flex md:hidden items-center justify-between h-16">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="CSN Technology"
              width={50}
              height={50}
              className="h-12 w-12"
            />
          </Link>
          <MobileMenuButton
            isOpen={isOpen}
            toggle={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-2 bg-blue-700 p-4 border-t border-blue-600">
          {ROUTES.map((route) => (
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
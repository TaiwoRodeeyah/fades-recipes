"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUtensils,
  faVideo,
  faBlog,
  faInfoCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../../public/logo.png";
import { useWindowSize } from "@/hooks/useWindowSize";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(isMobileMenuOpen ? true : window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-primary activeNav text-gray-800 shadow-lg backdrop:blur-md opacity-98"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex items-center justify-between p-3 lg:px-6">
        <Image
          src={logo}
          alt="Fade's Recipes"
          height={windowSize.width <= 425 ? 40 : 50}
        />
        <nav className="hidden lg:flex space-x-4">
          <Link
            href="/"
            className={`flex items-center ${
              pathname === "/" ? "activeLink" : ""
            }`}
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Link>
          <Link
            href="/recipes"
            className={`flex items-center ${
              pathname === "/recipes" ? "activeLink" : ""
            }`}
          >
            <FontAwesomeIcon icon={faUtensils} className="mr-2" />
            Recipes
          </Link>
          <Link
            href="/video-recipes"
            className={`flex items-center ${
              pathname === "/video-recipes" ? "activeLink" : ""
            }`}
          >
            <FontAwesomeIcon icon={faVideo} className="mr-2" />
            Video Recipes
          </Link>
          <Link
            href="/blog"
            className={`flex items-center ${
              pathname === "/blog" ? "activeLink" : ""
            }`}
          >
            <FontAwesomeIcon icon={faBlog} className="mr-2" />
            Blog
          </Link>
          <Link
            href="/about-us"
            className={`flex items-center ${
              pathname === "/about-us" ? "activeLink" : ""
            }`}
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            About Us
          </Link>
          <Link
            href="/contact-us"
            className={`flex items-center ${
              pathname === "/contact-us" ? "activeLink" : ""
            }`}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contact Us
          </Link>
        </nav>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? (
              <IoClose className="text-white" size={30} />
            ) : (
              <HiMenu className="text-white" size={30} />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden flex items-center justify-center flex-col bg-primary text-white p-4 space-y-4">
          <Link
            href="/"
            onClick={toggleMobileMenu}
            className={`flex items-center ${
              pathname === "/" ? "activeLink" : ""
            }`}
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Link>
          <Link
            href="/recipes"
            onClick={toggleMobileMenu}
            className={`flex items-center ${
              pathname === "/recipes" ? "activeLink" : ""
            }`}
          >
            <FontAwesomeIcon icon={faUtensils} className="mr-2" />
            Recipes
          </Link>
          <Link
            href="/video-recipes"
            onClick={toggleMobileMenu}
            className={`flex items-center ${
              pathname === "/video-recipes" ? "activeLink" : ""
            }`}
          >
            <FontAwesomeIcon icon={faVideo} className="mr-2" />
            Video Recipes
          </Link>
          <Link
            href="/blog"
            onClick={toggleMobileMenu}
            className={`flex items-center ${
              pathname === "/blog" ? "activeLink" : ""
            }`}
          >
            <FontAwesomeIcon icon={faBlog} className="mr-2" />
            Blog
          </Link>
          <Link
            href="/about-us"
            onClick={toggleMobileMenu}
            className={`flex items-center ${
              pathname === "/about-us" ? "activeLink" : ""
            }`}
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            About Us
          </Link>
          <Link
            href="/contact-us"
            onClick={toggleMobileMenu}
            className={`flex items-center ${
              pathname === "/contact-us" ? "activeLink" : ""
            }`}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

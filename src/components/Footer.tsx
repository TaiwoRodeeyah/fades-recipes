"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const Footer = () => {
  useEffect(() => {
    ScrollReveal().reveal(".footer-section", {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: false,
    });
    ScrollReveal().reveal(".footer-navbox", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: false,
    });
  }, []);
  return (
    <footer className="bg-gray-800 shadow-lg text-white py-10">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="w-full flex items-center justify-center mb-2">
              <Image src={logo} alt="Fade's Recipes" height={50} />
            </div>
            <p className="text-sm">
              Your one-stop destination for delicious recipes
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 footer-section">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-2 footer-navbox">
              <Link href="/">Home</Link>
              <Link href="/recipes">Recipes</Link>
              <Link href="/video-recipes">Video Recipes</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/contact-us">Contact Us</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 footer-section">
              Categories
            </h3>
            <nav className="flex flex-col space-y-2 footer-navbox">
              <Link href="/category/appetizers">Appetizers</Link>
              <Link href="/category/main-course">Main Course</Link>
              <Link href="/category/desserts">Desserts</Link>
              <Link href="/category/drinks">Drinks</Link>
            </nav>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm">
            {"© 2024 Fade's Recipes. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

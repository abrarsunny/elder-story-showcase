"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

import React from "react";

const Navbar = () => {
  const [isLight, setIsLight] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");
      const navbar = document.querySelector("nav");
      if (!hero || !navbar) return;
      const heroRect = hero.getBoundingClientRect();
      setIsLight(heroRect.bottom <= 64); // 64px = h-16
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textClass = isLight ? "text-warmth" : "text-white";
  const bgClass = isLight
    ? "bg-warmth/10 backdrop-blur-md border-b border-warmth/10"
    : "bg-black/60 backdrop-blur-md border-b border-white/10";

  return (
    <nav className={`fixed top-0 w-full z-50 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-warmth" />
            <span className={`text-xl font-bold ${textClass}`}>HomeAge</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`${textClass} hover:text-warmth transition-colors`}>
              Home
            </a>
            <a href="#about" className={`${textClass} hover:text-warmth transition-colors`}>
              About Us
            </a>
            <a href="#story" className={`${textClass} hover:text-warmth transition-colors`}>
              Story
            </a>
            <a href="#notice" className={`${textClass} hover:text-warmth transition-colors`}>
              Notice
            </a>
          </div>
          <Link href="/donate">
            <Button variant="donation" size="sm">
              Donate
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
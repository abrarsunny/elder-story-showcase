

"use client";

import React from "react";
import { motion } from "./MotionWrapper";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-24"
    >
      {/* Close (Cross) Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute top-6 right-6 z-20 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 transition-colors"
        aria-label="Close hero section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-elderly.jpg')" }}
        aria-hidden="true"
        role="presentation"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Each <span className="text-warmth font-extrabold">Wrinkle</span> has a{" "}
            <span className="text-warmth font-extrabold">Story</span> to tell
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow"
          >
            Let us all help make life better for those who made our life better.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4"
              aria-label="Learn more about our mission"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
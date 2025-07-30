"use client";

import { motion } from "./MotionWrapper";
import Image from "next/image";
import { Button } from "./ui/button";

const StorySection = () => {
  return (
    <section id="story" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every resident has a unique story, and we're honored to be part of their journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-warmth/20 to-warmth/10 rounded-2xl overflow-hidden">
                <Image
                  src="/story-1.jpg"
                  alt="Elderly resident sharing story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-warmth rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">01</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">
              A Place Where Stories Come Alive
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our facility is more than just a care home—it's a community where every resident's story is valued and celebrated. We believe that sharing stories helps us connect, heal, and grow together.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the wisdom of our oldest residents to the laughter of our newest friends, every moment here is a chapter in our collective story of care, compassion, and community.
            </p>
            <Button className="bg-warmth text-warmth-foreground hover:bg-warmth/90">
              Read More Stories
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold text-foreground">
              Building Connections Through Care
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our dedicated staff works tirelessly to create meaningful connections with each resident, understanding their unique needs, preferences, and life experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through personalized care plans and compassionate interactions, we help our residents maintain their dignity, independence, and joy in their daily lives.
            </p>
            <Button variant="outline" className="border-warmth text-warmth hover:bg-warmth hover:text-white">
              Meet Our Team
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-warmth/20 to-warmth/10 rounded-2xl overflow-hidden">
                <Image
                  src="/story-2.jpg"
                  alt="Caregiver and resident"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-warmth rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">02</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
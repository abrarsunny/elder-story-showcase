import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatisticsSection from "@/components/StatisticsSection";
import RecentWorkSection from "@/components/RecentWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-blue-100">
        <HeroSection />
      </div>
      
      {/* Services Section */}
      <div className="bg-green-100">
        <ServicesSection />
      </div>
      
      {/* Statistics Section */}
      <div className="bg-yellow-100">
        <StatisticsSection />
      </div>
      
      {/* Recent Work Section */}
      <div className="bg-purple-100">
        <RecentWorkSection />
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-pink-100">
        <TestimonialsSection />
      </div>
      
      {/* Story Section */}
      <div className="bg-orange-100">
        <StorySection />
      </div>
      
      <Footer />
    </div>
  );
} 
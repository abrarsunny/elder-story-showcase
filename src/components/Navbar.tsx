import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-warmth" />
            <span className="text-xl font-bold text-white">HomeAge</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-warmth transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-warmth transition-colors">
              About Us
            </a>
            <a href="#story" className="text-white hover:text-warmth transition-colors">
              Story
            </a>
            <a href="#notice" className="text-white hover:text-warmth transition-colors">
              Notice
            </a>
          </div>
          
          <Button variant="donation" size="sm">
            Donate
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
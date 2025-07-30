import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-warmth" />
              <span className="text-2xl font-bold">HomeAge</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Providing compassionate care and creating a loving community where every elder is valued, respected, and cherished.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-warmth hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-warmth hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-warmth hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-warmth transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-warmth transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-warmth transition-colors">Services</a></li>
              <li><a href="#story" className="text-white/80 hover:text-warmth transition-colors">Stories</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-warmth transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-white/80">24/7 Medical Care</span></li>
              <li><span className="text-white/80">Social Activities</span></li>
              <li><span className="text-white/80">Comfortable Living</span></li>
              <li><span className="text-white/80">Nutritious Meals</span></li>
              <li><span className="text-white/80">Recreation Programs</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-warmth" />
                <span className="text-white/80">123 Care Street, City, State 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-warmth" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-warmth" />
                <span className="text-white/80">info@homeage.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 HomeAge. All rights reserved. Made with ❤️ for our elders.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-warmth text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-warmth text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-warmth text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/d048329b-0ab6-4b8a-9709-303726e46a35.png" 
              alt="Vigour Vanguard Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Transform your fitness journey with our expert-led online classes. 
              From HIIT to yoga, strength training to dance fitness - reclaim your best self with us.
            </p>
            <div className="flex space-x-4">
              
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/workouts" className="text-sm text-muted-foreground hover:text-primary transition-colors">Workout Types</Link></li>
              <li><Link to="/schedule" className="text-sm text-muted-foreground hover:text-primary transition-colors">Class Schedule</Link></li>
              <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing Plans</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Trainers</Link></li>
              <li><Link to="/testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                info@vigourvanguard.com
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                Online Classes Worldwide
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Vigour Vanguard. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
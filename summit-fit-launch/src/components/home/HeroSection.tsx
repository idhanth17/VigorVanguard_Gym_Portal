import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Star, Users, Calendar } from "lucide-react";
import heroFitness from "@/assets/hero-fitness.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroFitness} 
          alt="Professional fitness training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Reclaim Your{" "}
                <span className="hero-gradient bg-clip-text text-transparent">
                  Best Self
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">
                Transform your fitness journey with expert-led online classes. 
                From HIIT to yoga, strength training to dance fitness - join thousands 
                who've already started their transformation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <Link to="/booking" className="group">
                  Book Your First Class
                  <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Preview
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-white">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">5000+ Happy Members</span>
              </div>
            </div>
          </div>

          {/* Right side kept minimal for clean design */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, Play, Award, Users, Image, Video } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      type: "image",
      title: "HIIT Training Session",
      description: "High-intensity workout with Sarah",
      category: "HIIT",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "video", 
      title: "Yoga Flow Highlights",
      description: "Morning yoga session highlights",
      category: "Yoga",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "image",
      title: "Strength Training Setup",
      description: "Home gym setup for strength training",
      category: "Strength",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "image",
      title: "Member Transformation",
      description: "Emily's 3-month transformation",
      category: "Transformation",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "video",
      title: "CrossFit WOD Preview",
      description: "Wednesday CrossFit workout preview",
      category: "CrossFit", 
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "image",
      title: "Community Workout",
      description: "Group class energy and motivation",
      category: "Community",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "image",
      title: "Before & After",
      description: "David's strength transformation",
      category: "Transformation",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "video",
      title: "Dance Fitness Fun",
      description: "Friday dance fitness highlights",
      category: "Dance",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "image",
      title: "Mobility Session",
      description: "Recovery and mobility work",
      category: "Mobility",
      thumbnail: "/api/placeholder/400/300"
    }
  ];

  const categories = ["All", "HIIT", "Yoga", "Strength", "CrossFit", "Dance", "Transformation", "Community", "Mobility"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-fitness-light to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Gallery & Transformations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See our community in action! From workout sessions to incredible transformations, 
              get inspired by real results from real people.
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 card-shadow border-0 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Play button for videos */}
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Play className="h-6 w-6" />
                        </div>
                      </div>
                    )}
                    
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Type indicator */}
                    <div className="absolute top-3 right-3">
                      {item.type === "video" ? (
                        <Video className="h-5 w-5 text-white" />
                      ) : (
                        <Image className="h-5 w-5 text-white" />
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
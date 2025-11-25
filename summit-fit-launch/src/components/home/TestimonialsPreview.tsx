import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight } from "lucide-react";

const TestimonialsPreview = () => {
  const testimonials = [
    {
      name: "Emily Chen",
      program: "3-Month Transformation",
      rating: 5,
      quote: "Lost 25 lbs and gained incredible strength! The trainers are amazing and the online format fits perfectly into my busy schedule.",
      results: "25 lbs lost, 40% strength increase"
    },
    {
      name: "David Martinez", 
      program: "HIIT Specialist",
      rating: 5,
      quote: "Never thought I could stick to a workout routine, but these classes are addictive! The community support is unmatched.",
      results: "6 months consistent, 15 lbs muscle gain"
    },
    {
      name: "Rachel Thompson",
      program: "Yoga & Flexibility",
      rating: 5,
      quote: "My back pain is gone and my flexibility improved dramatically. Sarah's yoga classes changed my life completely.",
      results: "Pain-free living, 80% flexibility improvement"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real transformations from real people who took control of their fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 card-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="h-8 w-8" />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.program}
                      </Badge>
                    </div>
                  </div>
                  <div className="bg-fitness-light p-3 rounded-lg">
                    <p className="text-sm font-medium text-primary">{testimonial.results}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="bg-gradient-to-r from-fitness-light to-white p-8 rounded-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join over 5,000 members who have transformed their lives with our expert-led fitness programs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/booking">Start Your Transformation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/testimonials" className="group">
                    Read More Stories
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
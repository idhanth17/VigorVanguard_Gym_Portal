import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Emily Chen",
      age: 32,
      program: "3-Month Total Transformation",
      rating: 5,
      quote: "I never thought I could stick to a workout routine, but Vigour Vanguard changed everything. The trainers are incredibly supportive, and the online format fits perfectly into my busy schedule as a working mom. I've lost 25 pounds and gained so much confidence!",
      results: "25 lbs weight loss, 40% strength increase",
      timeframe: "3 months",
      beforeAfter: "Before: Struggled with consistency | After: Working out 5x/week consistently"
    },
    {
      name: "David Martinez",
      age: 45,
      program: "HIIT & Strength Specialist", 
      rating: 5,
      quote: "After years of gym memberships I never used, these online classes finally got me moving. Mike's coaching is phenomenal - he pushes you just enough without being intimidating. The community aspect through the chat makes it feel like we're all in this together.",
      results: "15 lbs muscle gain, improved cardiovascular health",
      timeframe: "6 months",
      beforeAfter: "Before: Sedentary lifestyle | After: Completed first 5K run"
    },
    {
      name: "Rachel Thompson",
      age: 28,
      program: "Yoga & Flexibility Focus",
      rating: 5,
      quote: "My chronic back pain from desk work was ruining my quality of life. Sarah's yoga classes not only eliminated my pain but transformed my entire relationship with movement. I sleep better, feel more energetic, and my flexibility has improved dramatically.",
      results: "Pain-free living, 80% flexibility improvement",
      timeframe: "4 months", 
      beforeAfter: "Before: Daily back pain | After: Pain-free and flexible"
    },
    {
      name: "James Wilson",
      age: 38,
      program: "CrossFit & Athletic Performance",
      rating: 5,
      quote: "As a former athlete, I was skeptical about online training. But the programming here is top-notch. Mike's expertise in Olympic lifting helped me break personal records I hadn't touched in years. The accountability and progression tracking keeps me motivated.",
      results: "30% strength gains, achieved new personal records",
      timeframe: "8 months",
      beforeAfter: "Before: Feeling out of shape | After: Strongest I've ever been"
    },
    {
      name: "Maria Rodriguez",
      age: 29,
      program: "Dance Fitness & Cardio",
      rating: 5,
      quote: "I hated traditional workouts until I discovered dance fitness with Sarah. It doesn't feel like exercise - it's pure joy! I've lost weight, made friends in the online community, and actually look forward to working out every day.",
      results: "20 lbs weight loss, improved coordination",
      timeframe: "5 months",
      beforeAfter: "Before: Avoided exercise | After: Dancing daily with confidence"
    },
    {
      name: "Robert Kim",
      age: 52,
      program: "Mobility & Recovery Focus",
      rating: 5,
      quote: "At my age, I thought my best physical days were behind me. The mobility and recovery programs have been life-changing. I move better now than I did 10 years ago, and the gentle approach helped me build strength safely.",
      results: "Improved mobility, reduced joint stiffness",
      timeframe: "7 months",
      beforeAfter: "Before: Stiff and immobile | After: Moving with ease and confidence"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-fitness-light to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Success Stories & Testimonials
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real transformations from real people who took control of their fitness journey with Vigour Vanguard
            </p>
          </div>
        </section>

        {/* Featured Testimonial Carousel */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="card-shadow border-0 overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 h-12 w-12 text-primary/20" />
                  
                  <div className="text-center space-y-6">
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg lg:text-xl text-muted-foreground italic leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {testimonials[currentTestimonial].name}
                        </h3>
                        <p className="text-muted-foreground">
                          Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].program}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-fitness-light p-4 rounded-lg">
                        <div className="text-center">
                          <p className="font-semibold text-primary">{testimonials[currentTestimonial].results}</p>
                          <p className="text-xs text-muted-foreground">Results Achieved</p>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-primary">{testimonials[currentTestimonial].timeframe}</p>
                          <p className="text-xs text-muted-foreground">Timeframe</p>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-primary">5/5 Stars</p>
                          <p className="text-xs text-muted-foreground">Overall Rating</p>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Transformation:</strong> {testimonials[currentTestimonial].beforeAfter}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex justify-between items-center mt-8">
                    <Button variant="outline" size="sm" onClick={prevTestimonial}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                          }`}
                          onClick={() => setCurrentTestimonial(index)}
                        />
                      ))}
                    </div>
                    
                    <Button variant="outline" size="sm" onClick={nextTestimonial}>
                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              More Success Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-shadow border-0 h-full">
                  <CardContent className="p-6 space-y-4 h-full flex flex-col">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-sm text-muted-foreground italic flex-grow">
                      "{testimonial.quote.substring(0, 150)}..."
                    </blockquote>
                    
                    <div className="space-y-2">
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.program}</p>
                      </div>
                      <div className="bg-fitness-light p-2 rounded">
                        <p className="text-xs font-medium text-primary">{testimonial.results}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-fitness-light to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join over 5,000 members who have transformed their lives with our expert-led fitness programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/booking">Start Your Transformation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Speak with a Trainer</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
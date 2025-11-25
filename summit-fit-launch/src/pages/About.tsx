import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Award, Users, Calendar, Mail, Instagram, Twitter } from "lucide-react";
import trainerFemale from "@/assets/trainer-female.jpg";
import trainerMale from "@/assets/trainer-male.jpg";

const About = () => {
  const trainers = [
    {
      name: "Sarah Johnson",
      title: "Lead HIIT & Yoga Instructor",
      image: trainerFemale,
      experience: "8+ Years",
      certifications: ["NASM-CPT", "RYT-500", "HIIT Specialist"],
      specialties: ["HIIT Training", "Vinyasa Yoga", "Strength & Conditioning", "Mindfulness"],
      philosophy: "I believe fitness should be accessible, enjoyable, and transformative. My approach combines high-energy workouts with mindful movement to help you build both physical and mental strength.",
      bio: "With over 8 years of experience in the fitness industry, Sarah has helped thousands transform their lives through movement. She started her journey as a competitive athlete and discovered her passion for helping others achieve their potential. Sarah's classes are known for their perfect balance of challenge and encouragement.",
      stats: {
        rating: 4.9,
        clients: "2.3k+",
        classes: "1.8k+"
      },
      contact: {
        email: "sarah@vigourvanguard.com",
        instagram: "@sarahfitness",
        twitter: "@sarahjohnsonfit"
      }
    },
    {
      name: "Mike Rodriguez",
      title: "Strength & Conditioning Coach",
      image: trainerMale,
      experience: "10+ Years",
      certifications: ["CSCS", "USAW Level 2", "CrossFit Level 3"],
      specialties: ["Olympic Lifting", "CrossFit", "Functional Movement", "Athletic Performance"],
      philosophy: "Strength isn't just physical—it's mental resilience, consistency, and the courage to push beyond your comfort zone. I'm here to guide you through that journey safely and effectively.",
      bio: "Former Division I athlete turned certified strength coach, Mike brings elite-level training principles to everyday fitness enthusiasts. His expertise in Olympic lifting and functional movement has helped clients from beginners to professional athletes achieve remarkable results.",
      stats: {
        rating: 4.8,
        clients: "1.8k+", 
        classes: "2.1k+"
      },
      contact: {
        email: "mike@vigourvanguard.com",
        instagram: "@mikestrength",
        twitter: "@mikefitcoach"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-fitness-light to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Meet Your Expert Trainers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our certified professionals bring years of experience, passion, and proven results 
              to help you achieve your fitness goals and transform your life.
            </p>
          </div>
        </section>

        {/* Trainers Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {trainers.map((trainer, index) => (
              <Card key={index} className="overflow-hidden card-shadow border-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} p-6 lg:p-8`}>
                    <div className="relative">
                      <img 
                        src={trainer.image} 
                        alt={trainer.name}
                        className="w-full h-96 object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} p-6 lg:p-8 space-y-6`}>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">{trainer.name}</h2>
                      <p className="text-lg text-primary font-medium">{trainer.title}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-bold text-foreground">{trainer.stats.rating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Rating</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="font-bold text-foreground">{trainer.stats.clients}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Happy Clients</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-bold text-foreground">{trainer.stats.classes}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Classes Led</p>
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">About {trainer.name.split(' ')[0]}</h3>
                      <p className="text-muted-foreground mb-4">{trainer.bio}</p>
                    </div>

                    {/* Philosophy */}
                    <div className="bg-fitness-light p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Training Philosophy</h4>
                      <p className="text-sm text-muted-foreground italic">"{trainer.philosophy}"</p>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {trainer.certifications.map((cert, idx) => (
                          <Badge key={idx} className="text-xs bg-accent text-white">
                            <Award className="h-3 w-3 mr-1" />
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm" className="text-xs">
                        <Mail className="h-3 w-3 mr-2" />
                        {trainer.contact.email}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <Instagram className="h-3 w-3 mr-2" />
                        {trainer.contact.instagram}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <Twitter className="h-3 w-3 mr-2" />
                        {trainer.contact.twitter}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-fitness-light to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Train with Our Experts?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your first class today and experience the difference expert guidance makes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/booking">Book Your First Class</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/schedule">View Class Schedule</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
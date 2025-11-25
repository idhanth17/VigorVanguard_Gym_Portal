import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Award, Clock, Users } from "lucide-react";
import trainerFemale from "@/assets/trainer-female.jpg";
import trainerMale from "@/assets/trainer-male.jpg";

const QuickTrainerIntro = () => {
  const trainers = [
    {
      name: "Sarah Johnson",
      specialties: ["HIIT", "Yoga", "Strength Training"],
      experience: "8+ Years",
      image: trainerFemale,
      rating: 4.9,
      clients: "2.3k",
      description: "Certified personal trainer specializing in high-intensity workouts and mindful movement."
    },
    {
      name: "Mike Rodriguez", 
      specialties: ["CrossFit", "Olympic Lifting", "Conditioning"],
      experience: "10+ Years",
      image: trainerMale,
      rating: 4.8,
      clients: "1.8k",
      description: "Former competitive athlete focused on functional fitness and strength development."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet Your Expert Trainers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from certified professionals who are passionate about helping you achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {trainers.map((trainer, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 card-shadow overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mx-auto sm:mx-0"
                    />
                  </div>
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {trainer.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {trainer.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{trainer.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{trainer.clients}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>{trainer.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/about" className="group">
              Meet All Our Trainers
              <Users className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickTrainerIntro;
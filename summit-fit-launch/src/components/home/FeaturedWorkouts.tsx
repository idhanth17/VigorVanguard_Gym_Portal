import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Flame, Heart, Zap, Users, Target } from "lucide-react";

const FeaturedWorkouts = () => {
  const workouts = [
    {
      title: "HIIT Bootcamp",
      description: "High-intensity interval training for maximum calorie burn and strength building.",
      duration: "45 min",
      difficulty: "Intermediate",
      icon: <Flame className="h-6 w-6" />,
      color: "bg-accent",
      participants: "1.2k"
    },
    {
      title: "Power Yoga Flow",
      description: "Dynamic yoga sequences combining strength, flexibility, and mindfulness.",
      duration: "60 min", 
      difficulty: "Beginner",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-primary",
      participants: "890"
    },
    {
      title: "Strength & Conditioning",
      description: "Build lean muscle and functional strength with targeted resistance training.",
      duration: "50 min",
      difficulty: "Advanced",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-secondary",
      participants: "675"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800"; 
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Workouts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular classes designed to challenge and transform your fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {workouts.map((workout, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 card-shadow border-0">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`${workout.color} p-3 rounded-lg text-white`}>
                    {workout.icon}
                  </div>
                  <Badge className={getDifficultyColor(workout.difficulty)}>
                    {workout.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {workout.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {workout.description}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{workout.participants}</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/booking">Join This Class</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/workouts" className="group">
              Explore All Workouts
              <Target className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkouts;
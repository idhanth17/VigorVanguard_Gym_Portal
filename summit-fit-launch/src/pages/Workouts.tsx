import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, Target, Flame, Heart, Zap, Dumbbell, Activity, Music } from "lucide-react";

const Workouts = () => {
  const workoutTypes = [
    {
      title: "HIIT Bootcamp",
      description: "High-intensity interval training combining cardio and strength for maximum calorie burn and muscle building.",
      duration: "30-45 min",
      difficulty: "Intermediate",
      icon: <Flame className="h-8 w-8" />,
      color: "bg-accent",
      benefits: ["Burns 400-600 calories", "Improves cardiovascular health", "Builds lean muscle", "Boosts metabolism"],
      equipment: "Bodyweight, dumbbells optional",
      intensity: "High",
      participants: "1.2k+ joined"
    },
    {
      title: "Power Yoga Flow",
      description: "Dynamic yoga sequences that build strength, flexibility, and mindfulness through flowing movements.",
      duration: "45-60 min",
      difficulty: "Beginner",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-green-500",
      benefits: ["Increases flexibility", "Reduces stress", "Improves balance", "Builds core strength"],
      equipment: "Yoga mat",
      intensity: "Low-Medium",
      participants: "890+ joined"
    },
    {
      title: "Strength Training",
      description: "Progressive resistance training focused on building muscle, strength, and functional movement patterns.",
      duration: "45-60 min",
      difficulty: "Advanced",
      icon: <Dumbbell className="h-8 w-8" />,
      color: "bg-secondary",
      benefits: ["Builds muscle mass", "Increases bone density", "Improves posture", "Enhances daily function"],
      equipment: "Dumbbells, resistance bands",
      intensity: "Medium-High",
      participants: "675+ joined"
    },
    {
      title: "CrossFit WOD",
      description: "Constantly varied functional movements performed at high intensity to build elite fitness.",
      duration: "45-60 min",
      difficulty: "Advanced",
      icon: <Zap className="h-8 w-8" />,
      color: "bg-orange-500",
      benefits: ["Total body conditioning", "Improved work capacity", "Mental toughness", "Community support"],
      equipment: "Various (barbells, kettlebells, etc.)",
      intensity: "High",
      participants: "520+ joined"
    },
    {
      title: "Mobility & Recovery",
      description: "Gentle stretching and mobility work to improve range of motion and aid in recovery.",
      duration: "30-45 min",
      difficulty: "Beginner",
      icon: <Activity className="h-8 w-8" />,
      color: "bg-blue-500",
      benefits: ["Improves flexibility", "Reduces muscle tension", "Prevents injury", "Aids recovery"],
      equipment: "Foam roller, stretching straps",
      intensity: "Low",
      participants: "390+ joined"
    },
    {
      title: "Dance Fitness",
      description: "High-energy dance workouts that combine choreography with cardio for a fun fitness experience.",
      duration: "45 min",
      difficulty: "Intermediate",
      icon: <Music className="h-8 w-8" />,
      color: "bg-pink-500",
      benefits: ["Cardiovascular fitness", "Coordination improvement", "Stress relief", "Fun factor"],
      equipment: "None required",
      intensity: "Medium-High",
      participants: "780+ joined"
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

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Low": return "text-green-600";
      case "Low-Medium": return "text-green-500";
      case "Medium": return "text-yellow-600";
      case "Medium-High": return "text-orange-500";
      case "High": return "text-red-500";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-fitness-light to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Workout Types & Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of fitness programs designed to challenge, 
              inspire, and transform your body and mind. From high-intensity training to mindful movement.
            </p>
          </div>
        </section>

        {/* Workouts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {workoutTypes.map((workout, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 card-shadow border-0 h-full">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`${workout.color} p-4 rounded-xl text-white`}>
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
                  
                  <CardContent className="space-y-6 flex-grow">
                    <p className="text-muted-foreground">
                      {workout.description}
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{workout.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{workout.participants}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Target className="h-4 w-4 text-primary" />
                        <span className={`font-medium ${getIntensityColor(workout.intensity)}`}>
                          {workout.intensity} Intensity
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Equipment:</span> {workout.equipment}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {workout.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
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
              Not Sure Which Program is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our expert trainers can help you choose the perfect program based on your goals, 
              fitness level, and preferences. Start with a consultation or try a beginner-friendly class.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Personal Guidance</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/booking">Try a Beginner Class</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Workouts;
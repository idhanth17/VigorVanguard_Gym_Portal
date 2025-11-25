import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, MapPin } from "lucide-react";

const Schedule = () => {
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  const schedule = {
    Monday: [
      { time: "6:00 AM", class: "Morning HIIT Blast", trainer: "Sarah Johnson", duration: "45 min", difficulty: "Intermediate" },
      { time: "12:00 PM", class: "Lunch Break Yoga", trainer: "Sarah Johnson", duration: "30 min", difficulty: "Beginner" },
      { time: "7:00 PM", class: "Evening Strength", trainer: "Mike Rodriguez", duration: "50 min", difficulty: "Advanced" }
    ],
    Tuesday: [
      { time: "6:30 AM", class: "CrossFit WOD", trainer: "Mike Rodriguez", duration: "60 min", difficulty: "Advanced" },
      { time: "5:30 PM", class: "Power Yoga Flow", trainer: "Sarah Johnson", duration: "60 min", difficulty: "Intermediate" },
      { time: "8:00 PM", class: "Dance Fitness", trainer: "Sarah Johnson", duration: "45 min", difficulty: "Beginner" }
    ],
    Wednesday: [
      { time: "6:00 AM", class: "HIIT Bootcamp", trainer: "Sarah Johnson", duration: "45 min", difficulty: "Intermediate" },
      { time: "12:00 PM", class: "Mobility & Recovery", trainer: "Mike Rodriguez", duration: "30 min", difficulty: "Beginner" },
      { time: "7:00 PM", class: "Strength Training", trainer: "Mike Rodriguez", duration: "55 min", difficulty: "Advanced" }
    ],
    Thursday: [
      { time: "6:30 AM", class: "Morning Yoga", trainer: "Sarah Johnson", duration: "45 min", difficulty: "Beginner" },
      { time: "6:00 PM", class: "HIIT & Core", trainer: "Sarah Johnson", duration: "40 min", difficulty: "Intermediate" },
      { time: "8:00 PM", class: "Olympic Lifting", trainer: "Mike Rodriguez", duration: "60 min", difficulty: "Advanced" }
    ],
    Friday: [
      { time: "6:00 AM", class: "Friday Finisher HIIT", trainer: "Mike Rodriguez", duration: "45 min", difficulty: "Advanced" },
      { time: "5:00 PM", class: "Feel Good Flow", trainer: "Sarah Johnson", duration: "50 min", difficulty: "Beginner" },
      { time: "7:30 PM", class: "Weekend Warrior", trainer: "Mike Rodriguez", duration: "50 min", difficulty: "Intermediate" }
    ],
    Saturday: [
      { time: "8:00 AM", class: "Saturday Sweat", trainer: "Sarah Johnson", duration: "60 min", difficulty: "Intermediate" },
      { time: "10:00 AM", class: "Family Fitness", trainer: "Sarah Johnson", duration: "30 min", difficulty: "Beginner" },
      { time: "4:00 PM", class: "Weekend Warriors", trainer: "Mike Rodriguez", duration: "55 min", difficulty: "Advanced" }
    ],
    Sunday: [
      { time: "9:00 AM", class: "Sunday Stretch", trainer: "Sarah Johnson", duration: "45 min", difficulty: "Beginner" },
      { time: "11:00 AM", class: "Active Recovery", trainer: "Mike Rodriguez", duration: "30 min", difficulty: "Beginner" },
      { time: "5:00 PM", class: "Sunday Strong", trainer: "Mike Rodriguez", duration: "50 min", difficulty: "Intermediate" }
    ]
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
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
              Weekly Class Schedule
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our live online classes from anywhere in the world. All times shown in your local timezone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/booking">Book Your First Class</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Add to Calendar
              </Button>
            </div>
          </div>
        </section>

        {/* Schedule Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Layout */}
            <div className="block lg:hidden">
              <div className="grid grid-cols-1 gap-6">
                {weekDays.map((day) => (
                  <Card key={day} className="card-shadow border-0">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-center text-primary">
                        {day}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {schedule[day as keyof typeof schedule].map((classItem, index) => (
                        <div key={index} className="bg-muted/50 p-3 rounded-lg space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4 text-primary" />
                              <span className="text-sm font-semibold text-primary">
                                {classItem.time}
                              </span>
                            </div>
                            <Badge className={getDifficultyColor(classItem.difficulty)}>
                              {classItem.difficulty}
                            </Badge>
                          </div>
                          <h4 className="font-medium text-foreground text-sm">
                            {classItem.class}
                          </h4>
                          <div className="space-y-1 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{classItem.trainer}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{classItem.duration}</span>
                            </div>
                          </div>
                          <Button size="sm" className="w-full text-xs" variant="outline" asChild>
                            <Link to="/booking">Book Now</Link>
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Desktop/Laptop Layout - Table Format */}
            <div className="hidden lg:block">
              <div className="overflow-hidden rounded-lg card-shadow border-0 bg-card">
                {/* Table Header */}
                <div className="grid grid-cols-8 gap-0 border-b border-border bg-muted/50">
                  <div className="p-4 font-semibold text-primary border-r border-border">Time</div>
                  {weekDays.map((day) => (
                    <div key={day} className="p-4 font-semibold text-primary text-center border-r border-border last:border-r-0">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Time Slots */}
                {Array.from(new Set(
                  Object.values(schedule).flat().map(item => item.time)
                )).sort().map((timeSlot) => (
                  <div key={timeSlot} className="grid grid-cols-8 gap-0 border-b border-border last:border-b-0 min-h-[120px]">
                    {/* Time Column */}
                    <div className="p-4 font-medium text-primary border-r border-border bg-muted/20 flex items-start">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{timeSlot}</span>
                      </div>
                    </div>

                    {/* Day Columns */}
                    {weekDays.map((day) => {
                      const classForTime = schedule[day as keyof typeof schedule].find(
                        item => item.time === timeSlot
                      );

                      return (
                        <div key={`${day}-${timeSlot}`} className="p-3 border-r border-border last:border-r-0">
                          {classForTime ? (
                            <div className="bg-muted/50 p-3 rounded-lg space-y-2 h-full">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-medium text-foreground text-sm leading-tight">
                                  {classForTime.class}
                                </h4>
                                <Badge className={`${getDifficultyColor(classForTime.difficulty)} text-xs`}>
                                  {classForTime.difficulty.charAt(0)}
                                </Badge>
                              </div>
                              <div className="space-y-1 text-xs text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <User className="h-3 w-3" />
                                  <span className="truncate">{classForTime.trainer}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{classForTime.duration}</span>
                                </div>
                              </div>
                              <Button size="sm" className="w-full text-xs" variant="outline" asChild>
                                <Link to="/booking">Book</Link>
                              </Button>
                            </div>
                          ) : (
                            <div className="h-full flex items-center justify-center text-muted-foreground/50 text-xs">
                              No class
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-fitness-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Class Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-2">
                <MapPin className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground">100% Online</h3>
                <p className="text-sm text-muted-foreground">
                  Join from anywhere with an internet connection
                </p>
              </div>
              <div className="space-y-2">
                <Calendar className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground">Flexible Booking</h3>
                <p className="text-sm text-muted-foreground">
                  Book up to 24 hours in advance, cancel anytime
                </p>
              </div>
              <div className="space-y-2">
                <User className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground">Small Groups</h3>
                <p className="text-sm text-muted-foreground">
                  Maximum 15 participants for personalized attention
                </p>
              </div>
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/booking">Join Your First Class Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
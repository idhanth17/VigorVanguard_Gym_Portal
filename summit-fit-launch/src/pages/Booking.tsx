import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Calendar, Users, Mail } from "lucide-react";

const Booking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-fitness-light to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Book Your Class
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your fitness transformation? Choose your booking option below and join our community of fitness enthusiasts.
            </p>
          </div>
        </section>

        {/* Booking Options */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              
              {/* Class Booking */}
              <Card className="card-shadow border-0">
                <CardHeader className="text-center">
                  <div className="bg-primary p-4 rounded-full w-fit mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Book a Class</CardTitle>
                  <p className="text-muted-foreground">
                    Join our live group classes or schedule a personal training session
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-fitness-light p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">What you'll get:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Live interactive classes with expert trainers</li>
                      <li>• Real-time form corrections and guidance</li>
                      <li>• Access to class recordings for 24-30 days</li>
                      <li>• Community chat during sessions</li>
                      <li>• Progress tracking and recommendations</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Instructions:</strong> Please fill out the Google Form below with your preferred class times, 
                      fitness goals, and any special requirements. Our team will confirm your booking within 24 hours.
                    </p>
                    
                    {/* Google Form Embed Area */}
                    <div className="bg-muted/30 border-2 border-dashed border-muted rounded-lg p-8 text-center">
                      <h4 className="font-semibold text-foreground mb-4">Google Form Integration</h4>
                      <p className="text-muted-foreground mb-4">
                        Please provide your Google Form link below to embed the booking form:
                      </p>
                      <div className="bg-white p-4 rounded border text-left text-sm text-muted-foreground">
                        <p><strong>To integrate your Google Form:</strong></p>
                        <ol className="list-decimal list-inside space-y-1 mt-2">
                          <li>Create your Google Form with booking fields</li>
                          <li>Click "Send" → "Embed" → Copy the iframe code</li>
                          <li>Replace this placeholder with your embed code</li>
                        </ol>
                      </div>
                      <Button variant="outline" className="mt-4">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Booking Form (Link to be added)
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Booking */}
              <Card className="card-shadow border-0">
                <CardHeader className="text-center">
                  <div className="bg-accent p-4 rounded-full w-fit mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Personal Consultation</CardTitle>
                  <p className="text-muted-foreground">
                    Get personalized guidance and custom training plans
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-fitness-light p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Perfect for:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• First-time fitness enthusiasts</li>
                      <li>• Specific injury or mobility concerns</li>
                      <li>• Custom nutrition and training plans</li>
                      <li>• One-on-one personal training</li>
                      <li>• Corporate or group training arrangements</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Schedule a free 15-minute consultation with our expert trainers to discuss your goals 
                      and find the perfect program for your needs.
                    </p>
                    
                    <div className="space-y-3">
                      <Button variant="hero" className="w-full" asChild>
                        <Link to="/contact">
                          <Mail className="mr-2 h-4 w-4" />
                          Schedule Free Consultation
                        </Link>
                      </Button>
                      
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        WhatsApp: +1 (555) 123-4567
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
              <Card className="card-shadow border-0 text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Pricing Plans</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find the perfect plan for your budget
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-shadow border-0 text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Workout Types</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore our class offerings
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/workouts">Browse Workouts</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
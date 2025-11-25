import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, MessageCircle, Instagram, Twitter, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-fitness-light to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our classes? Need personalized guidance? We're here to help you start your fitness journey.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <Card className="card-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input id="subject" placeholder="Question about classes" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your fitness goals or ask any questions..."
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p>By submitting this form, you agree to our privacy policy.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="card-shadow border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">info@vigourvanguard.com</p>
                        <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MessageCircle className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">WhatsApp</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Quick support and bookings</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Location</h3>
                        <p className="text-muted-foreground">Online Classes Worldwide</p>
                        <p className="text-sm text-muted-foreground">Training from anywhere with internet</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Clock className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-foreground">Monday - Friday</span>
                          <span className="text-muted-foreground">9:00 AM - 6:00 PM EST</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Clock className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-foreground">Saturday</span>
                          <span className="text-muted-foreground">10:00 AM - 4:00 PM EST</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Clock className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-foreground">Sunday</span>
                          <span className="text-muted-foreground">Closed</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm">
                        <Instagram className="h-4 w-4 mr-2" />
                        Instagram
                      </Button>
                      <Button variant="outline" size="sm">
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                      </Button>
                      <Button variant="outline" size="sm">
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Follow us for daily fitness tips, success stories, and class updates!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-16 bg-fitness-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Common Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-shadow border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">How do I book my first class?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Visit our booking page and fill out the form with your preferences. We'll confirm within 24 hours.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-shadow border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">What equipment do I need?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Most classes use bodyweight only. Some may require basic dumbbells or resistance bands.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/workouts">View Workouts</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-shadow border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">What are your pricing options?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We offer single classes ($25), monthly unlimited ($89), and personal training ($150/session).
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-shadow border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Are classes suitable for beginners?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Absolutely! We have classes for all fitness levels with modifications provided by our trainers.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/about">Meet Trainers</Link>
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

export default Contact;
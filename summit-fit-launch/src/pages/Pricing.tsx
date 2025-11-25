import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Star, Zap, Crown, Users } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Single Class",
      price: "$25",
      period: "per class",
      description: "Perfect for trying out our classes",
      features: [
        "Access to any single live class",
        "Interactive chat with trainer",
        "Class recording for 24 hours",
        "Basic fitness tracking",
        "Email support"
      ],
      popular: false,
      icon: <Users className="h-6 w-6" />,
      color: "border-muted"
    },
    {
      name: "Monthly Unlimited",
      price: "$89",
      period: "per month",
      description: "Best value for committed fitness enthusiasts",
      features: [
        "Unlimited access to all live classes",
        "All class recordings for 30 days",
        "1-on-1 monthly check-in with trainer",
        "Priority booking for popular classes",
        "Personalized workout recommendations",
        "Advanced progress tracking",
        "WhatsApp support group access",
        "Nutrition guide included"
      ],
      popular: true,
      icon: <Crown className="h-6 w-6" />,
      color: "border-primary ring-2 ring-primary/20"
    },
    {
      name: "Personal Training",
      price: "$150",
      period: "per session",
      description: "One-on-one intensive training sessions",
      features: [
        "Private 1-hour session with expert trainer",
        "Customized workout plan",
        "Real-time form correction and feedback",
        "Personalized nutrition coaching",
        "Weekly progress assessments",
        "Direct trainer contact via WhatsApp",
        "Session recordings for review",
        "Flexibility to reschedule"
      ],
      popular: false,
      icon: <Zap className="h-6 w-6" />,
      color: "border-accent"
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
              Choose Your Fitness Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Flexible pricing options designed to fit your lifestyle and fitness goals. 
              Start your transformation today with no long-term commitments.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-green-500" />
              <span>No setup fees</span>
              <span>•</span>
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
              <span>•</span>
              <Check className="h-4 w-4 text-green-500" />
              <span>7-day money back guarantee</span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative card-shadow ${plan.color} ${plan.popular ? 'scale-105' : ''} transition-all duration-300 hover:shadow-lg`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="space-y-4 text-center">
                    <div className={`${plan.popular ? 'bg-primary' : 'bg-muted'} p-3 rounded-full w-fit mx-auto ${plan.popular ? 'text-white' : 'text-primary'}`}>
                      {plan.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                      <p className="text-muted-foreground text-sm">{plan.description}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-center space-x-1">
                        <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "hero" : "outline"} 
                      size="lg"
                      asChild
                    >
                      <Link to="/booking">
                        {plan.name === "Single Class" ? "Book Single Class" : 
                         plan.name === "Personal Training" ? "Schedule Session" : "Start Monthly Plan"}
                      </Link>
                    </Button>
                    
                    {plan.popular && (
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Rated 4.9/5 by members</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <Card className="card-shadow border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Can I cancel my membership anytime?</h3>
                  <p className="text-muted-foreground">Yes! You can cancel your monthly membership at any time with no cancellation fees. Your access continues until the end of your current billing period.</p>
                </CardContent>
              </Card>
              
              <Card className="card-shadow border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">What equipment do I need?</h3>
                  <p className="text-muted-foreground">Most classes can be done with just bodyweight. For strength training, basic dumbbells or resistance bands are recommended. We offer an equipment starter kit for $120.</p>
                </CardContent>
              </Card>
              
              <Card className="card-shadow border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Are the classes live or pre-recorded?</h3>
                  <p className="text-muted-foreground">All classes are live with real-time interaction with trainers. Recordings are available for 24-30 days depending on your plan so you can practice at your own pace.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-fitness-light to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of members who have transformed their lives with our expert-led programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/booking">Start Free Trial</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Speak with Trainer</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
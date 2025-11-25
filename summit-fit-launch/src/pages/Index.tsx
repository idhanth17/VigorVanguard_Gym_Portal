import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import QuickTrainerIntro from "@/components/home/QuickTrainerIntro";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <QuickTrainerIntro />
        <TestimonialsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

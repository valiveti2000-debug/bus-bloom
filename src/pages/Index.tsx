import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedRoutes from "@/components/FeaturedRoutes";
import Features from "@/components/Features";
import PaymentMethods from "@/components/PaymentMethods";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedRoutes />
      <Features />
      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Index;

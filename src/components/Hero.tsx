import { motion } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import heroBus from "@/assets/hero-bus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBus})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Hero Text */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Travel India with
              <span className="block text-transparent bg-gradient-to-r from-secondary to-white bg-clip-text">
                Comfort & Style
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Book your bus tickets across 1000+ routes in India. Safe, comfortable, and affordable travel starts here.
            </p>
          </div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                    <Input 
                      placeholder="Delhi" 
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                    <Input 
                      placeholder="Mumbai" 
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Journey Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                    <Input 
                      type="date" 
                      className="pl-10 bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Passengers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                    <Input 
                      placeholder="1" 
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <Button className="btn-hero text-lg px-12 py-3">
                  Search Buses
                </Button>
                <Button variant="outline" className="btn-secondary">
                  View Popular Routes
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "1000+", label: "Routes" },
              { number: "50+", label: "Cities" },
              { number: "500+", label: "Bus Operators" },
              { number: "1M+", label: "Happy Travelers" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
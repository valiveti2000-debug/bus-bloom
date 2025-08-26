import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Search, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import LazyImage from "@/components/LazyImage";
import heroBus from "@/assets/hero-bus.jpg";

const Hero = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState<Date>();
  const [passengers, setPassengers] = useState("1");

  const popularCities = [
    "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad",
    "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Kanpur", "Nagpur",
    "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna"
  ];

  const swapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Lazy Loading */}
      <div className="absolute inset-0">
        <LazyImage 
          src={heroBus}
          alt="Modern bus for comfortable travel"
          className="w-full h-full object-cover"
        />
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

          {/* Enhanced Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass p-6 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                {/* From City */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-white/70 z-10" />
                    <Select value={fromCity} onValueChange={setFromCity}>
                      <SelectTrigger className="pl-10 bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select departure city" />
                      </SelectTrigger>
                      <SelectContent>
                        {popularCities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center md:justify-start">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={swapCities}
                    className="h-10 w-10 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full"
                  >
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* To City */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-white/70 z-10" />
                    <Select value={toCity} onValueChange={setToCity}>
                      <SelectTrigger className="pl-10 bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {popularCities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Journey Date with Calendar */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Journey Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal pl-10 bg-white/10 border-white/20 text-white hover:bg-white/20",
                          !date && "text-white/70"
                        )}
                      >
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Passengers */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Passengers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-white/70 z-10" />
                    <Select value={passengers} onValueChange={setPassengers}>
                      <SelectTrigger className="pl-10 bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(9)].map((_, i) => (
                          <SelectItem key={i + 1} value={(i + 1).toString()}>
                            {i + 1} {i === 0 ? "Passenger" : "Passengers"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    className="btn-hero text-lg px-12 py-6 flex items-center space-x-3"
                    disabled={!fromCity || !toCity || !date}
                  >
                    <Search className="h-5 w-5" />
                    <span>Search Buses</span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" className="btn-secondary text-lg px-8 py-6">
                    View Popular Routes
                  </Button>
                </motion.div>
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
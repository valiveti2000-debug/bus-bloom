import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Star, Clock, MapPin, Users, Wifi, Zap, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";

const SearchResults = () => {
  const [priceRange, setPriceRange] = useState([500, 2000]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const buses = [
    {
      id: 1,
      operator: "Volvo Travels",
      busType: "AC Sleeper",
      departure: "22:30",
      arrival: "06:45+1",
      duration: "8h 15m",
      price: 1299,
      seats: 18,
      rating: 4.5,
      amenities: ["wifi", "charging", "entertainment"],
      pickupPoint: "Anand Vihar Terminal",
      dropPoint: "Bandra Terminus",
    },
    {
      id: 2,
      operator: "RedBus Express",
      busType: "AC Semi Sleeper",
      departure: "23:45",
      arrival: "08:30+1",
      duration: "8h 45m",
      price: 999,
      seats: 24,
      rating: 4.2,
      amenities: ["wifi", "charging"],
      pickupPoint: "Kashmere Gate",
      dropPoint: "Dadar Terminal",
    },
    {
      id: 3,
      operator: "Luxury Coaches",
      busType: "Volvo Multi-Axle",
      departure: "21:15",
      arrival: "05:30+1",
      duration: "8h 15m",
      price: 1599,
      seats: 12,
      rating: 4.7,
      amenities: ["wifi", "charging", "entertainment", "meals"],
      pickupPoint: "ISBT Kashmere Gate",
      dropPoint: "Mumbai Central",
    },
  ];

  const amenityIcons = {
    wifi: Wifi,
    charging: Zap,
    entertainment: Coffee,
    meals: Coffee,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        {/* Search Header */}
        <div className="bg-gradient-primary text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Delhi to Mumbai
                </h1>
                <p className="text-white/90">
                  25 buses available • Mon, 15 Jan 2024 • 1 Passenger
                </p>
              </div>
              <Button variant="secondary" className="mt-4 md:mt-0">
                Modify Search
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Filter className="mr-2 h-5 w-5" />
                  Filters
                </h3>

                {/* Price Range */}
                <div className="space-y-4">
                  <h4 className="font-medium">Price Range</h4>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={3000}
                      min={200}
                      step={100}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Bus Type */}
                <div className="space-y-3">
                  <h4 className="font-medium">Bus Type</h4>
                  {["AC Sleeper", "Non-AC Sleeper", "AC Semi Sleeper", "Volvo"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type} />
                      <label htmlFor={type} className="text-sm">{type}</label>
                    </div>
                  ))}
                </div>

                {/* Amenities */}
                <div className="space-y-3">
                  <h4 className="font-medium">Amenities</h4>
                  {["WiFi", "Charging Point", "Entertainment", "Meals"].map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox id={amenity} />
                      <label htmlFor={amenity} className="text-sm">{amenity}</label>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Search Results */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  {buses.length} buses found
                </p>
                <select className="border border-border rounded-lg px-3 py-2">
                  <option>Sort by: Price (Low to High)</option>
                  <option>Sort by: Price (High to Low)</option>
                  <option>Sort by: Duration</option>
                  <option>Sort by: Rating</option>
                </select>
              </div>

              {buses.map((bus, index) => (
                <motion.div
                  key={bus.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-travel transition-shadow">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                        {/* Operator & Type */}
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg">{bus.operator}</h3>
                          <Badge variant="secondary">{bus.busType}</Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{bus.rating}</span>
                          </div>
                        </div>

                        {/* Timing */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-center">
                              <div className="text-xl font-bold">{bus.departure}</div>
                              <div className="text-sm text-muted-foreground">{bus.pickupPoint}</div>
                            </div>
                            <div className="flex flex-col items-center px-4">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <div className="text-sm text-muted-foreground">{bus.duration}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold">{bus.arrival}</div>
                              <div className="text-sm text-muted-foreground">{bus.dropPoint}</div>
                            </div>
                          </div>
                        </div>

                        {/* Amenities & Seats */}
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-2">
                            {bus.amenities.map((amenity) => {
                              const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
                              return (
                                <div key={amenity} className="flex items-center space-x-1 text-xs bg-muted px-2 py-1 rounded">
                                  <Icon className="h-3 w-3" />
                                  <span className="capitalize">{amenity}</span>
                                </div>
                              );
                            })}
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{bus.seats} seats available</span>
                          </div>
                        </div>

                        {/* Price & Action */}
                        <div className="text-center space-y-3">
                          <div className="text-2xl font-bold text-primary">
                            ₹{bus.price}
                          </div>
                          <Button className="w-full btn-hero">
                            Select Seats
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
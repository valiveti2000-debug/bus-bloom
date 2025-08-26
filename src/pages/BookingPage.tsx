import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, User, Mail, Phone, Calendar, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";

const BookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([15, 16]);
  
  // Bus layout: 2x2 configuration with 40 seats
  const generateSeatLayout = () => {
    const seats = [];
    const bookedSeats = [1, 5, 12, 23, 28, 35]; // Example booked seats
    
    for (let i = 1; i <= 40; i++) {
      let status = 'available';
      if (bookedSeats.includes(i)) status = 'booked';
      if (selectedSeats.includes(i)) status = 'selected';
      
      seats.push({ number: i, status });
    }
    return seats;
  };

  const seats = generateSeatLayout();
  const fare = 1299;
  const taxes = 199;
  const total = (fare + taxes) * selectedSeats.length;

  const handleSeatClick = (seatNumber: number, status: string) => {
    if (status === 'booked') return;
    
    setSelectedSeats(prev => {
      if (prev.includes(seatNumber)) {
        return prev.filter(s => s !== seatNumber);
      } else {
        return [...prev, seatNumber];
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-primary text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Complete Your Booking</h1>
                <p className="text-white/90">Volvo Travels • Delhi to Mumbai • 15 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Seat Selection & Passenger Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Seat Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Select Your Seats</CardTitle>
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-success rounded"></div>
                        <span>Available</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-secondary rounded"></div>
                        <span>Selected</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-muted rounded"></div>
                        <span>Booked</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Driver section */}
                    <div className="mb-6 text-center">
                      <div className="inline-block bg-muted px-4 py-2 rounded-lg text-sm font-medium">
                        🚗 Driver
                      </div>
                    </div>

                    {/* Seat Grid */}
                    <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
                      {seats.map((seat) => (
                        <motion.button
                          key={seat.number}
                          whileHover={{ scale: seat.status !== 'booked' ? 1.05 : 1 }}
                          whileTap={{ scale: seat.status !== 'booked' ? 0.95 : 1 }}
                          onClick={() => handleSeatClick(seat.number, seat.status)}
                          className={`
                            aspect-square rounded-lg text-sm font-medium transition-colors
                            ${seat.status === 'available' ? 'seat-available' : ''}
                            ${seat.status === 'selected' ? 'seat-selected' : ''}
                            ${seat.status === 'booked' ? 'seat-booked' : ''}
                          `}
                          disabled={seat.status === 'booked'}
                        >
                          {seat.number}
                        </motion.button>
                      ))}
                    </div>

                    {selectedSeats.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-4 bg-secondary/10 rounded-lg"
                      >
                        <p className="text-sm font-medium">
                          Selected Seats: {selectedSeats.map(s => `${s}`).join(", ")}
                        </p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Passenger Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Passenger Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {selectedSeats.map((seatNo, index) => (
                      <div key={seatNo} className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">Seat {seatNo}</Badge>
                          <span className="text-sm text-muted-foreground">Passenger {index + 1}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`name-${seatNo}`}>Full Name</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                id={`name-${seatNo}`}
                                placeholder="Enter full name"
                                className="pl-10"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`age-${seatNo}`}>Age</Label>
                            <Input
                              id={`age-${seatNo}`}
                              placeholder="Enter age"
                              type="number"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`email-${seatNo}`}>Email</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                id={`email-${seatNo}`}
                                placeholder="Enter email"
                                type="email"
                                className="pl-10"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`phone-${seatNo}`}>Phone Number</Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                id={`phone-${seatNo}`}
                                placeholder="Enter phone number"
                                className="pl-10"
                              />
                            </div>
                          </div>
                        </div>

                        {index < selectedSeats.length - 1 && <Separator />}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Booking Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Trip Details */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Route</span>
                      <span className="text-sm font-medium">Delhi → Mumbai</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Date</span>
                      <span className="text-sm font-medium">15 Jan 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Departure</span>
                      <span className="text-sm font-medium">22:30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Bus Type</span>
                      <span className="text-sm font-medium">AC Sleeper</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Fare Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Base Fare ({selectedSeats.length} seat{selectedSeats.length > 1 ? 's' : ''})</span>
                      <span className="text-sm">₹{fare * selectedSeats.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Taxes & Fees</span>
                      <span className="text-sm">₹{taxes * selectedSeats.length}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount</span>
                    <span className="text-primary">₹{total}</span>
                  </div>

                  <Button 
                    className="w-full btn-hero text-lg py-6"
                    disabled={selectedSeats.length === 0}
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Proceed to Payment
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By proceeding, you agree to our Terms & Conditions
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
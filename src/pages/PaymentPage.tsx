import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Download, Share2, Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import PaymentMethodForm from "@/components/PaymentMethodForm";

const PaymentPage = () => {
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState<{
    method: string;
    transactionId: string;
  } | null>(null);
  const navigate = useNavigate();

  // Mock booking data - in real app, this would come from routing state
  const bookingData = {
    operator: "Volvo Travels",
    busType: "AC Sleeper",
    route: "Delhi to Mumbai",
    departure: "22:30",
    arrival: "06:45+1",
    date: "Mon, 15 Jan 2024",
    seats: ["A1", "A2"],
    passengers: [
      { name: "John Doe", age: 32, gender: "Male" },
      { name: "Jane Doe", age: 28, gender: "Female" }
    ],
    baseFare: 1299,
    taxes: 129,
    convenience: 25,
    total: 1453
  };

  const handlePaymentComplete = (method: string, transactionId: string) => {
    setTransactionDetails({ method, transactionId });
    setPaymentComplete(true);
  };

  const downloadTicket = () => {
    // Mock PDF download
    console.log("Downloading ticket...");
  };

  const shareTicket = () => {
    // Mock share functionality
    console.log("Sharing ticket...");
  };

  if (paymentComplete && transactionDetails) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Success Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-success rounded-full mb-6">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Payment Successful!
              </h1>
              <p className="text-muted-foreground">
                Your bus ticket has been booked successfully
              </p>
            </motion.div>

            {/* Ticket Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="mb-8">
                <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-2">E-Ticket</CardTitle>
                      <div className="space-y-1">
                        <p className="text-white/90">Booking ID: {transactionDetails.transactionId}</p>
                        <p className="text-white/90">Payment Method: {transactionDetails.method.toUpperCase()}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      Confirmed
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Journey Details */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-4 flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-primary" />
                          Journey Details
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Route</span>
                            <span className="font-medium">{bookingData.route}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Bus Operator</span>
                            <span className="font-medium">{bookingData.operator}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Bus Type</span>
                            <span className="font-medium">{bookingData.busType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Date</span>
                            <span className="font-medium">{bookingData.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Departure</span>
                            <span className="font-medium">{bookingData.departure}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Arrival</span>
                            <span className="font-medium">{bookingData.arrival}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Seats</span>
                            <span className="font-medium">{bookingData.seats.join(", ")}</span>
                          </div>
                        </div>
                      </div>

                      {/* Passenger Details */}
                      <div>
                        <h3 className="font-semibold text-lg mb-4">Passenger Details</h3>
                        <div className="space-y-3">
                          {bookingData.passengers.map((passenger, index) => (
                            <div key={index} className="p-3 bg-muted rounded-lg">
                              <div className="font-medium">{passenger.name}</div>
                              <div className="text-sm text-muted-foreground">
                                Age: {passenger.age} • {passenger.gender} • Seat: {bookingData.seats[index]}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Fare Breakdown */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-4">Fare Breakdown</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span>Base Fare ({bookingData.seats.length} seats)</span>
                            <span>₹{bookingData.baseFare}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Taxes & Fees</span>
                            <span>₹{bookingData.taxes}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Convenience Fee</span>
                            <span>₹{bookingData.convenience}</span>
                          </div>
                          <div className="border-t pt-3">
                            <div className="flex justify-between font-bold text-lg">
                              <span>Total Paid</span>
                              <span className="text-primary">₹{bookingData.total}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* QR Code Placeholder */}
                      <div className="text-center">
                        <div className="w-32 h-32 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <span className="text-sm text-muted-foreground">QR Code</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Show this QR code while boarding
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={downloadTicket} className="btn-hero">
                  <Download className="h-5 w-5 mr-2" />
                  Download Ticket
                </Button>
                <Button variant="outline" onClick={shareTicket}>
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Ticket
                </Button>
                <Button variant="outline" onClick={() => navigate("/bookings")}>
                  View My Bookings
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        {/* Booking Summary Header */}
        <div className="bg-gradient-primary text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  {bookingData.route}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/90">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{bookingData.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{bookingData.departure} - {bookingData.arrival}</span>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {bookingData.seats.length} Seat{bookingData.seats.length > 1 ? 's' : ''}
                  </Badge>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <div className="text-2xl font-bold">₹{bookingData.total}</div>
                <div className="text-white/90">Total Amount</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="py-12">
          <PaymentMethodForm
            totalAmount={bookingData.total}
            onPaymentComplete={handlePaymentComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
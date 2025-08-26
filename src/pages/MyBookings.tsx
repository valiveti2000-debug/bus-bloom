import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Ticket, Download, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingBookings = [
    {
      id: "BB2024001",
      route: "Delhi → Mumbai",
      operator: "Volvo Travels",
      date: "2024-01-15",
      departure: "22:30",
      arrival: "06:45+1",
      seats: ["15", "16"],
      amount: 2598,
      status: "confirmed",
      busType: "AC Sleeper",
    },
    {
      id: "BB2024002",
      route: "Bangalore → Chennai",
      operator: "RedBus Express",
      date: "2024-01-20",
      departure: "23:00",
      arrival: "05:30+1",
      seats: ["12"],
      amount: 699,
      status: "confirmed",
      busType: "AC Semi Sleeper",
    },
  ];

  const pastBookings = [
    {
      id: "BB2023158",
      route: "Mumbai → Goa",
      operator: "Luxury Coaches",
      date: "2023-12-25",
      departure: "21:00",
      arrival: "06:30+1",
      seats: ["8"],
      amount: 799,
      status: "completed",
      busType: "Volvo Multi-Axle",
    },
    {
      id: "BB2023142",
      route: "Delhi → Manali",
      operator: "Hill Station Travels",
      date: "2023-12-10",
      departure: "20:30",
      arrival: "08:15+1",
      seats: ["5", "6"],
      amount: 1798,
      status: "completed",
      busType: "AC Sleeper",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-success text-success-foreground";
      case "completed":
        return "bg-muted text-muted-foreground";
      case "cancelled":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const BookingCard = ({ booking, showActions = true }: { booking: any; showActions?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4"
    >
      <Card className="hover:shadow-travel transition-shadow">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Booking Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Badge className={getStatusColor(booking.status)}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Booking ID: {booking.id}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-lg">{booking.route}</h3>
                  <p className="text-sm text-muted-foreground">{booking.operator}</p>
                  <Badge variant="outline" className="mt-1">{booking.busType}</Badge>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{new Date(booking.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{booking.departure} - {booking.arrival}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Ticket className="h-4 w-4 text-primary" />
                    <span>Seats: {booking.seats.join(", ")}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    ₹{booking.amount}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {booking.seats.length} passenger{booking.seats.length > 1 ? 's' : ''}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            {showActions && (
              <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-3">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Ticket
                </Button>
                {booking.status === "confirmed" && (
                  <>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Support
                    </Button>
                    <Button variant="destructive" size="sm">
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                My Bookings
              </h1>
              <p className="text-white/90 text-lg">
                Manage your bus tickets and travel history
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                <TabsTrigger value="upcoming">
                  Upcoming ({upcomingBookings.length})
                </TabsTrigger>
                <TabsTrigger value="past">
                  Past Trips ({pastBookings.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-6">
                {upcomingBookings.length > 0 ? (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Upcoming Journeys</h2>
                    {upcomingBookings.map((booking) => (
                      <BookingCard key={booking.id} booking={booking} />
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="max-w-md mx-auto">
                      <div className="text-6xl mb-4">🚌</div>
                      <h3 className="text-xl font-semibold mb-2">No Upcoming Trips</h3>
                      <p className="text-muted-foreground mb-6">
                        You don't have any upcoming bus bookings. Start planning your next journey!
                      </p>
                      <Button className="btn-hero">
                        Book Your Next Trip
                      </Button>
                    </div>
                  </motion.div>
                )}
              </TabsContent>

              <TabsContent value="past" className="space-y-6">
                {pastBookings.length > 0 ? (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Travel History</h2>
                    {pastBookings.map((booking) => (
                      <BookingCard key={booking.id} booking={booking} showActions={false} />
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="max-w-md mx-auto">
                      <div className="text-6xl mb-4">📋</div>
                      <h3 className="text-xl font-semibold mb-2">No Travel History</h3>
                      <p className="text-muted-foreground">
                        Your completed trips will appear here.
                      </p>
                    </div>
                  </motion.div>
                )}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star, IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedRoutes = () => {
  const routes = [
    {
      id: 1,
      from: "Delhi",
      to: "Mumbai",
      duration: "18h 30m",
      price: 1299,
      buses: 25,
      rating: 4.5,
      popular: true,
    },
    {
      id: 2,
      from: "Bangalore",
      to: "Chennai",
      duration: "6h 15m",
      price: 699,
      buses: 18,
      rating: 4.3,
      popular: false,
    },
    {
      id: 3,
      from: "Delhi",
      to: "Manali",
      duration: "12h 45m",
      price: 899,
      buses: 12,
      rating: 4.6,
      popular: true,
    },
    {
      id: 4,
      from: "Mumbai",
      to: "Goa",
      duration: "10h 20m",
      price: 799,
      buses: 20,
      rating: 4.4,
      popular: false,
    },
    {
      id: 5,
      from: "Kolkata",
      to: "Darjeeling",
      duration: "8h 30m",
      price: 599,
      buses: 8,
      rating: 4.2,
      popular: false,
    },
    {
      id: 6,
      from: "Chennai",
      to: "Pondicherry",
      duration: "3h 45m",
      price: 399,
      buses: 15,
      rating: 4.5,
      popular: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Routes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover India's most traveled bus routes with the best operators and unbeatable prices
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {routes.map((route) => (
            <motion.div key={route.id} variants={itemVariants}>
              <Card className="card-feature group hover:shadow-travel cursor-pointer h-full">
                <CardContent className="p-6">
                  {/* Route Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-lg font-semibold text-foreground">
                        {route.from}
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                      <div className="text-lg font-semibold text-foreground">
                        {route.to}
                      </div>
                    </div>
                    {route.popular && (
                      <Badge className="bg-secondary text-secondary-foreground">
                        Popular
                      </Badge>
                    )}
                  </div>

                  {/* Route Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{route.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{route.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {route.buses} buses available
                      </div>
                      <div className="flex items-center space-x-1 text-xl font-bold text-primary">
                        <IndianRupee className="h-4 w-4" />
                        <span>{route.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                    View Buses
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="px-8">
            View All Routes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRoutes;
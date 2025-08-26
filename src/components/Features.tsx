import { motion } from "framer-motion";
import { Shield, Clock, CreditCard, Headphones, MapPin, Wifi } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "100% secure booking with verified bus operators and safe payment gateway",
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Track your bus location in real-time and get live updates on arrival times",
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Pay via UPI, cards, wallets, or net banking - whatever suits you best",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with any queries or issues",
    },
    {
      icon: MapPin,
      title: "1000+ Routes",
      description: "Extensive network covering major cities and towns across India",
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "WiFi, charging points, entertainment systems, and comfortable seating",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose BusBloom?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the best in bus travel with our premium features and services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-feature text-center group-hover:shadow-travel">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6"
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
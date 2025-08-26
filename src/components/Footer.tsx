import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bus, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/story" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Bus Booking", href: "/book" },
        { name: "Route Map", href: "/routes" },
        { name: "Bus Operators", href: "/operators" },
        { name: "Travel Insurance", href: "/insurance" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Booking Guide", href: "/guide" },
        { name: "Cancellation", href: "/cancellation" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Refund Policy", href: "/refund" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  return (
    <footer className="bg-gradient-to-br from-muted via-background to-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <Link to="/" className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-primary p-3 rounded-xl"
                >
                  <Bus className="h-8 w-8 text-white" />
                </motion.div>
                <span className="text-2xl font-bold text-gradient">BusBloom</span>
              </Link>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                India's leading bus booking platform connecting travelers to their destinations 
                with comfort, safety, and reliability. Travel smart, travel with BusBloom.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>support@busbloom.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg bg-muted hover:bg-accent transition-colors ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 bg-gradient-primary rounded-2xl text-white"
          >
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h3 className="text-2xl font-bold">Stay Updated</h3>
              <p className="text-white/90">
                Get the latest offers, route updates, and travel tips delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button 
                  variant="secondary" 
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground">
              © 2024 BusBloom. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Made with ❤️ in India</span>
              <span>•</span>
              <span>Trusted by 1M+ travelers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
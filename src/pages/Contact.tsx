import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageSquare, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "24/7 customer support",
      contact: "+91 9876543210",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@busbloom.com",
      action: "Send Email",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 24/7",
      action: "Start Chat",
    },
    {
      icon: HeadphonesIcon,
      title: "WhatsApp",
      description: "Quick assistance",
      contact: "+91 9876543210",
      action: "Message Us",
    },
  ];

  const faqs = [
    {
      question: "How can I cancel my booking?",
      answer: "You can cancel your booking from the 'My Bookings' section. Cancellation charges may apply based on our policy.",
    },
    {
      question: "Can I modify my travel date?",
      answer: "Yes, you can modify your travel date subject to availability and fare difference. Contact support for assistance.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, credit/debit cards, net banking, and digital wallets like Paytm, PhonePe, etc.",
    },
    {
      question: "How do I get my refund?",
      answer: "Refunds are processed within 5-7 business days to the original payment method after successful cancellation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get in Touch
              </h1>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Have questions or need assistance? We're here to help you 24/7. 
                Reach out to us through any of the channels below.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-feature text-center group hover:shadow-travel">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {method.description}
                    </p>
                    <p className="font-medium text-primary mb-4">
                      {method.contact}
                    </p>
                    <Button className="w-full" variant="outline">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 9876543210" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full btn-hero">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* FAQ & Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Office Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Office</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Head Office</p>
                      <p className="text-muted-foreground">
                        123 Business Park, Bandra Kurla Complex<br />
                        Mumbai, Maharashtra 400051
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium text-center">
                      🚨 Emergency Support: 24/7 Available
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                      {index < faqs.length - 1 && <hr className="border-border" />}
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full mt-4">
                    View All FAQs
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
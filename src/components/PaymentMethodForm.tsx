import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Smartphone, Wallet, Building2, Check, ArrowRight, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";

interface PaymentMethodFormProps {
  totalAmount: number;
  onPaymentComplete?: (method: string, transactionId: string) => void;
}

const PaymentMethodForm = ({ totalAmount, onPaymentComplete }: PaymentMethodFormProps) => {
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    {
      id: "upi",
      name: "UPI Payment",
      icon: Smartphone,
      description: "Pay via Google Pay, PhonePe, Paytm",
      processingTime: "Instant",
      discount: 2,
      popular: true,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, RuPay accepted",
      processingTime: "2-3 minutes",
      discount: 0,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "wallet",
      name: "Digital Wallet",
      icon: Wallet,
      description: "Paytm, Amazon Pay, MobiKwik",
      processingTime: "Instant",
      discount: 1,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: "netbanking",
      name: "Net Banking",
      icon: Building2,
      description: "All major banks supported",
      processingTime: "3-5 minutes",
      discount: 0,
      color: "from-orange-500 to-red-600"
    }
  ];

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const transactionId = `BUS${Date.now()}${Math.random().toString(36).substr(2, 9)}`;
    onPaymentComplete?.(selectedMethod, transactionId);
    setIsProcessing(false);
  };

  const selectedMethodData = paymentMethods.find(m => m.id === selectedMethod);
  const discountAmount = selectedMethodData ? (totalAmount * selectedMethodData.discount) / 100 : 0;
  const finalAmount = totalAmount - discountAmount;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Complete Your Payment</h1>
        <p className="text-muted-foreground">Choose your preferred payment method</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-success" />
                <span>Select Payment Method</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <motion.div
                      key={method.id}
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        selectedMethod === method.id 
                          ? "border-primary bg-primary/5" 
                          : "border-border hover:border-primary/50"
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <RadioGroupItem value={method.id} id={method.id} />
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color}`}>
                              <method.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <Label htmlFor={method.id} className="font-semibold cursor-pointer">
                                  {method.name}
                                </Label>
                                {method.popular && (
                                  <Badge variant="secondary" className="text-xs">
                                    Most Popular
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">{method.description}</p>
                              <div className="flex items-center space-x-4 mt-2">
                                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                  <Zap className="h-3 w-3" />
                                  <span>{method.processingTime}</span>
                                </div>
                                {method.discount > 0 && (
                                  <Badge variant="outline" className="text-green-600 border-green-600">
                                    {method.discount}% off
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          {selectedMethod === method.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="h-6 w-6 bg-primary rounded-full flex items-center justify-center"
                            >
                              <Check className="h-4 w-4 text-white" />
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Payment Details Form */}
          {selectedMethod === "card" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Card Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input 
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input 
                        id="expiry"
                        placeholder="MM/YY"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input 
                        id="cvv"
                        placeholder="123"
                        className="mt-1"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input 
                        id="cardName"
                        placeholder="John Doe"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {selectedMethod === "upi" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>UPI Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Label htmlFor="upiId">UPI ID</Label>
                  <Input 
                    id="upiId"
                    placeholder="yourname@paytm"
                    className="mt-1"
                  />
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>

        {/* Payment Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Payment Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Base Fare</span>
                  <span>₹{totalAmount.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Payment Method Discount</span>
                    <span>-₹{discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Amount</span>
                    <span className="text-primary">₹{finalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="w-full btn-hero text-lg py-6"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>Pay ₹{finalAmount.toLocaleString()}</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                </Button>
              </motion.div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>100% Secure & Encrypted</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentMethodForm;
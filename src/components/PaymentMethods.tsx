import { motion } from "framer-motion";
import { CreditCard, Smartphone, Wallet, Building2 } from "lucide-react";
import paymentMethodsImg from "@/assets/payment-methods.jpg";

const PaymentMethods = () => {
  const methods = [
    {
      icon: Smartphone,
      title: "UPI Payments",
      description: "Pay instantly with Google Pay, PhonePe, Paytm, and other UPI apps",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: CreditCard,
      title: "Cards",
      description: "All major credit and debit cards accepted with secure payment",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Wallet,
      title: "Digital Wallets",
      description: "Paytm, Amazon Pay, MobiKwik, and other popular wallets",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Building2,
      title: "Net Banking",
      description: "Direct payment from your bank account with all major banks",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Multiple Payment Options
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose from a variety of secure payment methods that suit your preference. 
              Fast, secure, and hassle-free transactions guaranteed.
            </p>

            <div className="space-y-6">
              {methods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} shadow-lg group-hover:scale-110 transition-transform`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800"
            >
              <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                <span className="text-sm font-medium">🔒 100% Secure Payments</span>
              </div>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                All transactions are encrypted and protected by industry-standard security protocols
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={paymentMethodsImg}
                alt="Payment Methods"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20" />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-white dark:bg-card p-4 rounded-xl shadow-lg"
            >
              <div className="text-2xl">💳</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 bg-white dark:bg-card p-4 rounded-xl shadow-lg"
            >
              <div className="text-2xl">📱</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
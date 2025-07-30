"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, CreditCard, Gift, Users, Shield, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    message: ""
  });

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation logic here
    console.log("Donation submitted:", {
      amount: selectedAmount || customAmount,
      donorInfo
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warmth/5 to-warmth/10">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-warmth/10 to-warmth/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-warmth/10 rounded-full mb-6">
              <Heart className="h-10 w-10 text-warmth" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your generous donation helps us provide exceptional care and create meaningful experiences for our elderly residents. Every contribution makes a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Donation Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Make a Donation</h2>
              
              <form onSubmit={handleDonation} className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                          selectedAmount === amount
                            ? "border-warmth bg-warmth/5 text-warmth"
                            : "border-border hover:border-warmth/50"
                        }`}
                      >
                        <span className="text-lg font-semibold">${amount}</span>
                      </button>
                    ))}
                  </div>
                  
                  {/* Custom Amount */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full pl-8 pr-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-warmth/20 focus:border-warmth transition-colors"
                    />
                  </div>
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-warmth/20 focus:border-warmth transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-warmth/20 focus:border-warmth transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      value={donorInfo.message}
                      onChange={(e) => setDonorInfo({...donorInfo, message: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-warmth/20 focus:border-warmth transition-colors resize-none"
                      placeholder="Share why you're making this donation..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-warmth text-warmth-foreground py-4 rounded-xl font-semibold text-lg hover:bg-warmth/90 transition-colors flex items-center justify-center gap-2"
                >
                  <CreditCard className="h-5 w-5" />
                  Donate Securely
                </button>
              </form>
            </motion.div>

            {/* Benefits & Impact */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Impact Stats */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Your Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">200+ Residents</p>
                      <p className="text-sm text-muted-foreground">Directly supported by donations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Gift className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">$50K+ Raised</p>
                      <p className="text-sm text-muted-foreground">In the last year alone</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">100% Transparent</p>
                      <p className="text-sm text-muted-foreground">All funds go directly to care</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Trust */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Secure & Trusted</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-muted-foreground">SSL Encrypted Transactions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-muted-foreground">PCI DSS Compliant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-muted-foreground">Tax Deductible Donations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-muted-foreground">Instant Receipt</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-warmth/10 to-warmth/5 rounded-2xl p-8">
                <blockquote className="text-lg italic text-foreground mb-4">
                  "Knowing that my donation directly improves the lives of elderly residents gives me peace of mind. The transparency and care shown here is remarkable."
                </blockquote>
                <cite className="text-sm text-muted-foreground">— Sarah Johnson, Monthly Donor</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
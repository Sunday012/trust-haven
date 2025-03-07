"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Lock, TrendingUp } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Decentralized Rental Marketplace
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight glow-text">
              A Secure Home Rental Experience
            </h1>
            <p className="text-lg text-foreground/80 max-w-lg">
              TrustHaven eliminates rental scams and disputes with blockchain-powered smart contracts, ensuring secure
              transactions and building verifiable rental history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary/80 hover:bg-primary animate-pulse-glow">
                Find Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary/50">
                List Your Property
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-foreground/80">Secure Escrow</span>
              </div>
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-foreground/80">Smart Contracts</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-foreground/80">Credit Building</span>
              </div>
            </div>
          </div>
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
              <img
                src="/big-building.jpg"
                alt="Modern apartment with smart contract security"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-primary">Featured Property</p>
                    <h3 className="text-lg font-bold">Luxury Smart Apartment</h3>
                    <p className="text-sm">Secured by TrustHaven Smart Contracts</p>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/20">
                    <p className="text-primary font-bold">2.5 ETH/mo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background/80 z-50 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary/20 shadow-lg">
              <p className="text-sm font-medium">100% Secure Transactions</p>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <p className="text-xs text-foreground/70">Protected by Smart Contracts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useEffect, useState } from "react"
import { Shield, FileText, Wallet, Star, TrendingUp } from "lucide-react"

export function FeatureSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Escrow",
      description: "Rent and deposits are held in smart contracts, only released when conditions are met.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Smart Contract Leases",
      description: "Lease terms are stored on-chain, making them immutable and automatically enforced.",
    },
    {
      icon: <Wallet className="h-10 w-10 text-primary" />,
      title: "Wallet Integration",
      description: "Connect your Sui wallet to sign leases, pay rent, and manage your properties.",
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Reputation System",
      description: "Build an on-chain rental history that follows you and rewards good tenants and landlords.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Credit Building",
      description: "Use your rental history for DeFi lending and improved financial opportunities.",
    },
  ]

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">Revolutionizing Rental Agreements</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            TrustHaven leverages blockchain technology to solve the biggest problems in traditional rental markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                activeFeature === index
                  ? "bg-primary/10 border border-primary/30 shadow-lg shadow-primary/10"
                  : "bg-secondary/50 border border-border/40 hover:bg-secondary"
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`mb-4 transition-transform duration-300 ${activeFeature === index ? "scale-110" : "scale-100"}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary/50 border border-border/40 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">How TrustHaven Works</h3>
              <p className="text-foreground/80 mb-6">
                Our platform uses Sui blockchain technology to create trustless rental agreements between landlords and
                tenants.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="text-sm">Connect your wallet and browse verified property listings</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="text-sm">Sign a smart contract lease with immutable terms</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="text-sm">Deposit funds into escrow that are only released when conditions are met</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <p className="text-sm">Build your on-chain rental reputation with each successful lease</p>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden border border-primary/20 shadow-lg shadow-primary/10">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="TrustHaven platform demonstration"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary/20 shadow-lg">
                <p className="text-sm font-medium">Transparent & Trustless</p>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <p className="text-xs text-foreground/70">No middlemen required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


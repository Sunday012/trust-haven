import { ArrowRight, FileText, Wallet, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HowItWorksSection() {
  const steps = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Create Smart Contract Lease",
      description: "Landlords create property listings with detailed terms. Tenants apply with their wallet.",
    },
    {
      icon: <Wallet className="h-10 w-10 text-primary" />,
      title: "Secure Escrow Payments",
      description: "Rent and deposits are held in escrow, only released when contract conditions are met.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Automated Enforcement",
      description: "Smart contracts automatically enforce lease terms, eliminating disputes and fraud.",
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Build Rental History",
      description: "Every successful lease builds your on-chain rental reputation for future opportunities.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">How TrustHaven Works</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Our blockchain-powered platform makes renting secure, transparent, and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 h-full flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-4 mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/70">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-background/80 backdrop-blur-sm rounded-xl p-8 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Secure, Transparent, Decentralized</h3>
              <p className="text-foreground/80 mb-6">
                TrustHaven eliminates the need for intermediaries, reduces costs, and provides a trustless environment
                for rental agreements.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <p className="text-sm">No more security deposit disputes</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <p className="text-sm">Eliminate rental scams and fraud</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <p className="text-sm">Build verifiable rental history</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <p className="text-sm">Automatic rent payments and enforcement</p>
                </li>
              </ul>
              <Link href="/how-it-works">
                <Button className="bg-primary/80 hover:bg-primary">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden border border-primary/20 shadow-lg shadow-primary/10">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="TrustHaven smart contract demonstration"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary/20 shadow-lg">
                <p className="text-sm font-medium">Powered by Sui Blockchain</p>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <p className="text-xs text-foreground/70">Fast, secure, and scalable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


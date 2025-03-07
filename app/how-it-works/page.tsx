import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Wallet, Shield, Star, Check } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="lightning"></div>
      <Navbar />

      <main className="pt-24 pb-12">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 glow-text">How TrustHaven Works</h1>
              <p className="text-lg text-foreground/80">
                Our blockchain-powered platform revolutionizes the rental experience by eliminating fraud, automating
                agreements, and building verifiable rental history.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">The Problem with Traditional Rentals</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-destructive/20 rounded-full p-1 mr-3 mt-1">
                      <span className="text-xs font-bold">✗</span>
                    </div>
                    <div>
                      <p className="font-medium">Scams & Fraud</p>
                      <p className="text-sm text-foreground/70">Fake landlords collect deposits and disappear</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-destructive/20 rounded-full p-1 mr-3 mt-1">
                      <span className="text-xs font-bold">✗</span>
                    </div>
                    <div>
                      <p className="font-medium">Trust Issues</p>
                      <p className="text-sm text-foreground/70">
                        Renters fear landlords might not return their deposit
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-destructive/20 rounded-full p-1 mr-3 mt-1">
                      <span className="text-xs font-bold">✗</span>
                    </div>
                    <div>
                      <p className="font-medium">Legal Disputes</p>
                      <p className="text-sm text-foreground/70">Contract terms can be manipulated or broken</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-destructive/20 rounded-full p-1 mr-3 mt-1">
                      <span className="text-xs font-bold">✗</span>
                    </div>
                    <div>
                      <p className="font-medium">No Rental History</p>
                      <p className="text-sm text-foreground/70">
                        Good renters don't get rewarded for their track record
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden border border-primary/20 shadow-lg shadow-primary/10">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Traditional rental problems"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 relative">
                <div className="rounded-xl overflow-hidden border border-primary/20 shadow-lg shadow-primary/10">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="TrustHaven solution"
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
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">The TrustHaven Solution</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Smart Contract Leases</p>
                      <p className="text-sm text-foreground/70">
                        Immutable agreements that can't be altered or disputed
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Secure Escrow System</p>
                      <p className="text-sm text-foreground/70">
                        Deposits held in smart contracts, only released when conditions are met
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Decentralized Dispute Resolution</p>
                      <p className="text-sm text-foreground/70">
                        Fair arbitration through DAO-based voting if issues arise
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">On-chain Rental History</p>
                      <p className="text-sm text-foreground/70">Build verifiable credit history that follows you</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-xl p-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Core Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                  <div className="bg-primary/10 rounded-full p-4 mb-4 inline-block">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Listing & Discovery</h3>
                  <p className="text-sm text-foreground/70">
                    Landlords create listings with property details, rental terms, and conditions. Tenants browse
                    properties and apply via their wallet.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                  <div className="bg-primary/10 rounded-full p-4 mb-4 inline-block">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Smart Contract Leases</h3>
                  <p className="text-sm text-foreground/70">
                    Smart contracts store lease terms (rent, deposit, duration, rules). Both parties sign on-chain – no
                    middlemen.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                  <div className="bg-primary/10 rounded-full p-4 mb-4 inline-block">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Rental Payments & Deposits</h3>
                  <p className="text-sm text-foreground/70">
                    Tenant deposits rent into escrow (Sui smart contract). Funds are only released if conditions are
                    met.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                  <div className="bg-primary/10 rounded-full p-4 mb-4 inline-block">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Dispute Resolution</h3>
                  <p className="text-sm text-foreground/70">
                    If a dispute arises, an arbitration system (or DAO-based voting) can resolve it. Tenants and
                    landlords build an on-chain rental reputation.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                  <div className="bg-primary/10 rounded-full p-4 mb-4 inline-block">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Rental History & Credit</h3>
                  <p className="text-sm text-foreground/70">
                    Good tenants build an on-chain credit history that future landlords can verify. Option to use rental
                    history for DeFi lending.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                  <div className="bg-primary/10 rounded-full p-4 mb-4 inline-block">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Verification System</h3>
                  <p className="text-sm text-foreground/70">
                    Properties and landlords are verified through a decentralized verification process. Ensures all
                    listings are legitimate and as described.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Experience Secure Rentals?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/properties">
                  <Button size="lg" className="bg-primary/80 hover:bg-primary animate-pulse-glow">
                    Browse Properties
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary/50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


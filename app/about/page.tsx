import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, Shield, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="lightning"></div>
      <Navbar />

      <main className="pt-24 pb-12">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 glow-text">About TrustHaven</h1>
              <p className="text-lg text-foreground/80">
                We're on a mission to revolutionize the rental market with blockchain technology, making it more secure,
                transparent, and rewarding for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-foreground/80 mb-4">
                  TrustHaven was founded in 2023 by a team of blockchain enthusiasts and real estate professionals who
                  experienced firsthand the problems with traditional rental agreements.
                </p>
                <p className="text-foreground/80 mb-4">
                  After witnessing countless rental scams, deposit disputes, and the lack of incentives for good rental
                  behavior, we decided to build a solution that leverages the power of blockchain technology.
                </p>
                <p className="text-foreground/80">
                  Our platform uses smart contracts on the Sui blockchain to create trustless rental agreements,
                  automate payments, and build verifiable rental history that rewards good tenants and landlords.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden border border-primary/20 shadow-lg shadow-primary/10">
                  <img src="/placeholder.svg?height=400&width=600" alt="TrustHaven team" className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary/20 shadow-lg">
                  <p className="text-sm font-medium">Founded in 2023</p>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <p className="text-xs text-foreground/70">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-xl p-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 text-center">
                  <div className="bg-primary/10 rounded-full p-4 mb-4 mx-auto inline-block">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Security</h3>
                  <p className="text-sm text-foreground/70">
                    We prioritize the security of our users' funds and data through robust smart contracts and
                    encryption.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 text-center">
                  <div className="bg-primary/10 rounded-full p-4 mb-4 mx-auto inline-block">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Transparency</h3>
                  <p className="text-sm text-foreground/70">
                    All transactions and agreements are recorded on the blockchain, ensuring complete transparency.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 text-center">
                  <div className="bg-primary/10 rounded-full p-4 mb-4 mx-auto inline-block">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Community</h3>
                  <p className="text-sm text-foreground/70">
                    We're building a community of responsible landlords and tenants who value trust and fairness.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 text-center">
                  <div className="bg-primary/10 rounded-full p-4 mb-4 mx-auto inline-block">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Innovation</h3>
                  <p className="text-sm text-foreground/70">
                    We continuously innovate to improve the rental experience through blockchain technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 relative">
                <div className="rounded-xl overflow-hidden border border-primary/20 shadow-lg shadow-primary/10">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="TrustHaven team working"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Team</h2>
                <p className="text-foreground/80 mb-4">
                  TrustHaven is built by a diverse team of blockchain developers, real estate experts, and user
                  experience designers who are passionate about creating a better rental marketplace.
                </p>
                <p className="text-foreground/80 mb-4">
                  Our team combines decades of experience in both traditional real estate and cutting-edge blockchain
                  technology to create a platform that addresses the real problems in the rental market.
                </p>
                <p className="text-foreground/80">
                  We're backed by leading venture capital firms and blockchain investors who share our vision for a
                  decentralized rental ecosystem.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join the TrustHaven Revolution</h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
                Whether you're a landlord looking to secure your property or a tenant seeking a trustworthy rental
                experience, TrustHaven is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/properties">
                  <Button size="lg" className="bg-primary/80 hover:bg-primary animate-pulse-glow">
                    Get Started
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


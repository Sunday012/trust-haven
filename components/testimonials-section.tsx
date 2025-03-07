"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tenant",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "TrustHaven eliminated my fears about rental scams. The smart contract ensured my deposit was safe, and I built a great rental history in the process.",
    },
    {
      name: "Michael Chen",
      role: "Property Owner",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "As a landlord, I've dealt with payment issues and disputes. TrustHaven's escrow system ensures I get paid on time, every time. It's revolutionary.",
    },
    {
      name: "Jessica Williams",
      role: "Real Estate Investor",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The transparency of TrustHaven's platform has transformed how I manage my rental properties. Smart contracts have eliminated paperwork and disputes.",
    },
    {
      name: "David Rodriguez",
      role: "First-time Renter",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "I was nervous about renting my first apartment, but TrustHaven made it simple and secure. The verification process gave me confidence in my landlord.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">What Our Users Say</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Hear from landlords and tenants who have experienced the security and convenience of TrustHaven.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 left-0 text-primary/20">
            <Quote className="h-24 w-24" />
          </div>

          <Card className="bg-secondary/50 backdrop-blur-sm border-primary/10 shadow-lg shadow-primary/5">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
                    <img
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-1">
                    <Quote className="h-4 w-4" />
                  </div>
                </div>

                <blockquote className="text-center mb-6 relative">
                  <p className="text-lg italic mb-4">"{testimonials[activeIndex].quote}"</p>
                  <footer>
                    <div className="font-bold">{testimonials[activeIndex].name}</div>
                    <div className="text-sm text-foreground/70">{testimonials[activeIndex].role}</div>
                  </footer>
                </blockquote>

                <div className="flex justify-center space-x-2 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeIndex === index ? "bg-primary w-6" : "bg-primary/30"
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-lg font-medium mb-1">Secure Transactions</p>
              <p className="text-sm text-foreground/70">All rental agreements protected by smart contracts</p>
            </div>
          </div>
          <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-lg font-medium mb-1">Properties Listed</p>
              <p className="text-sm text-foreground/70">Growing marketplace of verified rentals</p>
            </div>
          </div>
          <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-primary mb-2">0%</div>
              <p className="text-lg font-medium mb-1">Dispute Rate</p>
              <p className="text-sm text-foreground/70">Smart contracts eliminate common rental disputes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


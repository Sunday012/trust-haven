import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { PropertyListingSection } from "@/components/property-listing-section"
import { HowItWorksSection } from "@/components/how-it-works"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="lightning"></div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <PropertyListingSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}


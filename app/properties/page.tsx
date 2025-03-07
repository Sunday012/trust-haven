import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PropertyListingSection } from "@/components/property-listing-section"
import { Search, SlidersHorizontal, MapPin } from "lucide-react"

export default function PropertiesPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="lightning"></div>
      <Navbar />

      <main className="pt-24 pb-12">
        <section className="py-8 md:py-12 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center glow-text">Find Your Perfect Rental</h1>

              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg shadow-primary/5">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Location" className="pl-10" />
                  </div>
                  <div className="flex gap-4">
                    <Select defaultValue="any">
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Type</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="studio">Studio</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-primary/80 hover:bg-primary">
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <SlidersHorizontal className="h-4 w-4 mr-2 text-primary" />
                  <h3 className="text-sm font-medium">Advanced Filters</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price Range (ETH)</label>
                    <Slider defaultValue={[0.5, 3]} min={0} max={5} step={0.1} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0.5 ETH</span>
                      <span>3 ETH</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bedrooms</label>
                    <Select defaultValue="any">
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Smart Contract Only</label>
                    <Select defaultValue="yes">
                      <SelectTrigger>
                        <SelectValue placeholder="Yes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PropertyListingSection />
      </main>

      <Footer />
    </div>
  )
}


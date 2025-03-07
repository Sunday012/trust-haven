"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Bed, Bath, Square, Wallet, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export function PropertyListingSection() {
  const [activeTab, setActiveTab] = useState("all")

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "San Francisco, CA",
      price: "1.5 ETH/month",
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "apartment",
      image: "/large-office-buildings.jpg",
      verified: true,
      smartContract: true,
    },
    {
      id: 2,
      title: "Luxury Waterfront Condo",
      location: "Miami, FL",
      price: "3 ETH/month",
      beds: 3,
      baths: 2.5,
      sqft: 1800,
      type: "condo",
      image: "/house-isolated-field.jpg",
      verified: true,
      smartContract: true,
    },
    {
      id: 3,
      title: "Cozy Studio in Tech District",
      location: "Austin, TX",
      price: "0.8 ETH/month",
      beds: 1,
      baths: 1,
      sqft: 650,
      type: "studio",
      image: "/yellow-house.jpg",
      verified: true,
      smartContract: true,
    },
    {
      id: 4,
      title: "Family Home with Garden",
      location: "Seattle, WA",
      price: "2.2 ETH/month",
      beds: 4,
      baths: 3,
      sqft: 2200,
      type: "house",
      image: "/3d-building.jpg",
      verified: false,
      smartContract: true,
    },
    {
      id: 5,
      title: "Urban Loft with City Views",
      location: "New York, NY",
      price: "2.8 ETH/month",
      beds: 2,
      baths: 2,
      sqft: 1400,
      type: "loft",
      image: "/yellow-house.jpg",
      verified: true,
      smartContract: true,
    },
    {
      id: 6,
      title: "Beachside Cottage",
      location: "San Diego, CA",
      price: "1.9 ETH/month",
      beds: 3,
      baths: 2,
      sqft: 1600,
      type: "house",
      image: "/large-office-buildings.jpg",
      verified: true,
      smartContract: false,
    },
  ]

  const filteredProperties =
    activeTab === "all" ? properties : properties.filter((property) => property.type === activeTab)

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">Featured Properties</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Browse our selection of verified properties secured by smart contracts.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-secondary/50">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="apartment">Apartments</TabsTrigger>
              <TabsTrigger value="house">Houses</TabsTrigger>
              <TabsTrigger value="condo">Condos</TabsTrigger>
              <TabsTrigger value="studio">Studios</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <Card
                  key={property.id}
                  className="property-card overflow-hidden bg-secondary/50 backdrop-blur-sm border-border/40"
                >
                  <div className="relative">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      {property.verified && (
                        <Badge variant="secondary" className="bg-primary/80 text-white">
                          Verified
                        </Badge>
                      )}
                      {property.smartContract && (
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                          <Shield className="h-3 w-3 mr-1" />
                          Smart Contract
                        </Badge>
                      )}
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-foreground">
                        {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-lg font-bold mb-1">{property.title}</h3>
                    <div className="flex items-center text-sm text-foreground/70 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </div>
                    <div className="flex justify-between text-sm mb-3">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1 text-primary" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1 text-primary" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1 text-primary" />
                        <span>{property.sqft} sqft</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary font-bold">
                        <Wallet className="h-4 w-4 mr-1" />
                        {property.price}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full bg-primary/80 hover:bg-primary">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link href="/properties">
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary/50">
              View All Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}


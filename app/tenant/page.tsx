"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useWallet } from "@suiet/wallet-kit"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Home, Search, LogOut, Wallet, Filter, MapPin } from "lucide-react"
import TenantProfile from "@/components/tenantProfile"

export default function TenantDashboard() {
  const router = useRouter()
  const { connected, account } = useWallet()
  const [activeTab, setActiveTab] = useState("browse")
  const [priceRange, setPriceRange] = useState([0.1, 1.0])
  const [searchTerm, setSearchTerm] = useState("")

  // Mock property listings
  const [properties, setProperties] = useState([
    {
      id: "1",
      title: "Modern Apartment in Downtown",
      address: "123 Blockchain Ave, Crypto City",
      price: 0.5,
      bedrooms: 2,
      bathrooms: 1,
      image: "/placeholder.svg?height=200&width=300",
      landlord: "0x123...abc",
      featured: true,
    },
    {
      id: "2",
      title: "Cozy Studio near Tech Hub",
      address: "456 Token Street, Web3 Valley",
      price: 0.3,
      bedrooms: 1,
      bathrooms: 1,
      image: "/placeholder.svg?height=200&width=300",
      landlord: "0x456...def",
      featured: false,
    },
    {
      id: "3",
      title: "Luxury Penthouse with View",
      address: "789 Crypto Lane, Blockchain Heights",
      price: 0.8,
      bedrooms: 3,
      bathrooms: 2,
      image: "/placeholder.svg?height=200&width=300",
      landlord: "0x789...ghi",
      featured: true,
    },
    {
      id: "4",
      title: "Family Home with Garden",
      address: "101 NFT Road, Metaverse",
      price: 0.6,
      bedrooms: 4,
      bathrooms: 2.5,
      image: "/placeholder.svg?height=200&width=300",
      landlord: "0xabc...123",
      featured: false,
    },
  ])

  // Check if user is a tenant
  useEffect(() => {
    if (!connected || !account) {
      router.push("/")
      return
    }

    const savedRole = localStorage.getItem(`sui_role_${account.address}`)
    if (savedRole !== "tenant") {
      router.push("/")
    }
  }, [connected, account, router])

  // Logout function
  const logout = () => {
    if (account) {
      localStorage.removeItem(`sui_role_${account.address}`)
      router.push("/")
    }
  }

  // Filter properties based on search and price range
  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1]
    return matchesSearch && matchesPrice
  })

  if (!connected || !account) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
            Tenant Dashboard
          </h1>
          <p className="text-gray-500 mt-1">Find and manage your rental properties</p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 border-blue-500/20"
            onClick={() => setActiveTab("profile")}
          >
            <Wallet className="h-4 w-4" />
            <span className="font-mono text-xs truncate max-w-[100px]">
              {account.address.substring(0, 6)}...{account.address.substring(account.address.length - 4)}
            </span>
          </Button>

          <Button variant="destructive" size="sm" className="flex items-center gap-2" onClick={logout}>
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger
            value="browse"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-cyan-500/20"
          >
            <Search className="h-4 w-4 mr-2" />
            Browse Properties
          </TabsTrigger>
          <TabsTrigger
            value="applications"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-cyan-500/20"
          >
            <Home className="h-4 w-4 mr-2" />
            My Applications
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-cyan-500/20"
          >
            <Wallet className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
        </TabsList>

        <TabsContent value="browse">
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search by location, property name..."
                  className="pl-10 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border-blue-500/20"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-center">
                  <Label className="text-sm text-gray-500 flex items-center gap-1">
                    <Filter className="h-3 w-3" />
                    Price Range (SUI)
                  </Label>
                  <span className="text-sm font-medium">
                    {priceRange[0]} - {priceRange[1]} SUI
                  </span>
                </div>
                <Slider
                  defaultValue={[0.1, 1.0]}
                  max={1.0}
                  min={0.1}
                  step={0.1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties
                .filter((p) => p.featured)
                .map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">All Available Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="applications">
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-4">
              <Home className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-medium mb-2">No Active Applications</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              You haven't applied to any properties yet. Browse available properties and submit your first application.
            </p>
            <Button
              onClick={() => setActiveTab("browse")}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              <Search className="h-4 w-4 mr-2" />
              Browse Properties
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="profile">
          <TenantProfile />
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Property Card Component
function PropertyCard({ property }: { property: any }) {
  return (
    <Card className="overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all">
      <div className="relative h-48">
        <img src={property.image || "/placeholder.svg"} alt={property.title} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 px-2 py-1 rounded bg-blue-500/80 text-white text-xs font-medium">
          {property.price} SUI/month
        </div>
      </div>
      <CardHeader>
        <CardTitle>{property.title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {property.address}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 text-sm">
          <div>
            <span className="font-medium">{property.bedrooms}</span> Bed
          </div>
          <div>
            <span className="font-medium">{property.bathrooms}</span> Bath
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          View Details
        </Button>
        <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700" size="sm">
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  )
}

// Label Component
function Label({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>
}


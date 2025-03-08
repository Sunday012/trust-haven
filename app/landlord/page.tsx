"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useWallet } from "@suiet/wallet-kit"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Plus, Home, LogOut, Wallet } from "lucide-react"
import LandlordProfile from "@/components/landlordProfile"
import CreateListingForm from "@/components/create-listing"

export default function LandlordDashboard() {
  const router = useRouter()
  const { connected, account } = useWallet()
  const [activeTab, setActiveTab] = useState("dashboard")
  const [showCreateListing, setShowCreateListing] = useState(false)
  const [listings, setListings] = useState([
    {
      id: "1",
      title: "Modern Apartment in Downtown",
      address: "123 Blockchain Ave, Crypto City",
      price: "0.5 SUI per month",
      image: "/placeholder.svg?height=200&width=300",
      status: "Available",
    },
    {
      id: "2",
      title: "Cozy Studio near Tech Hub",
      address: "456 Token Street, Web3 Valley",
      price: "0.3 SUI per month",
      image: "/placeholder.svg?height=200&width=300",
      status: "Rented",
    },
  ])

  // Check if user is a landlord
  useEffect(() => {
    if (!connected || !account) {
      router.push("/")
      return
    }

    const savedRole = localStorage.getItem(`sui_role_${account.address}`)
    if (savedRole !== "landlord") {
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

  if (!connected || !account) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-white">
            Landlord Dashboard
          </h1>
          <p className="text-gray-500 mt-1">Manage your properties and rental listings</p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 border-purple-500/20"
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
            value="dashboard"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-blue-500/20"
          >
            <Home className="h-4 w-4 mr-2" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger
            value="listings"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-blue-500/20"
          >
            <Building2 className="h-4 w-4 mr-2" />
            My Listings
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-blue-500/20"
          >
            <Wallet className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
              <CardHeader>
                <CardTitle>Total Properties</CardTitle>
                <CardDescription>Your listed properties</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{listings.length}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
              <CardHeader>
                <CardTitle>Active Rentals</CardTitle>
                <CardDescription>Currently rented properties</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{listings.filter((l) => l.status === "Rented").length}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
              <CardHeader>
                <CardTitle>Available Properties</CardTitle>
                <CardDescription>Ready to be rented</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{listings.filter((l) => l.status === "Available").length}</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Recent Listings</h2>
            <Button
              onClick={() => setShowCreateListing(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create New Listing
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <Card
                key={listing.id}
                className="overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <div className="relative h-48">
                  <img
                    src={listing.image || "/large-office-building.jpg"}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium ${
                      listing.status === "Available" ? "bg-green-500/80 text-white" : "bg-blue-500/80 text-white"
                    }`}
                  >
                    {listing.status}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{listing.title}</CardTitle>
                  <CardDescription>{listing.address}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-lg">{listing.price}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="secondary" size="sm">
                    Edit Listing
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="listings">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">My Properties</h2>
            <Button
              onClick={() => setShowCreateListing(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create New Listing
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <Card
                key={listing.id}
                className="overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <div className="relative h-48">
                  <img
                    src={listing.image || "/large-office-building.jpg"}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium ${
                      listing.status === "Available" ? "bg-green-500/80 text-white" : "bg-blue-500/80 text-white"
                    }`}
                  >
                    {listing.status}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{listing.title}</CardTitle>
                  <CardDescription>{listing.address}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-lg">{listing.price}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="secondary" size="sm">
                    Edit Listing
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="profile">
          <LandlordProfile />
        </TabsContent>
      </Tabs>

      {showCreateListing && <CreateListingForm onClose={() => setShowCreateListing(false)} />}
    </div>
  )
}


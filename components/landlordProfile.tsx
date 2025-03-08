"use client"

import { useWallet } from "@suiet/wallet-kit"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, CheckCircle, Clock, Wallet, Shield, Award } from "lucide-react"
import { useState } from "react"

export default function LandlordProfile() {
  const { account } = useWallet()
  const [copied, setCopied] = useState(false)

  // Mock blockchain data
  const profileData = {
    totalTransactions: 47,
    reputation: 4.8,
    memberSince: "May 2023",
    verificationLevel: "Verified",
    totalListings: 3,
    successfulRentals: 12,
    balance: "12.45 SUI",
  }

  const copyAddress = () => {
    if (account) {
      navigator.clipboard.writeText(account.address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!account) return null

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        <Card className="flex-1 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Blockchain Profile
            </CardTitle>
            <CardDescription>Your on-chain identity and reputation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-black/20 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Wallet Address</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-gray-400 hover:text-white"
                  onClick={copyAddress}
                >
                  {copied ? <CheckCircle className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </Button>
              </div>
              <p className="font-mono text-sm break-all">{account.address}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-gray-400">Member Since</span>
                </div>
                <p className="font-medium">{profileData.memberSince}</p>
              </div>

              <div className="p-4 bg-black/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-400">Verification</span>
                </div>
                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                  {profileData.verificationLevel}
                </Badge>
              </div>

              <div className="p-4 bg-black/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-gray-400">Reputation</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">{profileData.reputation}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${i < Math.floor(profileData.reputation) ? "text-yellow-400" : "text-gray-600"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-black/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Wallet className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm text-gray-400">Balance</span>
                </div>
                <p className="font-medium">{profileData.balance}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
              Landlord Stats
            </CardTitle>
            <CardDescription>Your performance as a property owner</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-black/20 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-400">{profileData.totalListings}</p>
                  <p className="text-sm text-gray-400 mt-1">Total Properties</p>
                </div>

                <div className="p-6 bg-black/20 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-400">{profileData.successfulRentals}</p>
                  <p className="text-sm text-gray-400 mt-1">Successful Rentals</p>
                </div>
              </div>

              <div className="p-4 bg-black/20 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Transaction History</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-black/30 rounded">
                    <div>
                      <p className="font-medium">Rent Payment Received</p>
                      <p className="text-xs text-gray-400">Yesterday at 14:32</p>
                    </div>
                    <p className="text-green-400">+0.5 SUI</p>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-black/30 rounded">
                    <div>
                      <p className="font-medium">Deposit Returned</p>
                      <p className="text-xs text-gray-400">3 days ago at 09:15</p>
                    </div>
                    <p className="text-red-400">-0.2 SUI</p>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-black/30 rounded">
                    <div>
                      <p className="font-medium">Rent Payment Received</p>
                      <p className="text-xs text-gray-400">Last week at 14:32</p>
                    </div>
                    <p className="text-green-400">+0.5 SUI</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


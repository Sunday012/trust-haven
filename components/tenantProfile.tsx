"use client"

import { useWallet } from "@suiet/wallet-kit"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, CheckCircle, Clock, Wallet, Shield, User, Bell } from "lucide-react"
import { useState } from "react"

export default function TenantProfile() {
  const { account } = useWallet()
  const [copied, setCopied] = useState(false)

  // Mock blockchain data
  const profileData = {
    totalTransactions: 23,
    reputation: 4.9,
    memberSince: "August 2023",
    verificationLevel: "Verified",
    rentalHistory: 2,
    activeApplications: 0,
    balance: "5.72 SUI",
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
        <Card className="flex-1 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
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
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-400">Member Since</span>
                </div>
                <p className="font-medium">{profileData.memberSince}</p>
              </div>

              <div className="p-4 bg-black/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm text-gray-400">Verification</span>
                </div>
                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                  {profileData.verificationLevel}
                </Badge>
              </div>

              <div className="p-4 bg-black/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <User className="h-4 w-4 text-yellow-400" />
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

        <Card className="flex-1 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
              Tenant Stats
            </CardTitle>
            <CardDescription>Your rental history and activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-black/20 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-400">{profileData.rentalHistory}</p>
                  <p className="text-sm text-gray-400 mt-1">Rental History</p>
                </div>

                <div className="p-6 bg-black/20 rounded-lg text-center">
                  <p className="text-3xl font-bold text-cyan-400">{profileData.activeApplications}</p>
                  <p className="text-sm text-gray-400 mt-1">Active Applications</p>
                </div>
              </div>

              <div className="p-4 bg-black/20 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Transaction History</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-black/30 rounded">
                    <div>
                      <p className="font-medium">Rent Payment</p>
                      <p className="text-xs text-gray-400">Last week at 10:15</p>
                    </div>
                    <p className="text-red-400">-0.5 SUI</p>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-black/30 rounded">
                    <div>
                      <p className="font-medium">Security Deposit</p>
                      <p className="text-xs text-gray-400">Last month at 14:22</p>
                    </div>
                    <p className="text-red-400">-0.2 SUI</p>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-black/30 rounded">
                    <div>
                      <p className="font-medium">Wallet Funded</p>
                      <p className="text-xs text-gray-400">Last month at 09:45</p>
                    </div>
                    <p className="text-green-400">+2.0 SUI</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-black/20 rounded-lg">
                <h3 className="flex items-center gap-2 text-lg font-medium mb-4">
                  <Bell className="h-4 w-4 text-blue-400" />
                  Notifications
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <p className="font-medium">Rent Due in 5 Days</p>
                    <p className="text-sm text-gray-400">Don't forget to pay your monthly rent</p>
                  </div>

                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="font-medium">Rental Agreement Renewal</p>
                    <p className="text-sm text-gray-400">Your current agreement expires in 30 days</p>
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


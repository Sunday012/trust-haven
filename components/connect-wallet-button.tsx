"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
// import { useToast } from "@/components/ui/use-toast"

type WalletProps = {
  address: string
}

export function ConnectWalletButton({address} : WalletProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
//   const { toast } = useToast()

  const connectWallet = async () => {
    try {
      // This is a mock implementation
      // In a real app, you would use the Sui wallet adapter
      setTimeout(() => {
        const mockAddress = "0x" + Math.random().toString(16).slice(2, 12)
        setWalletAddress(mockAddress)
        setIsConnected(true)
        // toast({
        //   title: "Wallet Connected",
        //   description: `Connected to ${mockAddress.slice(0, 6)}...${mockAddress.slice(-4)}`,
        // })
      }, 1000)
    } catch (error) {
      console.error("Error connecting wallet:", error)
    //   toast({
    //     title: "Connection Failed",
    //     description: "Failed to connect wallet. Please try again.",
    //     variant: "destructive",
    //   })
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress("")
    // toast({
    //   title: "Wallet Disconnected",
    //   description: "Your wallet has been disconnected.",
    // })
  }

  if (address) {
    return (
      <Button variant="outline" onClick={disconnectWallet} className="border-primary/30 hover:border-primary/50">
        <Wallet className="h-4 w-4 mr-2 text-primary" />
        {address.slice(0, 6)}...{address.slice(-4)}
      </Button>
    )
  }

  return (
    <Button onClick={connectWallet} className="bg-primary/80 hover:bg-primary animate-pulse-glow">
      <Wallet className="h-4 w-4 mr-2" />
      Connect Wallet
    </Button>
  )
}


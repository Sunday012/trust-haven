"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface WalletContextType {
  isConnected: boolean
  walletAddress: string | null
  connect: () => Promise<void>
  disconnect: () => void
}

const WalletContext = createContext<WalletContextType>({
  isConnected: false,
  walletAddress: null,
  connect: async () => {},
  disconnect: () => {},
})

export const useWallet = () => useContext(WalletContext)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  const connect = async () => {
    try {
      // Mock implementation - in a real app, you would use the Sui wallet adapter
      const mockAddress = "0x" + Math.random().toString(16).slice(2, 12)
      setWalletAddress(mockAddress)
      setIsConnected(true)
    } catch (error) {
      console.error("Error connecting wallet:", error)
    }
  }

  const disconnect = () => {
    setIsConnected(false)
    setWalletAddress(null)
  }

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        walletAddress,
        connect,
        disconnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}


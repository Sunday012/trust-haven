"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ConnectButton, useWallet } from "@suiet/wallet-kit"
import "@suiet/wallet-kit/style.css"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Home, Building2 } from "lucide-react"

// User role type
type UserRole = "landlord" | "tenant" | "unknown"

export default function WalletConnection() {
  const router = useRouter()
  const { connected, account } = useWallet()

  const [userRole, setUserRole] = useState<UserRole>("unknown")
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Check if user already has a role when wallet connects
  useEffect(() => {
    if (connected && account) {
      const savedRole = localStorage.getItem(`sui_role_${account.address}`)
      if (savedRole && (savedRole === "landlord" || savedRole === "tenant")) {
        setUserRole(savedRole as UserRole)
        // Navigate to the appropriate dashboard
        router.push(savedRole === "landlord" ? "/landlord" : "/tenant")
      } else {
        // No saved role, open modal for role selection
        setIsModalOpen(true)
      }
    }
  }, [connected, account, router])

  // Select role function (simplified without authentication)
  const selectRole = (role: UserRole) => {
    if (!connected || !account) return

    // Save role to localStorage
    localStorage.setItem(`sui_role_${account.address}`, role)

    // Update state
    setUserRole(role)

    // Close the modal
    setIsModalOpen(false)

    // Navigate to the appropriate dashboard
    router.push(role === "landlord" ? "/landlord" : "/tenant")
  }

  // Logout function
  const logout = () => {
    if (account) {
      localStorage.removeItem(`sui_role_${account.address}`)
    }
    setUserRole("unknown")
    setIsModalOpen(false)
  }

  return (
    <div className="flex items-center gap-3">
      <div className="connect-section">
        <ConnectButton />
      </div>

      {connected && account && (
        <>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            {userRole !== "unknown" && (
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20 hover:from-purple-500/20 hover:to-blue-500/20"
                onClick={() => {
                  router.push(userRole === "landlord" ? "/landlord" : "/tenant")
                }}
              >
                {userRole === "landlord" ? <Building2 className="h-4 w-4" /> : <Home className="h-4 w-4" />}
                {userRole.charAt(0).toUpperCase() + userRole.slice(1)} Dashboard
              </Button>
            )}

            <DialogContent className="sm:max-w-md bg-gradient-to-b from-gray-900 to-gray-950 border border-purple-500/20 text-white">
              <DialogHeader>
                <DialogTitle className="text-center text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Select Your Role
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 py-6">
                <p className="text-center text-gray-300">Choose your role to continue to the appropriate dashboard</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    className="h-32 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border border-purple-400/30 rounded-xl"
                    onClick={() => selectRole("landlord")}
                  >
                    <Building2 className="h-8 w-8" />
                    <span className="text-lg font-medium">I am a Landlord</span>
                  </Button>

                  <Button
                    className="h-32 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 border border-blue-400/30 rounded-xl"
                    onClick={() => selectRole("tenant")}
                  >
                    <Home className="h-8 w-8" />
                    <span className="text-lg font-medium">I am a Tenant</span>
                  </Button>
                </div>

                <div className="flex justify-center">
                  <div className="bg-gray-800/50 rounded-lg p-3 max-w-xs text-center">
                    <p className="text-xs text-gray-400">
                      Connected wallet:
                      <span className="block mt-1 font-mono text-xs text-gray-300 truncate">{account.address}</span>
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  )
}


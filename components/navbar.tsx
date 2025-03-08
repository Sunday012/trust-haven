"use client"

import { useState } from "react"
import Link from "next/link"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { Menu, X, Home, Search, Building2, FileText, MessageSquare } from "lucide-react"
import WalletConnection from "./wallet-connection"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold glow-text">TrustHaven</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/properties" className="text-foreground/80 hover:text-primary transition-colors">
              Properties
            </Link>
            <Link href="/how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <WalletConnection />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="flex items-center text-foreground hover:bg-secondary rounded-md px-3 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5 mr-2" />
              Home
            </Link>
            <Link
              href="/properties"
              className="flex items-center text-foreground hover:bg-secondary rounded-md px-3 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-5 w-5 mr-2" />
              Properties
            </Link>
            <Link
              href="/how-it-works"
              className="flex items-center text-foreground hover:bg-secondary rounded-md px-3 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="h-5 w-5 mr-2" />
              How It Works
            </Link>
            <Link
              href="/about"
              className="flex items-center text-foreground hover:bg-secondary rounded-md px-3 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              About
            </Link>
            <div className="pt-2">
              <WalletConnection />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}


import Link from "next/link"
import { Building2, Twitter, Facebook, Instagram, Github, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold glow-text">TrustHaven</span>
            </Link>
            <p className="text-foreground/70 mb-4 max-w-md">
              A decentralized rental marketplace where landlords and tenants use smart contracts to automate lease
              agreements and enforce terms trustlessly.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-foreground/70 hover:text-primary transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-foreground/70 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-foreground/70 hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-foreground/70 hover:text-primary transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-foreground/70 hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span className="text-foreground/70">San Francisco, CA</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <a href="mailto:info@trusthaven.io" className="text-foreground/70 hover:text-primary transition-colors">
                  info@trusthaven.io
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <a href="tel:+1234567890" className="text-foreground/70 hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-foreground/60">
              © {new Date().getFullYear()} TrustHaven. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end text-sm">
              <Link href="/privacy" className="text-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal" className="text-foreground/60 hover:text-primary transition-colors">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


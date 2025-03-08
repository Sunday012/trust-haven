"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Upload, Building2 } from "lucide-react"
import { Textarea } from "./ui/textarea"

interface CreateListingFormProps {
  onClose: () => void
}

export default function CreateListingForm({ onClose }: CreateListingFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    propertyType: "",
    image: null as File | null,
  })

  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFormData((prev) => ({ ...prev, image: file }))

      // Create preview
      const reader = new FileReader()
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating listing with data:", formData)
    // Here you would normally send this data to your backend or blockchain
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] overflow-auto h-[calc(100vh-40px)] no-scrollbar bg-gradient-to-b from-gray-900 to-gray-950 border border-purple-500/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center gap-2">
            <Building2 className="h-5 w-5" />
            Create New Property Listing
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Property Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Modern Apartment in Downtown"
                className="bg-gray-800/50 border-gray-700"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Monthly Rent (SUI)</Label>
              <Input
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.5"
                className="bg-gray-800/50 border-gray-700"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Property Address</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Blockchain Ave, Crypto City"
                className="bg-gray-800/50 border-gray-700"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type</Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value) => handleSelectChange("propertyType", value)}
              >
                <SelectTrigger className="bg-gray-800/50 border-gray-700">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <Select value={formData.bedrooms} onValueChange={(value) => handleSelectChange("bedrooms", value)}>
                <SelectTrigger className="bg-gray-800/50 border-gray-700">
                  <SelectValue placeholder="Select number of bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <Select value={formData.bathrooms} onValueChange={(value) => handleSelectChange("bathrooms", value)}>
                <SelectTrigger className="bg-gray-800/50 border-gray-700">
                  <SelectValue placeholder="Select number of bathrooms" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 1.5, 2, 2.5, 3, 3.5, 4].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Property Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your property in detail..."
              className="bg-gray-800/50 border-gray-700 min-h-[100px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Property Image</Label>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center cursor-pointer hover:border-purple-500/50 transition-colors">
              <input type="file" id="image" className="hidden" accept="image/*" onChange={handleImageChange} />
              <label htmlFor="image" className="cursor-pointer flex flex-col items-center justify-center gap-2">
                {imagePreview ? (
                  <div className="relative w-full">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Property preview"
                      className="max-h-[200px] mx-auto rounded-lg object-cover"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6"
                      onClick={(e) => {
                        e.preventDefault()
                        setImagePreview(null)
                        setFormData((prev) => ({ ...prev, image: null }))
                      }}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ) : (
                  <>
                    <Upload className="h-8 w-8 text-gray-500" />
                    <p className="text-sm text-gray-500">Click to upload an image of your property</p>
                  </>
                )}
              </label>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} className="border-gray-700">
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Create Listing
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}


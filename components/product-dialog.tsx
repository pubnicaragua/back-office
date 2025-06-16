"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface ProductDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductDialog({ open, onOpenChange }: ProductDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    sku: "",
    cost: "",
    price: "",
    stock: "Unidad",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Agregar producto</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Producto</Label>
            <Input
              id="name"
              placeholder="Nombre del producto"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Categoría</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chocolate">Chocolate</SelectItem>
                <SelectItem value="bebidas">Bebidas</SelectItem>
                <SelectItem value="snacks">Snacks</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              placeholder="Descripción del producto"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label>Stock medido por</Label>
            <RadioGroup value={formData.stock} onValueChange={(value) => setFormData({ ...formData, stock: value })}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Unidad" id="unidad" />
                <Label htmlFor="unidad">Unidad</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Kilogramo" id="kilogramo" />
                <Label htmlFor="kilogramo">Kilogramo</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cost">Costo unitario/kg</Label>
              <Input
                id="cost"
                type="number"
                placeholder="0.00"
                value={formData.cost}
                onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Precio unitario/kg</Label>
              <Input
                id="price"
                type="number"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sku">SKU</Label>
            <Input
              id="sku"
              placeholder="SKU del producto"
              value={formData.sku}
              onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="initial-stock">Agregar stock actual</Label>
            <Input id="initial-stock" placeholder="Cantidad inicial" />
          </div>

          <Button type="submit" className="w-full">
            Guardar producto
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

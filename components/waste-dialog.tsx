"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface WasteDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WasteDialog({ open, onOpenChange }: WasteDialogProps) {
  const [formData, setFormData] = useState({
    product: "",
    wasteType: "",
    quantity: "",
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
          <DialogTitle>Reporte de mermas</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="product">Buscar</Label>
            <Input
              id="product"
              placeholder="Buscar producto..."
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="waste-type">Tipo de merma</Label>
            <Select
              value={formData.wasteType}
              onValueChange={(value) => setFormData({ ...formData, wasteType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vencimiento">Vencimiento</SelectItem>
                <SelectItem value="daño">Daño físico</SelectItem>
                <SelectItem value="robo">Robo</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Cantidad merma</Label>
            <Input
              id="quantity"
              type="number"
              placeholder="Cantidad perdida"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full">
            Reportar merma
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

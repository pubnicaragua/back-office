"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductTable } from "@/components/product-table"
import { ProductDialog } from "@/components/product-dialog"
import { WasteDialog } from "@/components/waste-dialog"
import { Plus, Search, AlertTriangle } from "lucide-react"

export default function ProductsPage() {
  const [showProductDialog, setShowProductDialog] = useState(false)
  const [showWasteDialog, setShowWasteDialog] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Inventario</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setShowWasteDialog(true)}
            className="text-red-600 border-red-200 hover:bg-red-50"
          >
            <AlertTriangle className="h-4 w-4 mr-2" />
            Reportar merma
          </Button>
          <Button onClick={() => setShowProductDialog(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Agregar producto
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Productos totales</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ProductTable searchTerm={searchTerm} />
        </CardContent>
      </Card>

      <ProductDialog open={showProductDialog} onOpenChange={setShowProductDialog} />

      <WasteDialog open={showWasteDialog} onOpenChange={setShowWasteDialog} />
    </div>
  )
}

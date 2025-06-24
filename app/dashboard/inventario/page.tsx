"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InventoryUpload } from "@/components/inventory-upload"
import { StockMovementTable } from "@/components/stock-movement-table"

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Gestión de Inventario</h1>
      </div>

      {/* Mass Import Section */}
      <Card>
        <CardHeader>
          <CardTitle>Importación masiva de stock</CardTitle>
        </CardHeader>
        <CardContent>
          <InventoryUpload />
        </CardContent>
      </Card>

      {/* Stock Movement History */}
      <Card>
        <CardHeader>
          <CardTitle>Historial de movimientos de stock</CardTitle>
        </CardHeader>
        <CardContent>
          <StockMovementTable />
        </CardContent>
      </Card>
    </div>
  )
}

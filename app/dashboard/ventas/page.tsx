"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SalesChart } from "@/components/sales-chart"
import { SalesTable } from "@/components/sales-table"
import { FilterDialog } from "@/components/filter-dialog"
import { Filter, Download } from "lucide-react"

export default function SalesPage() {
  const [showFilterDialog, setShowFilterDialog] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Ventas</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowFilterDialog(true)}>
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Sales Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">$67,150</div>
            <div className="text-sm text-gray-500">Ventas totales</div>
            <div className="text-xs text-green-600">+12%</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">$67,150</div>
            <div className="text-sm text-gray-500">Ingresos</div>
            <div className="text-xs text-blue-600">+8%</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">$67,150</div>
            <div className="text-sm text-gray-500">Unidades vendidas</div>
            <div className="text-xs text-purple-600">+15%</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">$67,150</div>
            <div className="text-sm text-gray-500">Nº de ventas</div>
            <div className="text-xs text-orange-600">+5%</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">$67,150</div>
            <div className="text-sm text-gray-500">Ticket promedio</div>
            <div className="text-xs text-red-600">-2%</div>
          </CardContent>
        </Card>
      </div>

      {/* Sales Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Ventas históricas</CardTitle>
        </CardHeader>
        <CardContent>
          <SalesChart type="line" />
        </CardContent>
      </Card>

      {/* Sales Table */}
      <Card>
        <CardHeader>
          <CardTitle>Historial de ventas</CardTitle>
        </CardHeader>
        <CardContent>
          <SalesTable />
        </CardContent>
      </Card>

      <FilterDialog open={showFilterDialog} onOpenChange={setShowFilterDialog} />
    </div>
  )
}

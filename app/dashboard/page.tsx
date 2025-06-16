"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MetricCard } from "@/components/metric-card"
import { SalesChart } from "@/components/sales-chart"
import { TrendingUp, Package, AlertTriangle, Truck } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">General</h1>
        <div className="text-sm text-gray-500">Última actualización: {new Date().toLocaleString("es-ES")}</div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Ventas totales" value="$67,150" change="+12%" trend="up" icon={TrendingUp} color="green" />
        <MetricCard title="Stock crítico" value="23" change="+5" trend="up" icon={Package} color="orange" />
        <MetricCard title="Mermas reportadas" value="8" change="-2" trend="down" icon={AlertTriangle} color="red" />
        <MetricCard title="Despachos pendientes" value="15" change="+3" trend="up" icon={Truck} color="blue" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ventas por tienda</CardTitle>
          </CardHeader>
          <CardContent>
            <SalesChart type="pie" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Productividad mensual</CardTitle>
          </CardHeader>
          <CardContent>
            <SalesChart type="pie" />
          </CardContent>
        </Card>
      </div>

      {/* Sales Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Tendencia de ventas</CardTitle>
        </CardHeader>
        <CardContent>
          <SalesChart type="area" />
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const salesData = [
  {
    id: "1",
    date: "2024-01-15",
    time: "14:30",
    cashier: "Juan Pérez",
    total: "$45.50",
    items: 3,
    customer: "Cliente 001",
  },
  {
    id: "2",
    date: "2024-01-15",
    time: "14:25",
    cashier: "María García",
    total: "$23.75",
    items: 2,
    customer: "Cliente 002",
  },
  {
    id: "3",
    date: "2024-01-15",
    time: "14:20",
    cashier: "Juan Pérez",
    total: "$67.20",
    items: 5,
    customer: "Cliente 003",
  },
]

export function SalesTable() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fecha</TableHead>
            <TableHead>Hora</TableHead>
            <TableHead>Cajero</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Artículos</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Estado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {salesData.map((sale) => (
            <TableRow key={sale.id}>
              <TableCell>{sale.date}</TableCell>
              <TableCell>{sale.time}</TableCell>
              <TableCell>{sale.cashier}</TableCell>
              <TableCell className="font-medium">{sale.total}</TableCell>
              <TableCell>{sale.items}</TableCell>
              <TableCell>{sale.customer}</TableCell>
              <TableCell>
                <Badge variant="default">Completada</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">Mostrando 3 de 150 ventas</div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  )
}

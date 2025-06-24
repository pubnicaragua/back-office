"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const movements = [
  {
    id: "1",
    date: "2024-06-20",
    type: "Entrada",
    product: "Super B Chocolate 25g",
    quantity: 100,
    unit: "Unidades",
    source: "Proveedor A",
    user: "Admin 1",
  },
  {
    id: "2",
    date: "2024-06-19",
    type: "Salida",
    product: "Bebida Energética 500ml",
    quantity: 10,
    unit: "Unidades",
    source: "Venta POS",
    user: "Cajero 3",
  },
  {
    id: "3",
    date: "2024-06-18",
    type: "Merma",
    product: "Snack Salado 100g",
    quantity: 2,
    unit: "Unidades",
    source: "Vencimiento",
    user: "Admin 2",
  },
  {
    id: "4",
    date: "2024-06-18",
    type: "Entrada",
    product: "Agua Mineral 1L",
    quantity: 50,
    unit: "Unidades",
    source: "Proveedor B",
    user: "Admin 1",
  },
  {
    id: "5",
    date: "2024-06-17",
    type: "Salida",
    product: "Super B Chocolate 25g",
    quantity: 5,
    unit: "Unidades",
    source: "Venta POS",
    user: "Cajero 1",
  },
]

export function StockMovementTable() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fecha</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Producto</TableHead>
            <TableHead>Cantidad</TableHead>
            <TableHead>Unidad</TableHead>
            <TableHead>Origen/Destino</TableHead>
            <TableHead>Usuario</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movements.map((movement) => (
            <TableRow key={movement.id}>
              <TableCell>{movement.date}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    movement.type === "Entrada" ? "default" : movement.type === "Salida" ? "secondary" : "destructive"
                  }
                >
                  {movement.type}
                </Badge>
              </TableCell>
              <TableCell className="font-medium">{movement.product}</TableCell>
              <TableCell>{movement.quantity}</TableCell>
              <TableCell>{movement.unit}</TableCell>
              <TableCell>{movement.source}</TableCell>
              <TableCell>{movement.user}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Mostrando {movements.length} de {movements.length} movimientos
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  )
}

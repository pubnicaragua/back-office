"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, AlertTriangle } from "lucide-react"

interface ProductTableProps {
  searchTerm: string
}

const products = [
  {
    id: "1",
    name: "Super B",
    stock: 1,
    category: "Chocolate",
    description: "25g",
    sku: "SKU2024001",
    cost: 16.5,
    price: 34.5,
    available: true,
  },
  {
    id: "2",
    name: "Super B",
    stock: 1,
    category: "Chocolate",
    description: "25g",
    sku: "SKU2024002",
    cost: 16.5,
    price: 34.5,
    available: true,
  },
  {
    id: "3",
    name: "Super B",
    stock: 1,
    category: "Chocolate",
    description: "25g",
    sku: "SKU2024003",
    cost: 16.5,
    price: 34.5,
    available: true,
  },
  {
    id: "4",
    name: "Super B",
    stock: 1,
    category: "Chocolate",
    description: "25g",
    sku: "SKU2024004",
    cost: 16.5,
    price: 34.5,
    available: true,
  },
  {
    id: "5",
    name: "Super B",
    stock: 1,
    category: "Chocolate",
    description: "25g",
    sku: "SKU2024005",
    cost: 16.5,
    price: 34.5,
    available: true,
  },
]

export function ProductTable({ searchTerm }: ProductTableProps) {
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Producto</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Costo</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Disponible</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {product.stock}
                  {product.stock <= 1 && <AlertTriangle className="h-4 w-4 text-orange-500" />}
                </div>
              </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell>${product.cost}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                <Badge variant={product.available ? "default" : "secondary"}>{product.available ? "Sí" : "No"}</Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Mostrando {filteredProducts.length} de {products.length} productos
        </div>
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

"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Store,
  Truck,
  AlertTriangle,
  RotateCcw,
  Settings,
  BarChart3,
  LogOut,
} from "lucide-react"

const menuItems = [
  {
    title: "General",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Productos", // Changed title from "Inventario" to "Productos" for clarity
    url: "/dashboard/productos",
    icon: Package,
  },
  {
    title: "Gestión de Inventario", // New entry for stock movements and mass import
    url: "/dashboard/inventario",
    icon: Package, // You can choose a different icon if preferred, e.g., Box, Warehouse
  },
  {
    title: "Ventas",
    url: "/dashboard/ventas",
    icon: ShoppingCart,
  },
  {
    title: "Usuarios",
    url: "/dashboard/usuarios",
    icon: Users,
  },
  {
    title: "Tiendas",
    url: "/dashboard/tiendas",
    icon: Store,
  },
  {
    title: "Recepción de despacho",
    url: "/dashboard/despachos",
    icon: Truck,
  },
  {
    title: "Mermas",
    url: "/dashboard/mermas",
    icon: AlertTriangle,
  },
  {
    title: "Devoluciones",
    url: "/dashboard/devoluciones",
    icon: RotateCcw,
  },
  {
    title: "Reportes",
    url: "/dashboard/reportes",
    icon: BarChart3,
  },
  {
    title: "Configuraciones",
    url: "/dashboard/configuraciones",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4">
        <div className="bg-black text-white px-4 py-2 rounded-lg font-bold text-xl text-center">Solvendo</div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={pathname === item.url}>
                <Link href={item.url}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/login">
                <LogOut className="h-4 w-4" />
                <span>Cerrar sesión</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

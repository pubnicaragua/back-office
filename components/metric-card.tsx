import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: LucideIcon
  color: "green" | "red" | "blue" | "orange"
}

const colorClasses = {
  green: "text-green-600 bg-green-50",
  red: "text-red-600 bg-red-50",
  blue: "text-blue-600 bg-blue-50",
  orange: "text-orange-600 bg-orange-50",
}

export function MetricCard({ title, value, change, trend, icon: Icon, color }: MetricCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className={`text-sm ${trend === "up" ? "text-green-600" : "text-red-600"}`}>{change}</p>
          </div>
          <div className={`p-3 rounded-full ${colorClasses[color]}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

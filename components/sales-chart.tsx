"use client"

interface SalesChartProps {
  type: "pie" | "line" | "area"
}

export function SalesChart({ type }: SalesChartProps) {
  if (type === "pie") {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#3b82f6"
              strokeWidth="20"
              strokeDasharray="75 25"
              strokeDashoffset="0"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#ef4444"
              strokeWidth="20"
              strokeDasharray="15 85"
              strokeDashoffset="-75"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="20"
              strokeDasharray="10 90"
              strokeDashoffset="-90"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold">75%</div>
              <div className="text-sm text-gray-500">Ventas</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === "area") {
    return (
      <div className="h-64 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-end justify-center p-4">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 180 Q 100 120 200 140 T 400 100 L 400 200 L 0 200 Z"
            fill="url(#areaGradient)"
            stroke="#3b82f6"
            strokeWidth="2"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className="h-64 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full h-full">
        <path d="M 0 180 Q 100 120 200 140 T 400 100" fill="none" stroke="#3b82f6" strokeWidth="3" />
        <circle cx="0" cy="180" r="4" fill="#3b82f6" />
        <circle cx="100" cy="120" r="4" fill="#3b82f6" />
        <circle cx="200" cy="140" r="4" fill="#3b82f6" />
        <circle cx="300" cy="110" r="4" fill="#3b82f6" />
        <circle cx="400" cy="100" r="4" fill="#3b82f6" />
      </svg>
    </div>
  )
}


import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"




const statusConfigs = {
  activo: {
    label: "disponible",
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-600",
  },
  desconectado: {
    label: "desconectado",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
  ocupado: {
    label: "ocupado",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
  hibernando: {
    label: "hibernando",
    bgColor: "bg-amber-100",
    textColor: "text-amber-600",
  },
}



export default function StatusDropdown({ initialStatus = "activo", className, onChange }) {
  const [status, setStatus] = useState(initialStatus)

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus)
    if (onChange) {
      onChange(newStatus)
    }
  }

  const currentConfig = statusConfigs[status]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
          currentConfig.bgColor,
          currentConfig.textColor,
          className,
        )}
      >
        {currentConfig.label}
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {Object.entries(statusConfigs).map(([key, config]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => handleStatusChange(key)}
            className={cn("flex items-center gap-2 cursor-pointer", status === key && "font-medium")}
          >
            <div
              className={cn(
                "h-2 w-2 rounded-full",
                key === "activo"
                  ? "bg-emerald-500"
                  : key === "desconectado"
                    ? "bg-gray-500"
                    : key === "ocupado"
                      ? "bg-red-500"
                      : "bg-amber-500",
              )}
            />
            {config.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


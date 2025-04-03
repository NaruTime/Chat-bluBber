"use client"

import { File, Folder, FileText, FileType, Leaf } from "lucide-react"
import { useState } from "react"

export default function FileIconsContainer() {
  const [activeIndex, setActiveIndex] = useState(null)
    
  const icons = [
    { icon: File, color: "bg-blue-100", hoverColor: "hover:bg-blue-200" },
    { icon: Folder, color: "bg-amber-50", hoverColor: "hover:bg-amber-100" },
    { icon: FileText, color: "bg-teal-100", hoverColor: "hover:bg-teal-200" },
    { icon: FileType, color: "bg-red-100", hoverColor: "hover:bg-red-200" },
    { icon: Leaf, color: "bg-green-100", hoverColor: "hover:bg-green-200" },
  ]

  return (
    <div className="flex flex-col items-center space-y-4 p-4 rounded-lg">
      {icons.map((item, index) => {
        const IconComponent = item.icon
        return (
          <button
            key={index}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
              item.color
            } ${item.hoverColor} ${activeIndex === index ? "ring-2 ring-offset-2 ring-gray-300" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <IconComponent className="w-5 h-5 text-gray-600" />
          </button>
        )
      })}
    </div>
  )
}


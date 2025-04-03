"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function SearchInput({ placeholder = "Search", className, onChange }) {
  return (
    <div className="relative ">
      <Input
        type="text"
        placeholder={placeholder}
        className="h-12 pl-4 pr-12 rounded-sm bg-[#f0f3f8] shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-none placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-200"
        onChange={(e) => onChange?.(e.target.value)}
      />
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
  )
}


"use client"

import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import FileModal from '../components/FileModal'
import { useState } from 'react'

function StatsCard({ label, value, variant = "default", className }) {
  return (
    <div className={cn("p-4 rounded-xl", variant === "primary" ? "bg-emerald-100" : "bg-gray-100", className)}>
      <div className="text-sm text-gray-600">{label}</div>
      <div className={cn("text-2xl font-semibold mt-1", variant === "primary" ? "text-emerald-700" : "text-gray-700")}>
        {value}
      </div>
    </div>
  )
}

export default function FileStats({ totalFiles, selectedFiles, fileTypes, className }) {
  const [selectedType, setSelectedType] = useState(null)

  const filesByType = {
    Documents: [
      { name: 'Informe Asamblea.pdf' },
      { name: 'Presupuesto 2025.xlsx' },
      { name: 'Detallado.docx' },
    ],
    Photos: [
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (104).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla 2024-12-25 232139.png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (3).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (111).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (110).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (104).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla 2024-12-25 232139.png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (3).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (111).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (110).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (104).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla 2024-12-25 232139.png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (3).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (111).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (110).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (104).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla 2024-12-25 232139.png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (3).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (111).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (110).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (104).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla 2024-12-25 232139.png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (3).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (111).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (110).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (104).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla 2024-12-25 232139.png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (3).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (111).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (110).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (104).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla 2024-12-25 232139.png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (3).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (111).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (110).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (104).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla 2024-12-25 232139.png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (3).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (111).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (110).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (104).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla 2024-12-25 232139.png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (3).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (111).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (110).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (104).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla 2024-12-25 232139.png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (3).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (111).png' },
      { name: 'foto_grupo.jpg', url: '../img/Captura de pantalla (110).png' },
    ],
    links: [
      { name: 'https://youtu.be/uGVeRo_JIJQ?si=2r011RBq611rklBA' },
      { name: 'https://youtu.be/1gUCu2e_JiM?si=U3XpLjmgi4yv9atL' },
      { name: 'https://youtu.be/uGVeRo_JIJQ?si=2r011RBq611rklBA' },
      { name: 'https://youtu.be/1gUCu2e_JiM?si=U3XpLjmgi4yv9atL' },
      { name: 'https://youtu.be/uGVeRo_JIJQ?si=2r011RBq611rklBA' },
      { name: 'https://youtu.be/1gUCu2e_JiM?si=U3XpLjmgi4yv9atL' },
      { name: 'https://youtu.be/uGVeRo_JIJQ?si=2r011RBq611rklBA' },
      { name: 'https://youtu.be/1gUCu2e_JiM?si=U3XpLjmgi4yv9atL' },
      { name: 'https://youtu.be/uGVeRo_JIJQ?si=2r011RBq611rklBA' },
      { name: 'https://youtu.be/1gUCu2e_JiM?si=U3XpLjmgi4yv9atL' },
    ],
    Votes: [
      { name: 'Votación 1.pdf' },
      { name: 'Resultados.xlsx' }
    ]
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <StatsCard label="All files" value={totalFiles} variant="primary" />
        <StatsCard label="Selected" value={selectedFiles} />
      </div>

      {/* File Types List */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">File type</h3>
        <div className="space-y-1">
          {fileTypes.map((type) => (
            <button
              key={type.name}
              onClick={() => setSelectedType(type.name)}
              className="w-full flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className={
                type.name === "links"
                  ? "h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600"
                  : type.name === "Photos"
                  ? "h-10 w-10 rounded-lg bg-[#f4ebca] flex items-center justify-center text-[#c3b083]"
                  : type.name === "Documents"
                  ? "h-10 w-10 rounded-lg bg-[#fcdfd8] flex items-center justify-center text-[#b97368]"
                  : type.name === "Votes"
                  ? "h-10 w-10 rounded-lg bg-[#e4f7f7] flex items-center justify-center text-[#05a28b]"
                  : ""
              }>
                {type.icon}
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{type.name}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex justify-start">
                  <p className="text-sm text-gray-500">
                    {type.count} files, {type.size}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal cuando hay selección */}
      {selectedType && (
        <FileModal
          type={selectedType}
          files={filesByType[selectedType]}
          onClose={() => setSelectedType(null)}
        />
      )}
    </div>
  )
}

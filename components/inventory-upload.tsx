"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, FileText, FileSpreadsheet } from "lucide-react"

export function InventoryUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
      setUploadStatus(null)
    } else {
      setSelectedFile(null)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Por favor, selecciona un archivo primero.")
      return
    }

    setUploading(true)
    setUploadStatus("Subiendo y procesando...")

    // Simulate file upload and processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (selectedFile.name.endsWith(".xlsx") || selectedFile.name.endsWith(".xls")) {
      setUploadStatus(`Archivo Excel "${selectedFile.name}" procesado con éxito.`)
    } else if (selectedFile.name.endsWith(".pdf")) {
      setUploadStatus(`Archivo PDF "${selectedFile.name}" procesado con éxito.`)
    } else {
      setUploadStatus(`Archivo "${selectedFile.name}" subido. Tipo de archivo no reconocido para procesamiento.`)
    }

    setUploading(false)
    setSelectedFile(null) // Clear the selected file after upload
  }

  return (
    <div className="space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="file-upload">Seleccionar archivo (Excel o PDF)</Label>
        <Input id="file-upload" type="file" accept=".xlsx,.xls,.pdf" onChange={handleFileChange} />
      </div>
      {selectedFile && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          {selectedFile.name.endsWith(".pdf") ? (
            <FileText className="h-4 w-4" />
          ) : (
            <FileSpreadsheet className="h-4 w-4" />
          )}
          <span>{selectedFile.name}</span>
        </div>
      )}
      <Button onClick={handleUpload} disabled={!selectedFile || uploading}>
        <Upload className="h-4 w-4 mr-2" />
        {uploading ? "Subiendo..." : "Subir y Actualizar"}
      </Button>
      {uploadStatus && (
        <p className={`text-sm ${uploadStatus.includes("éxito") ? "text-green-600" : "text-red-600"}`}>
          {uploadStatus}
        </p>
      )}
    </div>
  )
}

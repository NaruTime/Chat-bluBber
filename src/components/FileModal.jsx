import React, { useState } from 'react';

const FileModal = ({ type, files, onClose }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const isImage = (name) => name.match(/\.(jpg|jpeg|png|gif|webp)$/i);
  const isLink = (name) => name.startsWith('http');

  const getFileIcon = (filename) => {
    const ext = filename.split('.').pop().toLowerCase();
    if (ext === 'pdf') return '/icons/pdf.png';
    if (ext === 'doc' || ext === 'docx') return '/icons/word.png';
    if (ext === 'xls' || ext === 'xlsx') return '/icons/excel.png';
    return '/icons/file.png';
  };

  return (
    <>
      {/* Modal principal */}
      <div className="fixed inset-0 bg-white/30 backdrop-blur-md z-50 flex items-center justify-center">
        <div className="bg-white w-[650px] max-h-[85vh] overflow-y-auto rounded-2xl shadow-xl p-6 relative">
          <h2 className="text-2xl font-bold mb-6 capitalize">{type}</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-6 text-gray-400 hover:text-red-500 text-xl"
          >
            ✖
          </button>

          {/* Galería de fotos */}
          {type === 'Photos' ? (
            <div className="grid grid-cols-5 gap-3">
              {files.map((file, index) => (
                <div key={index} className="overflow-hidden rounded-lg cursor-pointer">
                  <img
                    src={file.url || file.name}
                    alt=""
                    className="object-cover w-full h-28 hover:scale-105 transition"
                    onClick={() => setPreviewUrl(file.url || file.name)}
                  />
                </div>
              ))}
            </div>
          ) : (
            // Documentos o links
            <div className="space-y-3">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4 p-3 rounded-lg border bg-gray-50 hover:bg-gray-100 transition"
                >
                  {isLink(file.name) ? (
                    <a
                      href={file.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      🔗 {file.name}
                    </a>
                  ) : (
                    <>
                      {/* ícono + nombre */}
                      <div className="flex items-center gap-3">
                        <img
                          src={getFileIcon(file.name)}
                          alt="icon"
                          className="w-6 h-6 object-csontain"
                        />
                        <span className="text-gray-800 text-sm font-medium truncate max-w-[300px]">
                          {file.name}
                        </span>
                      </div>

                      {/* botón descargar */}
                      <a
                        href={file.url || "#"}
                        download
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Descargar
                      </a>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Visor a pantalla completa */}
      {previewUrl && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setPreviewUrl(null)}
        >
          <img
            src={previewUrl}
            alt="preview"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default FileModal;

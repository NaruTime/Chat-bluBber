"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Paperclip, Smile, X } from "lucide-react";

export default function GroupChat() {
  const [activeTab, setActiveTab] = useState("messages");
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);
  const [pendingFile, setPendingFile] = useState(null);
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [previewDoc, setPreviewDoc] = useState(null);

  const [messages, setMessages] = useState([
    {
      id: "2",
      type: "text",
      content: "Hi everyone, let's start the call soon 😊",
      sender: {
        id: "2",
        name: "Kate Johnson",
        avatar: "https://i.pravatar.cc/150?img=47",
      },
      timestamp: "11:24 AM",
      isCurrentUser: false,
    },
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    if (pendingFile) {
      const newMsg = {
        id: Date.now().toString(),
        type: pendingFile.type,
        content: pendingFile.content,
        fileName: pendingFile.name,
        timestamp,
        sender: {
          id: "user5",
          name: "You",
          avatar: "/placeholder.svg",
        },
        isCurrentUser: true,
      };
      setMessages((prev) => [...prev, newMsg]);
      setPendingFile(null);
    }

    if (message.trim()) {
      const newTextMsg = {
        id: Date.now().toString(),
        type: message.startsWith("http") ? "link" : "text",
        content: message,
        timestamp,
        sender: {
          id: "user5",
          name: "You",
          avatar: "/placeholder.svg",
        },
        isCurrentUser: true,
      };
      setMessages((prev) => [...prev, newTextMsg]);
      setMessage("");
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    dragCounter.current++;
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dragCounter.current = 0;
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    const fileType = file.type;
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result;
      let type = "file";
      if (fileType.startsWith("image")) type = "image";
      else if (fileType.startsWith("video")) type = "video";
      else if (fileType.startsWith("audio")) type = "audio";
      else if (file.name.match(/\.(pdf|docx|xlsx)$/i)) type = "document";

      setPendingFile({
        type,
        content: base64,
        name: file.name,
      });
    };

    reader.readAsDataURL(file);
  };

  const isOfficeDoc = (fileName) => /\.(docx|xlsx)$/i.test(fileName);

  return (
    <div
      className="flex flex-col w-full h-full bg-[#ECF0F4] rounded-lg relative"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {isDragging && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-50 flex items-center justify-center border-4 border-dashed border-teal-400 rounded-lg pointer-events-none transition-all">
          <p className="text-xl text-gray-700 font-semibold">📎 Suelta el archivo aquí</p>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isCurrentUser ? "justify-end" : "justify-start"} mb-4`}>
            {!msg.isCurrentUser && (
              <div className="mr-2 flex-shrink-0">
                <img
                  src={msg.sender.avatar}
                  alt={msg.sender.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col max-w-[70%]">
              {!msg.isCurrentUser && (
                <span className="text-xs text-gray-500 mb-1">
                  {msg.sender.name} · {msg.timestamp}
                </span>
              )}
              <div className={`p-3 rounded-2xl ${msg.isCurrentUser ? "bg-slate-200 text-gray-800" : "bg-white text-gray-800 border border-gray-200"}`}>
                {msg.type === "text" && msg.content}
                {msg.type === "link" && (
                  <a href={msg.content} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    🔗 {msg.content}
                  </a>
                )}
                {msg.type === "image" && (
                  <img
                    src={msg.content}
                    alt="img"
                    className="max-w-xs rounded-lg cursor-pointer"
                    onClick={() => setPreviewImageUrl(msg.content)}
                  />
                )}
                {msg.type === "video" && (
                  <video controls className="max-w-xs rounded-lg">
                    <source src={msg.content} />
                  </video>
                )}
                {msg.type === "audio" && (
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white shadow border border-gray-200">
                    <div className="text-teal-600">🎧</div>
                    <audio controls className="flex-1 outline-none" style={{ height: "36px" }}>
                      <source src={msg.content} type="audio/mpeg" />
                      Tu navegador no soporta audio.
                    </audio>
                  </div>
                )}
                {msg.type === "document" && (
                  <button
                    onClick={() => setPreviewDoc(msg)}
                    className="text-blue-600 hover:underline text-left"
                  >
                    📄 {msg.fileName || "Documento"}
                  </button>
                )}
                {msg.type === "file" && (
                  <a href={msg.content} download={msg.fileName} className="text-gray-800 hover:underline">
                    📎 {msg.fileName}
                  </a>
                )}
              </div>
              {msg.isCurrentUser && <span className="text-xs text-gray-500 mt-1 text-right">{msg.timestamp}</span>}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {previewImageUrl && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setPreviewImageUrl(null)}>
          <img src={previewImageUrl} alt="preview" className="max-w-[90vw] max-h-[90vh] rounded-xl" />
        </div>
      )}

      {previewDoc && (
        <div className="fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center p-4">
          <button onClick={() => setPreviewDoc(null)} className="text-white text-2xl absolute top-4 right-6">✖</button>
          {previewDoc.fileName.endsWith(".pdf") ? (
            <embed src={previewDoc.content} type="application/pdf" className="w-full h-full rounded-xl" />
          ) : isOfficeDoc(previewDoc.fileName) ? (
            <p className="text-white text-center">⚠️ No se puede previsualizar documentos Word o Excel directamente.<br />Descárgalo para abrirlo.</p>
          ) : (
            <p className="text-white">No se puede previsualizar este tipo de documento.</p>
          )}
        </div>
      )}

      {pendingFile && (
        <div className="flex items-center gap-4 bg-white p-3 border border-gray-300 rounded-xl shadow-md mx-4 mt-2">
          <div className="flex-1">
            {pendingFile.type === "image" && <img src={pendingFile.content} alt="preview" className="w-20 h-20 object-cover rounded-lg" />}
            {pendingFile.type === "video" && <video src={pendingFile.content} controls className="w-28 h-20 rounded-lg" />}
            {pendingFile.type === "audio" && <audio src={pendingFile.content} controls className="w-full" />}
            {(pendingFile.type === "document" || pendingFile.type === "file") && <div className="text-sm text-gray-700">📎 {pendingFile.name}</div>}
          </div>
          <button onClick={() => setPendingFile(null)} className="text-red-500 hover:text-red-700">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="p-3 border-t border-gray-200">
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            placeholder="Write your message..."
            className="w-full py-3 px-4 pr-24 rounded-full bg-white border focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none overflow-hidden min-h-[40px] max-h-[120px]"
            rows={1}
            style={{ paddingRight: "80px" }}
          />
          <div className="absolute right-16 flex items-center space-x-2 text-gray-400">
            <button type="button" className="p-1 hover:text-gray-600">
              <Paperclip className="h-5 w-5" />
            </button>
            <button type="button" className="p-1 hover:text-gray-600">
              <Smile className="h-5 w-5" />
            </button>
          </div>
          <button
            type="submit"
            className="absolute right-1 p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
            disabled={!message.trim() && !pendingFile}
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}

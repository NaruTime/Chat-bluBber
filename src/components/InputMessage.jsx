"use client"

import React from "react"

import { useState } from "react"
import { Send, Paperclip, Smile } from "lucide-react"

export default function ChatInput() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      console.log("Mensaje enviado:", message)
      setMessage("")
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            // Auto-resize the textarea
            e.target.style.height = "auto"
            e.target.style.height = `${e.target.scrollHeight}px`
          }}
          placeholder="Write your message..."
          className="w-full py-3 px-4 pr-24 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary resize-none overflow-hidden min-h-[50px] max-h-[150px]"
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
          disabled={!message.trim()}
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  )
}


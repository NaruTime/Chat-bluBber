"use client"

import  React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Paperclip, Smile } from "lucide-react"



export default function GroupChat() {
  const [activeTab, setActiveTab] = useState("messages")
  const [message, setMessage] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const messagesEndRef = useRef(null)

  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hi everyone, let's start the call soon 😊",
      sender: {
        id: "user1",
        name: "Kate Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      timestamp: "11:24 AM",
      isCurrentUser: false,
    }
  ])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: message,
        sender: {
          id: "user5",
          name: "You",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isCurrentUser: true,
      }

      setMessages([...messages, newMessage])
      setMessage("")
    }
  }

  return (
    <div className="flex flex-col  w-full h-full    bg-[#ECF0F4] rounded-lg ">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-800">Group Chat</h1>
        <div className="flex bg-slate-200 rounded-full p-1">
          <button
            className={`px-4 py-1 rounded-full text-sm ${activeTab === "messages" ? "bg-white text-gray-800" : "text-gray-600"}`}
            onClick={() => setActiveTab("messages")}
          >
            Messages
          </button>
          <button
            className={`px-4 py-1 rounded-full text-sm ${activeTab === "participants" ? "bg-white text-gray-800" : "text-gray-600"}`}
            onClick={() => setActiveTab("participants")}
          >
            Participants
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isCurrentUser ? "justify-end" : "justify-start"} mb-4`}>
            {!msg.isCurrentUser && (
              <div className="mr-2 flex-shrink-0">
                <image
                  src={msg.sender.avatar || "/placeholder.svg"}
                  alt={msg.sender.name}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              </div>
            )}
            <div className="flex flex-col max-w-[70%]">
              {!msg.isCurrentUser && (
                <span className="text-xs text-gray-500 mb-1">
                  {msg.sender.name} · {msg.timestamp}
                </span>
              )}
              <div
                className={`p-3 rounded-2xl ${
                  msg.isCurrentUser ? "bg-slate-200 text-gray-800" : "bg-white text-gray-800 border border-gray-200"
                }`}
              >
                {msg.mentions ? (
                  <span>
                    {msg.text.split(" ").map((word, i) =>
                      word.startsWith("@") ? (
                        <span key={i} className="text-teal-500">
                          {word}{" "}
                        </span>
                      ) : (
                        <span key={i}>{word} </span>
                      ),
                    )}
                  </span>
                ) : (
                  msg.text
                )}
              </div>
              {msg.isCurrentUser && <span className="text-xs text-gray-500 mt-1 text-right">{msg.timestamp}</span>}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Typing Indicator */}
      {isTyping && (
        <div className="px-4 py-2 text-xs text-gray-500 flex items-center">
          <div className="flex space-x-1 mr-2">
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
          <span>Robert is typing</span>
        </div>
      )}

      {/* Message Input */}
      <div className="p-3 border-t border-gray-200">
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              e.target.style.height = "auto"
              e.target.style.height = `${e.target.scrollHeight}px`
            }}
            placeholder="Write your message..."
            className="w-full py-3 px-4 pr-24 rounded-full bg-[white] border  focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none overflow-hidden min-h-[40px] max-h-[120px]"
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
    </div>
  )
}


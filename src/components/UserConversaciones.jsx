"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"


export default function ConversationList({ conversations, onSelect, className }) {
  return (
    <div className={cn("flex flex-col space-y-1", className)}>
      {conversations.map((conversation) => (
          <button
            key={conversation.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
            onClick={() => onSelect?.(conversation)}
          >
            <Avatar className="h-10 w-10">
              {conversation.avatar ? <AvatarImage src={conversation.avatar} alt={conversation.name} /> : null}
              <AvatarFallback className="bg-gray-100 text-gray-700">{conversation.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">{conversation.name}</p>
                <p className="text-xs text-gray-500">{conversation.time}</p>
              </div>
              <p className="text-sm text-gray-500 truncate">
                {conversation.isTyping ? (
                  <span className="flex items-center gap-1">
                    typing
                    <span className="inline-flex">
                      <span className="animate-bounce">.</span>
                      <span className="animate-bounce delay-100">.</span>
                      <span className="animate-bounce delay-200">.</span>
                    </span>
                  </span>
                ) : (
                  conversation.message
                )}
              </p>
            </div>
          </button>
      ))}
    </div>
  )
}


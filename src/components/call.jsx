import React from 'react'
import { FaPhone, FaPhoneSlash } from 'react-icons/fa'
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from 'react-icons/io'

const VoiceCalls = () => {
  const callHistory = [
    {
      id: 1,
      userName: "John Doe",
      callTime: "10:30 AM",
      date: "Today",
      status: "missed",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=John",
      isOutgoing: false,
    },
    {
      id: 2,
      userName: "Maria García",
      callTime: "9:15 PM",
      date: "Yesterday",
      status: "answered",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Maria",
      isOutgoing: true,
    },
    {
      id: 3,
      userName: "Alex Smith",
      callTime: "3:45 PM",
      date: "Yesterday",
      status: "declined",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Alex",
      isOutgoing: false,
    },
  ]

  const getStatusIcon = (status, isOutgoing) => {
    const arrowIcon = isOutgoing ?
      <IoMdArrowRoundUp className="w-4 h-4" /> :
      <IoMdArrowRoundDown className="w-4 h-4" />

    switch (status) {
      case 'missed':
        return <div className="flex items-center text-red-500">{arrowIcon} <FaPhoneSlash className="w-3 h-3 ml-1" /></div>
      case 'answered':
        return <div className="flex items-center text-green-600">{arrowIcon} <FaPhone className="w-3 h-3 ml-1" /></div>
      case 'declined':
        return <div className="flex items-center text-red-500">{arrowIcon} <FaPhoneSlash className="w-3 h-3 ml-1" /></div>
      default:
        return <div className="flex items-center text-gray-500">{arrowIcon} <FaPhone className="w-3 h-3 ml-1" /></div>
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Recent</h2>
        <div className="space-y-1">
          {callHistory.map((call) => (
            <div key={call.id}
              className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-lg cursor-pointer">
              <img
                src={call.avatar}
                alt={call.userName}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-800 dark:text-gray-200">{call.userName}</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  {getStatusIcon(call.status, call.isOutgoing)}
                  <span className="ml-2">{call.date}, {call.callTime}</span>
                </div>
              </div>
              <button className="p-2 text-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/30 rounded-full transition-colors">
                <FaPhone className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VoiceCalls

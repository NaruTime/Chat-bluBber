import React from 'react'
import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import EstatusButton from '../components/EstatusButtton'
import InputShare from '../components/Inputshare'
import ConversationList from '../components/UserConversaciones';
const ContactUs = () => {
  const conversations = [
    {
      id: "1",
      name: "Real estate deals",
      message: "typing...",
      time: "11:55",
      avatar: "/placeholder.svg",
      isTyping: true,
    },
    {
      id: "2",
      name: "Kate Johnson",
      message: "I will send the document t...",
      time: "11:52",
      avatar: "/placeholder.svg",
    },
    {
      id: "3",
      name: "Tamara Shevchenko",
      message: "are you going to busine...",
      time: "10:05",
      initials: "TS",
    },

  ]



  return (
    <div className="flex flex-col justify-center items-center h-full whitespace-nowrap flex-nowrap ">
     <header className='flex justify-center items-center flex-col w-full h-[35%]  gap-4'>
{/* profile */}
<Avatar className="w-24 h-24">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

{/* nombre */}
<div>
<p className='text-2xl'>julian Beltran Posso</p>
</div>
{/*  estado de conexion */}
<div>
<EstatusButton></EstatusButton>
</div>
     </header>


     <main className=' flex flex-col w-full h-[65%] gap-4'>

      <div className='w-full flex justify-center items-center h-[60px]'>
        <div className='w-[90%]'>
          <InputShare></InputShare>
        </div>
      </div>

      
        <div className='w-full pl-4'>
          <p className='text-[#919aa0]'>Last Chats</p>
        </div>

        <div className="max-w-md  p-1">
      <ConversationList
        conversations={conversations}
        onSelect={(conversation) => {
          console.log("Selected:", conversation.name)
        }}
      />
    </div>
     </main>

    </div>
  )
}

export default ContactUs

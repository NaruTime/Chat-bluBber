

import React, { useState,useEffect } from "react";
import Buttons from "./Buttons";
import { MessageCircle, Video, Phone } from "lucide-react";
import { Link,useLocation } from 'react-router-dom'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const Slidebar = ({onclick}) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const location = useLocation();
  const chatId = location.pathname.split('/chat/')[1];

  return (
    <aside className="flex flex-col h-full w-[5rem] items-center justify-between transition-all py-4">
      <header>logo</header>

      <main className="flex flex-col w-full items-center">
        <Buttons 
          estado={true}
          ruta={`/chat/`}
          chatId={chatId}  
          messegaje="boton chats"
          variant="slide"
          Icon={<MessageCircle width={20} height={20} />}
          onclik={onclick}  // 🔥 Al hacer clic, cambia el estado
          isActive={selectedButton === "chat"}  // 🔥 Indica si está activo
        />
        <Buttons 
          estado={true} 
          ruta="/chat/v"
          chatId={chatId}  
          messegaje="boton video calls"
          variant="slide"
          Icon={<Video width={20} height={20} />}
          onclik={onclick}  // 🔥 Al hacer clic, cambia el estado
         // 🔥 Indica si está activo
        />
        <Buttons 
          estado={true} 
          ruta="/chat/b"
          chatId={chatId}  
          messegaje="boton Llamada"
          variant="slide"
          Icon={<Phone width={20} height={20} />}
          onclik={onclick}  // 🔥 Al hacer clic, cambia el estado
         // 🔥 Indica si está activo
        />
      </main>

      <footer>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </footer>
    </aside>
  );
};

export default Slidebar;
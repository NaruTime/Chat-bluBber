import React,{useState,useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { s } from 'framer-motion/client'





const Buttons = ({ onclik, Icon, hoverColor, estado, ruta, variant, messegaje, chatId }) => {
  const [color, setColor] = useState("bg-blue-200");
  const [hover, setHover] = useState("");
  const [textColo, settextColo] = useState("text-gray-500");

  useEffect(() => {
    if (ruta === `/chat/${chatId}`) {
      setColor("bg-[#e2f3f0]");
      settextColo("text-[#4ca994]");
      setHover("border-r-[#4ca994]");
    } else {
      setColor("bg-transparent");
      settextColo("text-gray-500");
      setHover("");
    }
  }, [ruta, chatId]);  // ✅ Ahora solo depende de `chatId`, que viene del padre.

  return (
    <div className={`w-full flex transition justify-center py-1 border-5 border-white ${hover}`}>
      <Link 
        to={ruta} 
        className={estado ? `flex justify-center rounded-xl transition active:bg-[#ade5d9] items-center ${textColo} p-4 ${color}` : "hidden"} 
        onClick={onclik}
      >
        {Icon}
      </Link>
    </div>
  );
};
export default Buttons

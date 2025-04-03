import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"
const Buttons = ({onclik,Icon,hoverColor,estado,ruta,variant}) => {


// Set color based on variant


return (

                   

                      <Link to={ruta} className={estado?`  bg-gray-200 rounded-xl flex justify-center items-center w-full h-[80%] `:"hidden"} onClick={onclik}>
                       {Icon}
                       
                    </Link>
              


  )
}

export default Buttons

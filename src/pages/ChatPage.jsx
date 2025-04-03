import Slide from '../components/Slidebar'
import Buttons from '../components/Buttons'
import ButtonExit from '../components/ButtonExit'
import { MessageCircle,ChevronLeft, Video  } from 'lucide-react';
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Filesinfo from '../Comon/FliesInfo'
import Chat from '../components/Chat'
import InputMessage from '../components/InputMessage'
const ChatPage = () => {
const [Estado, setEstado] = useState(true)
const [Estado2, setEstado2] = useState(false)
const [ancho, setAncho] = useState(0)
    return (
        <div  className="flex min-h-screen">

              {/*   //Contenedor de los contactos y el chat y otras fuuras secciones del asside */}
            <div name="content 1" className='flex bg-[#fffefe]'>
                <div onMouseEnter={()=>setEstado(true)} className='h-full w-[4px] '>
                </div>

                <Slide onclick={()=> setEstado(true)}>
                 
                </Slide>

            </div>


            <div name="conetent 2" className='flex   w-full rounded-lg border-1 bg-[#fffefe] border-white border-l-gray-200'>


                <div 
                    className={Estado 
                        ? 'flex transition-all flex-col w-[45%] bg-white'
                        : "flex transition-all flex-col w-[0%] bg-white"
                    }
                >
                    <header className='flex  justify-center items-center h-[10%]'>
                        <div className='flex justify-start px-5 items-center w-full h-[80%] gap-3'>
                        
                      <div  className='w-[20%] h-full flex justify-center items-center'>
                        <ButtonExit
                           estado={Estado}
                           Icon={<ChevronLeft></ChevronLeft>}
                           onclik={() => setEstado(!Estado)}
                        > 
                        </ButtonExit>

                      </div>
                       
                            <h1 className='text-[15px]  '>Chat</h1>
                        </div>
                    </header>
                    <div className='flex justify-center items-center'>
                            <hr className='w-[90%] bg-gray-300'></hr>
                    </div>

                    
                    <main className=' bg-[#fffefe] overflow-hidden h-full'>
                        <Outlet>

                        </Outlet>
                    </main>
                </div>


               {/*  //Conteneddor del chat */}
                <div className='flex justify-center items-center w-[100%] max-h-[700px]  py-5'>
                    <div className='flex flex-col justify-center items-center   h-full  w-full bg-[#ECF0F4] rounded-lg'>
                             {/*    <header className=' flex w-full justify-center items-center h-[15%] border-1 border-b-gray-200'>
                                        <div className='w-[90%] flex justify-between'>
                                            <h1 className='flex justify-center items-center'>group chat</h1>

                                                <div>

                                            <button className='p-2 bg-[#d3e4e8]'>
                                                Messages
                                            </button>
                                            <button className='p-2 bg-[#d3e4e8]'>
                                                Participants
                                            </button>
                                                </div>
                                        </div>
                                </header>
                                <main>
                                    

                                </main>
                                <footer className='mb-3'>
                                        <InputMessage></InputMessage>
                                </footer> */}
                               <Chat></Chat>   
                    </div>
                </div>

               {/*  //Contenedor de ls archivos  */}
                <div  className={Estado2?'flex flex-col w-[35%] transition-all bg-white ':" w-[6%] transition-all"}>

                    <header className="flex h-[10%] justify-center items-center">
  {/*                   <div className={Estado2?`flex justify-start px-5 items-center w-full h-[55%] gap-3 overflow-hidden`:"flex justify-start  items-center w-full h-[55%] gap-3 overflow-hidden"}> */}
  <div className='flex justify-start pading px-2 gap-2 items-center h-[80%]  w-full'>
                    
                     {/*  <div className={ Estado2?'flex justify-center transition-none items-center w-[20%] h-full':"flex justify-center items-center w-full h-full mx-2"}> */}
                     <div className=' flex justify-center items-center h-full  w-[50px]'>

                    <ButtonExit   estado={true} onclik={() =>setEstado2(!Estado2)}  Icon={<ChevronLeft></ChevronLeft>}></ButtonExit>
                      </div>
                       
                           {Estado2? <h1 className='text-[15px]  '>Archivos</h1>:""}
                        </div>
                    </header>
                    <div className='w-full flex justify-center  items-center'>
                    <hr className='w-[90%]' />

                    </div>
                    <main className='h-full flex flex-col '>
                        <Filesinfo estado={Estado2}> </Filesinfo>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ChatPage
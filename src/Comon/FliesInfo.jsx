import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText, Image,Link2, Vote  } from "lucide-react"
import FileStats from '../components/FileTypeinfo'
import Filesinfo from '../components/FileType'

const FliesInfo = ({estado}) => {
    const fileTypes = [
        {
          icon: <FileText className="h-5 w-5" />,
          name: "Documents",
          count: 156,
          size: "23.5MB",
        },
        {
          icon: <Image className="h-5 w-5" />,
          name: "Photos",
          count: 53,
          size: "132MB",
        },
        {
          icon: <Link2 className="h-5 w-5" />,
          name: "links",
          count: 3,
          size: "10MB",
        },
        {
          icon: <Vote className="h-5 w-5" />,
          name: "Votes",
          count: 3,
          size: "10MB",
        },
      ]





  return (
    <>
    {estado?
    <div className='h-full flex-col whitespace-nowrap flex-nowrap'>
         <header className='flex justify-center items-center flex-col w-full h-[25%]  gap-2'>
{/* profile */}
<Avatar className="w-18 h-18">
  <AvatarImage src="https://wallpapers.com/images/hd/cool-4k-ultra-hd-nao22k6od4a4djyl.jpg" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

{/* nombre del grupo */}
<div>
<p className='text-2xl'>Grupo shafa 1</p>
</div>
{/* members    */}
<div>
<p className='text-gray-400'>10 members </p>
</div>
     </header>


     <main className='h-[70%]'>
     <div className="max-w-md mx-auto p-4">
      <FileStats
        totalFiles={231}
        selectedFiles={45}
        fileTypes={fileTypes}
        onSelectType={(type) => {
          console.log("Selected type:", type)
        }}
      />
    </div>
     </main>
    </div>
    :<div className=' flex flex-col items-center gap-4 mt-3   w-full h-full'>
      <div>

      <Avatar className="w-12 h-12">
  <AvatarImage src="https://wallpapers.com/images/hd/cool-4k-ultra-hd-nao22k6od4a4djyl.jpg" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
      </div>
    <div className='flex flex-col items-center gap-4'>
      <p className='text-ms'>Files</p>
      <Filesinfo></Filesinfo>
    </div>
      </div>}
    </>
  )
}

export default FliesInfo

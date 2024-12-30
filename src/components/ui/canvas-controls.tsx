import React from 'react'
import { BiFullscreen, BiLockOpen, BiMinus, BiPlus } from 'react-icons/bi'

const CanvasControls:React.FC = () => {
  return (
    <div className='absolute items-center justify-around text-white bottom-5 left-5 z-10 flex flex-col w-10 pt-1 rounded-lg bg-gray-700'>
        <button className='hover:bg-white/10 p-2'><BiPlus/></button>
        <button className='hover:bg-white/10 p-2'><BiMinus/></button>
        <button className='hover:bg-white/10 p-2'><BiFullscreen/></button>
        <button className='hover:bg-white/10 p-2'><BiLockOpen/></button>

    </div>
  )
}

export default CanvasControls
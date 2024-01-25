import React from 'react'
import { FiSend } from "react-icons/fi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";


const ChatContainer = () => {
  return (
    <div className='border'>
      <header className='h-20 rounded-l-full flex justify-between items-center p-2'>
          <IoArrowBackCircleOutline className='text-2xl text-orange-600' />
          <strong className='text-center font-semibold'>Live Chat</strong>
          <CiSettings className='text-2xl text-gray-600'/>
      </header>
      <main className='bg-gray-100 h-[80vh]'>
        <div className='flex justify-end p-3 gap-1'>
          <div className='text-sm rounded-full flex justify-center items-center mt-1 bg-orange-400 h-8 text-white font-bold p-3'>U</div>
          <div className='border bg-white p-4 rounded-b-xl font-thin w-[80%]'>
            <div>It is a long established fact that a reader will be distracted by the readas a more-or-less normal distribution of letters, as opposed to using Content here,</div>
          </div>
        </div>

        <div className='flex p-3 gap-1'>
          <div className='text-sm rounded-full flex justify-center items-center mt-1 bg-blue-400 h-8 text-white font-bold p-3'>Y</div>
          <div className='border bg-white p-4 rounded-b-xl font-thin w-[80%]'>
            <div>It is a long established fact that a reader will be distracted by the readas a more-or-less normal distribution of letters, as opposed to using Content here,</div>
          </div>
        </div>
      </main>

      <footer className='pl-3 pt-3 grid grid-cols-12 gap-2'>
        <div className='col-span-10'>
          <input className='w-[100%] text-lg focus:border-b placeholder:font-thin focus:outline-none' placeholder='Start Typing...' />
        </div>
        <div className='col-span-2 flex justify-center bg-orange-400 rounded-full w-fit p-2 items-center'>
          <FiSend className='text-xl text-white' />
        </div>
      </footer>
    </div>

  )
}

export default ChatContainer
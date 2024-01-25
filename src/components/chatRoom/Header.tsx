'use client'

import React from 'react'
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { useSearchParams } from 'next/navigation';
import { BsFullscreen } from "react-icons/bs";

const Header = () => {
  const name = useSearchParams()?.get('name')

  return (
    <header className='container flex p-4 justify-between bottom-9 border-b'>
      <div className='flex'>
        <HiMiniChatBubbleLeftRight className='text-5xl textTheme' />
        <p className='textTheme self-center text-md font-semibold'>reechable</p>
        <div className='ml-8 self-center'>
          <span className='text-gray-600'>00:00</span>
          <button className='rounded-3xl text-[0.65rem] font-semibold p-1 pl-4 pr-4 ml-3 text-gray-600 bg-gray-200'>Not Live</button>
        </div>
      </div>
      <div className='flex gap-2'>
        <button className='rounded-3xl text-sm font-light p-2 pl-5 pr-5 self-center text-white bgTheme'>Go Live {name} !</button>
        <div className='bg-gray-200 self-center p-2 rounded-full'>
          <BsFullscreen className='text-gray-700' />
        </div>
      </div>

    </header>
  )
}

export default Header
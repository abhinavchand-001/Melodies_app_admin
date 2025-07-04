import React from 'react'
import { TbMusicPlus } from "react-icons/tb";
import { BsMusicNoteList } from "react-icons/bs";
import { RiFolderMusicLine } from "react-icons/ri";
import { LuFolderOpen } from "react-icons/lu";
import {NavLink} from 'react-router-dom'


// #181818
// #ee10b0
// #1070ee

const Sidebar = () => {
  return (
    <div className='Sidebar w-[23%] min-h-screen flex flex-col items-center bg-[#15191d] text-white'>

                <h1 className="melodyheadline text-4xl mt-1 mb-10">Melodies</h1>


                <div className='flex gap-3 items-center font-bold text-xl mb-10 cursor-pointer'>
                    <TbMusicPlus className='text-[#ee10b0]'/>
                    <NavLink to='/add-song'>Add Song</NavLink>
                </div>

                <div className='flex gap-3 items-center font-bold text-xl mb-10 cursor-pointer'>
                    <BsMusicNoteList className='text-[#1070ee]'/>
                    <NavLink to='/list-song'>List Song</NavLink>
                </div>

                <div className='flex gap-3 items-center font-bold text-xl mb-10 cursor-pointer'>
                    <RiFolderMusicLine className='text-[#ee10b0]'/>
                    <NavLink to='/add-album'>Add Album</NavLink>
                </div>

                <div className='flex gap-3 items-center font-bold text-xl mb-10 cursor-pointer'>
                    <LuFolderOpen className='text-[#1070ee]'/>
                    <NavLink to='/list-album'>List Album</NavLink>
                </div>

    </div>
  )
}

export default Sidebar
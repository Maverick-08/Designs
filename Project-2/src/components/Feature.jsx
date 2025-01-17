import React from 'react'
import { RiRobot2Line } from "react-icons/ri";
import { IoFingerPrintOutline } from "react-icons/io5";
import { LuShieldHalf } from "react-icons/lu";
import { FiBatteryCharging } from "react-icons/fi";
import { TfiLink } from "react-icons/tfi";
import { TbWorldBolt } from "react-icons/tb";

const Feature = () => {
  return (
    <div className='min-h-[800px] border-b border-neutral-900 mt-24'>
      <div className="text-center">
        <span className='bg-neutral-800 text-orange-500 px-2 py-1 rounded-full uppercase'>
            Features
        </span>
        <h1 className='text-2xl sm:text-4xl lg:text-6xl text-white tracking-wide mt-16'>
            Easily build 
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'> your code</span>
        </h1>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
        <div className='mt-8 mb-4'>
            <div className='flex gap-4 items-center text-white'>
                <span className='px-2 py-1 bg-neutral-700 rounded-md'><RiRobot2Line className='w-8 h-8 text-orange-500'/></span>
                <h2 className='text-xl'>Drag-and-Drop Interface</h2>
            </div>
            <p className='mt-4 px-16 text-md text-gray-600'>Easily design and arrange your VR environment with a user-friendly drag-and-drop interface.</p>
        </div>
        <div className='mt-8 mb-4'>
            <div className='flex gap-4 items-center text-white'>
                <span className='px-2 py-1 bg-neutral-700 rounded-md'><IoFingerPrintOutline className='w-8 h-8 text-orange-500'/></span>
                <h2 className='text-xl'>Multi-Platform Compatibility</h2>
            </div>
            <p className='mt-4 px-16 text-md text-gray-600'>Build VR applications that run seamlessly across multiple platforms, including mobile,desktop, and VR headsets.</p>
        </div>
        <div className='mt-8 mb-4'>
            <div className='flex gap-4 items-center text-white'>
                <span className='px-2 py-1 bg-neutral-700 rounded-md'><LuShieldHalf className='w-8 h-8 text-orange-500'/></span>
                <h2 className='text-xl'>Built-in Templates</h2>
            </div>
            <p className='mt-4 px-16 text-md text-gray-600'>Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.</p>
        </div>
        <div className='mt-8 mb-4'>
            <div className='flex gap-4 items-center text-white'>
                <span className='px-2 py-1 bg-neutral-700 rounded-md'><FiBatteryCharging className='w-8 h-8 text-orange-500'/></span>
                <h2 className='text-xl'>Real-Time Preview</h2>
            </div>
            <p className='mt-4 px-16 text-md text-gray-600'>Preview your VR applications in real time as you make changes, allowing for quick iterations and adjustments.</p>
        </div>
        <div className='mt-8 mb-8'>
            <div className='flex gap-4 items-center text-white'>
                <span className='px-2 py-1 bg-neutral-700 rounded-md'><TfiLink className='w-8 h-8 text-orange-500'/></span>
                <h2 className='text-xl'>Collaboration Tools</h2>
            </div>
            <p className='mt-4 px-16 text-md text-gray-600'>Work with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.</p>
        </div>
        <div className='mt-8 mb-4'>
            <div className='flex gap-4 items-center text-white'>
                <span className='px-2 py-1 bg-neutral-700 rounded-md'><TbWorldBolt className='w-8 h-8 text-orange-500'/></span>
                <h2 className='text-xl'>Analytics Dashboard</h2>
            </div>
            <p className='mt-4 px-16 text-md text-gray-600'>Gain valuable insights into user interaction and behaviour within your VR application with an integrated analytics dashboard.</p>
        </div>
      </div>
    </div>
  )
}

export default Feature

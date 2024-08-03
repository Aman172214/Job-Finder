import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className='w-full min-h-[250px] bg-blue block shadow-xl'>
        <div className='w-3/4 mx-auto'>
            <h1 className='md:text-3xl text-2xl font-bold text-white pt-[45px]'>Find your Dream job here.!</h1>
            <p className='text-slate-500 py-5 md:text-lg text-sm'>Explore more jobs that satisfied your skills, best salaries and more</p>
        </div>
        
            <div className='w-3/4 h-[240px] md:h-[180px] mx-auto flex justify-between items-center rounded-t-xl bg-white'>
              
                    <div className=' w-full mx-6  flex flex-1 flex-wrap items-center gap-1 mt-4'>

                    <div className='flex items-center w-full md:w-[38%]'>
                    <IoIosSearch className='text-2xl mx-2' />
                    <input type='text' name='title' id='title' placeholder='Job title,keyword or company name' className='min-h-16 flex-1 ring-1 ring-zinc-500 rounded py-1.5 lg:pl-8 px-2 md:px-0  m-1 placeholder:text-zinc-400 focus:outline-none focus:ring-sky-500 focus:ring-2'></input>
                    </div>
                    <div className='flex flex-wrap items-center md:w-[38%] w-full'>
                    <FaLocationDot className='text-2xl mx-2' />
                    <input type='text' name='title' id='title' placeholder='City,state ' className='min-h-16 flex-1 ring-1 ring-zinc-500 rounded py-1.5 lg:pl-8 px-2 md:px-0 placeholder:text-zinc-400 focus:outline-none m-1 focus:ring-sky-500 focus:ring-2'></input>
                    </div>
                    <button className='w-[50%] min-h-14 md:w-[18%] mx-auto my-2 md:my-0 ring-2 bg-blue rounded-xl text-white text-xl hover:scale-110 active:bg-logo'>Find Jobs</button>
                    </div>
                    
        
            </div>
       

    </div>
  )
}

export default Banner
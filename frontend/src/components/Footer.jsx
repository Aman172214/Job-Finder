import React from 'react'
import { TbCircleLetterGFilled } from "react-icons/tb";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
    const d = new Date()
  return (
    <div className='w-full bg-black/10 shadow-lg mt-4 py-2 px-4'>
        <div className='sm:w-[75%] mx-auto  my-12'>
            <div className='grid grid-cols-3'>
                <div className='grid grid-cols-3 col-span-2 py-8'>
                    <div>
                        {/* <h3 className='font-[600] text-gray'>Company</h3> */}
                        <ol className='*:py-1 font-[400] text-gray'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Profile</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        </ol>
                    </div>
                    <div>
                        <ol className='*:py-1 font-[400] text-gray'>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        
                        </ol>
                    </div>
                    <div>
                        <ol className='*:py-1 font-[400] text-gray'>
                        <li>Privicy policy</li>
                        <li>Security guidlines</li>
                        <li>Feedbacks</li>
                        <li>FAQs</li>
                        </ol>
                    </div>

                </div>
                <div className='p-6'>
                    <h2 className='text-lg py-1 '>Apply on-the go</h2>
                    <p className='text-gray '>Get real-time job updates only on our App</p>
                    <div className='flex gap-3 my-2'>
                        <button className='bg-black text-white p-2 rounded-lg hover:scale-105'><FaApple className='text-2xl'/></button>
                        <button className='bg-black text-white p-2 rounded-lg hover:scale-105'><IoLogoGooglePlaystore className='text-2xl' /></button>
                    </div>
                </div>
            </div>
            <div className='pt-8'>
            <a href="/" className="flex items-center gap-1 text-xl">
            <TbCircleLetterGFilled className="text-logo text-2xl" />
            <span className="font-bold text-logo">Global Jobs</span>
            </a>
            <p className='text-sm text-gray my-2'>&copy; globaljobs.com {d.getFullYear()}. All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa6";
import { MdBadge } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";
import { BiSolidUserDetail } from "react-icons/bi";
import { IoIosCash } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoBriefcaseSharp } from "react-icons/io5";

const Profile
 = () => {
  const d = new Date()
  return (
    <div className='bg-sky-200 '><div className='lg:w-[50%] pt-4 bg-white items-center mx-auto w-full p-2 shadow-lg'>
      <div className='flex justify-between '>
        <h2 className='font-bold text-gray text-2xl pt-4 pb-0 '>Profile</h2><button className='p-2 bg-logo rounded-md text-xl font-semibold w-[100px] text-white mb-4'><Link to="/profileedit">Edit</Link></button></div>
      <div className='flex justify-between px-2'>
        <h2 className='text-4xl font-bold flex justify-center items-center '>Jasmine kathija banu</h2>
        <h2 className='bg-gray w-20 h-20 rounded-full flex justify-center items-center font-bold text-5xl text-white'>J</h2>
      </div>
      <div className='py-4 text-gray px-2 shadow-lg'>
        <p className='flex items-center gap-2'><IoMail className='text-xl'/> mailid123@gmail.com</p>
        <p className='flex items-center gap-2'><IoCall className='text-xl' />+91 1234567890</p>
        <p className='flex items-center gap-2'><IoLocationSharp className='text-xl' /> city , state , country</p>
      </div>
      <div className='py-4 px-2'>
        <h2 className='text-xl font-semibold'>Resume</h2>
        <div className='flex gap-2 py-4 shadow-lg'>
          <FaFileAlt className='w-[10%] text-6xl text-gray' />
          <div>
            <p className='text-xl font-semibold text-gray '>File name.pdf</p>
            <p className='text-gray'>Added 22 april 2024</p>
          </div>
        </div>
      </div>
      <div className=' px-2'>
        <h2 className='text-xl font-semibold'>Improve your job matches</h2>
        <p className='text-gray'>We use these details to show you jobs that match your unique skills and experience.</p>
        
        <div className='py-4 flex flex-col gap-8 shadow-md'>
        <h2 className='text-xl font-semibold shadow-lg p-2'>Qualifications</h2>
        <div className='flex gap-10'>
          <div className='flex items-center'><AiFillCalendar className='text-2xl ' /></div>
          <div><h2 className='text-lg font-semibold text-gray '>Most recent work experience</h2>
          <p className='text-gray text-sm '>Junior Web Developer, nellai systems and services</p>
          </div>
          </div>

          <div className='flex gap-10'>
          <div className='flex items-center'><FaGraduationCap className='text-2xl ' /></div>
          <div><h2 className='text-lg font-semibold text-gray '>Education</h2>
          <p className='text-gray text-sm '>Bachelor of Engineering, computer science and engineering</p>
          </div>
          </div>

          <div className='flex gap-10'>
          <div className='flex items-center'><MdBadge  className='text-2xl ' /></div>
          <div><h2 className='text-lg font-semibold text-gray '>Skills</h2>
          <p className='text-gray text-sm '>frond end developer, 2 years</p>
          <p className='text-gray text-sm '>react developer, 1 year</p>
          </div>
          </div>

          <div className='flex gap-10'>
          <div className='flex items-center'><LuLanguages  className='text-2xl ' /></div>
          <div><h2 className='text-lg font-semibold text-gray '>Languages known</h2>
          <p className='text-gray text-sm '>english, Fluent</p>
          <p className='text-gray text-sm '>tamil, Native</p>
          </div>
          </div>
      
        </div>
      
        <div className='py-4 flex flex-col gap-8 shadow-md'>
        <h2 className='text-xl font-semibold shadow-lg p-2'>Job preferences</h2>
        <p className='text-gray '>
        Tell us the job details you’re interested in to get better recommendations.
        Employers may see these preferences when your resume is set to searchable.
        </p>
        <div className='flex gap-10'>
          <div className='flex items-center'><BiSolidUserDetail className='text-2xl ' /></div>
          <div><h2 className='text-lg font-semibold text-gray '>Job titles</h2>
          <p className='text-gray text-sm '>Web Developer</p>
          </div>
          </div>

          <div className='flex gap-10'>
          <div className='flex items-center'><IoIosCash className='text-2xl ' /></div>
          <div><h2 className='text-lg font-semibold text-gray '>Minimum base pay</h2>
          <p className='text-gray text-sm '>AED 3,000 per month</p>
          </div>
          </div>

          <div className='flex gap-10'>
          <div className='flex items-center'><FaMapLocationDot   className='text-2xl ' /></div>
          <div><h2 className='text-lg font-semibold text-gray '>Job Location</h2>
          <p className='text-gray text-sm '>Dubai ,UAE</p>
          <p className='text-gray text-sm '>Abudhabi, UAE</p>
          </div>
          </div>

          <div className='flex gap-10 '>
          <div className='flex items-center'><IoBriefcaseSharp className='text-2xl ' /></div>
          <div><h2 className='text-lg font-semibold text-gray '>Work type</h2>
          <p className='text-gray text-sm '>Full-time</p>
          <p className='text-gray text-sm '>Remote</p>
          </div>
          </div>
      
        </div>
      
      
      </div>

      
      <p className='text-sm text-gray text-center py-5'>&copy; {d.getFullYear()} - global jobs</p>
    </div></div>
  )
}

export default Profile

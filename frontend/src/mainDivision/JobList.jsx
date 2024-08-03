import React from 'react'
import { jobData } from '../../public/JobsData';
import { CiLocationOn } from "react-icons/ci";
import { BsSuitcaseLg } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const JobList = () => {
  return (
    <div className=''>
        <h1 className='font-bold text-xl text-gray'>Jobs</h1>
        <div className=''>
            {
                jobData.map((item) =>{
                    return(
                        <Link to="/job/:id" ><div className='flex border border-slate-500 my-2'>
                           <div className='text-gray'> 
                                <img src={item.companyLogo} alt='logo' className='w-[150px] h-[70px] p-2'/></div>
                                <div className='text-gray p-1'><p>{item.companyName}</p>
                                <p className='font-bold'>{item.jobTitle}</p>
                                <div className='flex *:flex *:m-2 *:items-center'>
                                    <p><CiLocationOn className='m-1' />{item.jobLocation}</p>
                                    <p><BsSuitcaseLg className='m-1'/>{item.employmentType}</p>
                                    <p><MdAttachMoney className='m-1'/>{item.maxPrice}-{item.maxPrice}</p>
                                    <p><MdOutlineDateRange className='m-1'/>{item.postingDate}</p>
                                </div>
                                <p>{item.description}</p></div>
                            </div></Link>
                            )

            })
            }
        </div>
    </div>
  )
}

export default JobList
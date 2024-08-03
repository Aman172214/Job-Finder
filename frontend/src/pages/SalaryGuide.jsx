import React from 'react';
import { salaryData } from '../../public/SalaryData';


const SalaryGuide = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
         <div className=''>
            <h1 className='text-xl text-logo font-bold'>Know your earning potential</h1>
            <p className='text-gray'>Explore high-paying careers, salaries and job openings by industry and location</p>
        </div>
        
        <div className="w-full md:max-w-[60%] px-4 py-8">
        <div className="flex">
          
            <div className="relative flex-grow">
                <input type="text" class="w-full py-2 pl-10 pr-16 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Search..."></input>
                <svg className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a7 7 0 100 14 7 7 0 000-14zm-2 7h4m-2-2v4" />
                </svg>
            </div>
        
            <button className="ml-2 w-[150px] px-4 py-2 bg-logo text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Enter
            </button>
        </div>
    </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-12 my-4 items-center'>
                {
                    salaryData.map((data)=>(
                        <div key={data.id} className='shadow px-4 hover:outline outline-1 outline-logo *:py-1'>
                            <h4 className='text-l text-black font-semibold'>{data.title}</h4>
                            <p className='text-l text-logo font-semibold'>{data.salary}</p>
                            <div className='flex flex-wrap gap-4 text-gray'>
                                <a href='/' className='underline ' >{data.status}</a>
                                <a href='/' className='underline ' >{data.skills}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default SalaryGuide
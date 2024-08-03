import React from 'react'
import { FaSuitcase } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Swal from 'sweetalert2';

const JobDetails = () => {
    const alert = () =>{
      Swal.fire({
        title: "Applied Successfully !",
        text: "your application was sent to the employer! ",
        icon: "success"
      });
    }


  return (
    <div className='px-10 bg-white'>
      <div>
        <div>
        <p className='text-sm text-black font-medium py-4'>Job ID : 455506</p>
        <h2 className='text-xl text-logo font-semibold'>Job Details</h2>
        <p className=' sm:flex'><em className='text-slate-500 sm:m-4 flex gap-2 items-center'><IoMdInformationCircleOutline className='' />Download the Global Jobs App to manage your 
          real time conversation with the recruiter</em>
        <button className='max-h-[50px] border rounded-md border-indigo-600 mt-2 px-4 py-2 block sm:my-auto font-semibold hover:scale-105 text-indigo-500'>Download App</button></p>
        </div>
        <div>
        <div className='flex gap-2'>
          <h2 className='flex items-center gap-2 text-gray font-bold'><FaSuitcase /> Job type :</h2>
          <p>Full-Time</p>
          </div>
          <div className='p-4'>
            <button onClick={alert} className='p-3 text-white font-semibold rounded-sm bg-logo min-w-[180px] hover:bg-indigo-700 hover:scale-105'>Apply Now</button>
          </div>
        </div>
      </div>
      <div className='sm:grid grid-cols-2 gap-10 text-s'>
        <div className='leading-8 '>
          <h2 className=' text-gray font-bold text-lg p-2'>Benefits</h2>
          <p className=' text-gray px-2'><i>pulled from the full job description</i></p>
          <div className='*:p-2'>
          <div className='flex '><dt className='w-[40%]  font-bold text-gray'>Job Location</dt><dd className='w-[60%]'>: Dubai, United Arab Emirates</dd></div>
          <div className='flex '><dt className='w-[40%] font-bold text-gray'>Company Industry</dt>	<dd className='w-[60%]'>: Accounting; Business Consultancy Services</dd></div>
          <div className='flex '><dt className='w-[40%] font-bold text-gray'>Company Type </dt>	<dd className='w-[60%]'>	: Unspecified</dd></div>
          <div className='flex '><dt className='w-[40%] font-bold text-gray'>Job Role</dt>	<dd className='w-[60%]'>	: Accounting and Auditing</dd></div>
          <div className='flex '><dt className='w-[40%] font-bold text-gray'>Employment Type</dt>	<dd className='w-[60%]'>:	Full Time Employee</dd></div>
          <div className='flex '><dt className='w-[40%] font-bold text-gray'>Monthly Salary Range</dt>	<dd className='w-[60%]'>:	$500 - $1,000</dd></div>
          <div className='flex'><dt className='w-[40%] font-bold text-gray'>Number of Vacancies</dt>	<dd className='w-[60%]'>:	1</dd></div>
          </div>
        </div>
        <div className=''>
          <h2 className=' text-gray font-bold text-lg p-2'>Skills</h2>
          <p className='leading-8'>
          <li>Ability to provide compassionate and high-quality nursing care.</li>
          <li>Strong collaboration and teamwork skills.</li>
          <li>Knowledge of medical procedures and ability to administer medications.</li>
          <li>Attention to detail and ability to maintain accurate and comprehensive patient records.</li>
          <li>Effective communication and interpersonal skills.</li>
          </p>
        
          <h2 className=' text-gray font-bold text-lg p-2'>Preferred Candidate</h2>
          <p className='leading-8'>
          <li>Bachelor's degree in nursing (BSN) or equivalent.</li>
          <li>Valid nursing license from the country of origin.</li>
          <li>Minimum of 2 years of clinical nursing experience.</li>
          <li>Basic Life Support (BLS) and Advanced Cardiovascular Life Support (ACLS) certifications.</li>
          <li>Strong clinical and critical thinking skills.</li>
          <li>Excellent communication and interpersonal skills.</li>
          </p>
        </div>
      </div>
      <div className='my-8 p-2  leading-6'>
        Are you a Registered Nurse seeking a new and rewarding adventure? We have an incredible opportunity for you! Join us in Dubai, where you can blend your passion for healthcare with the excitement of a vibrant international city. Our prestigious clients in Dubai are actively looking for dedicated Registered Nurses to join their dynamic teams.
        Are you a Registered Nurse seeking a new and rewarding adventure? We have an incredible opportunity for you! Join us in Dubai, where you can blend your passion for healthcare with the excitement of a vibrant international city. Our prestigious clients in Dubai are actively looking for dedicated Registered Nurses to join their dynamic teams.
      </div>


    </div>
  )
}

export default JobDetails
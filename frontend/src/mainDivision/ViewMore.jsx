import React from 'react';
import { FaRightToBracket } from "react-icons/fa6";
import { FaFileUpload } from "react-icons/fa";

const ViewMore = () => {
  return (
    <div>
      <div className='text-gray my-6'>
        <h1 className='text-l font-bold  flex items-center'><FaRightToBracket className='scale-125 mx-2 '/>Update your profile</h1>
        <p className='p-6'>keep updating your Global jobs profile so that recruiters can see your latest accomplishments..</p>
        <button className='border-2 p-2 w-full bg-blue text-white '>Update</button>
      </div>
      <hr className='' />
      <div className='text-gray my-6'>
        <h1 className='text-l font-bold  flex items-center'><FaFileUpload className='scale-125 mx-2 '/>Upload your resume</h1>
        <p className='p-6'>recruiter searches for the similar skill profile, your resume will appear on the top of page in list..</p>
        <button className='border-2 p-2 w-full bg-blue text-white '>Upload your resume</button>
      </div>
    </div>
  )
}

export default ViewMore
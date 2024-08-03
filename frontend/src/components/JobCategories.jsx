import React from 'react'
import Filter from '../mainDivision/Filter'
import JobList from '../mainDivision/JobList'
import ViewMore from '../mainDivision/ViewMore'

const JobCategories = () => {
  return (
    <div className=' w-full mt-6 hidden sm:block '>
      
      <div className='block md:grid grid-cols-4 gap-8 px-4 py-12'>
          <div className='bg-blue p-8'>
            <Filter />
          </div>
          <div className='col-span-2'>
            <JobList />
          </div>
          <div>
            <ViewMore />
          </div>
      </div>
    </div>
  )
}

export default JobCategories
import React, { useState } from 'react'

const Filter
 = () => {
    const[thisLoction, setThisLocation] =useState()
  return (
    <div className='text-white'>
        <h2 className='text-xl font-bold'>Filters</h2>
        <div className=''>
        <h2 className='font-bold pl-0 mt-2'>Location</h2>
            <ul className=' *:p-2 gap-2 pl-4'>
            <li><input type='radio' name='location' value='All' onChange={e=>setThisLocation(e.target.value)} /> All</li>
            <li><input type='radio' name='location' value='London' onChange={e=>setThisLocation(e.target.value)} /> London</li>
            <li><input type='radio' name='location' value='San francisco' onChange={e=>setThisLocation(e.target.value)} /> San francisco</li>
            <li><input type='radio' name='location' value='Canada' onChange={e=>setThisLocation(e.target.value)} /> Canada</li>
            </ul>
        </div>
        <div className=''>
            <h2 className='font-bold pl-0 mt-2'>Salary</h2>
            <ul className=' *:p-2 gap-2 pl-4'>
            <li><input type='radio' name='location' value='All' onChange={e=>setThisLocation(e.target.value)} /> Any</li>
            <li><input type='radio' name='location' value='London' onChange={e=>setThisLocation(e.target.value)} /> {"<"} 3 LPA </li>
            <li><input type='radio' name='location' value='San francisco' onChange={e=>setThisLocation(e.target.value)} /> 3 - 5 LPA</li>
            <li><input type='radio' name='location' value='Canada' onChange={e=>setThisLocation(e.target.value)} /> 5 - 10 LPA</li>
            <li><input type='radio' name='location' value='Canada' onChange={e=>setThisLocation(e.target.value)} /> 10 - 15 LPA</li>
            <li><input type='radio' name='location' value='Canada' onChange={e=>setThisLocation(e.target.value)} /> 15 - 20 LPA</li>
            <li><input type='radio' name='location' value='Canada' onChange={e=>setThisLocation(e.target.value)} /> {">"} 20 LPA</li>
            </ul>
        </div>
        <div className=''>
            <h2 className='font-bold pl-0 mt-2'>Date of posting</h2>
            <ul className=' *:p-2 gap-2 pl-4'>
            <li><input type='radio' name='location' value='All' onChange={e=>setThisLocation(e.target.value)} /> All</li>
            <li><input type='radio' name='location' value='London' onChange={e=>setThisLocation(e.target.value)} /> Today</li>
            <li><input type='radio' name='location' value='San francisco' onChange={e=>setThisLocation(e.target.value)} /> This week</li>
            <li><input type='radio' name='location' value='Canada' onChange={e=>setThisLocation(e.target.value)} /> This Month</li>
            </ul>
        </div>
    </div>
  )
}

export default Filter

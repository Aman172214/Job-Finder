import React from 'react'

const MyJobs = () => {

  const myJobInfo = [{jobTitle:"web developer",jobId:" 425606",JobPostedDate:"03/07/2024",JobLocation:"india",salaryRange:"4-7 lpa",JobDescription:"Are you a Registered Nurse seeking a new and rewarding adventure? We have an incredible opportunity for you! Join us in Dubai, where you can blend your passion for healthcare with the excitement of a vibrant international city. Our prestigious clients in Dubai are actively looking for dedicated Registered Nurses to join their dynamic teams. Are you a Registered Nurse seeking a new and rewarding adventure? We have an incredible opportunity for you! Join us in Dubai, where you can blend your passion for healthcare with the excitement of a vibrant international city. Our prestigious clients in Dubai are actively looking for dedicated Registered Nurses to join their dynamic teams."},
                      {jobTitle:"front end developer",jobId:" 423506",JobPostedDate:"30/07/2024",JobLocation:"dubai",salaryRange:"10-12 lpa",JobDescription:"Are you a Registered Nurse seeking a new and rewarding adventure? We have an incredible opportunity for you! Join us in Dubai, where you can blend your passion for healthcare with the excitement of a vibrant international city. Our prestigious clients in Dubai are actively looking for dedicated Registered Nurses to join their dynamic teams. Are you a Registered Nurse seeking a new and rewarding adventure? We have an incredible opportunity for you! Join us in Dubai, where you can blend your passion for healthcare with the excitement of a vibrant international city. Our prestigious clients in Dubai are actively looking for dedicated Registered Nurses to join their dynamic teams."},
                      {jobTitle:"back end developer",jobId:"412654",JobPostedDate:"23/07/2024",JobLocation:"uk",salaryRange:"12-15 lpa",JobDescription:"Are you a Registered Nurse seeking a new and rewarding adventure? We have an incredible opportunity for you! Join us in Dubai, where you can blend your passion for healthcare with the excitement of a vibrant international city. Our prestigious clients in Dubai are actively looking for dedicated Registered Nurses to join their dynamic teams. Are you a Registered Nurse seeking a new and rewarding adventure? We have an incredible opportunity for you! Join us in Dubai, where you can blend your passion for healthcare with the excitement of a vibrant international city. Our prestigious clients in Dubai are actively looking for dedicated Registered Nurses to join their dynamic teams."},
                      {jobTitle:"full stack developer",jobId:"459687",JobPostedDate:"13/07/2024",JobLocation:"canada",salaryRange:"14-16 lpa",JobDescription:"Are you a Registered Nurse seeking a new and rewarding adventure? We have an incredible opportunity for you! Join us in Dubai, where you can blend your passion for healthcare with the excitement of a vibrant international city. Our prestigious clients in Dubai are actively looking for dedicated Registered Nurses to join their dynamic teams. Are you a Registered Nurse seeking a new and rewarding adventure? We have an incredible opportunity for you! Join us in Dubai, where you can blend your passion for healthcare with the excitement of a vibrant international city. Our prestigious clients in Dubai are actively looking for dedicated Registered Nurses to join their dynamic teams."},
                      {jobTitle:"react developer",jobId:"445692",JobPostedDate:"08/07/2024",JobLocation:"australia",salaryRange:"15-16 lpa",JobDescription:"Are you a Registered Nurse seeking a new and rewarding adventure? We have an incredible opportunity for you! Join us in Dubai, where you can blend your passion for healthcare with the excitement of a vibrant international city. Our prestigious clients in Dubai are actively looking for dedicated Registered Nurses to join their dynamic teams. Are you a Registered Nurse seeking a new and rewarding adventure? We have an incredible opportunity for you! Join us in Dubai, where you can blend your passion for healthcare with the excitement of a vibrant international city. Our prestigious clients in Dubai are actively looking for dedicated Registered Nurses to join their dynamic teams."}
                    ];

  return (
    <div className='p-2'>
      <h2 className='text-logo font-bold text-xl'>keep track your posted jobs here...</h2>
      <div className='w-full md:w-[60%] flex flex-col items-center mx-auto shadow-2xl p-2'>
        {
          myJobInfo.map((item)=>(
            <div className='py-4 px-2'>
              <p className='font-bold text-logo'>Job ID : {item.jobId}</p>
              <hr  className=' border-solid border-1 border-logo '/>
              <div className='py-2'>
                <p className='font-bold'>Job Title : <span className=''>{item.jobTitle}</span></p>
                <p className='font-bold'>Job Location : <span>{item.JobLocation}</span></p>
                <p className='font-bold'>Slaray Range : <span>{item.salaryRange}</span></p>
                <p className='font-bold'>Job Posted Date : <span>{item.JobPostedDate}</span></p>
              </div>
              <div>
              <p className='font-bold'>JobDescription : <span className='font-normal'>{item.JobDescription}</span></p>
              </div>
              <div>
              <button className='bg-red-600 my-6 mx-auto flex p-2 px-4 text-white hover:bg-red-700 active:bg-slate-500 rounded-md '>Delete job</button>
              </div>
              <hr className=" w-12 mx-auto mt-4 border-dotted border-logo border-t-[8px] md:my-2" />
            </div>
              
          ))
        }
      

        
      </div>
    </div>
  )
}

export default MyJobs
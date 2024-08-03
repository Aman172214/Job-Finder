import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';


const PostJobs = () => {
 const [selectedOption, setSelectedOption] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
  console.log(data);
  };

   const options = [
    { value: "java", label: "java" },
    { value: "C++", label: "C++" },
    { value: "javaScript", label: "javaScript" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "Node js", label: "Node js" },
    { value: "React js", label: "React js" },
    { value: "Express js", label: "Express js" },
      ];



  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className='mb-4'><h1 className='text-logo font-bold text-xl'>Let's hire your next
         great candidate.Fast...</h1>
         <p className='text-gray '>Over 2,70,000 companies use Global Jobs to hire. See why these fantastic companies use us as their platform for hiring dream talent.</p></div>
      <div className="bg-sky-400/30 py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job title</label>
              <input
                type="text"
                defaultValue={"Web developer"}
                {...register("jobTitle")}
                className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex : Microsoft"
                {...register("companyName")}
                className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minPrice")}
                className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                {...register("maxPrice")}
                className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select
                {...register("salaryType")}
                className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Choose your salary type</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex : london"
                {...register("jobLocation")}
                className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex : 2024-04-05"
                {...register("postingDate")}
                className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Choose your experienceLevel</option>
                <option value="Fresher">Fresher</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>


           <div>
            <label className="block mb-2 text-lg">Required skill sets:</label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div> 




          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company logo</label>
              <input
                type="url"
                placeholder="paste your company logo URL"
                {...register("companyLogo")}
                className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Choose your employmentType</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <label className="block mb-2 text-lg ">Job description</label>
            <textarea
              {...register("description")}
              rows={6}
              placeholder="job description"
              defaultValue={
                "Add job description, roles and responsibility,work nature etc..,"
              }
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-slate-400"
            />
          </div>
          <div>
            <label className='block mb-2 text-lg'>Job Posted By</label>
            <input
               type='email' 
               placeholder='Your email'
               {...register("postedBy")}
               className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>

          <input
            type="submit"
            className="mt-12 block bg-logo text-white font-semibold px-8 py-2 rounded-sm cursor-pointer hover:scale-110"
          />
        </form>
      </div>
    </div>
  )
}

export default PostJobs
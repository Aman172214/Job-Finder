import React, { useState } from 'react';
import { useForm, useFieldArray, Controller } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input'
import {
  CitySelect,
  CountrySelect,
  StateSelect,} from 'react-country-state-city';
import "react-country-state-city/dist/react-country-state-city.css";

const ProfileEdit = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedLanguage, setselectedLanguage] = useState(null)
  const [mobileNum, setMobileNum] = useState()
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
      } = useForm({
        defaultValues: {
          fields: [{ value: '' }],
          profilePicture: null,
        },
      });

      const { fields, append, remove } = useFieldArray({
        control,
        name: 'jobtitle', 
      });

      

      const handleFileChange = (event) => {
        setValue('profilePicture', event.target.files[0]);
      };
      const profilePicture = watch('profilePicture');

      const onSubmit = (data) => {
        data.skills = selectedOption;
        data.Language =selectedLanguage;

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

          const Language = [
            { value: "English", label: "English" },
            { value: "Mandarin Chinese ", label: "Mandarin Chinese " },
            { value: "Hindi ", label: "Hindi " },
            { value: "Spanish", label: "Spanish" },
            { value: "French", label: "French" },
            { value: "Arabic", label: "Arabic " },
            { value: "Bengali", label: "Bengali" },
            { value: "Portuguese", label: "Portuguese" },
              ];
      
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-5">
      <div className="bg-[#ADD8E6] py-10 px-4 lg:px-16 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}  className="space-y-5">
        {/* 1st row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

        <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-black">First Name</label>
              <input
                type="text"
                placeholder='First name'
                {...register("firstName", { required: true })}
                className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 hover:shadow-xl text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-black">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 hover:shadow-xl text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>

            </div>
         {/* 2st row */}   
         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

      <div className="lg:w-1/2 w-full">
      <label className="block mb-2 text-lg text-black">Mail id</label>
      <input
        type="email"
        placeholder='Email id'
        {...register("emailId", { required: true })}
        className="block w-full flex-1 border-1 bg-white py-1.5
                    pl-3 hover:shadow-xl text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
      />
    </div>
    <div className="lg:w-1/2 w-full">
      <label className="block mb-2 text-lg text-black">Mobile number</label>
      <PhoneInput
      placeholder="Enter phone number"
      value={mobileNum}
      onChange={setMobileNum}
      className="block w-full flex-1 border-1 bg-white py-1.5
                    pl-3 hover:shadow-xl text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"/>
    </div>

    </div>
      {/* 3rd row */} 
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

<div className="lg:w-1/3 w-full">
<label className="block mb-2 text-lg text-black">Country</label>
<CountrySelect
        onChange={(e) => {
          setCountryid(e.id);
        }}
        placeHolder="Select Country"
      />
</div>

<div className="lg:w-1/3 w-full">
<label className="block mb-2 text-lg text-black">State</label>
<StateSelect
        countryid={countryid}
        onChange={(e) => {
          setstateid(e.id);
        }}
        placeHolder="Select State"
      />
</div>
<div className="lg:w-1/3 w-full">
<label className="block mb-2 text-lg text-black">City</label>
<CitySelect
        countryid={countryid}
        stateid={stateid}
        onChange={(e) => {
          console.log(e);
        }}
        placeHolder="Select City"
      />
</div>

    </div>
        {/* 4th row */} 
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

<div className="w-full">
      <label className="block mb-2 text-lg text-black">Upload resume</label>
      <input
        type="file"
        placeholder='upload a resume'
        {...register(" ", { required: true })}
        className="block w-full flex-1 border-1 bg-white py-1.5
                    pl-3 hover:shadow-xl text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
      />
    </div>

    
  

    </div> 
     {/* 5th row */}   
     <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

<div className="lg:w-1/2 w-full">
<label className="block mb-2 text-lg text-black">Most recent work experience</label>
<input
  type="text"
  placeholder='ex: Junior Web Developer, Tcs'
  {...register("MostRecentWorkExperience ")}
  className="block w-full flex-1 border-1 bg-white py-1.5
              pl-3 hover:shadow-xl text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
/>
</div>
<div className="lg:w-1/2 w-full">
<label className="block mb-2 text-lg text-black">Education</label>
<input
  type="text"
  placeholder='Ex : B.E computer science'
  {...register("Education ")}
  className="block w-full flex-1 border-1 bg-white py-1.5
              pl-3 hover:shadow-xl text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
/>
</div>

</div>
{/* 6th row */} 

<div className=" w-full">
<label className="block mb-2 text-lg text-black">Skills</label>
<CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
            />
</div>
{/* 7th row */}
<div className=" w-full">
<label className="block mb-2 text-lg text-black">Language known</label>
<CreatableSelect
              defaultValue={selectedLanguage}
              onChange={setselectedLanguage}
              options={Language}
              isMulti
              className="block w-full flex-1 border-1 bg-white py-1.5
                            pl-3 text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
            />
</div>
{/* 8th row */}


<div className=" w-full ">
<label className="block mb-2 text-lg text-black">What are your desired job titles?</label>
  {fields.map((field, index) => (
        <div key={field.id} className='flex'>
          <Controller
            name={`jobtitle[${index}].value`}
            control={control}
            render={({ field }) => (
              <input 
                {...field} 
                placeholder="desire job title" 
                className="block w-full flex-1 border-1 bg-white py-1.5
              pl-3 hover:shadow-xl text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            )}
          />
          <button 
            type="button" 
            onClick={() => remove(index)}
            className='text-white  font-bold text-xl bg-red-500 rounded-r-full px-4 p-2 m-auto'
          >
            X
          </button>
        </div>
      ))}
      <button 
        type="button" 
        onClick={() => append({ value: '' })}
        className='text-white font-medium bg-logo rounded-full px-4 p-2 flex items-center justify-center my-2'
      >
       Add +
      </button>
     
</div>
<div className="w-full">
<label className="block mb-2 text-lg text-black">Minimum base pay</label>
<input
  type="text"
  placeholder='Ex : AED 3,000 per month'
  {...register("Education ")}
  className="block w-full flex-1 border-1 bg-white py-1.5
              pl-3 hover:shadow-xl text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
/>
</div>
<div className=" w-full ">
<label className="block mb-2 text-lg text-black">Work type</label>
<input
  type="text"
  placeholder='Ex : Remote,full time,part time'
  {...register("Education ")}
  className="block w-full flex-1 border-1 bg-white py-1.5
              pl-3 hover:shadow-xl text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
/>
</div>
<div className=" w-full ">
<label htmlFor="profilePicture"  className="block mb-2 text-lg text-black">Profile Picture</label>
<input
            type="file"
            id="profilePicture"
            accept="image/*"
            {...register('profilePicture', {
              onChange: handleFileChange,
            })}
            className="block w-full flex-1 border-1 bg-white py-1.5
              pl-3 hover:shadow-xl text-gray placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
          />
          {profilePicture && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(profilePicture)}
                alt="Profile Preview"
                className="w-32 h-32 object-cover rounded-full border border-gray-300"
              />
            </div>
          )}
</div>




      <input
            type="submit"
            className="mt-12 block bg-logo text-white font-semibold px-8 py-2 rounded-sm cursor-pointer hover:scale-110"/>
      
    </form>
    </div>
    </div>
  )
}

export default ProfileEdit
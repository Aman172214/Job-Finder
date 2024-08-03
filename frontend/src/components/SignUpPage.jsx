import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { TbCircleLetterGFilled } from "react-icons/tb";

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

    const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
   
    setFormData({
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-sky-200 ">
       <div className='absolute top-5 left-5'><a href="/" className="flex  gap-2 text-2xl ">
          <TbCircleLetterGFilled className="text-logo text-4xl" />
          <span className="font-bold text-logo">Global Jobs</span>
        </a></div>
      <div className="w-[80%] h-[80%] sm:w-2/6  sm:h-4/5 bg-slate-50 rounded-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-logo">Sign up</h2>
        </div>
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
          <div className='flex justify-center'>
              <label htmlFor="user-name" className="sr-only">user name</label>
              <input
                id="user-name"
                name="username"
                type="text"
                autoComplete="given-name"
                required
                value={formData.userName}
                onChange={handleChange}
                className="p-4 my-2 mx-auto w-[80%] block shadow-lg border border-slate-300 rounded-md focus:outline-none focus:ring-[#00bfe7] focus:border-[#00bfe7] "
                placeholder="User Name"
              />
            </div>
            <div className='flex justify-center'>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="p-4 my-2 mx-auto w-[80%] block shadow-lg border border-slate-300 rounded-md focus:outline-none focus:ring-[#00bfe7] focus:border-[#00bfe7] "
                placeholder="Email"
              />
            </div>
            <div className='flex justify-center'>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="p-4 my-2 mx-auto w-[80%] block shadow-lg border border-slate-300 rounded-md focus:outline-none focus:ring-[#00bfe7] focus:border-[#00bfe7]  "
                placeholder="Password"
              />
            </div>
            <div className='flex justify-center'>
              <label htmlFor="confirm-password" className="sr-only">confirm password</label>
              <input
                id="confirm-password"
                name="pconfirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="p-4 my-2 mx-auto w-[80%] block shadow-lg border border-slate-300 rounded-md focus:outline-none focus:ring-[#00bfe7] focus:border-[#00bfe7]  "
                placeholder="confirm Password"
              />
            </div>
          </div>

          <div className='flex justify-center'>
            <button
              type="submit"
              className="mb-1 bg-logo px-10 py-3 rounded-lg text-white"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className='flex justify-center text-sm font-medium'>
            <h2>Already have an account! <span className='text-indigo-600 hover:text-teal-400'><Link to='/login'> Log in</Link></span></h2>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
 
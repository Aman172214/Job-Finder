import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { TbCircleLetterGFilled } from "react-icons/tb";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-sky-200 ">
      <div className='absolute top-5 left-5'><a href="/" className="flex  gap-2 text-2xl ">
          <TbCircleLetterGFilled className="text-logo text-4xl" />
          <span className="font-bold text-logo">Global Jobs</span>
        </a></div>
      <div className="w-[80%] h-[80%] sm:w-2/6  sm:h-4/5 bg-slate-50 rounded-lg ">
        <div>
          <h2 className="mt-12 text-center text-3xl font-bold text-logo">Login</h2>
        </div>
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
            <div className='flex justify-center'>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="p-4 mx-auto w-[80%] block shadow-lg border border-slate-300 rounded-md focus:outline-none focus:ring-[#00bfe7] focus:border-[#00bfe7] "
                placeholder="Email"
              />
            </div>
            <div className='flex justify-center my-8'>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={handlePasswordChange}
                className="p-4 mx-auto w-[80%] block shadow-lg border border-slate-300 rounded-md focus:outline-none focus:ring-[#00bfe7] focus:border-[#00bfe7]  "
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between w-[80%] mx-auto ">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm ">
              <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div className='flex justify-center my-12'>
            <button
              type="submit"
              className=" my-8 bg-logo px-10 py-3 rounded-lg text-white hover:scale-105"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className='flex justify-center text-sm font-medium'>
            <h2>Don't have an account? <span className='text-indigo-600 hover:text-teal-600'><Link to='/signup'> Sign up</Link></span></h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

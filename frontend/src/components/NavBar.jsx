import React, { useState } from "react";
import { TbCircleLetterGFilled } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { FaRegBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [sideNav, setSideNav]= useState(false);

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/my-job", title: "My Job" },
    { path: "/salary-guide", title: "Salary Guide" },
    { path: "/post-job", title: "Empoloyers/Post Jobs" },
  ];

  return (
    <header className="max-w-[1520] max-auto flex justify-between item-center p-4 relative shadow-md">
      <nav className="flex items-center " >
        <a href="/" className="flex items-center gap-2 text-2xl">
          <TbCircleLetterGFilled className="text-logo text-4xl" />
          <span className="font-bold text-logo">Global Jobs</span>
        </a>
        <ul className="hidden lg:flex gap-12 text-gray px-20 hover:*:text-sky-500 hover:*:scale-105">
          {navItems.map(({ path, title }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive}) =>
                  isActive ? "active" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex  gap-12 absolute  right-10 hover:*:scale-105 items-center">
          <Link to="/profile"><VscAccount className="text-2xl text-black scale-125" /></Link>
          <Link to="/"><button className="p-2 bg-logo rounded-md font-semibold w-[80px] text-white">Logout</button></Link>
        </div>
        <div className="md:hidden absolute top-8 right-5 ">
          
          <button onClick={()=> setSideNav(!sideNav)} className="text-2xl">
            {
              sideNav ? <RxCross2 />:<RxHamburgerMenu />
            }
            </button>
            {
              sideNav?<div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0" onClick={()=>(setSideNav(!sideNav))}></div>:""        
            }
          
        </div>
      </nav>
      <div className={sideNav?"fixed top-0 left-0 w-3/4 h-screen bg-white z-10  ease-out duration-300":
    "fixed top-0 left-[-100%] w-full h-screen bg-white z-10 ease-out duration-300"}>
        <h1 className="font-bold p-4 text-blue text-xl">jasmine</h1>
        <ul className=" *:py-2 px-6">
        {navItems.map(({ path, title }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive}) =>
                  isActive ? "active" : ""
                }
              >
                {title}
              </NavLink>
            </li>
        
          ))}
        </ul>
        <button className="px-6 py-2">SignOut</button>
      </div>

    </header>
  );
};

export default NavBar;

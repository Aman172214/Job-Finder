import React from "react";
import { FcAutomotive, FcSupport } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcEngineering } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

import { jobData } from "../../../public/JobsData";
import { CiLocationOn } from "react-icons/ci";
import { BsSuitcaseLg } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";

const MainMobileDiv = () => {
  return (
    <div className="sm:hidden ">
      <div className="*:mx-4 *:my-8">
        <h1 className="text-xl font-bold text-slate-700">Job Categories</h1>
        <div className="flex justify-between text-gray ">
          <p className="flex text-l">
            <FcAutomotive className="scale-125 mx-2" />
            <span> Automotive</span>
          </p>
          <p>4 Openings</p>
        </div>
        <div className="flex justify-between text-gray ">
          <p className="flex text-l">
            <FcCustomerSupport className="scale-125 mx-2" />
            <span>Customer support</span>
          </p>
          <p>10 Openings</p>
        </div>
        <div className="flex justify-between text-gray ">
          <p className="flex text-l">
            <FcBriefcase className="scale-125 mx-2" />
            <span>Marketting</span>
          </p>
          <p>5 Openings</p>
        </div>
        <div className="flex justify-between text-gray ">
          <p className="flex text-l">
            <FcBusinesswoman className="scale-125 mx-2" />
            <span>Teaching</span>
          </p>
          <p>8 Openings</p>
        </div>
        <div className="flex justify-between text-gray ">
          <p className="flex text-l">
            <FcEngineering className="scale-125 mx-2" />
            <span>Construction</span>
          </p>
          <p>12 Openings</p>
        </div>
        <div className="flex justify-between text-gray ">
          <p className="flex text-l">
            <FcLike className="scale-125 mx-2" />
            <span>Health care</span>
          </p>
          <p>6 Openings</p>
        </div>
        <div className="flex justify-between text-gray ">
          <p className="flex text-l">
            <FcSupport className="scale-125 mx-2" />
            <span>Industry</span>
          </p>
          <p>5 Openings</p>
        </div>
        <div className="flex justify-between text-gray ">
          <p className="flex text-l">
            <FcAutomotive className="scale-125 mx-2" />
            <span>Automotive</span>
          </p>
          <p>6 Openings</p>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-xl text-gray">Jobs</h1>
        <div className="">
          {jobData.map((item) => {
            return (
              <div className="flex border border-slate-500 m-3">
                <div className="text-gray">
                  <img
                    src={item.companyLogo}
                    alt="logo"
                    className="w-[160px] h-[60px] p-2"
                  />
                </div>
                <div className="text-gray p-1">
                  <p>{item.companyName}</p>
                  <p className="font-bold">{item.jobTitle}</p>
                  <div className="flex *:flex  *:items-center">
                    <p>
                      <CiLocationOn className="m-0.5" />
                      {item.jobLocation}
                    </p>
                    <p>
                      <BsSuitcaseLg className="m-0.5" />
                      {item.employmentType}
                    </p>
                    <p>
                      <MdAttachMoney className="m-0.5" />
                      {item.maxPrice}-{item.maxPrice}
                    </p>
                    <p>
                      <MdOutlineDateRange className="m-0.5" />
                      {item.postingDate}
                    </p>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainMobileDiv;

import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";

const BlockClient = () => {
  const [activeTab, setActiveTab] = useState("Main"); // Default active tab

  const tabs = ["Main", "Accounts", "KYC", "Notification", "Notes"];
  return (
    <div className="w-full ">
      <div className=" my-8 mx-15 pb-5 shadow-md  bg-[#fcfcfc] rounded-sm ">
        {/* bg-[#fcfcfc]  */}
        <div className="flex py-2 px-7 flex-col  gap-3">
          <div className="flex justify-between">
            <div className="flex justify-items-start items-center">
              <HiArrowLeft className="text-lg text-gray-500" />
              <h1 className="text-3xl px-2 font-bold">John Brick</h1>
            </div>
            <div>
              <button className="border-2 font-bold text-[10px]  rounded-md py-1 px-3 text-red-500">
                Block the client's profile
              </button>
              <button className="border-2 ml-1 font-bold text-[10px] rounded-md py-1 px-3 text-gray-400">
                Freeze the client's profile
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-1 ">
            <p className="text-[12px] font-medium text-gray-400">Clients /</p>
            <p className="text-[12px] font-medium  text-gray-300">John Brick</p>
          </div>
          <div className=" border-b border-gray-200">
            <ul className="flex space-x-5">
              {tabs.map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`relative  py-2 text-gray-700 font-medium text-sm transition ${
                      activeTab === tab
                        ? "!text-blue-500"
                        : "hover:text-blue-500"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute left-1/2 bottom-0 w-1/2 h-[1px] bg-blue-500 transform -translate-x-1/2"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex  px-7 my-2 ">
          <div className=" flex w-full rounded-md border px-3 py-3  border-gray-300  items-center gap-1">
            <img
              className=" rounded-md "
              src="profile-image.jpg"
              alt="Image"
              style={{ width: "60px", height: "60px" }}
            />
            <div className="w-full h-[60px] bg-blue-50 rounded-sm ">
              <div className="grid py-4 px-2 w-fit gap-4 grid-cols-7 text-[10px] font-bold text-gray-500    ">
                <div>
                  <h1>Photo</h1>
                  <p className=" underline font-normal text-gray-400 ">
                    View client photo
                  </p>
                </div>
                <div>
                  <h1>Role</h1>
                  <p className=" text-gray-400">Individual</p>
                </div>
                <div>
                  <h1>Gender</h1>
                  <p className=" text-gray-400">Male</p>
                </div>

                <div>
                  <h1>Date of birth</h1>
                  <p className=" text-gray-400">12.08.1987</p>
                </div>
                <div>
                  <h1>Client ID</h1>
                  <p className=" text-gray-400">ec456asds84ads6..</p>
                </div>
                <div>
                  <h1>KYC status</h1>
                  <div className="flex items-center space-x-1">
                    <FaCircle className="text-green-400 text-[8px]" />
                    <p className=" text-gray-400">KYC Verified</p>
                  </div>
                </div>
                <div>
                  <h1>Profile Status</h1>
                  <div className="flex items-center space-x-1">
                    <FaCircle className="text-green-400 text-[8px]" />
                    <p className=" text-gray-400">Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[300px] border ml-13 bg-gray-100 p-4 border-gray-100">
        <div className=" w-full border-0 bg-white py-3 px-2">
          <div className="flex justify-between items-center px-2 pt-3">
            <h1 className="font-semibold text-lg">Block the client's</h1>
            <span>
              <IoCloseSharp />
            </span>
          </div>
          <h1 className=" px-2 font-semibold text-lg">profile</h1>
          <p className="mt-4  px-2 mb-4 font-medium text-[12px] text-red-500">
            A description of what happens to the client account after the system
            role click the ban button.
          </p>
          <div className="flex px-2 flex-col gap-2">
            <h2 className="font-medium text-sm">
              Reason <span className="text-greens-500">*</span>
            </h2>
            <select className="border p-2  rounded-md  border-gray-300 w-full text-gray-500 text-[10px]">
              <option value="" disabled selected>
                Choose Reason
              </option>
              <option value="fraud">Fraudulent Activity</option>
              <option value="spam">Spam or Abuse</option>
              <option value="terms">Violation of Terms</option>
              <option value="other">Other</option>
            </select>

            <h2 className="font-medium text-sm">Description</h2>
            <textarea
              className="border border-gray-300 p-2 placeholder-black  rounded-md w-full h-24  text-[10px]  "
              placeholder="Description"
            ></textarea>
            <div className="flex justify-between w-full">
              <button className="border rounded-md  w-2/5 text-sm font-bold text-gray-400 py-1">
                Cancel
              </button>
              <button className="border bg-red-500 rounded-md  w-2/5 text-sm font-bold text-white py-1">
                Ban
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockClient;

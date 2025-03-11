import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaSortAmountDown } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Main"); // Default active tab
  const navigate = useNavigate();

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
              <button
                className="border-2 font-bold text-[10px]  rounded-md py-1 px-3 text-red-500"
                onClick={() => navigate("/BlockClient")}
              >
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
        <div className="grid grid-cols-2 w-full   px-7 my-4 gap-5">
          {/* left part */}
          <div className="w-full  py-1 ">
            {/* first dev */}
            <div className="w-full border border-gray-300 rounded-t-md ">
              <div className="flex justify-between px-2 py-4">
                <h2 className="text-sm font-medium text-gray-900">
                  Contact Information
                </h2>
                <button
                  className="text-[10px] border-gray-100 border rounded-md py-1 px-3 bg-blue-50
            text-gray-500 font-medium"
                >
                  Reset the clien's password
                </button>
              </div>
              <div className="flex w-full p-2 flex-col space-y-1">
                <div className="flex  justify-items-start items-center">
                  <h2 className="flex items-center font-medium  text-[12px] w-1/3 text-gray-900 ">
                    Parameter
                    <span className="ml-1 text-[12px] ">
                      {<FaSortAmountDown />}
                    </span>
                  </h2>

                  <div className="flex  items-center">
                    <span className="text-gray-300 text-lg">|</span>
                    <h2 className=" font-medium text-[12px] ml-2 text-gray-400">
                      Value
                    </h2>
                  </div>
                </div>
                <div className="flex w-full rounded-md bg-blue-50  text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>Email address</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>john_brick@gmail.com</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center">
                    <button className="border-gray-300 bg-white border rounded-md py-1 px-3">
                      copy email
                    </button>
                  </div>
                </div>
                <div className="flex w-full rounded-md  text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>Primary phone number</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>+38 098 7288009</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center">
                    <button className="border-gray-300 border rounded-md py-1 px-3">
                      copy phone
                    </button>
                  </div>
                </div>
                <div className="flex w-full rounded-md bg-blue-50 text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>Phone number</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>+38 098 7288009</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center">
                    <button className="border-gray-300 border bg-white rounded-md py-1 px-3">
                      copy phone
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* second dev */}
            <div className="w-full border  border-t-0 border-gray-300">
              <div className="flex justify-between px-2 py-4">
                <h2 className="text-sm font-medium text-gray-900">
                  System Information
                </h2>
              </div>
              <div className="flex w-full p-2 flex-col space-y-1">
                <div className="flex  justify-items-start items-center ">
                  <h2 className="flex items-center font-medium  text-[12px] w-1/3 text-gray-900 ">
                    Parameter
                    <span className="ml-1 text-[12px] ">
                      {<FaSortAmountDown />}
                    </span>
                  </h2>

                  <div className="flex  items-center">
                    <span className="text-gray-300 text-lg">|</span>
                    <h2 className=" font-medium text-[12px] ml-2 text-gray-400">
                      Value
                    </h2>
                  </div>
                </div>
                <div className="flex w-full rounded-md bg-blue-50  py-1 text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>Member since</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>08.27.2019</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center"></div>
                </div>
                <div className="flex w-full rounded-md py-1 text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>System language</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>English</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center"></div>
                </div>
                <div className="flex w-full rounded-md py-1 bg-blue-50 text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>Cohort</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>64W</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center"></div>
                </div>
                <div className="flex w-full rounded-md  text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>Contract</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>Plus</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center">
                    <button className="border-gray-300 border rounded-md py-1 px-3">
                      Change contract
                    </button>
                  </div>
                </div>
                <div className="flex w-full rounded-md bg-blue-50 py-1 text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>Login credentials</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>Phone number, Email</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center"></div>
                </div>
              </div>
            </div>
            {/* third dev */}
            <div className="w-full border  border-t-0 border-gray-300">
              <div className="flex justify-between px-2  py-4">
                <h2 className="text-sm font-medium text-gray-900">
                  Address information
                </h2>
              </div>
              <div className="flex w-full p-2 flex-col space-y-1">
                <div className="flex  justify-items-start items-center">
                  <h2 className="flex items-center font-medium  text-[12px] w-1/3 text-gray-900 ">
                    Parameter
                    <span className="ml-1 text-[12px] ">
                      {<FaSortAmountDown />}
                    </span>
                  </h2>

                  <div className="flex  items-center">
                    <span className="text-gray-300 text-lg">|</span>
                    <h2 className=" font-medium text-[12px] ml-2 text-gray-400">
                      Value
                    </h2>
                  </div>
                </div>
                <div className="flex w-full rounded-md bg-blue-50  text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start py-1">
                    <h2>Address line</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>Cerosios Vilties g. 1-7</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center"></div>
                </div>
                <div className="flex w-full rounded-md py-1 text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>City</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>Vilnius</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center"></div>
                </div>
                <div className="flex w-full rounded-md py-1 bg-blue-50 text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>Country</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>Lithuania</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center"></div>
                </div>
                <div className="flex w-full rounded-md py-1 text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>Postal code</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>03147</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center"></div>
                </div>
              </div>
            </div>
            {/* forth dev */}
            <div className="w-full border  border-t-0 rounded-b-md border-gray-300">
              <div className="flex justify-between px-2 py-4">
                <h2 className="text-sm font-medium text-gray-900">
                  Billing address information
                </h2>
              </div>
              <div className="flex w-full p-2 flex-col space-y-1">
                <div className="flex  justify-items-start items-center">
                  <h2 className="flex items-center font-medium  text-[12px] w-1/3 text-gray-900 ">
                    Parameter
                    <span className="ml-1 text-[12px] ">
                      {<FaSortAmountDown />}
                    </span>
                  </h2>

                  <div className="flex  items-center">
                    <span className="text-gray-300 text-lg">|</span>
                    <h2 className=" font-medium text-[12px] ml-2 text-gray-400">
                      Value
                    </h2>
                  </div>
                </div>
                <div className="flex w-full rounded-md py-1 bg-blue-50  text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>Address line</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>Cerosios Vilties g. 1-7</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center"></div>
                </div>
                <div className="flex w-full rounded-md py-1 text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>City</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>Vilnius</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center"></div>
                </div>
                <div className="flex w-full rounded-md py-1 bg-blue-50 text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>Country</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>Lithuania</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center"></div>
                </div>
                <div className="flex w-full py-1 rounded-md  text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/3 justify-start">
                    <h2>Postal code</h2>
                  </div>
                  <div className=" flex w-1/3 px-3 justify-start">
                    <h2>03147</h2>
                  </div>
                  <div className=" flex w-1/3 justify-end items-center"></div>
                </div>
              </div>
            </div>
          </div>
          {/* right part */}
          <div className="w-full py-1">
            {/* first dev */}
            <div className="w-full border border-gray-300 rounded-t-md ">
              <div className="flex justify-between px-2 py-4">
                <h2 className="text-sm font-medium text-gray-900">
                  Last actions
                </h2>
                <button
                  className="text-[10px] border-gray-100 border rounded-md py-1 px-3 bg-blue-50
            text-gray-500 font-medium"
                >
                  View user action history
                </button>
              </div>
              <div className="flex w-full p-2 flex-col space-y-1">
                <div className="flex  justify-items-start items-center">
                  <h2 className="flex items-center font-medium  text-[12px] w-1/5 text-gray-900 ">
                    Activity type
                    <span className="ml-1 text-[12px] ">
                      {<FaSortAmountDown />}
                    </span>
                  </h2>

                  <div className="flex  items-center w-3/5 ">
                    <span className="text-gray-300 text-lg">|</span>
                    <h2 className=" font-medium text-[12px] ml-2 text-gray-400">
                      Date and time
                    </h2>
                  </div>
                </div>
                <div className="flex w-full py-1 rounded-md bg-blue-50  text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/5 justify-start">
                    <h2>logout</h2>
                  </div>
                  <div className=" flex w-4/5  px-3 justify-start">
                    <h2>06.22.2021 10:25:02</h2>
                  </div>
                </div>
                <div className="flex w-full py-1 rounded-md  text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/5  justify-start">
                    <h2>Login</h2>
                  </div>
                  <div className=" flex w-4/5  px-3 justify-start">
                    <h2>06.22.2021 10:25:02</h2>
                  </div>
                </div>
                <div className="flex w-full py-1 rounded-md bg-blue-50 text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/5 justify-start">
                    <h2>Password change</h2>
                  </div>
                  <div className=" flex w-4/5 px-3 justify-start">
                    <h2>06.22.2021 10:25:02</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* second dev */}
            <div className="w-full border  border-t-0 border-gray-300">
              <div className="flex justify-between px-2 py-4">
                <h2 className="text-sm font-medium text-gray-900">
                  Last transactions
                </h2>
                <button
                  className="text-[10px] border-gray-100 border rounded-md py-1 px-3 bg-blue-50
            text-gray-500 font-medium"
                >
                  View transactions
                </button>
              </div>
              <div className="flex w-full p-2 flex-col space-y-1">
                <div className="flex  justify-items-start items-center">
                  <h2 className="flex items-center font-medium  text-[12px] w-1/5 text-gray-900 ">
                    Transaction type
                    <span className="ml-1 text-[12px] ">
                      {<FaSortAmountDown />}
                    </span>
                  </h2>

                  <div className="flex  items-center w-1/5">
                    <span className="text-gray-300 text-lg">|</span>
                    <h2 className=" font-medium text-[12px] ml-2 text-gray-400">
                      Amount
                    </h2>
                  </div>
                  <div className="flex  items-center w-1/5">
                    <span className="text-gray-300 text-lg">|</span>
                    <h2 className=" font-medium text-[12px] ml-2 text-gray-400">
                      Date and time
                    </h2>
                  </div>
                  <div className="flex  items-center w-2/5">
                    <span className="text-gray-300 text-lg">|</span>
                    <h2 className=" font-medium text-[12px] ml-2 text-gray-400">
                      Source
                    </h2>
                  </div>
                </div>
                <div className="flex w-full rounded-md  bg-blue-50  text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/5 justify-start">
                    <h2>Changed</h2>
                  </div>
                  <div className=" flex w-1/5 px-3 justify-start">
                    <h2>$390.00</h2>
                  </div>
                  <div className=" flex px-3 w-1/5 justify-start">
                    <h2>06.22.2021 10:25:02</h2>
                  </div>
                  <div className=" flex w-1/5 px-3 justify-start">
                    <h2>4578***8512</h2>
                  </div>
                  <div className=" flex w-1/5 justify-end items-center">
                    <button className="border-gray-300  bg-white border rounded-md py-1 px-3">
                      View details
                    </button>
                  </div>
                </div>

                <div className="flex w-full rounded-md    text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/5 justify-start">
                    <h2>Changed</h2>
                  </div>
                  <div className=" flex w-1/5 px-3 justify-start">
                    <h2>$390.00</h2>
                  </div>
                  <div className=" flex  w-1/5 px-3 justify-start">
                    <h2>06.22.2021 10:25:02</h2>
                  </div>
                  <div className=" flex w-1/5 px-3 justify-start">
                    <h2>4578***8512</h2>
                  </div>
                  <div className=" flex w-1/5 justify-end items-center">
                    <button className="border-gray-300 border bg-white rounded-md py-1 px-3">
                      View details
                    </button>
                  </div>
                </div>
                <div className="flex w-full rounded-md  bg-blue-50  text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/5 justify-start">
                    <h2>Changed</h2>
                  </div>
                  <div className=" flex w-1/5 px-3 justify-start">
                    <h2>$390.00</h2>
                  </div>
                  <div className=" flex px-3 w-1/5 justify-start">
                    <h2>06.22.2021 10:25:02</h2>
                  </div>
                  <div className=" flex w-1/5 px-3 justify-start">
                    <h2>4578***8512</h2>
                  </div>
                  <div className=" flex w-1/5 justify-end items-center">
                    <button className="border-gray-300 border bg-white rounded-md py-1 px-3">
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* third dev */}

            <div className="w-full border  border-t-0 border-gray-300">
              <div className="flex justify-between px-2 py-4">
                <h2 className="text-sm font-medium text-gray-900">
                  Investigations
                </h2>
                <button
                  className="text-[10px] border-gray-100 border rounded-md py-1 px-3 bg-blue-50
            text-gray-500 font-medium"
                >
                  View investigations
                </button>
              </div>
              <div className="flex w-full p-2 flex-col space-y-1">
                <div className="flex  justify-items-start items-center">
                  <h2 className="flex items-center font-medium  text-[12px] w-1/5 text-gray-900 ">
                    Activity type
                    <span className="ml-1 text-[12px] ">
                      {<FaSortAmountDown />}
                    </span>
                  </h2>

                  <div className="flex  items-center w-1/5">
                    <span className="text-gray-300 text-lg">|</span>
                    <h2 className=" font-medium text-[12px] ml-2 text-gray-400">
                      Date and time
                    </h2>
                  </div>
                  <div className="flex  items-center w-3/5">
                    <span className="text-gray-300 text-lg">|</span>
                    <h2 className=" font-medium text-[12px] ml-2 text-gray-400">
                      Investigation status
                    </h2>
                  </div>
                </div>
                <div className="flex w-full rounded-md  bg-blue-50  text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/5 justify-start">
                    <h2>Fraud</h2>
                  </div>
                  <div className=" flex w-1/5 px-3 justify-start">
                    <h2>06.22.2021 10:25:02</h2>
                  </div>

                  <div className="flex px-3 w-2/5 justify-start items-center space-x-1">
                    <FaCircle className="text-orange-300 text-[8px]" />
                    <h2>In progress</h2>
                  </div>

                  <div className=" flex w-1/5 justify-end items-center">
                    <button className="border-gray-300  bg-white border rounded-md py-1 px-3">
                      View details
                    </button>
                  </div>
                </div>
                <div className="flex w-full rounded-md    text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/5 justify-start">
                    <h2>AML</h2>
                  </div>
                  <div className=" flex w-1/5 px-3 justify-start">
                    <h2>06.22.2021 10:25:02</h2>
                  </div>
                  <div className="flex px-3 w-2/5 justify-start items-center space-x-1">
                    <FaCircle className="text-orange-300 text-[8px]" />
                    <h2>In progress</h2>
                  </div>

                  <div className=" flex w-1/5 justify-end items-center">
                    <button className="border-gray-300  bg-white border rounded-md py-1 px-3">
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* third dev */}
            <div className="w-full border  border-t-0 rounded-b-md border-gray-300">
              <div className="flex justify-between px-2 py-4">
                <h2 className="text-sm font-medium text-gray-900">Last chat</h2>
                <button
                  className="text-[10px] border-gray-100 border rounded-md py-1 px-3 bg-blue-50
            text-gray-500 font-medium"
                >
                  View all chats
                </button>
              </div>
              <div className="flex w-full p-2 flex-col space-y-1">
                <div className="flex  justify-items-start items-center">
                  <h2 className="flex items-center font-medium  text-[12px] w-1/5 text-gray-900 ">
                    Date and time
                    <span className="ml-1 text-[12px] ">
                      {<FaSortAmountDown />}
                    </span>
                  </h2>

                  <div className="flex  items-center w-4/5">
                    <span className="text-gray-300 text-lg">|</span>
                    <h2 className=" font-medium text-[12px] ml-2 text-gray-400">
                      Chat status
                    </h2>
                  </div>
                </div>
                <div className="flex w-full rounded-md  bg-blue-50  text-[12px] font-medium text-gray-500  items-center">
                  <div className=" flex  w-1/5 justify-start">
                    <h2>06.22.2021 10:25</h2>
                  </div>
                  <div className="flex px-3 w-3/5 justify-start items-center space-x-1">
                    <FaCircle className="text-orange-300 text-[8px]" />
                    <h2>In progress</h2>
                  </div>

                  <div className=" flex w-1/5 justify-end items-center">
                    <button className="border-gray-300  bg-white border rounded-md py-1 px-3">
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

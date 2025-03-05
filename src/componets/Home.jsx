import React from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";

const Home = () => {
  return (
    <div className="bg-[#fcfcfc] px-5 py-32 m-5">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div>
            <h1>John Brick</h1>
          </div>
          <div>
            <button>Block the client's profile</button>
            <button>Freeze the client's profile</button>
          </div>
        </div>
        <div>
          <p>Clients/John Brick</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="">
                Main
              </a>
            </li>
            <li>
              <a href="#" className="">
                Accounts
              </a>
            </li>
            <li>
              <a href="#" className="">
                KYC
              </a>
            </li>
            <li>
              <a href="#" className="">
                Notification
              </a>
            </li>
            <li>
              <a href="#" className="">
                Notes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

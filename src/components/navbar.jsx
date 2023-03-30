import React from "react";
import "../App.css";
import timeIcon from "../assets/time-icon.svg";
import callIcon from "../assets/call-icon.svg";
import emailIcon from "../assets/email-icon.svg";

const Navbar = () => {
  return (
    <div className="w-full h-[18vh] bg-[rgb(9,19,67)] px-[12%] flex items-center justify-between">
      <div className="w-[20%] flex justify-between items-center cursor-pointer">
        <div className="h-[20px] flex flex-col justify-between">
          <div className="w-[20px] flex justify-between items-center">
            <div
              id="icon-rotate"
              className="w-[8px] h-[8px] bg-[#FFB82B]"
            ></div>
            <div className="w-[8px] h-[8px] bg-[#FFB82B]"></div>
          </div>
          <div className="w-[20px] flex justify-between items-center">
            <div className="w-[8px] h-[8px] bg-[#FFB82B]"></div>
            <div className="w-[8px] h-[8px] bg-[#FFB82B]"></div>
          </div>
        </div>
        <h3 id="rubik-bold" className="relative left-[-20px] text-[#fff] text-[24px] font-bold">TransitFlow</h3>
      </div>
      <div id="krub-medium" className="w-[70%] flex items-center justify-evenly cursor-pointer">
        <div className="flex items-center">
          <img src={timeIcon} alt="image of a time" width={43} height={43} />
          <div className="ml-[10px]">
            <p className="text-[10px] text-[#f4f4f4]">Mon - Sat 9.00 - 18.00</p>
            <p className="text-[10px] text-[#f4f4f4]">Sunday Closed</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={emailIcon} alt="image of a time" width={43} height={43} />
          <div className="ml-[10px]">
            <p className="text-[10px] text-[#f4f4f4]">Email</p>
            <p className="text-[10px] text-[#f4f4f4]">contact@logistics.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={callIcon} alt="image of a time" width={43} height={43} />
          <div className="ml-[10px]">
            <p className="text-[10px] text-[#f4f4f4]">Call</p>
            <p className="text-[10px] text-[#f4f4f4]">(00) 112 365 489</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

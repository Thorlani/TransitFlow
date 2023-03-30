import React from "react";
import ship from "../../assets/ship.svg";
import plane from "../../assets/plane.svg";
import warehouse from "../../assets/warehouse.svg";
import vehicle from "../../assets/vehicle.svg";

const FirstSection = () => {
  return (
    <section className="w-full px-[12%] py-[6%] bg-[#ffffff] flex justify-between">
      <div className="w-[30%]">
        <div className="bg-[#E8E8E8] w-fit flex">
          <div className="w-[4px] h-[16px] bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6]"></div>
          <p id="rubik-regular" className="text-xs px-2">
            What We Do
          </p>
        </div>
        <h2
          id="rubik-semibold"
          className="max-w-[280px] font-semibold text-3xl text-[#1C1F35]"
        >
          Safe & Reliable Cargo Solutions
        </h2>
      </div>
      <div className="w-[65%] grid grid-cols-2 gap-4">
        <div className="w-[245px] h-[93px] flex justify-between items-start">
          <img
            src={ship}
            alt="a ship"
            width={30}
            height={30}
            className="mt-2"
          />
          <div className="w-[1px] h-[62px] bg-black/20"></div>
          <div className="w-[65%]">
            <span id="rubik-regular" className="text-[14.5px] font-medium">
              Sea Transport Services
            </span>
            <p id="krub-medium" className="text-[10px] text-[#666C89]">
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
        <div className="w-[245px] h-[93px] flex justify-between items-start">
          <img
            src={warehouse}
            alt="a ship"
            width={30}
            height={30}
            className="mt-2"
          />
          <div className="w-[1px] h-[62px] bg-black/20"></div>
          <div className="w-[65%] ">
            <span id="rubik-regular" className="text-[14.5px] font-medium">
              Warehousing Services
            </span>
            <p id="krub-medium" className="text-[10px] text-[#666C89]">
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
        <div className="w-[245px] h-[93px] flex justify-between items-start">
          <img
            src={plane}
            alt="a ship"
            width={30}
            height={30}
            className="mt-2"
          />
          <div className="w-[1px] h-[62px] bg-black/20"></div>
          <div className="w-[65%] ">
            <span id="rubik-regular" className="text-[14.5px] font-medium">
              Air Fright Services
            </span>
            <p id="krub-medium" className="text-[10px] text-[#666C89]">
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
        <div className="w-[245px] h-[93px] flex justify-between items-start">
          <img
            src={vehicle}
            alt="a ship"
            width={30}
            height={30}
            className="mt-2"
          />
          <div className="w-[1px] h-[62px] bg-black/20"></div>
          <div className="w-[65%] ">
            <span id="rubik-regular" className="text-[14px] font-medium">
              Local Shipping Services
            </span>
            <p id="krub-medium" className="text-[10px] text-[#666C89]">
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;

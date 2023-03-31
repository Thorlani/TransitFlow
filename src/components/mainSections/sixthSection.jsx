import React from "react";
import rebecca from "../../assets/rebecca.svg";
import smith from "../../assets/smith.svg";
import jessica from "../../assets/jessica.svg";
import Instagram from "../../assets/Instagram-black.svg";
import Facebook from "../../assets/Facebook-black.svg";
import Twitter from "../../assets/Twitter-black.svg";
import Linkdin from "../../assets/Linkdin-black.svg";

const SixthSection = () => {
  return (
    <section className="w-full h-fit px-[12%] py-[6%]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex bg-black/20 w-[78px]">
          <div className="w-[2px] h-[13px] bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6]"></div>
          <p
            id="rubik-regular"
            className="text-[#1C1F35] text-[8px] text-center px-[4px]"
          >
            The Transporters
          </p>
        </div>
        <p id="rubik-semibold" className="text-[#1C1F35] font-bold text-2xl">
          Meet Expert Team
        </p>
        <div className="w-full mt-[20px] flex justify-between items-center px-[15%]">
          <div className="relative">
            <img
              src={jessica}
              alt="a photo of Jessica the team designer"
              className="object-contain w-[280px] h-[280px]"
            />
          </div>
          <div className="relative">
            <img
              src={smith}
              alt="a photo of Smith the team designer"
              className="object-contain w-[280px] h-[280px]"
            />
          </div>
          <div className="relative">
            <img
              src={rebecca}
              alt="a photo of Rebecca the team designer"
              className="object-contain w-[280px] h-[280px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;

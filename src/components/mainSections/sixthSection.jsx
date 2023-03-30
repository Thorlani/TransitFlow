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
          <p id="rubik-regular" className="text-[#1C1F35] text-[8px] text-center px-[4px]">
            The Transporters
          </p>
        </div>
        <p id="rubik-semibold" className="text-[#1C1F35] font-bold text-2xl">Meet Expert Team</p>
        <div className="w-full mt-[20px] flex justify-between items-center">
          <div className="relative">
            <img
              src={jessica}
              alt="a photo of Jessica the team designer"
              className="object-contain w-[280px] h-[280px]"
            />
            <div className="absolute px-[6px] py-[8px] w-[60px] bg-gradient-to-t from-[#FFDA56] to-[#FFD7A6] flex justify-between bottom-[45px] left-[174.5px]">
              <img
                src={Twitter}
                alt="a logo of twitter"
                width={10}
                height={10}
              />
              <img
                src={Facebook}
                alt="a logo of facebook"
                width={10}
                height={10}
              />
              <img
                src={Instagram}
                alt="a logo of instagram"
                width={10}
                height={10}
              />
            </div>
          </div>
          <div className="relative">
            <img
              src={smith}
              alt="a photo of Smith the team designer"
              className="object-contain w-[280px] h-[280px]"
            />
            <div className="absolute px-[6px] py-[8px] w-[70px] bg-gradient-to-t from-[#FFDA56] to-[#FFD7A6] flex justify-between bottom-[45px] left-[165px]">
              <img
                src={Linkdin}
                alt="a logo of twitter"
                width={10}
                height={10}
              />
              <img
                src={Twitter}
                alt="a logo of twitter"
                width={10}
                height={10}
              />
              <img
                src={Facebook}
                alt="a logo of facebook"
                width={10}
                height={10}
              />
              <img
                src={Instagram}
                alt="a logo of instagram"
                width={10}
                height={10}
              />
            </div>
          </div>
          <div className="relative">
            <img
              src={rebecca}
              alt="a photo of Rebecca the team designer"
              className="object-contain w-[280px] h-[280px]"
            />
            <div className="absolute px-[6px] py-[8px] w-[40px] bg-gradient-to-t from-[#FFDA56] to-[#FFD7A6] flex justify-between bottom-[45px] left-[195px]">
              <img
                src={Facebook}
                alt="a logo of facebook"
                width={10}
                height={10}
              />
              <img
                src={Instagram}
                alt="a logo of instagram"
                width={10}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;

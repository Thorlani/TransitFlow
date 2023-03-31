import React from "react";
import delivery from "../../assets/delivery-Icon.svg";
import optimize from "../../assets/optimize-Icon.svg";
import aeroplane from "../../assets/aeroplane-image.svg";
import secondSectionBg from "../../assets/second-section-bg.svg";

const SecondSection = () => {
  return (
    <section className="w-full h-[100px] relative mb-[590px]">
      <img src={secondSectionBg} alt="the background image of the second section" className="w-full h-[370px] object-contain" />
      <div className="flex items-center justify-center w-full absolute top-[180px]">
        <div className="w-[600px] h-fit bg-[#ffffff] p-[4%]">
          <div className="w-full h-fit flex">
            <div className="w-[50%]">
              <div className="bg-[#E8E8E8] w-fit flex">
                <div className="w-[4px] h-[16px] bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6]"></div>
                <p id="rubik-regular" className="text-xs px-2">
                  Why Us
                </p>
              </div>
              <h2
                id="rubik-semibold"
                className="font-bold text-[18px] text-[#1C1F35]"
              >
                We provide full range global logistics solution
              </h2>
              <p id="krub-medium" className="text-xs mb-3">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </p>
              <p className="text-xs mb-3">
                Organically grow the holistic world view of disruptive
                innovation via workplace diversity and empowerment.
              </p>
              <div className="flex items-center mb-3">
                <img
                  src={delivery}
                  alt="a delivery image"
                  width={50}
                  height={50}
                />
                <p id="rubik-regular" className="ml-3 text-sm">
                  Delivery on Time
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={optimize}
                  alt="a money image"
                  width={50}
                  height={50}
                />
                <p id="rubik-regular" className="ml-3 text-sm">
                  Optimized Travel Cost
                </p>
              </div>
            </div>
            <div className="w-[50%]">
              <img
                src={aeroplane}
                alt="an aeroplane image with a lady with a box"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center relative top-[170px]">
        <div className="flex items-center justify-between w-[500px] border-y-[1px] border-y-black/20">
          <div className="w-[210px] flex items-center justify-evenly">
            <span
              id="rubik-semibold"
              className="font-bold text-2xl text-[#1C1F35]"
            >
              1294
            </span>
            <div className="w-[10px] h-[10px] bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6]"></div>
            <p id="league-regular" className="text-xs">
              Delivered Packages
            </p>
          </div>
          <div className="w-[1px] h-[62px] bg-black/20"></div>
          <div className="w-[210px] flex items-center justify-evenly">
            <span
              id="rubik-semibold"
              className="font-bold text-2xl text-[#1C1F35]"
            >
              3594
            </span>
            <div className="w-[10px] h-[10px] bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6]"></div>
            <p id="league-regular" className="text-xs">
              Satisfied Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

import React from "react";
import dream from "../../assets/dream-lifter.svg";
import moving from "../../assets/moving-your-product.svg";
import support from "../../assets/support.svg";
import safePackage from "../../assets/safe-package.svg";
import shipEveryone from "../../assets/ship-everyone.svg";
import global from "../../assets/global.svg";
import pricing from "../../assets/pricing.svg";
import timeDelivery from "../../assets/time-delivery.svg";

const FifthSection = () => {
  return (
    <section className="w-full h-fit ">
      <div className="flex w-full relative">
        <div className="w-[50%] h-[540px] bg-[#091242]"></div>
        <div className="w-[50%] h-[540px] bg-[#F4F4F4]"></div>
        <div className="absolute w-full px-[12%] py-[6%] top-0">
          <div className="flex justify-between items-center">
            <div className="relative w-[60%]">
              <img
                src={dream}
                alt="aeroplane dream lifter"
                className="w-full h-full object-fill relative"
              />
              <img
                src={moving}
                alt="of illustrating moving your body"
                className="absolute bottom-0 left-[28%] w-[180px]"
              />
            </div>
            <div className="w-[36%] bg-world-bg">
              <div className="flex bg-black/20 w-[65px]">
                <div className="w-[2px] h-[15px] bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6]"></div>
                <p id="rubik-regular" className="text-[#1C1F35] text-[10px] text-center px-[2px]">
                  Why Choose
                </p>
              </div>
              <p id="rubik-semibold" className="text-[#1C1F35] max-w-[200px] font-bold leading-4 mt-[10px]">
                We create opportunity to reach potential
              </p>
              <p id="krub-medium" className="text-[#666C89] text-[10px] mt-[10px] max-w-[290px]">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.{" "}
              </p>
              <div className="grid grid-cols-2 gap-3 mt-[20px]">
                <div className="flex items-center">
                  <img src={safePackage} alt="" width={25} height={25} />
                  <p id="rubik-regular" className="ml-[5px] text-[10px] text-[#1C1F35] font-medium">
                    Safe Package
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={shipEveryone} alt="" width={25} height={25} />
                  <p id="rubik-regular" className="ml-[5px] text-[10px] text-[#1C1F35] font-medium">
                    Ship Everyware
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={global} alt="" width={25} height={25} />
                  <p id="rubik-regular" className="ml-[5px] text-[10px] text-[#1C1F35] font-medium">
                    Global Tracking
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={support} alt="" width={25} height={25} />
                  <p id="rubik-regular" className="ml-[5px] text-[10px] text-[#1C1F35] font-medium">
                    24/7 Support
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={timeDelivery} alt="" width={25} height={25} />
                  <p id="rubik-regular" className="ml-[5px] text-[10px] text-[#1C1F35] font-medium">
                    In Time Delivery
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={pricing} alt="" width={25} height={25} />
                  <p id="rubik-regular" className="ml-[5px] text-[10px] text-[#1C1F35] font-medium">
                    Transparant Pricing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;

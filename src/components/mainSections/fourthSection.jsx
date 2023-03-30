import React from "react";
import left from "../../assets/left-arrow.svg";
import right from "../../assets/right-arrow.svg";
import avatar1 from "../../assets/avatar1.svg";
import avatar2 from "../../assets/avatar2.svg";
import quote from "../../assets/quote.svg";
import star from "../../assets/Star.svg";
import "../../App.css"

const FourthSection = () => {
  return (
    <section className="w-full px-[12%] py-[6%]">
      <div className="flex bg-black/20 w-[85px]">
        <div className="w-[4px] h-[20px] bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6]"></div>
        <p id="rubik-regular" className="text-[#1C1F35] text-xs text-center px-[9px]">
          Testimonial
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h2 id="rubik-semibold" className="text-[#1C1F35] text-2xl font-bold">
          What Our Customer Say
        </h2>
        <div className="flex">
          <img
            src={left}
            alt="left arrow"
            width={30}
            height={30}
            className="mr-[5px]"
          />
          <img src={right} alt="right arrow" width={30} height={30} />
        </div>
      </div>
      <div className="w-full h-fit flex mt-[30px]">
        <div className="w-[50%] p-[5%] bg-[#F4F4F4]">
          <div className="flex justify-between items-center">
            <div className="flex">
              <img
                src={avatar1}
                alt="image of an avatar"
                className="w-[30px] h-[30px] rounded-[50%]"
              />
              <div className="ml-[10px]">
                <p id="rubik-medium" className="text-xs font-bold text-[#091242]">Kathleen Smith</p>
                <p id="krub-medium" className="text-[10px] text-[#091242]">Fuel Company</p>
              </div>
            </div>
            <img src={quote} alt="a quotation mark" width={40} height={40} />
          </div>
          <p className="text-[10px] max-w-[230px] mt-[30px] text-[#666C89]">
          <i>Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition. Organically grow the holistic world view of disruptive
            innovation via workplace diversity and empowerment.</i>
          </p>
          <img
            src={star}
            alt="stars"
            className="w-[120px] h-[25px] mt-[20px]"
          />
        </div>
        <div className="w-[50%] p-[5%] bg-[#091242]">
          <div className="flex justify-between items-center">
            <div className="flex">
              <img
                src={avatar2}
                alt="image of an avatar"
                className="w-[30px] h-[30px] rounded-[50%]"
              />
              <div className="ml-[10px]">
                <p id="rubik-medium" className="text-xs font-bold text-[#ffffff]">Kathleen Smith</p>
                <p id="krub-medium" className="text-[10px] text-[#ffffff]">Fuel Company</p>
              </div>
            </div>
            <img src={quote} alt="a quotation mark" width={40} height={40} />
          </div>
          <p id="krub-medium" className="text-[10px] max-w-[230px] mt-[30px] text-[#ffffff]">
            <i>Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition. Organically grow the holistic world view of disruptive
            innovation via workplace diversity and empowerment.</i>
          </p>
          <img
            src={star}
            alt="stars"
            className="w-[120px] h-[25px] mt-[20px]"
          />
        </div>
      </div>
    </section>
  );
};

export default FourthSection;

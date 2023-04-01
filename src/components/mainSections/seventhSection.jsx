import React from "react";
import timeIcon from "../../assets/time-icon.svg";
import callIcon from "../../assets/call-icon.svg";
import emailIcon from "../../assets/email-icon.svg";
import studio from "../../assets/studio.svg";
import norto from "../../assets/norto.svg";
import sandbox from "../../assets/sandbox.svg";
import points from "../../assets/points.svg";

const SeventhSection = () => {
  return (
    <section className="w-full mt-[20px] px-[12%] py-[6%] bg-[#091242]">
      <div className="w-full flex justify-between">
        <div className="w-[30%]">
          <div className="flex bg-black/20 w-[40px]">
            <div className="w-[2px] h-[12px] bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6]"></div>
            <p
              id="rubik-regular"
              className="text-[#ffffff] text-[8px] text-center px-[4px]"
            >
              Contact
            </p>
          </div>
          <h3 id="rubik-semibold" className="text-[#ffffff] text-xl font-bold">
            Get in touch with us
          </h3>
          <p
            id="krub-medium"
            className="text-[#ffffff] text-[10px] max-w-[230px] mb-[15px]"
          >
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
          <div
            id="krub-medium"
            className="flex flex-col justify-between h-[160px]"
          >
            <div className="flex items-center">
              <img
                src={emailIcon}
                alt="image of a time"
                width={43}
                height={43}
              />
              <div className="ml-[10px]">
                <p className="text-[10px] text-[#f4f4f4]">Email</p>
                <p className="text-[10px] text-[#f4f4f4]">
                  contact@logistics.com
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={callIcon}
                alt="image of a time"
                width={43}
                height={43}
              />
              <div className="ml-[10px]">
                <p className="text-[10px] text-[#f4f4f4]">Call</p>
                <p className="text-[10px] text-[#f4f4f4]">(00) 112 365 489</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={timeIcon}
                alt="image of a time"
                width={43}
                height={43}
              />
              <div className="ml-[10px]">
                <p className="text-[10px] text-[#f4f4f4]">
                  Mon - Sat 9.00 - 18.00
                </p>
                <p className="text-[10px] text-[#f4f4f4]">Sunday Closed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%]">
          <div
            id="league-regular"
            className="grid grid-cols-2 gap-4 w-[700px] mb-[16px]"
          >
            <input
              type="text"
              placeholder="Your name*"
              className="border-[1px] border-[#4E5683] p-[10px] bg-transparent  text-[#999999]"
            />
            <input
              type="email"
              placeholder="Email*"
              className="border-[1px] border-[#4E5683] p-[10px] bg-transparent  text-[#999999]"
            />
          </div>
          <div
            id="league-regular"
            className="grid grid-cols-2 gap-4 w-[700px] mb-[16px]"
          >
            <input
              type="number"
              placeholder="Phone Number*"
              className="border-[1px] border-[#4E5683] p-[10px] bg-transparent  text-[#999999]"
            />
            <input
              type="text"
              placeholder="City*"
              className="border-[1px] border-[#4E5683] p-[10px] bg-transparent  text-[#999999]"
            />
          </div>
          <div id="league-regular" className="flex flex-col">
            <textarea
              type="text"
              placeholder="Your Message"
              className="border-[1px] border-[#4E5683] p-[10px] bg-transparent h-[120px] w-[700px] mb-[16px]  text-[#999999]"
            />
            <button
              type="submit"
              id="krub-semibold"
              className="bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6] text-[#23212A] px-[20px] py-[10px] w-[180px] text-[12px]"
            >
              Submit Message
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-fit mt-[100px] flex ">
        <img
          src={studio}
          alt="an image of the client logos"
          className="object-contain w-[250px] h-[250px]"
        />
        <img
          src={norto}
          alt="an image of the client logos"
          className="object-contain w-[250px] h-[250px]"
        />
        <img
          src={points}
          alt="an image of the client logos"
          className="object-contain w-[250px] h-[250px]"
        />
        <img
          src={sandbox}
          alt="an image of the client logos"
          className="object-contain w-[250px] h-[250px]"
        />
      </div>
    </section>
  );
};

export default SeventhSection;

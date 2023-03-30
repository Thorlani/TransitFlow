import React from "react";
import footerImage from "../assets/footer-image.svg";
import callIcon from "../assets/call-icon.svg";
import emailIcon from "../assets/email-icon.svg";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Linkdin from "../assets/Linkdin.svg";

const Footer = () => {
  return (
    <div className="w-full h-fit">
      <img
        src={footerImage}
        alt="an image of a port"
        className="w-full object-contain"
      />
      <div className="w-full bg-[#091242]/90 px-[12%] h-[80px] flex items-center justify-between">
        <div className="h-[80px] bg-[#091242] flex items-center px-[4%] w-[220px]">
          <div className="w-[160px] flex justify-between items-center cursor-pointer">
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
            <h3 className="ml-[5px] text-[#fff] text-[24px] font-bold">
              TransitFlow
            </h3>
          </div>
        </div>
        <span id="rubik-semibold" className="text-[#ffffff] cursor-pointer relative right-[50px]">
          Pages
        </span>
        <span id="rubik-semibold" className="text-[#ffffff] cursor-pointer relative right-[100px]">
          Utility
        </span>
        <span id="rubik-semibold" className="text-[#ffffff] cursor-pointer relative right-[145px]">
          Subscribe
        </span>
      </div>
      <div className="w-full h-fit bg-[#091242] px-[14%] py-[4%] flex justify-between items-start">
        <div id="krub-regular">
          <p className="text-[#ffffff] text-[10px] max-w-[210px] mb-[15px]">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
          <div className="flex flex-col justify-between h-[100px]">
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
          </div>
        </div>
        <ul className="text-[#ffffff] text-xs h-[130px] flex flex-col justify-between cursor-pointer">
          <li>About Us</li>
          <li>Our Team</li>
          <li>Our Project</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <ul className="text-[#ffffff] text-xs h-[130px] flex flex-col justify-between cursor-pointer">
          <li>Style Guide</li>
          <li>Changelog</li>
          <li>Licences</li>
          <li>Protected</li>
          <li>Not Found</li>
        </ul>
        <ul className="text-[#ffffff] text-xs h-[130px] flex flex-col cursor-pointer">
          <li className="mb-[12px]">
            <input
              type="text"
              placeholder="Your Email*"
              className="bg-transparent border-[1px] border-[#4E5683] w-[180px] p-[10px] text-[#999999]"
            />
          </li>
          <li>
            <div className="flex">
              <button className="p-[10px] bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6] text-[#23212A] w-[85px]">
                Send
              </button>
              <div className="flex w-[100px] justify-around">
                <img src={Linkdin} alt="linkdin logo" width={15} height={15} />
                <img src={Twitter} alt="twitter logo" width={15} height={15} />
                <img
                  src={Facebook}
                  alt="facebook logo"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-[#4E5683] w-full h-[1.5px]"></div>
      <div className="px-[14%] py-[.5%] flex justify-between bg-[#091242] w-full">
        <p id="krub-semibold" className="text-xs text-[#ffffff] w-[50%]">
          Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.
        </p>
        <ul id="krub-regular" className="flex text-[#8388A7] w-[40%] text-[12px] justify-between cursor-pointer">
          <li>Style Guide</li>
          <li>Changelog</li>
          <li>Licences</li>
          <li>password</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

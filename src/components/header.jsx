import React from "react";
import Navbar from "./navbar";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Linkdin from "../assets/Linkdin.svg";
import vShape from "../assets/v-shape.svg";
import "../App.css";

const Header = () => {
  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <header className="w-full h-[82vh] relative bg-hero-bg bg-cover bg-no-repeat">
        <div className="w-full px-[12%] relative bg-black/20">
          <div className="w-full h-[10vh] flex justify-between items-center">
            <ul id="krub-semibold" className="flex w-[40%] items-center justify-between cursor-pointer">
              <li id="bottom-line" className="text-xs text-[#f4f4f4]">
                Home
              </li>
              <li className="w-[1px] h-[12px] bg-white/30"></li>
              <li className="text-xs text-[#f4f4f4]">About</li>
              <li className="w-[1px] h-[12px] bg-white/30"></li>
              <li className="flex item-center text-xs text-[#f4f4f4]">
                <p>Pages</p>{" "}
                <img src={vShape} alt="A v-shape sign" className="ml-[5px]" />
              </li>
              <li className="w-[1px] h-[12px] bg-white/30"></li>
              <li className="text-xs text-[#f4f4f4]">Project</li>
              <li className="w-[1px] h-[12px] bg-white/30"></li>
              <li className="text-xs text-[#f4f4f4]">Contact</li>
            </ul>
            <ul className="w-[40%] flex items-center justify-between cursor-pointer">
              <li>
                <img
                  src={Instagram}
                  alt="Instagram logo"
                  width={15}
                  height={15}
                />
              </li>
              <li>
                <img
                  src={Facebook}
                  alt="Facebook logo"
                  width={15}
                  height={15}
                />
              </li>
              <li>
                <img src={Twitter} alt="Twitter logo" width={15} height={15} />
              </li>
              <li>
                <img src={Linkdin} alt="Linkdin logo" width={15} height={15} />
              </li>
              <button id="krub-semibold" className="w-[180px] px-[10%] py-[5.8%] text-center bg-white text-xs font-semibold">
                Request Quote
              </button>
            </ul>
          </div>
        </div>
        <div className="px-[12%] w-full h-[72vh] flex items-center">
          <div className="">
            <div className="flex bg-black/20 w-[220px]">
              <div className="w-[4px] h-[20px] bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6]"></div>
              <p id="rubik-regular" className="text-[#ffffff] text-xs text-center px-[9px]">
                Logistics & Supply Chain Solutions
              </p>
            </div>
            <h1 id="rubik-bold" className="font-[800] text-[45px] text-[#ffffff] mt-[-10px]">
              Your Gateway
            </h1>
            <h1 id="rubik-bold" className="font-[800] text-[45px] text-[#ffffff] my-[-25px]">
              to any Destination
            </h1>
            <h1 id="rubik-bold" className="font-[800] text-[45px] text-[#ffffff]">
              in the World
            </h1>
            <p id="krub-medium" className="text-xs text-[#ffffff] max-w-[388px] mt-[-10px] mb-1">
              In augue ligula, feugiat ut nulla consequat. Ut est lacus,
              molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl
              id dapibus finibus, enim diam interdum nulla, sed laoreet risus
              lectus.{" "}
            </p>
            <button id="button" className="relative w-[194px] h-[60px] bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6]">
              <p id="krub-semibold" className="text-center text-[#23212A]">Explore More</p>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

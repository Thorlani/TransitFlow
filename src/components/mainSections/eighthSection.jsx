import React from "react";
import readMore from "../../assets/readMore.svg";
import containers from "../../assets/containers.svg";
import containerOnSea from "../../assets/containerOnSea.svg";
import calendar from "../../assets/calendar.svg";

const EighthSection = () => {
  return (
    <section className="w-full h-fit px-[12%] py-[6%]">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex bg-black/20 w-[50px]">
          <div className="w-[2px] h-[15px] bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6]"></div>
          <p
            id="rubik-regular"
            className="text-[#1C1F35] text-[10px] text-center px-[4px]"
          >
            Our Blog
          </p>
        </div>
        <h3
          id="rubik-semibold"
          className="text-[#1C1F35] text-2xl font-bold text-center"
        >
          Our Latest News
        </h3>
        <div className="flex justify-between w-full px-[8%] py-[4%] border-t-[1.5px] border-black/20 mt-[20px]">
          <div className="flex w-[45%] justify-between items-start">
            <img
              src={containers}
              alt="a ship with loads of container"
              width={280}
              height={280}
            />
            <div className="flex flex-col justify-center items-center">
              <img
                src={calendar}
                alt="a calendar icon"
                width={40}
                height={40}
              />
              <span className="font-bold text-3xl text-[#1C1F35]">08</span>
              <p id="krub-medium" className="text-[10px]">
                September
              </p>
            </div>
          </div>
          <div className="w-[1.5px] h-[200px] bg-black/20"></div>
          <div className="w-[40%]">
            <h5
              id="rubik-regular"
              className="font-medium text-xl max-w-[270px] text-[#1C1F35]"
            >
              Inland freight a worthy solution for your business
            </h5>
            <p id="krub-medium" className="text-xs max-w-[250px]">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.{" "}
            </p>
            <ul
              id="krub-medium"
              className="list-disc text-xs mt-[10px] ml-[15px] font-medium"
            >
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between w-full px-[8%] py-[4%] border-t-[1.5px] border-black/20 mt-[20px]">
          <div className="flex w-[45%] justify-between items-start">
            <img
              src={readMore}
              alt="a ship with loads of container"
              width={280}
              height={280}
            />
            <div className="flex flex-col justify-center items-center">
              <img
                src={calendar}
                alt="a calendar icon"
                width={40}
                height={40}
              />
              <span
                id="rubik-bold"
                className="font-bold text-2xl text-[#1C1F35]"
              >
                12
              </span>
              <p id="krub-medium" className="text-[10px]">
                September
              </p>
            </div>
          </div>
          <div className="w-[1.5px] h-[200px] bg-black/20"></div>
          <div className="w-[40%]">
            <h5
              id="rubik-regular"
              className="font-medium text-xl max-w-[270px] text-[#FFBE34]"
            >
              How technology can help redraw the supply chain map
            </h5>
            <p id="krub-medium" className="text-xs max-w-[250px]">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.{" "}
            </p>
            <ul
              id="krub-medium"
              className="list-disc text-xs mt-[10px] ml-[15px] font-medium"
            >
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between w-full px-[8%] py-[4%] border-t-[1.5px] border-black/20 mt-[20px]">
          <div className="flex w-[45%] justify-between items-start">
            <img
              src={containerOnSea}
              alt="a ship with loads of container"
              width={280}
              height={280}
            />
            <div className="flex flex-col justify-center items-center">
              <img
                src={calendar}
                alt="a calendar icon"
                width={40}
                height={40}
              />
              <span
                id="rubik-bold"
                className="font-bold text-2xl text-[#1C1F35]"
              >
                25
              </span>
              <p id="krub-medium" className="text-[10px]">
                September
              </p>
            </div>
          </div>
          <div className="w-[1.5px] h-[200px] bg-black/20"></div>
          <div className="w-[40%]">
            <h5
              id="rubik-regular"
              className="text-xl max-w-[270px] text-[#1C1F35] font-medium"
            >
              Five things you should have ready for your broker
            </h5>
            <p className="text-xs max-w-[250px]">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.{" "}
            </p>
            <ul
              id="krub-medium"
              className="list-disc text-xs mt-[10px] ml-[15px] font-medium"
            >
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="krub-semibold"
        className="w-full flex justify-center py-[4%] border-t-[1.5px] border-black/20 mt-[20px]"
      >
        <button id="btn" className="w-[154px] h-[55px] bg-[#091242]">
          <p className="text-center text-[#ffffff]">More Work</p>
        </button>
      </div>
    </section>
  );
};

export default EighthSection;

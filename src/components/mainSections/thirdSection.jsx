import React from "react";
import liquidTank from "../../assets/liquid-tank.svg"
import packaging from "../../assets/packaging.svg"
import specializedTrans from "../../assets/specialized-trans.svg"
import contract from "../../assets/contract-logistics.svg"
import warehouse from "../../assets/warehouse-dist.svg"
import "../../App.css"

const ThirdSection = () => {
  return (
    <section className="w-full h-fit">
      <p id="rubik-semibold" className="text-center text-[#1C1F35] font-semibold text-xl mb-9">
        Transporting Across The World
      </p>
      <div className="w-full h-[300px] relative">
        <div className="w-full h-[50%]"></div>
        <div className="w-full h-[50%] bg-gradient-to-r from-[#FFDA56] to-[#FFD7A6]"></div>
        <div className="absolute w-full px-[12%] h-[200px] top-0">
            <div className="w-full h-fit flex justify-between items-center">
                <img src={liquidTank} alt="a tank carrying liquid" width={145} height={145} className="object-contain" />
                <img src={packaging} alt="a tank carrying liquid" width={145} height={145} className="object-contain" />
                <img src={contract} alt="a tank carrying liquid" width={145} height={145} className="object-contain" />
                <img src={warehouse} alt="a tank carrying liquid" width={145} height={145} className="object-contain" />
                <img src={specializedTrans} alt="a tank carrying liquid" width={145} height={145} className="object-contain" />
            </div>
            <button id="btn" className="relative top-9 left-[400px] w-[154px] h-[55px] bg-[#091242]">
              <p id="krub-semibold" className="text-center text-[12px] text-[#ffffff]">More Work</p>
            </button>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;

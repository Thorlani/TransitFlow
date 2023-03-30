import React from "react";
import EighthSection from "./mainSections/eighthSection";
import FifthSection from "./mainSections/fifthSection";
import FirstSection from "./mainSections/firstSection";
import FourthSection from "./mainSections/fourthSection";
import SecondSection from "./mainSections/secondSection";
import SeventhSection from "./mainSections/seventhSection";
import SixthSection from "./mainSections/sixthSection";
import ThirdSection from "./mainSections/thirdSection";

const Main = () => {
  return (
    <div className="w-full h-fit">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
    </div>
  );
};

export default Main;

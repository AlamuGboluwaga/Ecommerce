import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-t from-purple-100 to-purple-200 via-purple-200 flex">
      <div className="flex-1 flex flex-col justify-center gap-[20px] pl-[180px] leading-[1.1]">
        <h2 className="text-[#090909] font-[600] text-[26px]"> 
          NEW ARRAIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[#171717] text-[100px] font-[700]">new</p>
            <img src={hand_icon} alt="" className="w-[105px]" />
          </div>
          <p className="text-[#171717] text-[100px] font-[700]">collectons</p>
          <p className="text-[#171717] text-[100px] font-[700]">for everyone</p>
        </div>

        <div className="flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141]  text-white text-[22px] font-[500] ">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hreeo-ri">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;

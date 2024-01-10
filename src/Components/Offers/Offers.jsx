import React from "react";
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className="w-[65%] h-[60vh] m-auto p-[0px 140px] mb-[150px] bg-gradient-to-r from-fde1ff via-transparent to-e1ffea22 h-screen ">
      <div className="flex flex-col justify-center">
        <h1 className="text-[#171717] text-[80px] font-[600] ">Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none border-white text-[22px] font-[500]  mt-[30px] cursor-pointer " >Check Now</button>
      </div>
      <div className="flex-[1]flex items-center justify-end pt-[50px]">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
 
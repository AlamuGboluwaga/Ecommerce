import React from "react";

const Item = (props) => {
  return (
    <div className="w-[350px]">
      <img src={props.image} alt="" />
      <p className="mt-[6px] mb-[6px] mr-[0px] ml-[0px]">{props.name}</p>
      <div className=" flex gap-[20px]">
        <div className=" text-[#374151] text-[18px] font-[600] ">
         ${props.new_price}
        </div>
        <div className="text-[#8c8c8c] text-[18px] font-[500] line-through hover:tranform-[scale(1.05)]  transition-[0.6s] ">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;

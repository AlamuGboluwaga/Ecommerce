import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const menuList = ["shop", "men", "women", "kids"];
  const [menu, setMenu] = useState('shop')
  return (
    <div className=" flex justify-around p-2 shadow-md">
      <div className="flex items-center gap-10 ">
        <img src={logo} alt="nav-logo" />
        <p className="text-[#171717] text-[28px] font-normal">Shopper</p>
      </div>
      <ul className=" flex items-center gap-[50px] text-[#626262] text-[20px] font-[500]">
        {menuList.map((list, index) => (
          <Link to={list} key={index}>
            <li
              className="flex flex-col justify-center items-center "
              onClick={() => {
                setMenu(list);
              }}
            >
              {list[0].toLocaleUpperCase().concat(list.slice(1))}
              {menu === list ? (
                <hr className=" w-[80%] h-[3px] outline-none rounded-[10px] bg-[#FF4141]" />
              ) : (
                <></>
              )}
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex flex-row items-center gap-[45px]">
        <Link to={"/login"}>
          <button className="w-[90px] h-[40px] outline-none  border-[#7a7a7a] border-[solid] border-[1px] text-#515151 text-[15px] font-normal bg-white rounded-[75px] active:bg-[#f3f3f3] ">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart_icon" />
        </Link>
        <div className="w-[22px] h-[22px] flex  justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] bg-red-500 text-white ">
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

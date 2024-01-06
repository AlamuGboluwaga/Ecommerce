import React from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const menuList = ["shop", "men", "women", "kids"];
  return (
    <div className=" flex justify-around p-4 shadow-md">
      <div className="flex items-center gap-10 ">
        <img src={logo} alt="nav-logo" />
        <p className="text-[#171717] text-[38px] font-[600]">Shopper</p>
      </div>
      <ul className=" flex items-center gap-[50px] text-[#626262] text-[20px] font-[500]">
        {menuList.map((list, index) => (
          <Link to={list}><li key={index}>{list[0].toLocaleUpperCase().concat(list.slice(1))}</li></Link>
        ))}
      </ul>
      <div className="">
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon" />
      </div>
    </div>
  );
};

export default Navbar;



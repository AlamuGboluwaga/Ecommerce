import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";


const NavigationBar = () => {

  const [toogle,setToogle]= useState(false)

  const handleClick=(e)=>{
   setToogle(!toogle)
  }



  const profilePictures = (
    <div className="bg-red-500 h-8 rounded-full w-8 flex justify-center items-center">
      <img
        src="https://i.pinimg.com/564x/32/18/8e/32188e818010764ae80a2d740ee2b1e2.jpg"
        alt=""
        className="rounded-full h-full w-full"
      />
    </div>
  );
  const menuList = [
    { name: "home" },
    { name: "cart" },
    { name: "about" },
    { name: "Signup" },
    { desc: profilePictures, name: "login" },
  ];

  return (
    <div className=" sticky  h-[8%] pl-6 pr-6 flex  flex-row-reverse  justify-between gap-20 items-center bg-blue-500  top-0 p-2 text-white   sm:sticky sm:h-[8%] sm:pl-6 sm:pr-6 sm:flex  sm:flex-shrink sm:justify-between sm:flex-row-reverse sm:gap-20 sm:items-center sm:bg-blue-500  sm:top-0 sm:p-2 sm:text-white           lg:sticky lg:h-[8%] lg:pl-6 lg:pr-6 lg:flex lg:justify-between lg:flex-row lg:gap-20 lg:items-center lg:bg-blue-500 lg:top-0 lg:p-2 lg:text-white">
      <div className=" sm:flex sm:flex-shrink">
        <h3 >Ecommerce</h3>
      </div>
      <div>
      <div className="  lg:hidden  lg:flex-row lg:gap-20">
      <MenuIcon onClick={handleClick} />
      </div> 
        <div className=" hidden sm:hidden lg:flex  lg:flex-row lg:gap-20">
          {menuList?.map((items, index) => (
            <Link
            to={items.name}
              key={index}
              className="flex flex-row-reverse justify-items-start gap-2"
            >
              {items.name[0].toLocaleUpperCase().concat(items.name.slice(1))}
              {items.desc}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;

import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";

const SideBar = () => {
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
    { name: "home", icon: HomeIcon },
    { name: "cart", icon: ShoppingCartIcon },
    { name: "about", icon: InfoIcon },
    { name: "signup", icon: "" },
    { name: "login", icon: LoginIcon, desc: profilePictures },
  ];

  return (
    <div className="bg-[#e9e6e647]  lg:hidden">
      <div className="h-screen w-[60%] bg-red-200  pt-16 ">
        <ul className="flex  flex-col jsutify-center gap-8 items-center ">
          {menuList.map((items, index) => (
           <div>
             <Link to={items.name} key={index} className="">
              {items.name[0].toLocaleUpperCase().concat(items.name.slice(1))}
            
            </Link>
        
           </div>
           
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

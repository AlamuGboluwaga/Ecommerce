import { Link } from "react-router-dom";

const NavigationBar = () => {
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
    { name: "register" },
    { desc: profilePictures, name: "login" },
  ];

  return (
    <div className=" lg:h-[8%] lg:pl-6 lg:pr-6 lg:flex lg:justify-between lg:gap-20 lg:items-center lg:bg-blue-500 lg:static lg:top-0 lg:p-2 lg:text-white">
      <div>
        <h3>Ecommerce</h3>
      </div>
      <div>
        <div className=" lg:flex  lg:flex-row lg:gap-20">
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

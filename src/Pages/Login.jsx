import { useState } from "react";
import {AppInput} from '../Components/AppInput'
import {AppButton} from '../Components/AppButton'
import {PageTitle} from '../Components/PageTitle'
const Login = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  console.log(data);

  return (
    <div className=" lg:flex lg:flex-row lg:w-sreen lg:h-screen">
      <div className="hidden lg:block lg:h-full lg:w-[50%]">
        <img
          src="https://i.pinimg.com/564x/f3/e5/f0/f3e5f01bffe4220519dcb8bfef2d347f.jpg"
          alt=""
          className="h-full w-full   cover-full"
        />
      </div>
    <div className="  lg:h-screen lg:w-[50%] lg:flex lg:justify-center lg:items-center">
    <form
        action=""
        className="flex flex-col justify-center items-center
         gap-10 w-screen h-screen sm:w-screen sm:h-screen lg:flex lg:flex-col 
         lg:justify-centerlg:items-center lg:gap-10 lg:w-[60%] lg:h-[80%] lg:shadow-2xl lg:rounded-md "
      >
        <PageTitle title="login" className=" font-serif font-bold mt-[-30%] " />
        <AppInput
          onChange={(e) => setData({ ...data, name: e.target.value })}
          label="Name"
          type="text"
          placeholder="name"
          className="w-[100%] h-[100%] rounded-md  outline-blue-200  border-2 border-solid  text-center "
          require
        />
        <AppInput
          onChange={(e) => setData({ ...data, password: e.target.value })}
          label="Password"
          type="password"
          placeholder="password"
          className="w-[100%] h-[100%]  outline-blue-200   rounded-md border-2 border-solid text-center"
        />
        <AppButton
          label="submit"
          className="bg-blue-500 w-[100%] h-[60%] border-none active:bg-blue-300 rounded-md text-white "
        />
      </form>
    </div>
    </div>
  );
};
export default Login;

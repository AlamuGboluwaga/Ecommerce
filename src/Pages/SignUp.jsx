import { useState } from "react";
import {AppInput} from '../Components/AppInput'
import {AppButton} from '../Components/AppButton'
import {PageTitle} from '../Components/PageTitle'
const SignUp= () => {
  const [data, setData] = useState({
    firstName:'',
    lastName:'',
    email: "",
    password: "",
  });

//  const fetch = axiox.post()

  return (
    <div className=" lg:flex lg:flex-row lg:w-sreen lg:h-screen">
      <div className="hidden lg:block lg:h-full lg:w-[50%]">
        <img
          src="https://i.pinimg.com/564x/11/e3/d2/11e3d2bd2825dffcc1d9e13622d172d6.jpg"
          alt=""
          className="h-full w-full   cover-full"
        />
 
      </div>
    <div className=" lg:h-screen lg:w-[50%] lg:flex lg:justify-center lg:items-center">
    <form
        action=""
        className="flex flex-col justify-center items-center
         gap-10 w-screen h-screen sm:w-screen sm:h-screen lg:flex lg:flex-col 
         lg:justify-centerlg:items-center lg:gap-10 lg:w-[60%] lg:h-[90%]  lg:shadow-2xl shadow-red-500 lg:rounded-md "
      >
        <PageTitle title="signUp" className=" font-serif font-bold mt-[-5%] " />
        <AppInput
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          label="Fisrt Name"
          type="text"
          placeholder=" First Name"
          className="w-[100%] h-[100%] rounded-md  outline-blue-300  border-2 border-solid  text-center "
          require
        />
         <AppInput
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          label="Last Name"
          type="text"
          placeholder="Last Name"
          className="w-[100%] h-[100%] rounded-md  outline-blue-300  border-2 border-solid  text-center "
          require
        />
        <AppInput
          onChange={(e) => setData({ ...data, email: e.target.value })}
          label="Email"
          type="email"
          placeholder="Email"
          className="w-[100%] h-[100%] rounded-md  outline-blue-300  border-2 border-solid  text-center "
          require
        />
        <AppInput
          onChange={(e) => setData({ ...data, password: e.target.value })}
          label="Password"
          type="password"
          placeholder="password"
          className="w-[100%] h-[100%]  outline-emerald-200   rounded-md border-2 border-solid text-center"
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
export default SignUp;

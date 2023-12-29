import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Example } from "../Components/example";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import NavigationBar from "../Components/NavigationBar";
import PageNotFound from "../Pages/PageNotFound";
const Router = () => {
  return (
    <BrowserRouter className="browser" >
       <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="example" element={<Example />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
        <Route path="/notfound" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

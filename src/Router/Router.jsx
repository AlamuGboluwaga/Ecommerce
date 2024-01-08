import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Example } from "../Components/example";
import Home from "../Components/Home";
import LoginSignup from "../Pages/LoginSignup";
import Shop from "../Pages/Shop";
import PageNotFound from "../Pages/PageNotFound";
import Navbar from "../Components/Navbar/Navbar";
import Product from "../Pages/Product";
import Cart from '../Pages/Cart'
import ShopCategory from "../Pages/ShopCategory";
const Router = () => {
  return (
    <BrowserRouter className="browser">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/home" element={<Home />} />
        <Route path="'login" element={<LoginSignup />} />
        <Route path="/product" element={<Product />} />
        <Route path=":productId" element={<Product />} />
        <Route path="/example" element={<Example />} />
        <Route path="/men" element={<ShopCategory category="men" />} />
        <Route path="/women" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="notfound"/>} />
        <Route path="notfound" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

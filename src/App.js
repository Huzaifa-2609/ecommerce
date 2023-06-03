import logo from "./logo.svg";
import "./App.css";
import Singup from "./pages/Signup";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BestSelling from "./pages/BestSelling";
import Products from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";
import HotToast from "./components/notification/HotToast";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Singup />} />
          <Route path="/" element={<Home />} />
          <Route path="/best-selling" element={<BestSelling />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

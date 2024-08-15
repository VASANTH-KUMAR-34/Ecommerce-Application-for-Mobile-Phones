import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterUser from "./components/RegisterUser";
import AddProduct from "./components/AddProduct";
import SearchProduct from "./components/SearchProduct";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterUser />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/searchproduct" element={<SearchProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

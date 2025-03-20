import React from "react";
import './App.css';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderNav from "./Components/HeaderNav";
import FooterNav from "./Components/FooterNav";
import HomeLayout from "./Layouts/HomeLayout";

const App = () => {
  return (  
    <>
    <BrowserRouter>
    <HeaderNav/>
    <Routes>
      <Route />
    </Routes>
    <HomeLayout/>
    <FooterNav/>
    </BrowserRouter>
    </>
  )
};

export default App;

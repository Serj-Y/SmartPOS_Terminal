import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { BurgerPage } from "./pages/BurgerPage/BurgerPage";
import { ColdDrinksPage } from "./pages/ColdDrinksPage/ColdDrinksPage";
import { HotDrinksPage } from "./pages/HotDrinksPage/HotDrinksPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { Nav } from "./components/Navigation/Navigation";
import { Header } from "./components/Header/Header";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <div className="Content">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/burger" element={<BurgerPage />} />
          <Route path="/coldDrinks" element={<ColdDrinksPage />} />
          <Route path="/hotDrinks" element={<HotDrinksPage />} />
          <Route path="/cartPage" element={<CartPage />} />
        </Routes>
      </div>
      <ToastContainer
        hideProgressBar
        transition={Slide}
        autoClose={1000}
        newestOnTop={true}
        theme={"colored"}
      />
    </div>
  );
}

export default App;

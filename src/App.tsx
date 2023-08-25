import React from 'react';
import './App.scss';
import { Nav } from './common/nav/nav';
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/home/homePage';
import { Header } from './common/header/header';
import { Burger } from './pages/burger/burger';
import { ColdDrinks } from './pages/coldDrinks/coldDrinks';
import { HotDrinks } from './pages/hotDrinks/hotDrinks';
import { CartPage } from './pages/cartPage/cart';


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <div className="Content" >
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/coldDrinks" element={<ColdDrinks />} />
          <Route path="/hotDrinks" element={<HotDrinks />} />
          <Route path="/cartPage" element={<CartPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import './App.scss';
import { Nav } from './common/nav/nav';
import {  Route, Routes  } from "react-router-dom";
import { Dashboard } from './pages/home/dashboard';
import { Header } from './common/header/header';
import { Food } from './pages/food/food';
import { HotDrinks } from './pages/hotDrinks/hotDrinks';
import { ColdDrinks } from "./pages/coldDrinks/coldDrinks"
import { CartPage } from './pages/cartPage/cart';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
<div className="Content" >
<Routes>
<Route path="/*" element={ <Dashboard/>}  />
<Route path="/dash" element={ <Dashboard/>}  />
<Route path="/food" element={ <Food/>}  />
<Route path="/coldDrinks" element={ <ColdDrinks/>}  />
<Route path="/hotDrinks" element={ <HotDrinks/>}  />
<Route path="/cartPage" element={ <CartPage/>}  />
</Routes>
</div>
    </div>
  );
}

export default App;

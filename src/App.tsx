import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Nav } from './nav/nav';
import {  Route, Routes  } from "react-router-dom";
import { Dashboard } from './home/dashboard';
import { Header } from './header/header';
import { Food } from './food/food';

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
</Routes>
</div>
    </div>
  );
}

export default App;

import "./App.scss";
import { Nav } from "./components/nav/nav";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Header } from "./header/header";
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import {
  faBottleWater,
  faBurger,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type RouteProductType = {
  ref: string;
  title: string;
  category: string;
  icon: JSX.Element;
};

const RouteProductInitial: Array<RouteProductType> = [
  {
    ref: "food",
    title: "Burgers",
    category: "food",
    icon: <FontAwesomeIcon icon={faBurger} />,
  },
  {
    ref: "cold",
    title: "Cold drink",
    category: "cold",
    icon: <FontAwesomeIcon icon={faBottleWater} />,
  },
  {
    ref: "hot",
    title: "Hot drink",
    category: "hot",
    icon: <FontAwesomeIcon icon={faMugHot} />,
  },
];

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <div className="Content">
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/dash" element={<MainPage />} />
          {RouteProductInitial.map((el) => (
            <Route
              key={el.ref}
              path={el.ref}
              element={
                <ProductPage
                  title={el.title}
                  category={el.category}
                  icon={el.icon}
                />
              }
            />
          ))}
          <Route path="/cartPage" element={<BasketPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

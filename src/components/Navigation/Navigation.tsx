import React from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBottleWater,
  faBurger,
  faCartShopping,
  faHouse,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.fullScreen}>
        <div className={styles.items}>
          <div className={styles.storeNameAndIconContainer}>
            <FontAwesomeIcon className={styles.icon} icon={faBagShopping} />
            <h2>
              Smart<span className={styles.nameAccent}>POS</span>
            </h2>
          </div>
          <div className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.isPending
              }
              to={"/home"}
            >
              <FontAwesomeIcon icon={faHouse} />
              <div className={styles.link}>Home</div>
            </NavLink>
          </div>
          <div className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.isPending
              }
              to={"/burger"}
            >
              <FontAwesomeIcon icon={faBurger} />
              <div className={styles.link}> Burger</div>
            </NavLink>
          </div>
          <div className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.isPending
              }
              to={"/coldDrinks"}
            >
              <FontAwesomeIcon width={16} icon={faBottleWater} />
              <div className={styles.link}> Cold-Drinks</div>
            </NavLink>
          </div>
          <div className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.isPending
              }
              to={"/hotDrinks"}
            >
              <FontAwesomeIcon icon={faMugHot} />
              <div className={styles.link}> Hot-Drinks</div>
            </NavLink>
          </div>
          <div className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.isPending
              }
              to={"/cartPage"}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <div className={styles.link}>Cart</div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className={styles.mobileDevice}>
        <div className={styles.items}>
          <FontAwesomeIcon className={styles.storeIcon} icon={faBagShopping} />
          <div className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.isPending
              }
              to={"/dash"}
            >
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
          </div>
          <div className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.isPending
              }
              to={"/burger"}
            >
              <FontAwesomeIcon icon={faBurger} />
            </NavLink>
          </div>
          <div className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.isPending
              }
              to={"/coldDrinks"}
            >
              <FontAwesomeIcon icon={faBottleWater} />
            </NavLink>
          </div>
          <div className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.isPending
              }
              to={"/hotDrinks"}
            >
              <FontAwesomeIcon icon={faMugHot} />
            </NavLink>
          </div>
          <div className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.isPending
              }
              to={"/cartPage"}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

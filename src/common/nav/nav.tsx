import React from "react";
import styles from "./nav.module.scss"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleWater, faBurger, faCartShopping, faHamburger, faHouse, faMugHot } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
    return (
        <div className={styles.nav} >
            <div className={styles.fullScreen} >
                <div className={styles.items}>
                    <h1 >  Burgers  <FontAwesomeIcon icon={faHamburger} /> & <FontAwesomeIcon icon={faBottleWater} /> </h1>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/dash"} > <FontAwesomeIcon icon={faHouse} /> <div className={styles.navLink} >Dashboard</div></NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/food"} > <FontAwesomeIcon icon={faBurger} /><div className={styles.navLink} > Food</div></NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/coldDrinks"}> <FontAwesomeIcon icon={faBottleWater} /><div className={styles.navLink} > ColdDrinks</div></NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/hotDrinks"}> <FontAwesomeIcon icon={faMugHot} /> <div className={styles.navLink} > HotDrinks</div>   </NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/cartPage"}><FontAwesomeIcon icon={faCartShopping} /><div className={styles.navLink} >Cart</div></NavLink>
                    </div>
                </div>
            </div>
            <div className={styles.mobileDevice} >
                <div className={styles.items}>
                    <h1 className={styles.item} > <FontAwesomeIcon icon={faHamburger} /></h1>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/dash"} ><FontAwesomeIcon icon={faHouse} /></NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/food"} ><FontAwesomeIcon icon={faBurger} /></NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/coldDrinks"}><FontAwesomeIcon icon={faBottleWater} /></NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/hotDrinks"}><FontAwesomeIcon icon={faMugHot} /></NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/cartPage"}><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}



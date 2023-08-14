import React from "react";
import styles from "./nav.module.scss"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleWater, faBurger, faHamburger, faHouse, faMugHot } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
    return (
        <div className={styles.nav} >
            <div className={styles.fullScreen} >
                <div className={styles.items}>
                    <h1>  Burgers  <FontAwesomeIcon icon={faHamburger} /> & <FontAwesomeIcon icon={faBottleWater} /> </h1>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/dash"} > <FontAwesomeIcon icon={faHouse} /> Dashboard</NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/food"} > <FontAwesomeIcon icon={faBurger} /> Food</NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/coldDrinks"}> <FontAwesomeIcon icon={faBottleWater} /> ColdDrinks</NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/hotDrinks"}> <FontAwesomeIcon icon={faMugHot} /> HotDrinks</NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/cartPage"}>...</NavLink>
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
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/cartPage"}>...</NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}



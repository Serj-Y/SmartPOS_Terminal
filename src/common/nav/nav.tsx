import React from "react";
import styles from "./nav.module.scss"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBottleWater, faBurger, faCartShopping, faHouse, faMugHot } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
    return (
        <div className={styles.nav} >
            <div className={styles.fullScreen} >
                <div className={styles.items}>
                    <div className={styles.storeName}>
                        <div className={styles.storeIcon} > 
                        <h2><FontAwesomeIcon icon={faBagShopping} /></h2> 
                         </div>
                        <h2> Smart  </h2>
                        <div className={styles.storeNameAccent}>
                        <h2>POS</h2>
                        </div>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/home"} > <FontAwesomeIcon icon={faHouse} /> <div className={styles.navLink} >Home</div></NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/burger"} > <FontAwesomeIcon icon={faBurger} /><div className={styles.navLink} > Burger</div></NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/coldDrinks"}> <FontAwesomeIcon width={16} icon={faBottleWater} /><div className={styles.navLink} > Cold-Drinks</div></NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/hotDrinks"}> <FontAwesomeIcon icon={faMugHot} /> <div className={styles.navLink} > Hot-Drinks</div>   </NavLink>
                    </div>
                    <div className={styles.item} >
                        <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/cartPage"}><FontAwesomeIcon icon={faCartShopping} /><div className={styles.navLink} >Cart</div></NavLink>
                    </div>
                </div>
            </div>
            <div className={styles.mobileDevice} >
                <div className={styles.items}>
                    <h1 className={styles.item} > <FontAwesomeIcon icon={faBagShopping} /></h1>
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



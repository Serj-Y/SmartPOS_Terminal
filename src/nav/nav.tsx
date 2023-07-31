import React from "react";
import styles from "./nav.module.scss"
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <div className={styles.nav} >

            <div className={styles.items}>
                <h1>Burgers</h1>
                <div className={styles.item} >
                   <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/dash"} >Dashboard</NavLink> 
                </div>
                <div className={styles.item} >
                     <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/food"} >Food</NavLink>
                   </div>
                   <div className={styles.item} >
                       <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/drinks"}>Drinks</NavLink>
                   </div>
                   <div className={styles.item} >
                       <NavLink className={({ isActive }) => isActive ? styles.isActive : styles.isPending} to={"/rest"}>Rest</NavLink>
                   </div>
            </div>
        </div>

    )
}

                  
                
                
import React from "react";
import styles from "./nav.module.scss"
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <div className={styles.nav} >
          
            <div className={styles.items}> 
             <h1>Burgers</h1>
                <NavLink to={"/dash"} >Dashboard</NavLink>
                <NavLink to={"/food"} >Food</NavLink>
                <NavLink to={"/drinks"}>Drinks</NavLink>
                <NavLink to={"/rest"}>Rest</NavLink>
            </div>
        </div>

    )
}

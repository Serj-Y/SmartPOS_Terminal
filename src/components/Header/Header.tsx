import React from "react";
import styles from "./Header.module.scss";
import { Search } from "../SearchForm/SearchForm";



export const Header = () => {
    return (
        <div className={styles.header} >
            <div className={styles.items} >
                <Search />
            </div>
        </div>
    )
}


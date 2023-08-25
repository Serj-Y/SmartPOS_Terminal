import React from "react";
import styles from "./header.module.scss";
import { Search } from "../components/searchForm/search";


export const Header = () => {
    return (
        <div className={styles.header} >
            <div className={styles.items} >
                <Search />
            </div>
        </div>
    )
}


import React, { useState } from "react";
import styles from "./header.module.scss";

export const Header = () => {
    const [searchValue, setSearchValue] = useState("")

    const OnHandleChange = (e: any) => setSearchValue(e.target.value)

    const OnHandleSubmit = (e: any) => {
        if (searchValue) {
            console.log(searchValue)
            setSearchValue("")
        }
        e.preventDefault();
    }

    return (
        <div className={styles.header} >
            <div className={styles.items} >
                <div></div>
                <form onSubmit={OnHandleSubmit} >
                    <input type="search" placeholder="search" value={searchValue} onChange={OnHandleChange} />
                    <button type="submit" >search</button>
                </form>
            </div>
        </div>

    )
}






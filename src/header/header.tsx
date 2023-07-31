import React, { useState } from "react";
import styles from "./header.module.scss";

 export const Header = () => {
const [searchValue, setSearchValue] = useState("")

const onHandleChange = (e: any) => setSearchValue(e.target.value)

const onHandleSubmit = (e: any) => {
    if (searchValue){
    console.log(searchValue)
    setSearchValue("")
    }
    e.preventDefault();
}
    return(
<div className={styles.header} >
    <div className={styles.items} >
        <div>BreadCrumbs/</div>
        <form onSubmit={onHandleSubmit} >
            <input type="search" placeholder="search" value={searchValue} onChange={onHandleChange}/>
            <button type="submit" >search</button>
        </form>
    </div>
</div>

    )
}






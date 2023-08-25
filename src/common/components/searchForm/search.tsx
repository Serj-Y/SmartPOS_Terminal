import React, { useState } from "react";
import styles from "./search.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useAlert } from "react-alert";


export const Search = () => {
    const [searchValue, setSearchValue] = useState("")
    const alert = useAlert()

    const OnHandleChange = (e: any) => setSearchValue(e.target.value)
    const OnHandleSubmit = (e: any) => {
        if (searchValue) {
            alert.info( "Our input:"+searchValue)
            console.log(searchValue)
            setSearchValue("")
        }
        e.preventDefault();
    }
    return (
        <div className={styles.searchContainer} >
            <input className={styles.input} id="search" onBlur={OnHandleSubmit} type="search" placeholder={"Search..."} value={searchValue} onChange={OnHandleChange} ></input>
            <  FontAwesomeIcon className={styles.icon} onClick={OnHandleSubmit} icon={faSearch} />
        </div>
    )
}






import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css"
import Button from "../Button/Button";


const Nav = ({ onSearch })=> {

    return (
       <div className={styles.nav}>
         <div className={styles["nav-links"]}>
         <Button><Link to='/about'>About</Link></Button>
         <Button><Link to='/home' >Home</Link></Button>
         <SearchBar onSearch={ onSearch }/>
         </div>
       </div>
    );
 }

 export default Nav;
import React, { useState } from "react";
import Button from "../Button/Button";
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('');

   const handleChange = (event)=> {
      setCharacter(event.target.value);
   }

   return (
      <div className="styles.searchBar">
         <input type="search" className={styles.input} placeholder="Search character..." onChange={handleChange}/>
         <Button onClick={()=>{onSearch(character)}}>Agregar</Button>
      </div>
   );
}

import React, { useState } from "react";
import Button from "../Button/Button";
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('');

   const handleChange = (event)=> {
      setCharacter(event.target.value);
   }
   const handleRandomize = (event) => {
      const randomId = Math.floor(Math.random() * 900)+ 1;
      setCharacter(randomId.toString());
      onSearch(randomId.toString());
   }
   return (
      <div className="styles.searchBar">
         <div className={styles.buttonContainer}>
         <input type="search" className={styles.input} placeholder="Search character..." onChange={handleChange}/>
         <Button onClick={()=>{onSearch(character)}}>Agregar</Button>
         <Button onClick={handleRandomize}>Random</Button>
         <Button onClick={handleRandomize}>Random</Button>
         <Button onClick={handleRandomize}>Random</Button>
         <Button onClick={handleRandomize}>Random</Button>
         </div>
      </div>
   );
}

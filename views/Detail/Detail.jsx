import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import styles from'./Detail.module.css'

const Detail = () => {

    const [characterDetail , setCharacterDetail] = useState({});
    const { id } = useParams();


    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacterDetail(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacterDetail({}); //wilUnmount cuando me retiro del detail 
     }, [id]);

     return (
      <div className={styles.detail}>
        {characterDetail.name ? (
          <div>
            <img className={styles.image} src={characterDetail.image} alt={characterDetail.name} />
            <div>
            <h2 className={styles.title}>{characterDetail.name}</h2>
            <p className={styles.subtitle}>Species: {characterDetail.species}</p>
            <p className={styles.subtitle}>Gender: {characterDetail.gender}</p>
            <p className={styles.subtitle}>Origin: {characterDetail.origin?.name}</p>
          </div>
          </div>
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    );
  };
export default Detail;
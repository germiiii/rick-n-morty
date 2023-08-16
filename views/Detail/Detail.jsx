import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Card from "../../components/Card/Card";

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
      <div>
         {characterDetail.name ?(
        <Card 
              key={characterDetail.id}
              id={characterDetail.id}
              name={characterDetail.name}
              species={characterDetail.species}
              gender={characterDetail.gender}
              image={characterDetail.image}
              onClose={false}
              origin={characterDetail.origin}
              />
      ):(
         <div>Loading ...</div>
         )}
      </div>
    );
        }
export default Detail;
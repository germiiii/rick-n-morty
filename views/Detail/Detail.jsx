import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const Detail = () => {

    const { id } = useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <>
        <h1>DETAIL</h1>
        <h2>Status: {status}</h2>
        <h2>Species: {species}</h2>
        <h2>Gender: {gender}</h2>
        <h2>Origin: {origin.name}</h2>
        <img src={image} alt='Photo not found' />
        <button>pa la casa</button>
        </>
    );
};

export default Detail
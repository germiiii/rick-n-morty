import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ onClose, name, status, species, gender, origin, image ,id }) => {
   return (
    <div>
      <button onClick={()=>onClose(id)}>X</button>
      <h2>Id: {id}</h2>
      <h2>Name: <Link to={`/detail/${id}`}>{name}</Link></h2>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin.name}</h2>
      <img src={image} alt='Photo not found' />
    </div>
  );
}
export default Card;

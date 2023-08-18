import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";


export default function Favorites (){
    let favs = useSelector(state => state.myFavorites);
    let dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    };
    // useEffect(()=>{} , [favs]);
    // if (!favs || favs.length === 0) {
    //     return (<div>No hay tarjetas favoritas para mostrar.</div>)
    // }else{
      return(
        <div>
            <div>
                <select name="order" onChange={handleOrder}>
                    <option value='A'>Ascendente</option>
                    <option value='B'>Decendente</option>
                </select>

                <select name="gender" onChange={handleFilter}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unkown'>unkown</option>
                </select>
            </div>
            {favs?.map(fav => (
                console.log(fav),
                <Card
                    name={fav.name}
                    id={fav.id}
                    key={fav.id}
                    gender={fav.gender}
                    image={fav.image}
                    origin={fav.origin}
                />
            ))}

        </div>
    )}

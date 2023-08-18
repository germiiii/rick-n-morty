import { ADD_FAVORITE,REMOVE_FAVORITE, FILTER, ORDER } from "./action-types";

//las ACTIONS son oobjetos que tienen un type y un payload como propiedades, esto es lo que recibe el reducer para ejecutar los casos 
//las action creators son las funciones que retornan a las actions, es mas facil que el componente ejecute estas funciones que generan acciones 

//sintaxys

export const addFav = (character) => {
    return {
        type: ADD_FAVORITE,
        payload: character
    }
}
export const removeFav = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
}
export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}
export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}
export const removeFilters = () => {
    return{
    type: FILTER,
    payload: ''
    }
}
//cuando nosotros presionemos un boton este generara un evento que hara un dispatch de este objeto al reducer 
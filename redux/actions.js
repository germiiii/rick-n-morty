import { ADD_FAVORITE,REMOVE_FAVORITE } from "./action-types";

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

//cuando nosotros presionemos un boton este generara un evento que hara un dispatch de este objeto al reducer 
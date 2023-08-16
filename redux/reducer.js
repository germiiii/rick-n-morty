import { ADD_FAVORITE, REMOVE_FAVORITE } from "./action-types" 


const initialState = {
    myFavorites: []
}

function rootReducer (state = initialState, action) { // aca pasamos por parametro un estado inicial como default y tambien un action
//aca vamos a poner los casos para los que el reducer funcione y como debe modificarse el estado al recibir las actions
switch(action.type){
    case ADD_FAVORITE:
        return{
            ...state,
            myFavorites: [...state.myFavorites, action.payload] 
        }
    case REMOVE_FAVORITE:
        return{
            ...state,
            myFavorites: state.myFavorites.filter(char => char.id !== +action.payload) // debemos parsear ya que la payload sera un string y el id un numero
        }

    default:
        return state
}
}

export default rootReducer
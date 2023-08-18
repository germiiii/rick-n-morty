import { ADD_FAVORITE, REMOVE_FAVORITE,ORDER,FILTER } from "./action-types" 


const initialState = {
    myFavorites: [],
    allCharacters: [],
}

function rootReducer (state = initialState, action) { // aca pasamos por parametro un estado inicial como default y tambien un action
//aca vamos a poner los casos para los que el reducer funcione y como debe modificarse el estado al recibir las actions
switch(action.type){
    case ADD_FAVORITE:
        return{
            ...state,
            allCharacters: [...state.allCharacters, action.payload],
            myFavorites: [...state.myFavorites, action.payload] ,
        }
    case REMOVE_FAVORITE:
        return{
            ...state,
            myFavorites: state.myFavorites.filter(char => char.id !== +action.payload) // debemos parsear ya que la payload sera un string y el id un numero
        }
    case FILTER:
        let {allCharacters} = state;
        return{
            ...state,
            myFavorites: allCharacters.filter(gen => gen.gender === action.payload)
        }
    case ORDER:
        const sortedCharacters = state.myFavorites.slice().sort((a,b)=> {
            if (action.payload ==='A'){
                return a.id - b.id;
            }else{
                return b.id - a.id;
            }
        });
        return {
            ...state,
            myFavorites: sortedCharacters
        }
    default:
        return state
}
}

export default rootReducer
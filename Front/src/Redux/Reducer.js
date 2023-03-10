import { ADD_FAVORITE, DELETE_FAVORITE, FILTER_CARDS, ORDER_CARDS } from "./Actions.types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(e => e.id !== action.payload)
            }
        case FILTER_CARDS:
            
            const allCharactersFilter = state.allCharacters.filter(e => e.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharactersFilter
            }
        case ORDER_CARDS:
            return {
                ...state,
                myFavorites:
                    action.payload === "Ascendente"
                        ? state.allCharacters.sort((a, b) => a.id - b.id)
                        : state.allCharacters.sort((a, b) => b.id - a.id)
            }
        default:
            return { ...state }
    }
}


export default reducer;



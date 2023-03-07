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
                allCharacters: [...state.myFavorites]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            }
        case FILTER_CARDS:
            const { allCharacters } = state
            const allCharactersFilter = allCharacters.filter(char => char.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharactersFilter
            }
        case ORDER_CARDS:
            return {
                ...state,
                myFavorites:
                    action.payload === "Ascendente"
                        ? allCharacters.sort((a, b) => a.id < b.id)
                        : allCharacters.sort((a, b) => a.id > b.id)
            }
        default:
            return { ...state }
    }
}


export default reducer;



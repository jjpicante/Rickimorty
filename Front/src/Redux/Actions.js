import { ADD_FAVORITE, DELETE_FAVORITE, FILTER_CARDS, ORDER_CARDS } from "./Actions.types";

export const addFavorite = (character) => {
    return { type: ADD_FAVORITE, payload: character }
}

export const deleteFavorite = (id) => {
    return { type: DELETE_FAVORITE, payload: id }
}

export const filterCards = (status) => {
    return { type: FILTER_CARDS, payload: status}
}
export const orderCards = (id) => {
    return { type: ORDER_CARDS, payload: id}
}

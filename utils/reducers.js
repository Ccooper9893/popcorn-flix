import { useReducer } from "react";

const TOGGLE_MOVIES = 'TOGGLE_MOVIES';
const TOGGLE_RATINGS = 'TOGGLE_RATINGS';

export const reducer = (state, action) => {

    switch (action.type) {

        case TOGGLE_MOVIES:
            console.log('Toggle movies');
            return {
                ...state,
                movies: !state.movies
            }
        case TOGGLE_RATINGS:
            console.log('Toggle ratings');
            return {
                ...state,
                ratings: !state.ratings
            }
        default:
            return state
    };
};

export function useSearchReducer(initialState) {
    return useReducer(reducer, initialState)
  }
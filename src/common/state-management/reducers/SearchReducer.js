import { ProductActionTypes } from '../actions/ActionTypes'

export const searchInitialState = {
    searchResult: {
        loading: false,
        error: null,
        data: []
    }
}

const searchReducer = (state = searchInitialState, action) => {
    switch (action.type) {
        case ProductActionTypes.PRODUCTS_SEARCH_INIT:
            return {
                ...state,
                searchResult: {
                    ...state.searchResult,
                    loading: true
                }
            }
        case ProductActionTypes.PRODUCTS_SEARCH_SUCCESS:
            return {
                ...state,
                searchResult: {
                    ...state.searchResult,
                    loading: false,
                    data: action.payload
                }
            }
        case ProductActionTypes.PRODUCTS_SEARCH_FAILURE:
            return {
                ...state,
                searchResult: {
                    ...state.searchResult,
                    loading: false,
                    error: action.payload
                }
            }
        default:
            return state
    }
}

export default searchReducer
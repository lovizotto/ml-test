import { ProductActionTypes } from '../actions/ActionTypes'

export const productInitialState = {
    productFetch: {
        loading: false,
        error: null,
        data: {}
    }
}

const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case ProductActionTypes.PRODUCT_FETCH_INIT:
            return {
                ...state,
                productFetch: {
                    ...state.productFetch,
                    loading: true,
                    data: {}
                }
            }
        case ProductActionTypes.PRODUCT_FETCH_SUCCESS:
            return {
                ...state,
                productFetch: {
                    ...state.productFetch,
                    loading: false,
                    data: action.payload
                }
            }
        case ProductActionTypes.PRODUCT_FETCH_FAILURE:
            return {
                ...state,
                productFetch: {
                    ...state.productFetch,
                    loading: false,
                    error: action.error
                }
            }
        default:
            return state
    }
}

export default productReducer
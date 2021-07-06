import { ProductActionTypes } from './ActionTypes'
import { productSearch } from '../../services/products/product-search'

export const searchAction = ({ query }) => async dispatch => {
    dispatch({ type: ProductActionTypes.PRODUCTS_SEARCH_INIT })

    try {
        const result = await productSearch({ query })
        dispatch({
            type: ProductActionTypes.PRODUCTS_SEARCH_SUCCESS,
            payload: result
        })
    } catch (error) {
        dispatch({
            type: ProductActionTypes.PRODUCTS_SEARCH_FAILURE,
            payload: error.error
        })
    }
}
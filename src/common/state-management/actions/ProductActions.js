import { ProductActionTypes } from './ActionTypes'
import { getProduct } from '../../services/products/product-fetch'

export const productFecth = ({ id }) => async dispatch => {
    dispatch({ type: ProductActionTypes.PRODUCT_FETCH_INIT })

    try {
        const result = await getProduct({ id })
        dispatch({
            type: ProductActionTypes.PRODUCT_FETCH_SUCCESS,
            payload: result
        })
    } catch (error) {
        dispatch({
            type: ProductActionTypes.PRODUCT_FETCH_FAILURE,
            payload: error.error
        })
    }
}
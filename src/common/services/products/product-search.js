import axios from 'axios'
import { MlaMock } from '../../datasources/mla-mock'
import { productListRemap } from './product-response-remap'

export async function productSearch({ query }) {
    try {
        const url = `${MlaMock}/sites/MLA/search?q=${query}`
        const response = await axios.get(url)
        const searchResult = productListRemap(response.data, query !== 'q')
        return searchResult
    } catch (error) {
        return error
    }
}
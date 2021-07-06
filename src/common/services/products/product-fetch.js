import axios from 'axios'
import { productRemap } from './product-response-remap'
import { MlaMock } from '../../datasources/mla-mock'

export async function getProduct({ id }) {
    try {
        const url = `${MlaMock}/items/${id}`
        const response = await axios.get(url)
        const product = productRemap(response.data)

        const description = await fetchProductDescription({ id })
        product.description = description
        return product
    } catch (error) {
        throw error
    }
}

async function fetchProductDescription({ id }) {
    try {
        const url = `${MlaMock}/items/${id}/description`
        const response = await axios.get(url)
        const description = response.data.plain_text
        return description
    } catch (error) {
        throw error
    }
}
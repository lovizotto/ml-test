export const productListRemap = (productResponse, slice) => {
    /**
     * This should be another arch layer
     */
    const categories = productResponse
        .available_filters[0]
        ?.values
        ?.map( category => category.name) || []

    const results = slice ? productResponse.results?.slice(0, 4) : productResponse.results
    const items = results.map( result => productRemap(result)) || []

    const author = {
        name: productResponse.seller?.eshop?.nick_name,
        lastname: ''
    } || {}

    return { author, categories, items }
}

export const productRemap = (result) => ({
    id: result.id,
    title: result.title,
    price: {
        amount: result.price,
        currency: result.currency_id,
        decimals: 2
    },
    picture: result.thumbnail,
    condition: result.condition,
    freeShipping: result.shipping?.free_shipping,
    soldQuantity: result.sold_quantity || 0,
    description: result.description || ''
})
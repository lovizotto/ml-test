import React, { useContext } from 'react'
import ProductListItem from '../components/modules/products/ProductListItem'
import ProductList from '../components/modules/products/ProductList'
import Layout from '../components/modules/layout/Layout'
import { AppContext } from '../../common/state-management/AppContext'
import { NavLink } from 'react-router-dom'
import { Separator } from '../components/ui/Separator'

function Index() {
    const { state } = useContext(AppContext)
    return (
        <Layout>
            {state.searchResult.loading && <span>Carregando...</span>}
            <ProductList>
                {(state.searchResult.data.items || []).map( (product, index, products) => (
                    <div key={product.id}>
                        <NavLink to={`item/${product.id}`}>
                            <ProductListItem
                                picture={product.picture}
                                id={product.id}
                                price={product.price}
                                sellerNickname={''}
                                title={product.title}
                                freeShipping={product.freeShipping}
                            />
                        </NavLink>
                        {index < products.length - 1 && (<Separator />)}
                    </div>
                ))}
            </ProductList>
        </Layout>
    )
}

export default Index
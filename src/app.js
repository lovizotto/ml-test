import React, { useReducer } from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from './views/pages'
import ProductDetail from './views/pages/product-detail'
import NotFound from './views/pages/not-found'
import { ThemeProvider } from 'styled-components'
import theme from './views/components/ui/theme'
import ContextProvider from './common/state-management/AppContext'
import searchReducer, { searchInitialState } from './common/state-management/reducers/SearchReducer'
import 'normalize.css'
import productReducer, { productInitialState } from './common/state-management/reducers/ProductReducer'
import combineReducers from './common/state-management/combineReducers'

const initialState = {
    ...searchInitialState,
    ...productInitialState
}

const reducers = combineReducers({
    productFetch: productReducer,
    searchResult: searchReducer
})

export default () => {
    const [state, dispatch] = useReducer(reducers, initialState)

    return (
        <ThemeProvider theme={theme}>
            <ContextProvider value={{state, dispatch}}>
                <Routes />
            </ContextProvider>
        </ThemeProvider>
    )
};

const Routes = () => (
    <Switch>
        <Route
            exact
            path="/"
            render={props => <Index name="Alligator.io" {...props} />}
        />
        <Route path="/item/:id" component={ProductDetail}/>
        <Route component={NotFound}/>
    </Switch>
)
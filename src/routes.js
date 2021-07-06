import Index from './views/pages'
import NotFound from './views/pages/not-found'
import ProductDetail from './views/pages/product-detail'

const Routes = [
    {
        path: '/',
        exact: true,
        component: Index
    },
    {
        path: '/item',
        component: ProductDetail
    },
    {
        path: '/items?search',
        component: Index
    },
    {
        component: NotFound
    }
];

export default Routes;
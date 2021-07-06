import React from 'react'

ProductList.propTypes = {
    
}

function ProductList({children, ...props}) {
    return (
        <div {...props}>
           {children}
        </div>
    )
}

export default ProductList
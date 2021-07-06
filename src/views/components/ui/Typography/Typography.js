import React from 'react'
import PropTypes from 'prop-types'

Typography.propTypes = {
    element: PropTypes.string,
}

function Typography({ element = 'span', ...props }) {
    const Element = element
    return <Element {...props} />
}

export default Typography
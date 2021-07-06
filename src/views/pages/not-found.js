import React from 'react'
import { Col, Row } from 'react-grid-system'
import Layout from '../components/modules/layout/Layout'
import { Heading } from '../components/ui/Heading'

NotFound.propTypes = {
    
}

function NotFound(props) {
    return (
        <Layout>
            <Heading level={3}>Page not found</Heading>
        </Layout>
    )
}

export default NotFound
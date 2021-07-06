import React from 'react'
import { Col, Row } from 'react-grid-system'
import Layout from '../components/modules/layout/Layout'

NotFound.propTypes = {
    
}

function NotFound(props) {
    return (
        <Layout>
            <Row>
                <Col md={10}>not fount</Col>
                <Col>not fount</Col>
            </Row>
        </Layout>
    )
}

export default NotFound
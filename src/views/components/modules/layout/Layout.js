import React from 'react'
import Header from './Header'
import Contents from './Contents'
import { Breadcrumb } from '../../ui/Breadcrumb'
import { Col, Container, Hidden, Row } from 'react-grid-system'

Layout.propTypes = {}

const MockBreadCrumbItems = [
    {
        id: '1',
        label: 'Electrônica Audio y Video',
        url: ''
    },
    {
        id: '2',
        label: 'Electrônica Audio y Video',
        url: ''
    },
    {
        id: '3',
        label: 'Electrônica Audio y Video',
        url: ''
    },
    {
        id: '4',
        label: 'Electrônica Audio y Video',
        url: ''
    }
]

function Layout({ children }) {
    return (
        <>
            <Header/>
            <Hidden xs sm>
                <Container>
                    <Row>
                        <Col xs={10} offset={{ xs: 1 }}>
                            <Breadcrumb items={MockBreadCrumbItems}/>
                        </Col>
                    </Row>
                </Container>
            </Hidden>
            <Contents>
                {children}
            </Contents>
        </>
    )
}

export default Layout
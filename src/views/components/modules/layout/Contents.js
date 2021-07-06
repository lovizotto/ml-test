import React from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'

Contents.propTypes = {
    children: PropTypes.any
}

function Contents({ children }) {
    return (
        <Container>
            <RowStyled>
                <ColStyled offset={{ xs: 1 }} xs={10}>{children}</ColStyled>
            </RowStyled>
        </Container>
    )
}

const RowStyled = styled(Row)`
  margin-left: 0 !important;
  margin-right: 0 !important;
`

const ColStyled = styled(Col)`
  background-color: white;


`

export default Contents
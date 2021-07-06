import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'
import { InputSearch } from '../../ui/InputSearch'
import LogoML from '../../../../assets/images/Logo_ML.png'
import LogoML2x from '../../../../assets/images/Logo_ML@2x.png'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../../common/state-management/AppContext'
import { searchAction } from '../../../../common/state-management/actions/SearchActions'
import debounce from 'lodash/debounce'
import { useLocation, Redirect } from 'react-router-dom'

Header.propTypes = {}

function Header(props) {
    const { dispatch } = useContext(AppContext)
    const [redirect, setRedirect] = useState(false)
    const location = useLocation()

    const handleInputSearchChange = (evt) => {
        const query = evt.target.value.trim()
        execSearch(query)
        if (location.pathname !== '/') {
            setRedirect(query)
        }
    }

    const debouncedChangeHandler = useCallback(
        debounce(handleInputSearchChange, 500)
        , [])

    const execSearch = (query = '') => {
        searchAction({ query: query.length > 0 ? query : 'q' })(dispatch)
    }

    useEffect(() => {
        execSearch()
        return () => {
            debouncedChangeHandler.cancel()
        }
    }, [])

    if (redirect) {
        return <Redirect to={`/items?search=${redirect}`} />
    }

    return (
        <ContainerStyled fluid>
            <Container>
                <Row>
                    <Col xs={1} offset={{ xs: 1 }}>
                        <Link to="/">
                            <img src={LogoML} srcSet={`${LogoML} 1x, ${LogoML2x} 2x`} alt="Mercado Libre"/>
                        </Link>
                    </Col>
                    <Col xs={8}>
                        <InputSearch onChange={debouncedChangeHandler} defaultValue={redirect}/>
                    </Col>
                </Row>
            </Container>
        </ContainerStyled>
    )
}

const ContainerStyled = styled(Container)`
  background-color: ${({ theme }) => theme.colors.accentYellow};
  height: 52px;
  max-height: 52px;
  padding: ${({ theme }) => theme.spaces.s2};
`

export default Header
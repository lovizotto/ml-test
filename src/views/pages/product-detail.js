import React, { useContext, useEffect, useState } from 'react'
import { Heading } from '../components/ui/Heading'
import { Col, Row } from 'react-grid-system'
import { AppContext } from '../../common/state-management/AppContext'
import { Thumbnail } from '../components/modules/products/Thumbnail'
import Layout from '../components/modules/layout/Layout'
import { productFecth } from '../../common/state-management/actions/ProductActions'
import Typography from '../components/ui/Typography/Typography'
import styled from 'styled-components'
import { getCurrency } from '../components/utils/currency'
import Button from '../components/ui/Button/Button'

ProductDetail.propTypes = {}

function ProductDetail({ match }) {
    const { state, dispatch } = useContext(AppContext)
    const [product, setProduct] = useState({})

    useEffect(() => {
        productFecth({ id: match.params.id })(dispatch)
    }, [match.params.id, dispatch])

    useEffect(() => {
        if (state.productFetch.error) {
            return
        }

        const product = state.productFetch.data
        setProduct(product)
    }, [state.productFetch.loading])

    return (
        <Layout>
            {state.productFetch.loading && 'Cargando...'}
            {product.id && (
                <>
                    <Row>
                        <Col xs={8}>
                            <Thumbnail src={product.picture} size="xl"/>
                        </Col>
                        <Col xs={4}>
                            <DetailWrapper>
                                <SmallDetails>{product.condition} - {product.soldQuantity} vendidos</SmallDetails>
                                <Heading level={3}>{product.title}</Heading>
                                <Price>
                                    {getCurrency(product.price.amount, product.price.currency)}
                                </Price>
                                <Button fullWidth>Comprar</Button>
                            </DetailWrapper>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DescriptionWrapper>
                                <Heading level={2}>
                                    Descripción del product
                                </Heading>
                                <FIXPre style={{ whiteSpace: 'pre-wrap' }}>
                                    <Typography element="span">
                                        {product.description}
                                    </Typography>
                                </FIXPre>
                            </DescriptionWrapper>
                        </Col>
                    </Row>
                </>
            )}

        </Layout>
    )
}

const DescriptionWrapper = styled.div`
  margin-left: ${({theme}) => theme.spaces.s5};
  margin-bottom: ${({theme}) => theme.spaces.s5}
`

const FIXPre = styled.div`
  white-space: pre-wrap;
`

const SmallDetails = styled.p`
  font-size: ${({theme}) => theme.sizes.textSM};
`
const Price = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spaces.s3};
  font-size: ${({ theme }) => theme.sizes.textXL};
`
const DetailWrapper = styled.div`
     margin-right: ${({ theme }) => theme.spaces.s6};;
`

export default ProductDetail
import React from 'react'
import { Col, Hidden, Row } from 'react-grid-system'
import { Thumbnail } from './Thumbnail'
import PropTypes from 'prop-types'
import Typography from '../../ui/Typography/Typography'
import styled from 'styled-components'
import IcShipping from '../../../../assets/images/ic_shipping.png'
import IcShipping2x from '../../../../assets/images/ic_shipping@2x.png'
import { getCurrency } from '../../utils/currency'

ProductListItem.propTypes = {
    id: PropTypes.string,
    picture: PropTypes.string,
    price: PropTypes.object,
    title: PropTypes.string,
    sellerNickname: PropTypes.string,
    freeShipping: PropTypes.bool
}

function ProductListItem({ id, picture, price, title, sellerNickname, freeShipping = false }) {
    const priceFormated = getCurrency(price.amount, price.currency)
    return (
        <RowWrapper>
            <Col sm={12} md={8}>
                <Row>
                    <Col xs={3}>
                        <Thumbnail src={picture} alt={title}/>
                    </Col>
                    <Col>
                        <DetailWrapper>
                            <Price element="p">
                                {priceFormated}
                                {freeShipping && (
                                    <ShippingTag src={IcShipping} srcSet={`${IcShipping} 1x, ${IcShipping2x} 2x`}/>
                                )}
                            </Price>
                            <Description element="p">{title}</Description>
                        </DetailWrapper>
                    </Col>
                </Row>
            </Col>
            <Hidden sm>
                <Col md={3}>
                    <span>{sellerNickname}</span>
                </Col>
            </Hidden>
        </RowWrapper>
    )
}

const RowWrapper = styled(Row)`
  padding: ${({ theme }) => theme.spaces.s3} 0;
  height: 212px;
  
`

const DetailWrapper = styled(Col)`
  padding-left: ${({ theme }) => theme.spaces.s3};
`

const Price = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spaces.s3};
  font-size: ${({ theme }) => theme.sizes.textLG};
`

const Description = styled(Typography)`
  font-size: ${({ theme }) => theme.sizes.textMD};
`

const ShippingTag = styled.img`
  margin-left: ${({ theme }) => theme.spaces.s2};
`

export default ProductListItem
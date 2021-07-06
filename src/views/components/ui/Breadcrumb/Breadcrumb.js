import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

Breadcrumb.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        label: PropTypes.string
    })),
    selected: PropTypes.bool
}

function Breadcrumb({ items }) {
    return <BreadcrumbWrapper>{
        items.map((item, index) => {
            return (
                <div key={item.id}>
                    <LinkStyled to={item.url} latest={index === items.length - 1}>
                        {item.label}
                    </LinkStyled>
                    {index < items.length - 1 && <Chevron>{`>`}</Chevron>}
                </div>
            )
        })
    }
    </BreadcrumbWrapper>
}

const BreadcrumbWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spaces.s3};
  margin-bottom: ${({ theme }) => theme.spaces.s3};
  display: flex;
  align-items: center;
  flex-direction: row;
`
const LinkStyled = styled(Link)`
  display: inline-flex;
  font-size: ${({ theme }) => theme.sizes.textXS};
  color: ${({ theme }) => theme.colors.gray2};
  font-weight: ${({ latest }) => latest ? 'bold' : 'normal'};
  text-decoration: none;
  margin-right: ${({ theme }) => theme.spaces.s2};
  margin-left: ${({ theme }) => theme.spaces.s2};
  
  &:first-child {
    margin-left: 0;  
  }
`

const Chevron = styled.span`
  transform: scaleY(2);
  font-size: 8px;
  color: ${({ theme }) => theme.colors.gray3};
`

export default Breadcrumb
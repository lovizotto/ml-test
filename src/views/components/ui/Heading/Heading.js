import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.div`
  font-size: ${({ size, theme }) => theme.sizes[size]};
  color: ${({color, theme}) => theme.colors[color]};
  margin: ${({theme}) => theme.spaces.s5} 0;
`

function Heading({ level = 1, ...props }) {

    return <StyledHeading as={`h${level}`} {...props} />
}

export default Heading
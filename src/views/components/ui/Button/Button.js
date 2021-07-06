import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  outline: none;
  border: none;
  color: white;
  background-color: ${({theme}) => theme.colors.accentBlue};
  border-radius: 4px;
  width: ${({fullWidth}) => fullWidth ? '100%' : 'auto'};
  padding: ${({theme}) => theme.spaces.s3} ${({theme}) => theme.spaces.s4};
  margin: ${({theme}) => theme.spaces.s6} 0;
  font-size:  ${({theme}) => theme.sizes.textSM};
`

export default Button
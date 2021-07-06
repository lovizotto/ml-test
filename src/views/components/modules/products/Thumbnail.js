import React from 'react'
import styled from 'styled-components'

export const Thumbnail = styled.img`
  border-radius: 4px;
  width: ${({size, theme}) => size === 'xl' ? theme.sizes.imgXL : theme.sizes.imgMD };
  max-width: 100%;
  max-height: ${({size, theme}) => size === 'xl' ? theme.sizes.imgXL : theme.sizes.imgMD };
  overflow: hidden;
  margin: ${({theme}) => theme.spaces.s4 };
  background-color: red;
`
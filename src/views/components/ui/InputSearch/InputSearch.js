import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import IcSearch from '../../../../assets/images/ic_Search.png'
import IcSearch2x from '../../../../assets/images/ic_Search@2x.png'

InputSearch.propTypes = {
    onChange: PropTypes.func
}

function InputSearch({ onChange = f => f }) {
    const [tmpValue, setTmpValue] = useState()
    const handleButtonSearchClick = () => {
        onChange(tmpValue)
    }

    const handleInputChange = (evt) => {
        setTmpValue(evt)
        onChange(evt)
    }
    return (
        <InputWrapper>
            <InputStyled type="text" onChange={handleInputChange}/>
            <IconButton>
                <Icon src={IcSearch} srcSet={`${IcSearch} 1x, ${IcSearch2x} 2x`} alt="Search Products"
                      onClick={handleButtonSearchClick}/>
            </IconButton>
        </InputWrapper>
    )
}

const InputStyled = styled.input`
  width: calc(100% - 36px);
  display: flex;
  align-items: center;
  height: 36px;
  font-size: ${({ theme }) => theme.sizes.textMD};
  color: ${({ theme }) => theme.colors.gray2};
  padding-left: ${({ theme }) => theme.spaces.s3};
  padding-right: ${({ theme }) => theme.spaces.s3};
  border: none;
  border-top-left-radius: ${({ theme }) => theme.spaces.s1};
  border-bottom-left-radius: ${({ theme }) => theme.spaces.s1};
  outline: none;
`

const IconButton = styled.div`
  background-color: ${({ theme }) => theme.colors.gray4};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-top-right-radius: ${({ theme }) => theme.spaces.s1};
  border-bottom-right-radius: ${({ theme }) => theme.spaces.s1};
`

const Icon = styled.img`
  cursor: pointer;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export default InputSearch
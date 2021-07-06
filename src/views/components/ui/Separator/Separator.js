import styled from 'styled-components'

const Separator = styled.hr`
  width: calc(100% + 30px);
  height: 1px;
  border: 0;
  margin: 0;
  margin-left: -15px;
  margin-right: -15px;
  background-color: ${({theme}) => theme.colors.gray4};
`

export default Separator
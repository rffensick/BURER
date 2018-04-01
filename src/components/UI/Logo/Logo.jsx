import React from 'react'
import logo from '../../../assets/images/burger-logo.png'
import styled from 'styled-components'

const LogoDiv = styled.div`
  background-color: #fff;
  padding: 8px;
  height: ${props => props.theme.height};
  box-sizing: border-box;
  border-radius: 5px;

  img {
    height: 100%;
  }
`

LogoDiv.defaultProps = {
  theme: {
    height: '80%'
  }
}

const Logo = props => {
  return (
    <LogoDiv>
      <img src={logo} alt="Logo Brand" />
    </LogoDiv>
  )
}

export default Logo

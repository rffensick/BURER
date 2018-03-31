import React from 'react'
import logo from '../../../assets/images/burger-logo.png'
import styled from 'styled-components'

const LogoImg = styled.div`
  background-color: #fff;
  padding: 8px;
  height: 80%;
  box-sizing: border-box;
  border-radius: 5px;

  img {
    height: 100%;
  }
`

const Logo = props => {
  return (
    <LogoImg>
      <img src={logo} alt="Logo Brand" />
    </LogoImg>
  )
}

export default Logo

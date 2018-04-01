import React from 'react'
import Logo from '../../UI/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import styled, { ThemeProvider } from 'styled-components'

const SideDrawerDiv = styled.div`
  position: fixed;
  width: 280px;
  min-width: 70px;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: #fff;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  &.Open {
    transform: translateX(0);
  }

  &.Close {
    transform: translateX(-100vh);
  }

  @media (min-width: 500px) {
    display: none;
  }
`

const theme = {
  height: '11%'
}

const SideDrawer = props => {
  return (
    <SideDrawerDiv>
      <ThemeProvider theme={theme}>
        <Logo />
      </ThemeProvider>
      <nav>
        <NavigationItems />
      </nav>
    </SideDrawerDiv>
  )
}

export default SideDrawer

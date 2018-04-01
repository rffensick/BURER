import React from 'react'
import styled from 'styled-components'
import Logo from '../../UI/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const ToolbarHeader = styled.div`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  color: white;
  left: 0;
  z-index: 90;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`

const ToolbarNav = styled.nav`
  height: 100%;

  @media (max-width: 499px) {
    display: none;
  }
`

const Toolbar = props => {
  return (
    <ToolbarHeader>
      <div>Menu</div>
      <Logo />
      <ToolbarNav>
        <NavigationItems />
      </ToolbarNav>
    </ToolbarHeader>
  )
}

export default Toolbar

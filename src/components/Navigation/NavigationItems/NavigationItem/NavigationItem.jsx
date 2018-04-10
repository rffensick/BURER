import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavigationItemLi = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  align-items: center;

  a {
    color: #8f5c2c;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;

    &:hover,
    &:active,
    &.active {
      color: #40a4c8;
    }
  }

  @media (min-width: 500px) {
    margin: 10px 0;
    display: flex;
    width: auto;
    align-items: center;

    a {
      color: white;
      padding: 16px 10px;
      height: 100%;
      border-bottom: 4px solid transparent;

      &:hover,
      &:active,
      &.active {
        color: white;
        border-bottom: 4px solid #40a4c8;
        background-color: #8f5c2c;
      }
    }
  }
`

const NavigationItem = props => {
  return (
    <NavigationItemLi>
      <NavLink exact to={props.href} activeClassName="active">
        {props.children}
      </NavLink>
    </NavigationItemLi>
  )
}

export default NavigationItem

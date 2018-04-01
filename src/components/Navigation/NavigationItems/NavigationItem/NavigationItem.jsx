import React from 'react'
import styled from 'styled-components'

const NavigationItemLi = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    box-sizing: border-box;
    display: block;

    &:hover,
    &:active,
    &.active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }

  @media (min-width: 500px) {
  }
`

const NavigationItem = props => {
  return (
    <NavigationItemLi>
      <a className={props.active && 'active'} href={props.href}>
        {props.children}
      </a>
    </NavigationItemLi>
  )
}

export default NavigationItem

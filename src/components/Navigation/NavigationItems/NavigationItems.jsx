import React from 'react'
import styled from 'styled-components'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItemsUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
  flex-flow: column;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`

const NavigationItems = props => {
  return (
    <NavigationItemsUl>
      <NavigationItem exact href="/">
        Burger Builder
      </NavigationItem>
      <NavigationItem href="/orders">Order</NavigationItem>
    </NavigationItemsUl>
  )
}

export default NavigationItems

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
`

const NavigationItems = props => {
  return (
    <NavigationItemsUl>
      <NavigationItem active href="/">
        Some there
      </NavigationItem>
      <NavigationItem href="/">Some there 22</NavigationItem>
    </NavigationItemsUl>
  )
}

export default NavigationItems

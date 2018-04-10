import React from 'react'
import Burger from '../../Burger/Burger'
import { Button } from '../../UI/Button/Button'
import styled, { ThemeProvider } from 'styled-components'

const CheckoutSummaryDiv = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
`

const CheckoutSummary = props => {
  return (
    <CheckoutSummaryDiv>
      <Burger ingredients={props.ingredients} />
      <h1>THAT'S YOUR BURGER! AWESOME!</h1>
      <ThemeProvider theme={{ color: 'palevioletred' }}>
        <Button onClick={props.cancelBack}>Cancel</Button>
      </ThemeProvider>
      <ThemeProvider theme={{ color: 'mediumseagreen' }}>
        <Button onClick={props.continuePurchase}>Continue</Button>
      </ThemeProvider>
    </CheckoutSummaryDiv>
  )
}

export default CheckoutSummary

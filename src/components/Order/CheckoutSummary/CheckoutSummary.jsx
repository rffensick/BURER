import React from 'react'
import Burger from '../../Burger/Burger'
import { Button } from '../../UI/Button/Button'
import styled, { ThemeProvider, withTheme } from 'styled-components'

const CheckoutSummaryDiv = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;

  @media (min-width: 600px) {
    width: 500px;
  }
`

const CheckoutSummary = props => {
  console.log(this.props)
  return (
    <CheckoutSummaryDiv>
      <h1>We hope test well!</h1>
      <Burger ingredients={props.ingredients} />
      <ThemeProvider theme={{ color: 'palevioletred' }}>
        <Button>Cancel</Button>
      </ThemeProvider>
      <ThemeProvider theme={{ color: 'mediumseagreen' }}>
        <Button>Continue</Button>
      </ThemeProvider>
    </CheckoutSummaryDiv>
  )
}

export default withTheme(CheckoutSummary)

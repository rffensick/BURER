import React, { Component } from 'react'
import Aux from '../../../hoc/Aux1'
import { ThemeProvider } from 'styled-components'
import { Button } from '../../UI/Button/Button'

class OrderSummary extends Component {
  componentDidUpdate(nextProps) {
    console.log('[componentSummary] updated')
  }

  ingredientsSummary = () =>
    Object.keys(this.props.ingredients).map(ingKey => (
      <li key={ingKey}>
        <b style={{ textTransform: 'capitalize' }}>{ingKey}</b>:
        {this.props.ingredients[ingKey]}
      </li>
    ))

  render() {
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{this.ingredientsSummary()}</ul>
        <p>
          <strong>Your total Price : {this.props.price.toFixed(2)}$</strong>
        </p>
        <p>Continue to Checkout?</p>
        <ThemeProvider theme={{ color: 'palevioletred' }}>
          <Button onClick={this.props.modalClose}>Cancel</Button>
        </ThemeProvider>
        <ThemeProvider theme={{ color: 'mediumseagreen' }}>
          <Button onClick={this.props.purchaseContinue}>Continue</Button>
        </ThemeProvider>
      </Aux>
    )
  }
}

export default OrderSummary

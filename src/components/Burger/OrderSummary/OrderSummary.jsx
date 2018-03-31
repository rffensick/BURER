import React from 'react'
import Aux from '../../../hoc/Aux1'

const OrderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(ingKey => (
    <li key={ingKey}>
      <b style={{ textTransform: 'capitalize' }}>{ingKey}</b>:
      {props.ingredients[ingKey]}
    </li>
  ))
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  )
}

export default OrderSummary

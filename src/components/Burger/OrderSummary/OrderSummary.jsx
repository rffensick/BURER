import React from 'react'
import Aux from '../../../hoc/Aux1'
import { ButtonStyle } from '../../UI/Button/Button'

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
      <p><strong>Your total Price : {props.price.toFixed(2)}$</strong></p>
      <p>Continue to Checkout?</p>
      <ButtonStyle onClick={props.modalClose} danger>Cancel</ButtonStyle>
      <ButtonStyle onClick={props.purchaseContinue} success>Continue</ButtonStyle>
    </Aux>
  )
}

export default OrderSummary

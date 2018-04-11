import React from 'react'
import styled from 'styled-components'
import { mapToArrayIng } from 'utils'

const Span = styled.span`
  display: inline-block;
  border: 1px solid #ccc;
  text-transform: capitalize;
  margin: 0 8px;
  padding: 5px;
`

const OrderDiv = styled.div`
  width: 85%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`

const Order = props => {
  const transformIng = mapToArrayIng(props.ingredients).map(ing => (
    <Span key={ing.name}>
      {ing.name} (<span
        style={ing.amount === 0 ? { color: 'red' } : { color: 'green' }}
      >
        {ing.amount}
      </span>)
    </Span>
  ))

  return (
    <OrderDiv>
      <p>Ingredients: {transformIng}</p>
      <p>
        Price: <strong>USD {parseInt(props.price, 0).toFixed(2)}</strong>
      </p>
    </OrderDiv>
  )
}

export default Order

import React from 'react'
import styled from 'styled-components'

const OrderDiv = styled.div`
  width: 85%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`

const Order = props => {
  return (
    <OrderDiv>
      <p>Ingredients: Salad (1)</p>
      <p>
        Price: <strong>USD 5.45</strong>
      </p>
    </OrderDiv>
  )
}

export default Order

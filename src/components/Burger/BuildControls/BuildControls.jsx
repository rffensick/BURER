import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import BuildControl from './BuildControl/BuildControl'

const BuildControlsDiv = styled.div`
  background-color: #cf8f2e;
  display: flex;
  justify-content: center;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`

const PriceP = styled.p`
  font-size: 20px;
  background-color: orange;
  color: black;
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
  margin-bottom: 0;
`

const enabled = keyframes`
  0% { transform: scale(1); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
`

const OrderButton = styled.button`
  background-color: #dad735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2rem;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;

  &:hover,
  &:active {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }

  &:disabled {
    background-color: #c7c6c6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888;
  }

  &:not(:disabled) {
    animation: ${enabled} 0.3s linear;
  }
`

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' }
]

const BuildControls = ({
  price,
  disabledInfo,
  purchasable,
  ordred,
  onAdd = f => f,
  onRemove = f => f
}) => {
  return (
    <Fragment>
      <PriceP>Total price: {price.toFixed(2)}$</PriceP>
      <BuildControlsDiv>
        {controls.map(ctrl => (
          <BuildControl
            onAdd={() => onAdd(ctrl.type)}
            onRemove={() => onRemove(ctrl.type)}
            {...ctrl}
            key={ctrl.label}
            valid={disabledInfo[ctrl.type]}
          />
        ))}
      </BuildControlsDiv>
      <OrderButton onClick={ordred} disabled={!purchasable}>
        Order Now!
      </OrderButton>
    </Fragment>
  )
}

export default BuildControls

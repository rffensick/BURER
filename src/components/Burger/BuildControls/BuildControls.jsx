import React from 'react'
import styled from 'styled-components'
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

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' }
]

const BuildControls = ({ onAdd = f => f }) => {
  return (
    <BuildControlsDiv>
      {controls.map(ctrl => (
        <BuildControl
          onAdd={() => onAdd(ctrl.type)}
          {...ctrl}
          key={ctrl.label}
        />
      ))}
    </BuildControlsDiv>
  )
}

export default BuildControls

import React from 'react'
import styled from 'styled-components'
import BuildControl from './BuildControl/BuildControl'

const BuildControlsDiv = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`

const BuildControls = () => {
  return (
    <div>
      <BuildControlsDiv>
        <BuildControl />
      </BuildControlsDiv>
    </div>
  )
}

export default BuildControls

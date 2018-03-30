import React from 'react'
import styled from 'styled-components'

const BuildControlDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;

  button {
    display: block;
    font-family: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #aa6817;
    outline: none;
    cursor: pointer;

    &:disabled {
      background-color: #ac9980;
      border: 1px solid #7e7365;
      color: #ccc;
      cursor: default;

      &:hover {
        cursor: not-allowed;
      }
    }
  }
`

const BuildControl = props => {
  return (
    <BuildControlDiv>
      <div> {props.label} </div>
      <button> Less </button>
      <button> More </button>
    </BuildControlDiv>
  )
}

export default BuildControl

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BuildControlDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 50%;
  align-items: baseline;
  margin: 5px 0;
`

const Label = styled.label`
  font-weight: bold;
  width: 80px;
`

const Button = styled.button`
  font-family: inherit;
  padding: 5px;
  margin: 0 5px;
  background-color: ${props => (props.more ? '#8f5e1e' : '#d39952')};
  width: 80px;
  border: 1px solid #aa6817;
  outline: none;
  color: white;
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

  &:hover {
    background-color: #daa972;
    color: #fff;
  }
`

const BuildControl = ({
  valid,
  label,
  type,
  onAdd = f => f,
  onRemove = f => f
}) => {
  return (
    <BuildControlDiv>
      <Label> {label} </Label>
      <Button onClick={onAdd} more>
        More
      </Button>
      <Button disabled={valid} onClick={onRemove} less>
        Less
      </Button>
    </BuildControlDiv>
  )
}

BuildControl.propTypes = {
  valid: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default BuildControl

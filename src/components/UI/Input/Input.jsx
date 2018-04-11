import React, { Component } from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid #ccc;
  background-color: #fff;
  font: inherit;
  padding: 6px 10px;
  text-align: center;

  &:focus {
    outline: none;
    background-color: #ccc;
  }
`

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
  padding-left: 10px;
`

class Input extends Component {
  typeOfInput = type => {
    switch (type) {
      case 'text':
        return <InputStyle {...this.props} />
      case 'textarea':
        return <textarea {...this.props} />
      default:
        return <InputStyle {...this.props} />
    }
  }

  render() {
    const { label, type } = this.props
    return (
      <div>
        <Label>
          {label}
          {this.typeOfInput(type)}
        </Label>
      </div>
    )
  }
}

export default Input

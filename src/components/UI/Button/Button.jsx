import styled from 'styled-components'

export const ButtonStyle = styled.button`
  background-color: transparent;
  border: 1px solid
    ${props => {
      if (props.success) return 'mediumseagreen'
      if (props.danger) return 'palevioletred'
    }};
  color: ${props => {
    if (props.success) return 'mediumseagreen'
    if (props.danger) return 'palevioletred'
  }};
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  transition: 0.2s ease;

  &:hover {
    background-color: ${props => {
      if (props.success) return 'mediumseagreen'
      if (props.danger) return 'palevioletred'
    }};
		color: white;
  }
`

ButtonStyle.defaultProps = {
  color: 'gray'
}

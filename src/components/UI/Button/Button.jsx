import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${props => props.theme.color};
  color: ${props => props.theme.color};
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  transition: 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.color};
    color: white;
  }
`

// mediumseagreen
// palevioletred

Button.defaultProps = {
  theme: {
    color: 'grey'
  }
}

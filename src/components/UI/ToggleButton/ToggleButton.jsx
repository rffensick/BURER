import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  .hamburger-inner,
  .hamburger-inner:before,
  .hamburger-inner:after {
    background-color: #fff;
    height: 3px;
  }

  @media (min-width: 499px) {
    display: none !important;
  }
`

const ToggleButton = props => {
  return (
    <ButtonStyled
      onClick={props.clicked}
      className={`hamburger hamburger--collapse ${props.active && 'is-active'}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </ButtonStyled>
  )
}

export default ToggleButton

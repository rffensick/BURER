import React from 'react'
import Aux from '../../hoc/Aux1'

export default ({ children }) => {
  return (
    <Aux>
      <header>Toolbar</header>
      <main>{children}</main>
    </Aux>
  )
}

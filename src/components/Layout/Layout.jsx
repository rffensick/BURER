import React from 'react'
import Aux from '../../hoc/Aux1'
import Toolbar from '../Navigation/Toobar/Toolbar'

export default ({ children }) => {
  return (
    <Aux>
      <Toolbar />
      <main>{children}</main>
    </Aux>
  )
}

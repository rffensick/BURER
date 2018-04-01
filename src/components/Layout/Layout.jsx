import React from 'react'
import Aux from '../../hoc/Aux1'
import Toolbar from '../Navigation/Toobar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export default ({ children }) => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main>{children}</main>
    </Aux>
  )
}

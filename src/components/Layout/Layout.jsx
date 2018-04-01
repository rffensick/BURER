import React, { Component } from 'react'
import Aux from '../../hoc/Aux1'
import Toolbar from '../Navigation/Toobar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export default class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <Aux>
        <Toolbar />
        <SideDrawer />
        <main>{children}</main>
      </Aux>
    )
  }
}

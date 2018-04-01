import React, { Component } from 'react'
import Aux from '../../hoc/Aux1'
import Toolbar from '../Navigation/Toobar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export default class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  toggleSideDrawer = () =>
    this.setState(prevState => ({
      showSideDrawer: !prevState.showSideDrawer
    }))

  render() {
    const { children } = this.props
    return (
      <Aux>
        <Toolbar clicked={this.toggleSideDrawer} />
        <SideDrawer
          close={this.toggleSideDrawer}
          show={this.state.showSideDrawer}
        />
        <main>{children}</main>
      </Aux>
    )
  }
}

import React, { Component } from 'react'
import Aux from '../../hoc/Aux1'
import Toolbar from '../Navigation/Toobar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import 'hamburgers/dist/hamburgers.css'

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
        <Toolbar
          active={this.state.showSideDrawer}
          clicked={this.toggleSideDrawer}
        />
        <SideDrawer
          close={this.toggleSideDrawer}
          show={this.state.showSideDrawer}
        />
        <main style={{ paddingTop: '56px' }}>{children}</main>
      </Aux>
    )
  }
}

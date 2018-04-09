import React, { Component } from 'react'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgetBuilder/BurgerBuilder'
import { hot } from 'react-hot-loader'
import Checkout from './containers/Checkout/Checkout'

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
        <Checkout />
      </Layout>
    )
  }
}

export default hot(module)(App)

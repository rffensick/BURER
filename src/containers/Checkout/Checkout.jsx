import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { Route } from 'react-router-dom'

class Checkout extends Component {
  state = {
    ingredients: null,

    totalPrice: 4
  }

  componentWillMount = () => {
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {}
    let price
    for (let param of query.entries()) {
      param[0] === 'price'
        ? (price = param[1])
        : (ingredients[param[0]] = +param[1])
    }
    this.setState({ ingredients, totalPrice: price })
  }

  continuePurchase = () =>
    this.props.history.push(`${this.props.match.url}/contact-data`)

  cancelBack = () => this.props.history.goBack()

  render() {
    return (
      <div>
        <CheckoutSummary
          cancelBack={this.cancelBack}
          continuePurchase={this.continuePurchase}
          ingredients={this.state.ingredients}
        />
        <Route
          path={`${this.props.match.url}/contact-data`}
          render={props => (
            <ContactData
              {...props}
              price={this.state.totalPrice}
              ingredients={this.state.ingredients}
            />
          )}
        />
      </div>
    )
  }
}

export default Checkout

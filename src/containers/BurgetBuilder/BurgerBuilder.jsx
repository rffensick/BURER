import React, { Component } from 'react'
import Aux from '../../hoc/Aux1'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from 'axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler'

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },

    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false
  }

  componentDidUpdate = (_, prevState) => {
    if (this.state.ingredients !== prevState.ingredients) {
      this.updatePurchase()
    }
  }

  updatePurchase = () => {
    const stateIng = { ...this.state.ingredients }
    const sum = Object.keys(stateIng)
      .map(igKey => {
        return stateIng[igKey]
      })
      .reduce((sum, el) => sum + el, 0)

    this.setState({ purchasable: sum > 0 })
  }

  addIngredients = type =>
    this.setState(prevState => ({
      ingredients: {
        ...this.state.ingredients,
        [type]: prevState.ingredients[type] + 1
      },

      totalPrice: prevState.totalPrice + INGREDIENTS_PRICES[type]
    }))

  removeIngredients = type => {
    if (this.state.ingredients[type] <= 0) return

    this.setState(prevState => ({
      ingredients: {
        ...this.state.ingredients,
        [type]: prevState.ingredients[type] - 1
      },

      totalPrice: prevState.totalPrice - INGREDIENTS_PRICES[type]
    }))
  }

  purchasingHandler = () => this.setState({ purchasing: true })

  modalClose = () => this.setState({ purchasing: false })

  purchaseContinue = () => {
    this.setState({ loading: true })
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Eduard Ilyaskin',
        email: 'ilyaskin1998@gmail.com',
        address: {
          street: 'Gulder-1',
          zipCode: '100024',
          country: 'Kazakhstan'
        }
      },
      deliveryMethod: 'faster'
    }

    axios
      .post('/orders', order)
      .then(response => this.setState({ loading: false, purchasing: false }))
      .catch(err => this.setState({ loading: false, purchasing: false }))
  }

  render() {
    const { loading } = this.state
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal modalClose={this.modalClose} show={this.state.purchasing}>
          {loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              modalClose={this.modalClose}
              purchaseContinue={this.purchaseContinue}
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
            />
          )}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          onRemove={this.removeIngredients}
          onAdd={this.addIngredients}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordred={this.purchasingHandler}
        />
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)

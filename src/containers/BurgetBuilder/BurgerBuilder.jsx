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
    ingredients: null,

    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: null
  }

  componentDidMount = () => {
    axios
      .get('/ingredients.json')
      .then(response => this.setState({ ingredients: response.data }))
      .catch(error => this.setstate({ error }))
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
    const queryParams = []
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          '=' +
          encodeURIComponent(this.state.ingredients[i])
      )
    }

    queryParams.push(`price=${this.state.totalPrice}`)
    const queryString = queryParams.join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    })
  }

  render() {
    const { loading, ingredients } = this.state
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return ingredients ? (
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
    ) : (
      <Spinner />
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)

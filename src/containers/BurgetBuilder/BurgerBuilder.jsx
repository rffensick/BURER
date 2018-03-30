import React, { Component } from 'react'
import Aux from '../../hoc/Aux1'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 0.7
}

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },

    totalPrice: 4
  }

  addIngredients = type =>
    this.setState(prevState => ({
      ingredients: {
        ...this.state.ingredients,
        [type]: prevState.ingredients[type] + 1
      },

      totalPrice: prevState.totalPrice + INGREDIENTS_PRICES[type]
    }))

  removeIngredients = type => {}

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls onAdd={this.addIngredients} />
      </Aux>
    )
  }
}

import React from 'react'
import styled from 'styled-components'
import BurgetIng from './BurgerIng/'

const Burger = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: hidden;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) {
    width: 700px;
    height: 600px;
  }
`

export default ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients)
    .map(igKey => {
      return [...Array(ingredients[igKey])].map((_, i) => (
        <BurgetIng type={igKey} key={igKey + i} />
      ))
    })
    .reduce((arr, el) => arr.concat(el), [])

  return (
    <Burger>
      <BurgetIng type="bread-top" />
      {transformedIngredients}
      {transformedIngredients.length === 0 && (
        <p>Please select some ingredients</p>
      )}
      <BurgetIng type="bread-bottom" />
    </Burger>
  )
}

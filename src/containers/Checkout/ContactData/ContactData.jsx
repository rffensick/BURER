import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Button } from '../../../components/UI/Button/Button'
import axios from 'axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

const ContactDataSection = styled.section`
  margin: 20px auto;
  width: 90%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`

const ContactDataInput = styled.input`
  display: block;
`

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postCode: null
    },

    loading: false
  }

  orderHandler = e => {
    e.preventDefault()
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Saga',
        email: 'unknown@gmail.com',
        address: {
          street: 'unknown',
          zipCode: 'unknown'
        }
      },
      deliveryMethod: 'faster'
    }

    axios
      .post('/orders.json', order)
      .then(response => this.setState({ loading: false }))
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({ loading: false }))
  }

  onChangeNameEmail = e => {
    const { value, name } = e.target
    this.setState({
      ...this.state,
      [name]: value
    })
  }

  onChangeAddress = e => {
    const { value, name } = e.target
    this.setState({
      address: { ...this.state.address, [name]: value }
    })
  }

  render() {
    const { loading } = this.state
    return (
      <ContactDataSection>
        <h4>Enter you contact Data</h4>
        {loading ? (
          <Spinner />
        ) : (
          <form onSubmit={this.orderHandler}>
            <ContactDataInput
              onChange={this.onChangeNameEmail}
              type="text"
              name="name"
              placeholder="Your name"
            />
            <ContactDataInput
              onChange={this.onChangeNameEmail}
              type="email"
              name="email"
              placeholder="example@example.com"
            />
            <ContactDataInput
              onChange={this.onChangeAddress}
              type="text"
              name="street"
              placeholder="Your street"
            />
            <ContactDataInput
              onChange={this.onChangeAddress}
              type="text"
              name="postCode"
              placeholder="Your post-code"
            />
            <ThemeProvider theme={{ color: 'mediumseagreen' }}>
              <Button type="submit">Order NOW!</Button>
            </ThemeProvider>
          </form>
        )}
      </ContactDataSection>
    )
  }
}

export default ContactData

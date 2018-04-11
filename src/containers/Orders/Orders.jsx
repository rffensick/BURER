import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from 'axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import { mapToArray } from 'utils'

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }

  componentDidMount = () => {
    axios
      .get('/orders.json')
      .then(res => {
        this.setState({ loading: false, orders: mapToArray(res.data) })
      })
      .catch(err => this.setState({ loading: false }))
  }

  render() {
    const { orders, loading } = this.state
    return (
      <div>
        {loading ? (
          <Spinner />
        ) : orders.length ? (
          orders.map(order => <Order key={order.id} {...order} />)
        ) : (
          <h1 style={{ textAlign: 'center' }}>No Orders</h1>
        )}
      </div>
    )
  }
}

export default Orders

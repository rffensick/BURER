import React, { Component, Fragment } from 'react'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null })
        return req
      })
      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error })
        }
      )
    }

    errorConfirm = () => this.setState({ error: null })

    render() {
      return (
        <Fragment>
          <Modal modalClose={this.errorConfirm} show={this.state.error}>
            {this.state.error && `Сыра не было! Сорян`}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      )
    }
  }
}

export default withErrorHandler

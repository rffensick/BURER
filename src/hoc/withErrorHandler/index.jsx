import React, { Component, Fragment } from 'react'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
  return class withErrorHandler extends Component {
    state = {
      error: null
    }

    shouldComponentUpdate(nextProps, nextState) {
      return nextState.error !== this.state.error
    }

    componentWillMount = () => {
      this.reqInterceptors = axios.interceptors.request.use(req => {
        this.setState({ error: null })
        return req
      })
      this.resInterceptors = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error })
        }
      )
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptors)
      axios.interceptors.response.eject(this.resInterceptors)
    }

    errorConfirm = () => this.setState({ error: null })

    render() {
      return (
        <Fragment>
          <Modal modalClose={this.errorConfirm} show={this.state.error}>
            {this.state.error ? `Сыра не было! Сорян` : `Спасибо`}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      )
    }
  }
}

export default withErrorHandler

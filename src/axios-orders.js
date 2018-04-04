import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-897a2.firebaseio.com/'
})

export default instance

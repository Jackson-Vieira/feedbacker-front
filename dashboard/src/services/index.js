import axios from 'axios'
import AuthService from './auth'

const API_ENVS = {
  local: 'http://localhost:8000'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  auth: AuthService(httpClient)
}

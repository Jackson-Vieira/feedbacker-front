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

httpClient.interceptors.response.use((response) => response, (error) => {
  let canThrow = error.status === 0 || error.status === 500;
  if (canThrow) {
    throw new Error(error);
  }
  return error;
})

export default {
  auth: AuthService(httpClient)
}

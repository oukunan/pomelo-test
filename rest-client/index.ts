import axios from 'axios'

const BASE_URL = 'https://api.nytimes.com'

function createRestClient() {
  const client = axios.create({
    baseURL: BASE_URL,
  })

  client.interceptors.response.use((response) => response.data)

  return client
}

export const restClient = createRestClient()

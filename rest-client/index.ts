import axios from 'axios'

const API_URL = 'https://api.nytimes.com'

function createRestClient() {
  const client = axios.create({
    baseURL: API_URL,
    params: {
      'api-key': process.env.NYT_API_KEY,
    },
  })

  client.interceptors.response.use((response) => response.data)

  return client
}

export const restClient = createRestClient()

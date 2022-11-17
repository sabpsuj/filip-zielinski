import axios from 'axios'

const defaultOptions = {
  method: 'POST',
  url: 'http://localhost:1337/graphql',
  headers: {
    'Content-Type': 'application/json'
  }
}

const fetchData = async ({ options = defaultOptions, data }) => {
  try {
    const rspData = await axios.request({ ...options, data }).then((response) => {
      return response.data
    })
    return rspData
  } catch (error) {
    console.error(error)
  }
}

export default fetchData

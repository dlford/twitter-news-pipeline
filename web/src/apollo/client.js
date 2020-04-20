import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const API_URI = process.env.GATSBY_API_URL || '/graphql'

export const client = new ApolloClient({
  uri: API_URI,
  fetch,
})

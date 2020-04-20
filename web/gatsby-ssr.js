/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import PropTypes from 'prop-types'
import React from 'react'

import { ApolloProvider } from 'react-apollo'
import { client } from './src/apollo/client'

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}

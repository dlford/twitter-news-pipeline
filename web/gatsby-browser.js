/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import PropTypes from 'prop-types'
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import 'nprogress/nprogress.css'

import { ApolloProvider } from 'react-apollo'
import { client } from './src/apollo/client'
import './src/styles/html.css'

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}

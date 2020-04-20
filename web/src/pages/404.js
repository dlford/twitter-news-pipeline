import React from 'react'
import { Container, Header } from 'semantic-ui-react'

import SEO from '../components/seo'

const NotFoundPage = () => (
  <Container text textAlign='center' style={{ marginTop: '8rem' }}>
    <SEO title='404: Not found' />
    <Header as='h1'>NOT FOUND</Header>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Container>
)

export default NotFoundPage

import NProgress from 'nprogress'
import React, { useEffect } from 'react'
import { useMutation, useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import {
  Label,
  Container,
  Header,
  Segment,
  Menu,
  Loader,
  Icon,
} from 'semantic-ui-react'

import SEO from '../components/seo'

NProgress.configure({ showSpinner: false })

const STORIES_QUERY = gql`
  query {
    stories {
      id
      title
      description
      url
      isQueued
      isSaved
      isPublished
      createdAt
    }
  }
`

const QUEUE_STORY_MUTATION = gql`
  mutation($id: ID!) {
    queueStory(id: $id) {
      id
    }
  }
`

const SAVE_STORY_MUTATION = gql`
  mutation($id: ID!) {
    saveStory(id: $id) {
      id
    }
  }
`

const IndexPage = () => {
  const { error, loading, data, refetch } = useQuery(STORIES_QUERY, {
    pollInterval: 60 * 1000,
  })

  const [
    queueStory,
    { error: queueError, loading: queueLoading },
  ] = useMutation(QUEUE_STORY_MUTATION)
  const handleQueue = ({ id }) => {
    queueStory({ variables: { id } })
    setTimeout(() => {
      refetch()
    }, 250)
  }

  const [
    saveStory,
    { error: saveError, loading: saveLoading },
  ] = useMutation(SAVE_STORY_MUTATION)
  const handleSave = ({ id }) => {
    saveStory({ variables: { id } })
    setTimeout(() => {
      refetch()
    }, 250)
  }

  useEffect(() => {
    if (queueLoading || saveLoading) {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }, [queueLoading, saveLoading])

  return (
    <div
      style={{
        background: '#000',
        width: '100vw',
        height: '100%',
        minHeight: '100vh',
        padding: '3rem 0',
      }}
    >
      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          maxWidth: '20rem',
          zIndex: 1,
        }}
      >
        {!!error ||
          !!queueError ||
          (!!saveError && (
            <Segment inverted compact>
              <p>
                <Icon name='attention' color='red' />
                {(!!error && error.message) || error}
                {(!!queueError && queueError.message) || error}
                {(!!saveError && saveError.message) || error}
              </p>
            </Segment>
          ))}
      </div>
      <Container>
        <SEO title='Home' />
        <Header
          inverted
          as='h1'
          textAlign='center'
          style={{ marginBottom: '2rem' }}
        >
          News Pipeline
        </Header>
        <div style={{ textAlign: 'center', margin: '-1rem auto 1rem' }}>
          <Label color='blue'>
            Stories
            <Label.Detail>
              {data && data.stories && data.stories.length ? data.stories.length : 0}
            </Label.Detail>
          </Label>
        </div>
        <Loader inverted active={loading} />
        <Container text>
          {!!error && (
            <p style={{ textAlign: 'center', color: '#fff' }}>
              Error: {error.message || error}
            </p>
          )}
          {!loading &&
            !error &&
            !!data &&
            data.stories.map((story) => (
              <React.Fragment key={story.id}>
                <Menu inverted borderless attached='top'>
                  <Menu.Menu position='right'>
                    <Menu.Item
                      style={{
                        borderRadius: '0.25rem',
                        marginRight: '0.5rem',
                      }}
                      icon={
                        story.isQueued ? 'toggle on' : 'toggle off'
                      }
                      disabled={story.isPublished}
                      active={story.isQueued}
                      color='green'
                      name='Queue'
                      onClick={() => handleQueue({ id: story.id })}
                      link
                    />
                    <Menu.Item
                      style={{
                        borderRadius: '0.25rem',
                        marginRight: '0.5rem',
                      }}
                      icon={
                        story.isSaved ? 'toggle on' : 'toggle off'
                      }
                      active={story.isSaved}
                      color='blue'
                      name='Save'
                      onClick={() => handleSave({ id: story.id })}
                      link
                    />
                    <Menu.Item
                      style={{
                        borderRadius: '0.25rem',
                        marginRight: '0.5rem',
                      }}
                      icon='eye'
                      as='a'
                      href={story.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      color='blue'
                      name='Read'
                      link
                    />
                  </Menu.Menu>
                </Menu>
                <Segment
                  inverted
                  compact
                  attached='bottom'
                  style={{ border: 'none', paddingBottom: '2.5rem' }}
                  key={story.id}
                >
                  <Header dividing as='h4'>
                    {story.title}
                  </Header>
                  <p>{story.description}</p>
                  <Label color='grey'>
                    Received
                    <Label.Detail>{story.createdAt}</Label.Detail>
                  </Label>
                  {!!story.isPublished && (
                    <Label color='green'>Published</Label>
                  )}
                </Segment>
              </React.Fragment>
            ))}
        </Container>
      </Container>
    </div>
  )
}

export default IndexPage

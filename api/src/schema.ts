import { gql } from 'apollo-server-express'

export default gql`
  scalar Date
  type Query {
    stories: [Story!]!
  }
  type Mutation {
    queueStory(id: ID!): Story
    saveStory(id: ID!): Story
  }
  type Story {
    id: ID!
    title: String
    description: String
    url: String
    isQueued: Boolean
    isSaved: Boolean
    isPublished: Boolean
    createdAt: Date
  }
`

import { GraphQLDate } from 'graphql-iso-date'
import { IStory } from './models'

export default {
  Date: GraphQLDate,
  Query: {
    stories: async (parent, args, { models }) => {
      const stories: IStory[] = await models.Story.find(
        {},
        {},
        { sort: { createdAt: -1 } },
      )
      return stories
    },
  },
  Mutation: {
    queueStory: async (parent, { id }, { models }) => {
      const story: IStory = await models.Story.findById(id)
      story.isQueued = story.isQueued ? false : true
      if (story.isPublished) {
        story.isQueued = false
      }
      await story.save()
      return story
    },
    saveStory: async (parent, { id }, { models }) => {
      const story: IStory = await models.Story.findById(id)
      story.isSaved = story.isSaved ? false : true
      await story.save()
      return story
    },
  },
}

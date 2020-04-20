import mongoose from 'mongoose'

export const connectDb = () => {
  if (process.env.MONGO_URL) {
    return mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
  }
}

export const closeDb = () => {
  return mongoose.connection.close()
}

export interface IStory extends mongoose.Document {
  title: string
  description: string
  url: string
  isQueued: boolean
  isSaved: boolean
  isPublished: boolean
  createdAt: Date
}

const storySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    isQueued: {
      type: Boolean,
      default: false,
    },
    isSaved: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

export default {
  Story: mongoose.model<IStory>('Story', storySchema),
}

import { CronJob } from 'cron'

import models, { IStory, connectDb, closeDb } from './models'

const maxAge: number = parseInt(process.env.MAX_AGE_DAYS) || 5
const interval: string = process.env.RUN_INTERVAL || '* * * * *'

const purgeDate = (): Date => {
  const now: Date = new Date(Date.now())
  return new Date(now.setDate(now.getDate() - maxAge))
}

console.log(`${new Date(Date.now())}: Service started`)

const job = new CronJob(interval, async () => {
  connectDb()
    .then(async () => {
      let count: number = 0
      const stories: IStory[] = await models.Story.find({})

      const execute = stories.map(async (story) => {
        if (story.isSaved) return
        if (story.isQueued && !story.isPublished) return
        if (story.createdAt < purgeDate()) {
          await story.remove()
          count++
        }
      })

      await Promise.all(execute).then(() => {
        closeDb()
      })
      console.log(
        `${new Date(Date.now())}: Purged ${count} document(s)`,
      )
    })
    .catch((err) => {
      console.error(`${new Date(Date.now())}: FAILED: ${err}`)
      closeDb().catch(() => {})
    })
})

job.start()

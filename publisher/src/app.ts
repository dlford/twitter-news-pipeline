import btoa from 'btoa'
import formurlencoded from 'form-urlencoded'
import fetch from 'node-fetch'
import { CronJob } from 'cron'
import Twitter from 'twitter'

import models, { IStory, connectDb, closeDb } from './models'

// Default every two hours between 6 AM and 6PM
const interval: string = process.env.RUN_INTERVAL || '0 6-18/2 * * *'

const client = new Twitter({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_KEY_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
})

console.log(`${new Date(Date.now())}: Service started`)
const job = new CronJob(interval, async () => {
  connectDb()
    .then(async () => {
      const story: IStory = await models.Story.findOne(
        { isQueued: true, isPublished: false },
        {},
        {
          sort: { createdAt: 1 },
        },
      )

      if (!story) {
        throw new Error('No stories queued for publishing.')
      }

      const tweet: string = `${story.title} ${story.url}`

      console.log(
        `${new Date(Date.now())}: Publishing "${story.title}"`,
      )
      await new Promise<boolean>((resolve) => {
        client.post(
          'statuses/update',
          { status: tweet },
          (err, tweet, response) => {
            if (err) console.error(err)
            if (response.toJSON()?.headers?.status === '200 OK') {
              resolve(true)
            }
            resolve(false)
          },
        )
      }).then(async (result) => {
        if (result) {
          story.isQueued = false
          story.isPublished = true
          await story.save()
          console.log(`${new Date(Date.now())}: Success!`)
        }
      })

      closeDb().catch(() => {})
    })
    .catch((err) => {
      console.error(
        `${new Date(Date.now())}: Caught Exception: ${err}`,
      )
      closeDb().catch(() => {})
    })
})

job.start()

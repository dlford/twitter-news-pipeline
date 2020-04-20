import models, { IStory } from './models'

interface ImportedStory extends IStory {
  type: string
}

interface EmailData {
  cards: [
    {
      widgets: [ImportedStory]
    },
  ]
}

export default function (data: string) {
  return new Promise((resolve) => {
    const start = data.indexOf('{')
    const end = data.lastIndexOf('}') + 1
    const json: EmailData = JSON.parse(
      data
        .substring(start, end)
        .replace(/=\r\n/g, '')
        .replace(/=\n/g, ''),
    )
    const stories = json?.cards[0]?.widgets
    if (stories && stories.length) {
      stories.map(async (story) => {
        if (story.type === 'LINK') {
          try {
            const cleanUrl = story.url.match(/http.*(https?:\/\/[^&]+)/)
            if (cleanUrl[1]) {
              story.url = cleanUrl[1]
            }
            await models.Story.create(story)
          } catch (err) {
            console.error(err)
          }
        }
      })
    }
    resolve()
  })
}

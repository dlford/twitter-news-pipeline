import { SMTPServer } from 'smtp-server'

import { connectDb } from './models'
import parse from './parser'

connectDb()

const server: SMTPServer = new SMTPServer({
  banner: 'Welcome to G.S.E.A.P., can I take your order?',
  disabledCommands: ['AUTH'],
  logger: true,
  onConnect(session, callback) {
    if (!process.env.ALLOW_IP) return callback()
    if (session.remoteAddress !== process.env.ALLOW_IP) {
      return callback(
        new Error(`Host ${session.remoteAddress} is not permitted.`),
      )
    }
    return callback()
  },
  onMailFrom(address, session, callback) {
    if (!process.env.ALLOW_FROM) return callback()
    if (address.address !== process.env.ALLOW_FROM) {
      return callback(
        new Error(`Sender ${address.address} is not permitted.`),
      )
    }
    return callback()
  },
  onRcptTo(address, session, callback) {
    if (!process.env.ALLOW_TO) return callback()
    if (address.address !== process.env.ALLOW_TO) {
      return callback(
        new Error(`Address ${address.address} does is not permitted.`),
      )
    }
    return callback()
  },
  onData(stream, session, callback) {
    let data: string = ''
    stream.on('data', (chunk: string) => (data += chunk))
    stream.on('end', async () => {
      await parse(data)
      return callback()
    })
  },
})

server.listen(2525)

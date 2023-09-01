import { Server } from 'http'
import app from './app'
import config from './config/index'

process.on('uncaughtException', error => {
  process.exit(1)
})

let server: Server
async function main() {
  try {
    server = app.listen(config.port, () => {
      console.log(`App listening on port: ${config.port}`)
    })
  } catch (err) {
    console.log(err)
  }
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        process.exit(1)
      })
    }
    process.exit(1)
  })
}
main()

process.on('SIGTERM', () => {
  if (server) {
    server.close()
  }
})

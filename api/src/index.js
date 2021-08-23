const express = require('express')
const cors = require('cors')
const log = require('log4js')
const route = require('./routes')
const notFoundHandler = require('./handlers/notFoundHandler')
const { config } = require('./config')
const { logErrors, errorHandler, wrapErrors } = require('./handlers/errorHandler')

log.configure({
  appenders: {
    log: {
      type: 'dateFile',
      filename: 'logs/general.log',
      pattern: '.yyyy-MM-dd',
      compress: true
    },
    console: { type: 'console', level: 'ALL' }
  },
  categories: { default: { appenders: ['log', 'console'], level: 'ALL' } }
})

const logger = log.getLogger('default')

const app = express()
app.use(cors())
app.use('/iecho', route)
app.use(notFoundHandler)

// Error handlers
app.use(wrapErrors)
app.use(logErrors)
app.use(errorHandler)

app.listen(config.port, () =>
  logger.info(`app is listening on port ${config.port}`)
)

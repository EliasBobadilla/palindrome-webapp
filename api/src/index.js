const express = require('express')
const { config } = require('./config')
const route = require('./routes')
const app = express()

app.use('/iecho', route)

app.listen(config.port, () =>
  console.log(`app listening on port ${config.port}`)
)

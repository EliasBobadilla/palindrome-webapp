const express = require('express')
const cors = require('cors')
const { config } = require('./config')
const route = require('./routes')
const app = express()

app.use(cors())
app.use('/iecho', route)

app.listen(config.port, () =>
  console.log(`app listening on port ${config.port}`)
)

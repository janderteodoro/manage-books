const express = require('express')
const routes = require('./routes')
const middlewares = require('./middlewares')

const app = express()

app.use(middlewares.timeRequest)
app.use(middlewares.logger)
app.use(express.json())
app.use(routes)

module.exports = app

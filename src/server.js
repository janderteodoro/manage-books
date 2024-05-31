const express = require('express')
const controller = require('./controller')
const middlewares = require('./middlewares')
const routes = require('./routes')

const app = express()

app.use(express.json())

app.use(routes)

module.exports = app

const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')
const middlewares = require('./middlewares')

const app = express()

app.use(middlewares.timeRequest)
app.use(morgan('combined'));
app.use(express.json())
app.use(routes)

module.exports = app

require('dotenv').config()

const express = require('express')
const Youch = require('youch')

const Sentry = require('@sentry/node')

const sentryConfig = require('./config/sentry')

class App {
  constructor () {
    this.express = express()
    this.router = express.Router()
    this.isDev = process.env.NODE_ENV !== 'development'
    this.sentry()
    this.midlewares()
    this.routes()
    this.exeptions()
  }
  sentry () {
    Sentry.init({
      dsn: sentryConfig.dns
    })
  }

  midlewares () {
    this.express.use(express.json({ limit: '50mb', extended: true }))
    this.express.use(Sentry.Handlers.requestHandler())
  }

  routes () {
    this.express.use(require('./routes'))
  }

  exeptions () {
    if (process.env.NODE_ENV === 'production') {
      this.express.use(Sentry.Handlers.errorHandler())
    }

    this.express.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err, req)
        return res.json(await youch.toJSON())
      }

      return res
        .status(err.status || 500)
        .json({ error: 'Internal Server Error' })
    })
  }
}

module.exports = new App().express

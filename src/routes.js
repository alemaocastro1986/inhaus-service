const express = require('express')
const handle = require('express-async-handler')

const routes = express.Router()

const auth = require('./app/middlewares/auth')

const UserController = require('./app/controllers/UserController')
const ScheduleController = require('./app/controllers/ScheduleController')
const LoadController = require('./app/controllers/LoadController')

routes.get('/', (req, res) => {
  return res.send({
    Name: 'inhaus-service',
    version: '1.0.0'
  })
})

routes.use(auth)

routes.post('/users', handle(UserController.store))

routes.post('/schedules', handle(ScheduleController.store))

routes.post('/loads', handle(LoadController.store))

module.exports = routes

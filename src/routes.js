const express = require('express')
const handle = require('express-async-handler')

const routes = express.Router()

const auth = require('./app/middlewares/auth')

const UserController = require('./app/controllers/UserController')
const ScheduleController = require('./app/controllers/ScheduleController')
const LoadController = require('./app/controllers/LoadController')
const TsrCheckController = require('./app/controllers/TsrCheckController')

routes.get('/', (req, res) => {
  return res.send({
    Name: 'inhaus-service',
    version: '1.0.0'
  })
})

routes.use(auth)

routes.post('/api/users', handle(UserController.store))

routes.post('/api/schedules', handle(ScheduleController.store))
routes.post('/api/schedules/bulk', handle(ScheduleController.storeOrUpdate))

routes.post('/api/loads', handle(LoadController.store))
routes.post('/api/loads/bulk', handle(LoadController.storeOrUpdate))

routes.post('/api/tsrcheck', handle(TsrCheckController.store))

module.exports = routes

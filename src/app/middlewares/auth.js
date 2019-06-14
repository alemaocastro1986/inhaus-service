const { User } = require('../models')
const createError = require('http-errors')

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || authHeader.indexOf('Basic ') === -1) {
    return res
      .status(401)
      .send({ message: 'Invalid Authentication Credentials' })
  }

  const [, credentials] = req.headers.authorization.split(' ')

  try {
    if (!credentials) {
      throw createError(401, 'Invalid Authentication Credentials')
    }
    const [email, password] = credentials.split(':')

    const user = await User.findOne({ where: { email } })

    if (!user) {
      throw createError(401, 'Invalid Authentication Credentials')
    }

    const isValidUser = await user.checkPassword(password)

    if (!isValidUser) {
      throw createError(401, 'Invalid Authentication Credentials')
    }

    req.user = user
    return next()
  } catch (err) {
    return res
      .status(401)
      .send({ message: 'Invalid Authentication Credentials' })
  }
}

module.exports = auth

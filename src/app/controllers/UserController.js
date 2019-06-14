const { User } = require('../models')

class UserController {
  async store (req, res) {
    const user = await User.create(req.body)
    return res.send(user)
  }
}

module.exports = new UserController()

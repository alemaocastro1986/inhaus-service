/* eslint-disable no-undef */
/* eslint-disable camelcase */
const { Tsrcheck } = require('../models')

class TsrCheckController {
  async store (req, res) {
    const check = req.body

    const [data, created] = await Tsrcheck.findOrCreate({
      where: { remessa: BigInt(check.remessa) },
      defaults: {
        remessa: BigInt(check.remessa),
        ordem_transporte: BigInt(check.ordem_transporte),
        ...check
      }
    })

    if (!created) {
      data.ordem_transporte = BigInt(check.ordem_transporte)
      data.transportadora = check.transportadora
      data.placa_cavalo = check.placa_cavalo
      data.placa_carreta = check.placa_carreta
      await data.save()
      return res.status(200).send({ message: 'Data updated' })
    } else {
      return res.status(201).send({ message: 'Data inserted' })
    }
  }
}

module.exports = new TsrCheckController()

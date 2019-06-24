/* eslint-disable no-undef */
const { Load } = require('../models')

const createError = require('http-errors')

class LoadController {
  async store (req, res) {
    const remessa = BigInt(req.body.remessa)
    const protocolo = BigInt(req.body.protocolo)
    const [load, created] = await Load.findOrCreate({
      where: {
        remessa,
        protocolo,
        item_remessa: req.body.item_remessa
      },
      defaults: {
        remessa,
        protocolo,
        peso_liquido: parseFloat(req.body.peso_liquido).toPrecision(12),
        ...req.body
      }
    })

    if (!created) {
      const loadAssign = Object.assign(load, req.body)
      await loadAssign.save()
    }

    return res.send(load)
  }

  async storeOrUpdate (req, res) {
    const loads = req.body

    if (loads.length <= 0 || !Array.isArray(loads)) {
      throw createError(400)
    }

    let bulk = []
    for (const load of loads) {
      let remessa = BigInt(load.remessa)
      let protocolo = BigInt(load.protocolo)

      const [, created] = await Load.findOrCreate({
        where: {
          remessa,
          protocolo,
          item_remessa: load.item_remessa
        },
        defaults: {
          remessa,
          protocolo,
          peso_liquido: parseFloat(load.peso_liquido).toPrecision(12),
          ...load
        }
      })

      if (!created) {
        await Load.update(
          {
            remessa,
            protocolo,
            peso_liquido: parseFloat(load.peso_liquido).toPrecision(12),
            ...load
          },
          {
            where: {
              remessa,
              protocolo,
              item_remessa: load.item_remessa
            }
          }
        )
      }
      bulk.push({ created: created })
    }

    res.send({
      items: {
        requested: loads.length,
        created: bulk.filter(crg => crg.created === true).length,
        updated: bulk.filter(crg => crg.created === false).length
      }
    })
  }
}

module.exports = new LoadController()

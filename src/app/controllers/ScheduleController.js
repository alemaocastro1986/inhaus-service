/* eslint-disable no-undef */
const { Schedule } = require('../models')

const createError = require('http-errors')

class ScheduleController {
  async store (req, res) {
    let protocolo = BigInt(req.body.protocolo)
    const [schedule, created] = await Schedule.findOrCreate({
      where: { protocolo },
      defaults: { ...req.body }
    })
    if (!created) {
      const assign = Object.assign(schedule, req.body)
      await assign.save()
    }
    return res.send(schedule)
  }

  async storeOrUpdate (req, res) {
    const schedules = req.body

    if (schedules.length <= 0 || !Array.isArray(schedules)) {
      throw createError(400)
    }

    let bulk = []
    for (const schedule of schedules) {
      let protocolo = BigInt(schedule.protocolo)
      const [, created] = await Schedule.findOrCreate({
        where: { protocolo },
        defaults: { ...schedule }
      })

      if (!created) {
        await Schedule.update(
          {
            ...schedule,
            protocolo: protocolo
          },
          {
            where: { protocolo }
          }
        )
      }

      bulk.push({ created: created })
    }

    res.send({
      items: {
        requested: schedules.length,
        created: bulk.filter(sch => sch.created === true).length,
        updated: bulk.filter(sch => sch.created === false).length
      }
    })
  }
}

module.exports = new ScheduleController()

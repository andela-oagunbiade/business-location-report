const express = require('express')
const reportRouter = express.Router()
const { Business, LocalGovernment } = require('../../db/models/index')


reportRouter.route('/:id')
  .get(async (req, res, next) => {
    try {
      const business = await Business.findOne({ where: { id: req.params.id } })
      res.status(200).send({ business })
    } catch(err) {
      next(err)
    }
  })

reportRouter.route('/lg/:id')
  .get(async (req, res, next) => {
    try {
      const localGovernment = await LocalGovernment.findOne({
        where: { id: req.params.id },
        include: [{ model: Business }]
      })
      res.status(200).send({ localGovernment })
    } catch(err) {
      next(err)
    }
  })

reportRouter.route('/state-government/:id')
  .get(async (req, res, next) => {
    try {
      const rawInfo = await LocalGovernment.findAll({
        where: { stateGovernmentID: req.params.id },
        attributes: ['name'],
        include: [{ model: Business, required: true, attributes: ['name', 'numberOfFemale', 'numberOfMale'] }]
      })

      let totalNumOfEmployeesInState = 0
      const formattedInfo = rawInfo.map((_row) => {
        const row = _row.toJSON()
        let totalNumOfEmployeesInLocalGovernment = 0

        row.Businesses.forEach((record) => {
          totalNumOfEmployeesInLocalGovernment += (record.numberOfFemale + record.numberOfMale)
        })

        row.localGovernment = row.name
        row.numOfEmployees = totalNumOfEmployeesInLocalGovernment
        totalNumOfEmployeesInState += totalNumOfEmployeesInLocalGovernment
        delete row['Businesses']
        delete row['name']
        return row
      })
      res.status(200).send({ totalNumOfEmployees: totalNumOfEmployeesInState, breakdown: formattedInfo })
    } catch (err) {
      next(err)
    }
  })

module.exports = reportRouter

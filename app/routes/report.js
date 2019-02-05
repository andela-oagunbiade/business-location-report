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

      let totalNumOfFemaleEmployeesInState = 0
      let totalNumOfMaleEmployeesInState = 0

      const formattedInfo = rawInfo.map((_row) => {
        const row = _row.toJSON()
        let totalNumOfFemaleEmployeesInLocalGovernment = 0
        let totalNumOfMaleEmployeesInLocalGovernment = 0

        row.Businesses.forEach((record) => {
          totalNumOfFemaleEmployeesInLocalGovernment += record.numberOfFemale
          totalNumOfMaleEmployeesInLocalGovernment += record.numberOfMale
        })

        row.localGovernment = row.name
        row.total = totalNumOfFemaleEmployeesInLocalGovernment + totalNumOfMaleEmployeesInLocalGovernment
        row.female = totalNumOfFemaleEmployeesInLocalGovernment
        row.male = totalNumOfMaleEmployeesInLocalGovernment
        delete row['Businesses']
        delete row['name']


        totalNumOfFemaleEmployeesInState += totalNumOfFemaleEmployeesInLocalGovernment
        totalNumOfMaleEmployeesInState += totalNumOfMaleEmployeesInLocalGovernment

        return row
      })
      res.status(200).send({
        totalNumOfEmployees: totalNumOfFemaleEmployeesInState + totalNumOfMaleEmployeesInState,
        totalNumOfFemales: totalNumOfFemaleEmployeesInState,
        totalNumOfMales: totalNumOfMaleEmployeesInState,
        breakdown: formattedInfo
      })
    } catch (err) {
      next(err)
    }
  })

module.exports = reportRouter

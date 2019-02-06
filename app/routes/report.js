const express = require('express')
const reportRouter = express.Router()

const {
  Business, LocalGovernment, StateGovernment, FederalGovernment, Sequelize
} = require('../../db/models/index')

const {
  formatLocalGovernmentBusinessInfo,
  formatStateGovernmentBusinessInfo,
  formatFederalGovernmentBusinessInfo
} = require('../helpers/report-formatter')

const { Op } = Sequelize

reportRouter.route('/:id')
  .get(async (req, res, next) => {
    try {
      const business = await Business.findOne({ where: { id: req.params.id } })
      res.status(200).send({ business })
    } catch(err) {
      next(err)
    }
  })

reportRouter.route('/local-government/:id')
  .get(async (req, res, next) => {
    try {
      const rawInfo = await LocalGovernment.findOne({
        where: { id: req.params.id },
        attributes: ['name'],
        include: [{ model: Business }]
      })

      if (rawInfo === null) {
        return res.status(404).send({ message: 'No captured employee info for this LG.' })
      }

      const formattedInfo = formatLocalGovernmentBusinessInfo({
        Businesses: rawInfo.Businesses,
        name: rawInfo.name
      })

      res.status(200).send(formattedInfo)
    } catch(err) {
      next(err)
    }
  })

reportRouter.route('/state-government/:id')
  .get(async (req, res, next) => {
    try {
      const rawInfo = await StateGovernment.findOne({
        where: { id: req.params.id },
        attributes: ['name'],
        include: [{
          model: LocalGovernment,
          required: true,
          attributes: ['name'],
          include: [{
            model: Business,
            required: true,
            attributes: ['name', 'numberOfFemale', 'numberOfMale']
          }]
        }]
      })

      if (rawInfo === null) {
        return res.status(404).send({ message: 'No captured employee info for this State.' })
      }

      const formattedInfo = formatStateGovernmentBusinessInfo(rawInfo.LocalGovernments, rawInfo.name)
      res.status(200).send(formattedInfo)
    } catch (err) {
      next(err)
    }
  })

reportRouter.route('/federal-government/:id')
  .get(async (req, res, next) => {
    try {
      const rawInfo = await FederalGovernment.findOne({
        where: {
          id: req.params.id
        },
        attributes: ['name'],
        include: [{
          model: StateGovernment,
          required: true,
          attributes: ['name'],
          include: [{
            model: LocalGovernment,
            required: true,
            attributes: ['name'],
            include: [{
              model: Business,
              required: true,
              attributes: ['name', 'numberOfFemale', 'numberOfMale']
            }]
          }]
        }]
      })

      if (rawInfo === null) {
        return res.status(404).send({ message: 'No captured employee info for this Country.' })
      }

      const formattedInfo = formatFederalGovernmentBusinessInfo(rawInfo.StateGovernments, rawInfo.name)
      res.status(200).send(formattedInfo)
    } catch(err) {
      next(err)
    }
  })

module.exports = reportRouter

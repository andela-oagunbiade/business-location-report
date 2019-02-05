const express = require('express')
const reportRouter = express.Router()
const db = require('../../db/models/index')

reportRouter.route('/:id')
  .get((req, res) => {
    db.Business.findOne({ where: { id: req.params.id } })
      .then((user) => {
        res.status(200).send({ user })
      })
  })

module.exports = reportRouter

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('LocalGovernments', [{
    name: 'Ikeja',
    stateGovernmentID: 1,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
      name: 'Alimosho',
      stateGovernmentID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Gbagada',
      stateGovernmentID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bariga',
      stateGovernmentID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Surulere',
      stateGovernmentID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ikoyi',
      stateGovernmentID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Abaji',
      stateGovernmentID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Garki',
      stateGovernmentID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bwari',
      stateGovernmentID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Gwagwalada',
      stateGovernmentID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kuje',
      stateGovernmentID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kwali',
      stateGovernmentID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('LocalGovernments', null, {});
  }
};

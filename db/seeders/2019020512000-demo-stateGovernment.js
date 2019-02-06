'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StateGovernments', [{
        name: 'Lagos',
        federalGovernmentID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Abuja',
        federalGovernmentID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
  {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('StateGovernments', null, {});
  }
};

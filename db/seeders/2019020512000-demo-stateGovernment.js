'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StateGovernments', [{
        name: 'Lagos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Abuja',
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

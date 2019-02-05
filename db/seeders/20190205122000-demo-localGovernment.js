'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('LocalGovernments', [{
    name: 'Ikeja',
    stateGovernmentID: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('LocalGovernments', null, {});
  }
};

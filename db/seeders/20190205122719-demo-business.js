'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Businesses', [{
    name: 'Andela',
    numberOfFemale: 100,
    numberOfMale: 150,
    localGovernmentID: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Businesses', null, {});
  }
};

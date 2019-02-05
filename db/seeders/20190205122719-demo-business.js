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
    },
    {
      name: 'GTB',
      numberOfFemale: 200,
      numberOfMale: 150,
      localGovernmentID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'FCMB',
      numberOfFemale: 500,
      numberOfMale: 150,
      localGovernmentID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Texaco',
      numberOfFemale: 900,
      numberOfMale: 7000,
      localGovernmentID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'KPMG',
      numberOfFemale: 200,
      numberOfMale: 150,
      localGovernmentID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'WEMA BANK',
      numberOfFemale: 500,
      numberOfMale: 150,
      localGovernmentID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Conoil',
      numberOfFemale: 900,
      numberOfMale: 7000,
      localGovernmentID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Businesses', null, {});
  }
};

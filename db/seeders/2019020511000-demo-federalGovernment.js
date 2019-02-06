'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FederalGovernments',
      [
        {
          name: 'Nigeria',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
    {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FederalGovernments', null, {});
  }
};

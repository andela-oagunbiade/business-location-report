'use strict';
module.exports = (sequelize, DataTypes) => {
  const FederalGovernment = sequelize.define('FederalGovernment', {
    name: DataTypes.STRING
  }, {});
  FederalGovernment.associate = function(models) {
    models.FederalGovernment.hasMany(models.StateGovernment, { foreignKey: 'federalGovernmentID' })
  };
  return FederalGovernment;
};
